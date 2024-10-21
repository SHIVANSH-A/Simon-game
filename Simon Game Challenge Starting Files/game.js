let buttonColors = ["red","blue","green","yellow"];
let userClickedPattern  = [];
let gamePattern = [];
let count = 0;
let clickCount=0;
let started = false;

document.addEventListener("keydown",function(){
    if(!started){
    nextSequence();
    started = true;
    }
});


function nextSequence(){
    let randomNum = Math.floor(Math.random()*4);
    let randomChosenColor = buttonColors[randomNum];    
    count++;
    $("h1").text("Level " + count);
    gamePattern.push(randomChosenColor) ;

    addAnimation(randomChosenColor);
    playSound(randomChosenColor);
    
    
}   



$(".btn").click(function(event){  
    let userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    addAnimation(userChosenColor);
    playSound(userChosenColor);

    
        checkPattern(clickCount);
});

function checkPattern(clicked){

    if(userClickedPattern[clicked]===gamePattern[clicked]){
        clickCount++;
        
    }
    else{
        gameOver();
    }
    
    if(userClickedPattern.length===count){
        userClickedPattern = [];
        clickCount = 0 ;
        
          setTimeout(() => {
            nextSequence();
          }, 1000);  
    }


}

function gameOver(){
    playSound("wrong")
    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
        $("h1").text("GAME OVER , Press A Key to restart" );
        startAgain();
    }, 200);
}

function startAgain(){
    started = false;
    count = 0;
    userClickedPattern = [];
    gamePattern = [];
}


function playSound(name){
    let audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}

function addAnimation(color){
    $("#"+color).delay(0.05).fadeOut().fadeIn('fast');
}