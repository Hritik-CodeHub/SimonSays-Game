let gameSeq=[];
let userSeq=[];
let started=false;
let btns=["yellow","red","blue","green"];
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");

let level=0;
document.addEventListener("keypress",function() {
   if(started==false){
       console.log("key is pressed");
       started=true;
       levelup();
   }
})

function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randInx=Math.floor(Math.random()*3);
    let randColor=btns[randInx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
 gameFlash(randbtn);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
}
function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },300);
}

function checkAns(inx){
if(userSeq[inx]===gameSeq[inx]){
    console.log("same value");
    if(userSeq.length==gameSeq.length)
    setTimeout(levelup,1000);
} else{
    h2.innerText=`Game Over ! your score was ${level} \nPress any key to start.`;
     document.querySelector("body").style.backgroundColor="red"
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },200);
    console.log(userSeq[inx],gameSeq[inx])
    reset();
}
}
    function btnPress(){
        let btn=this;
        userFlash(btn);
        userColor=btn.getAttribute("id");
        userSeq.push(userColor);

        checkAns(userSeq.length-1);
    }

    let allBtns=document.querySelectorAll(".box");
    for(btn of allBtns){
        btn.addEventListener("click",btnPress);
    }

    function reset(){
        started=false;
        gameSeq=[];
        userSeq=[];
        level=0;
    }