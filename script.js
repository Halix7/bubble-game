let timer=60;
let score=0
let hitrn=0;
//bubble making code
function makeBubble(){

    let bubble=document.querySelector("#bbtm");
    for (let index = 1; index <= 70; index++) {
        bubble.innerHTML+=`<div class="bubble">${Math.floor(Math.random() * 10)}</div>`
    }
}
//runtimer funtion
function runTimer(){
    let timerint=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerValue").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#bbtm").innerHTML=`<h1>Game Over</h1>`;
        }
    },1000);
}
//random hit
function randomHit(){
    hitrn=Math.floor(Math.random()*10);
    document.getElementById("hitValue").textContent=hitrn;
}

//score change to 10 points
function scoreChange(){
    score+=10;
    document.querySelector("#scoreValue").textContent=score;
}

document.querySelector("#bbtm").addEventListener("click",function(details){
    // console.log(Number(details.target.textContent));
    let detailNumber=Number(details.target.textContent);
    if(detailNumber === hitrn){
        scoreChange();
        makeBubble();
        randomHit();
    }
});


makeBubble();
runTimer();
randomHit();