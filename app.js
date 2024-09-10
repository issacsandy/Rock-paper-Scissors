const computerChoiceDisplay = document.getElementById("computer-choice")
const yourChoiceDisplay = document.getElementById("your-choice")
const yourscoreDisplay = document.getElementById('your-score')
const computerscoreDisplay = document.getElementById('computer-score')
const winner = document.getElementById('winner')
const choices = document.querySelectorAll('.mychoices')
const resetButton = document.getElementById('reset'); 
const newgameButton = document.getElementById('newgame');


let yourChoice=''
let computerChoice=''
let yourscore = 0;
let computerscore = 0;
let currentround = 0;
let rounds = 0;

winner.style.visibility = 'hidden';


function startGame(){
    yourChoice=' '
    computerChoice=' '
    yourscoreDisplay.innerHTML = yourscore; 
    computerscoreDisplay.innerHTML = computerscore;
    rounds = parseInt(prompt("Enter How many Rounds u wanna play?"))
    currentround = 0;
    choices.forEach(choice => choice.addEventListener('click',handleClick))
}


function handleClick(e){
    if(currentround < rounds){
        yourChoice = e.target.id
        yourChoiceDisplay.innerHTML = yourChoice
        generateComputerChoice()
        getResult()
        currentround++;
    }
    if(currentround == rounds){
        getWinner();
    }
    
}

resetButton.addEventListener('click',()=>{
    reset();
    // startGame();
});

newgameButton.addEventListener('click',()=>{
    reset();
    startGame();

})

function reset(){
    yourscore = 0;
    computerscore = 0;
    currentround = 0;
    yourscoreDisplay.innerHTML = yourscore; 
    computerscoreDisplay.innerHTML = computerscore;
    yourChoiceDisplay.innerHTML = ''
    computerChoiceDisplay.innerHTML = ''
    winner.innerHTML = '';
    winner.style.visibility = 'hidden';
}
function getWinner(){
    winner.style.visibility = 'visible';
    if(yourscore > computerscore){
        winner.innerHTML = 'You are the Winner!'
    }
    else if(yourscore < computerscore){
        winner.innerHTML = 'Computer is the Winner!'
    }
    else{
        winner.innerHTML = 'Its a Draw!'
    }

    choices.forEach(choice => choice.addEventListener('click',handleClick))
}
function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3)
    if(randomNumber==0){
        computerChoice = 'rock'
    }
    if(randomNumber == 1){
        computerChoice = 'paper'
    }
    if(randomNumber == 2){
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === 'rock' && yourChoice==='paper'){
        yourscore+= 1
    }
    if(computerChoice === 'rock' && yourChoice==='scissors'){
        computerscore += 1
    }
    if(computerChoice === 'paper' && yourChoice==='rock'){
        computerscore += 1
    }
    if(computerChoice === 'paper' && yourChoice==='scissors'){
        yourscore+= 1
    }
    if(computerChoice === 'scissors' && yourChoice==='paper'){
        computerscore += 1
        
    }
    if(computerChoice === 'scissors' && yourChoice==='rock'){
        yourscore+= 1
    } 
    yourscoreDisplay.innerHTML = yourscore
    computerscoreDisplay.innerHTML = computerscore
}

startGame();