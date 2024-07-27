let score = JSON.parse(localStorage.getItem("score")) || { wins: 0,
  losses: 0,
  ties: 0
}


updateScoreElements(); 

function playGame(playerMove){
const computerMove = computerChoice();
let result = '';
if (playerMove === 'rock') {
  if(computerMove === 'rock'){
    result = 'tie'
  } else if(computerMove === 'paper') {
    result = 'lose'
  } else if(computerMove === 'scissors'){
    result = 'win'
  }
} else if (playerMove === 'paper') {
  if(computerMove ==='rock'){
    result = 'win'
  } else if(computerMove === 'paper') {
    result = 'tie'
  } else if(computerMove === 'scissors'){
    result = 'lose'
  }
} else if(playerMove === 'scissors') {
  if(computerMove ==='rock'){
    result = 'lose'
  } else if(computerMove === 'paper') {
    result = 'win'
  } else if(computerMove === 'scissors'){
    result = 'tie'
  }
}
if(result === 'win') {
  score.wins += 1;
}else if (result === 'lose'){
  score.losses += 1;
} else if(result === 'tie') {
  score.ties += 1;
}
localStorage.setItem("score", JSON.stringify(score));

document.querySelector('.result').innerHTML = `You ${result}`;
movesElement = document.querySelector('.js-moves').innerHTML = `
You
<img class="move-icon" src="images/${playerMove}-emoji.png" alt=""> 
<img class="move-icon" src="images/${computerMove}-emoji.png" alt=""> 
Computer
`
updateScoreElements()
}


function updateScoreElements() {
document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function computerChoice(){
const randomNumber = Math.random();
let choice = '';
if (randomNumber > 0 && randomNumber < 1 /3){
  choice = 'rock';
} else if(randomNumber > 1 / 3 && randomNumber < 2 / 3) {
  choice = 'paper'
} else if(randomNumber > 2 / 3 && randomNumber < 1 ) {
  choice = 'scissors'
}
return choice
}