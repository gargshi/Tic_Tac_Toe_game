
let gameState="IN PROGRESS";
let wincolor='lime';
let reset=document.getElementById("reset");

// function for turn change
let sym=['O','X']
let turn = sym[Math.floor(Math.random()*2)];
document.getElementsByClassName('status')[0].innerHTML='Turn of '+turn;
const turn_change=()=>{
	return turn === 'X'?'O':'X';
}

//function to check for a winner
const win_check=()=>{
	let bt=document.getElementsByClassName('box_text');
	let win_scen=[
		[1,2,3],
		[4,5,6],
		[7,8,9],
		[1,4,7],
		[2,5,8],
		[3,6,9],
		[3,5,7],
		[1,5,9]
	];

	win_scen.forEach(ele => {
		//console.log(bt[ele[0]-1].innerText, bt[ele[1]-1].innerText, bt[ele[2]-1].innerText)
		if ((bt[ele[0]-1].innerText === bt[ele[1]-1].innerText) && (bt[ele[1]-1].innerText === bt[ele[2]-1].innerText) && (bt[ele[0]-1].innerText !== ''))
		{
			document.querySelector('.status').innerText = "Winner is :"+ bt[ele[0]-1].innerText;
			bt[ele[0]-1].parentElement.style.backgroundColor=wincolor;
			bt[ele[1]-1].parentElement.style.backgroundColor=wincolor;
			bt[ele[2]-1].parentElement.style.backgroundColor=wincolor;
			gameState='OVER';
		}
	});

}

//Game logic starts here
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(elem => {
	let box_text=elem.querySelector('.box_text');
	elem.addEventListener('click',()=>{
		if (box_text.innerText === '' && gameState !=='OVER')		
		{
			box_text.innerText = turn;
			turn = turn_change();
			win_check();			
			if (gameState !== 'OVER'){
				document.getElementsByClassName('status')[0].innerHTML='Turn of '+turn;
			}
		}
	})
});



reset.addEventListener('click',()=>{
	let box_text=document.querySelectorAll('.box_text');
	Array.from(box_text).forEach(element => {
		element.innerText='';
		element.parentElement.style.backgroundColor='white';
	});
	turn = sym[Math.floor(Math.random()*2)];
	gameState='IN PROGRESS';
	document.getElementsByClassName('status')[0].innerHTML='Turn of '+turn;
});