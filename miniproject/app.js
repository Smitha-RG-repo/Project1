let started=false;
let level=0;
let h2=document.querySelector("h2");
let btns=["red","yellow","purple","green"];
let gameSeq=[];
let userSeq=[];

document.addEventListener("keypress",function(event){
    
    if(started===false){
        console.log("Game Started");
        started=true;
        levelUp();

    }
})


function btnFlash(btn){
   
    btn.classList.add("flash");

    setTimeout(function(){
    btn.classList.remove("flash");
    },3000);
}

function levelUp(){
    userSeq=[];
    console.log("Level Up");
    level++;
    h2.innerText=`Level ${level}`;
    let ranIndx=Math.floor(Math.random()*4);
    let randColor=btns[ranIndx];
    console.log(randColor);

    let randBtn=document.querySelector(`.${randColor}`);

    
    gameSeq.push(randColor);
    
    btnFlash(randBtn);

}


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
}


function resetGame(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

function checAns(){
    let idx=userSeq.length-1;
    if(userSeq[idx]===gameSeq[idx]){
        console.log("Success");
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerText=`Game Over! score ${level} Press any other key to start.`
        resetGame();
    }
}
function btnPress(){
    userFlash(this);
    useColor=this.getAttribute("id");
    userSeq.push(useColor);

   
    checAns();
}

allbtns=document.querySelectorAll('.btn-container .btn')

for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}