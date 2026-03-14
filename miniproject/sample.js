let started=false;
let level=0;
let gameseq=[];
let userseq=[];
let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "purple", "green"]


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
},300);
}

function levelUp(){
    console.log("Level 1");
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randcolour = btns[randIdx]
    console.log(randcolour);
    let randBtn= document.querySelector(`.${randcolour}`);
    gameseq.push(randcolour);
    btnFlash(randBtn);
}

function userFlash(btn){
btn.classList.add("userFlash");
setTimeout(function(){
    btn.classList.remove("userFlash");
},300);
}

function checkAns(){
    let idx = userseq.length-1;
    if(userseq[idx] === gameseq[idx]){
        console.log("success");
    }
    else{
        h2.innerText = `Game over! score ${level} press any other key to start.`
    }
}

function btnpress(){
    userFlash(this);
    usercolour = this.getAttribute("id");
    userseq.push(usercolour);
checkAns();
}

 allbtns = document.querySelectorAll('.btn-container .btn');
for(btn of allbtns){
btn = addEventListener("click",btnpress);
}

