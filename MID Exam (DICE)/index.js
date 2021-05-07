var rndmDice1 = Math.floor(Math.random() * 6) + 1

var rndmImg1 = "d" + rndmDice1 + ".png"

var rndmImgsrc1 = "images/" + rndmImg1;

var img1 = document.querySelector('.img1');

img1.setAttribute('src', rndmImgsrc1);


//Player 2
var rndmDice2 = Math.floor(Math.random() * 6) + 1

var rndmImg2 = "d" + rndmDice2 + ".png"

var rndmImgsrc2 = "images/" + rndmImg2;

var img2 = document.querySelector('.img2');

img2.setAttribute('src', rndmImgsrc2);


//CONDITION FOR DICE
//VARIABLES FOR NAMES
var name1 = document.querySelector('h1')
var player1 = document.querySelector('.p1')
var player2 = document.querySelector('.p2')

//DRAW CONDITION
if (rndmDice1 == 1 & rndmDice2 == 1 || rndmDice1 == 2 & rndmDice2 == 2 || rndmDice1 == 3 &
	rndmDice2 == 3 || rndmDice1 == 4 & rndmDice2 == 4 || rndmDice1 == 5 & rndmDice2 == 5 || rndmDice1 == 6 & rndmDice2 == 6)
	{
		name1.innerText = 'Draw!!'
	}
//HIGH NUMBERS WIN CONDITION
if (rndmDice1 > rndmDice2) {
	player1.innerHTML = '&#128681Player 1 Win'
}

if (rndmDice2 > rndmDice1) {
	player2.innerHTML = '&#128681PLayer 2 Win'
}

//LOW NUMBERS LOSE CONDITION
if (rndmDice1 < rndmDice2) {
	player1.innerHTML = '&#127988<strike>Player 1 Lose</strike>'
}

if (rndmDice2 < rndmDice1) {
	player2.innerHTML = '&#127988<strike>Player 2 Lose</strike>'
}

if (rndmDice1 == 2 & rndmDice2 == 1 || rndmDice1 == 1 & rndmDice2 == 2) {
	name1.innerHTML = 'Dice Face-2&#9857 Wins'
}

if (rndmDice1 == 2 & rndmDice2 == 3 || rndmDice1 == 3 & rndmDice2 == 2 ||
	rndmDice1 == 1 & rndmDice2 == 3 || rndmDice1 == 3 & rndmDice2 == 1)
{
	name1.innerHTML = 'Dice Face-3&#9858 Wins'
}

if (rndmDice1 == 3 & rndmDice2 == 4 || rndmDice1 == 4 & rndmDice2 == 3 ||
	rndmDice1 == 2 & rndmDice2 == 4 || rndmDice1 == 4 & rndmDice2 == 2 ||
	rndmDice1 == 1 & rndmDice2 == 4 || rndmDice1 == 4 & rndmDice2 == 1) 
{
	name1.innerHTML = 'Dice Face-4&#9859 Wins'
}

if (rndmDice1 == 4 & rndmDice2 == 5 || rndmDice1 == 5 & rndmDice2 == 4 ||
	rndmDice1 == 3 & rndmDice2 == 5 || rndmDice1 == 5 & rndmDice2 == 3 ||
	rndmDice1 == 2 & rndmDice2 == 5 || rndmDice1 == 5 & rndmDice2 == 2 ||
	rndmDice1 == 1 & rndmDice2 == 5 || rndmDice1 == 5 & rndmDice2 == 1)
{
	name1.innerHTML = 'Dice Face-5&#9860 Wins'
}

if (rndmDice1 == 5 & rndmDice2 == 6 || rndmDice1 == 6 & rndmDice2 == 5 ||
	rndmDice1 == 4 & rndmDice2 == 6 || rndmDice1 == 6 & rndmDice2 == 4 ||
	rndmDice1 == 3 & rndmDice2 == 6 || rndmDice1 == 6 & rndmDice2 == 3 ||
	rndmDice1 == 2 & rndmDice2 == 6 || rndmDice1 == 6 & rndmDice2 == 2 ||
	rndmDice1 == 1 & rndmDice2 == 6 || rndmDice1 == 6 & rndmDice2 == 1)
{
	name1.innerHTML = 'Dice Face-6&#9861 Wins'
}