let userScore=0;
let compScore=0;
const uScore=document.querySelector("#user-score");
const cScore=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const won_msg=document.querySelector("#won-msg");

const resetbtn=document.querySelector("#resetbtn");

const resetGame=()=>{
    userScore=0;
    compScore=0;
    uScore.innerText=userScore;
    cScore.innerText=compScore;
    msg.innerText="Play your game";
    won_msg.innerText="";
    won_msg.style.backgroundColor="";
    msg.style.backgroundColor="#1B1A55";
}
const geneCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const gameDraw=(userChoice,compChoice)=>{
    msg.innerText="Game Draw.";
    won_msg.innerText=`Your Choice ${userChoice} Computer Choice ${compChoice}`;
    msg.style.backgroundColor="#355449";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++
        uScore.innerText=userScore;
        msg.innerText="You Win!";
        won_msg.innerText=`Your Choice ${userChoice} Computer Choice ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        cScore.innerText=compScore;
        msg.innerText="You Lose.";
        msg.style.backgroundColor="red";
        won_msg.innerText=`Your Choice ${userChoice} Computer Choice ${compChoice}`;    
    }
}

const playGame=(userChoice)=>{
    //generate comp choice
    const compChoice=geneCompChoice();

    if(userChoice===compChoice){
        //game draw
        gameDraw(userChoice,compChoice);
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissros,paper--compchoice
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //scissors,rock --compChoice
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            //rock,paper  --compChoices
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });

});

resetbtn.addEventListener("click",resetGame);

