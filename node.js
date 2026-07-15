let gameseq=[];
let userseq=[];

let started= false;
let h2= document.querySelector("h2");
let level=0;
let btns=["yellow", "red","purple","green"];
document.addEventListener("keypress", function(){
 if(started==false){
   console.log("game has started");
   started=true;
   levelup();
 }  
});
function btnflash(btn){
  btn.classList.add("flashbtn");
  setTimeout(function(){
    btn.classList.remove("flashbtn")},250);
}
function userflash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash")},250);
}


function levelup(){
  userseq=[];
  level++;
  h2.innerText=`level${level}`;
  
//random button
let ranIndx=Math.floor(Math.random() *3);
let randColor=btns[ranIndx];
let randBtn=document.querySelector(`.${randColor}`);
gameseq.push(randColor);
btnflash(randBtn);
}
function checkans(indx){

 if(userseq[indx]==gameseq[indx]){
  if(userseq.length==gameseq.length){
    setTimeout(levelup,1000);
  }
 }else{
  h2.innerHTML=`Game over! <b>Your score was ${level}</b> <br>Press any key to restart.`;
  document.querySelector("body").style.backgroundColor="red";
  setTimeout(function(){
  document.querySelector("body").style.backgroundColor="white";
},340);
  restart();
}

}
function btnpress(){
 console.log(this);
  let btn=this;
  userflash(btn);
  userColour=btn.getAttribute("id");
  console.log(userColour);
  userseq.push(userColour);
  checkans(userseq.length-1);
}

let allbtns=document.querySelectorAll('.btn');
for(btn of allbtns){
  btn.addEventListener("click", btnpress);
}
function restart(){
  started=false;
  gameseq=[];
  userseq=[];
  level=0;
}
