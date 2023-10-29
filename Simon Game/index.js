
var isPressed=true;
var sequenceToFollow=[];
var levelCount=1;
var followingSequence=[];

document.addEventListener("keypress",function(){
  if(isPressed){
    isPressed=false;
    start();
  }
});

function start(){
  document.querySelector("h1").textContent="Level "+levelCount;
  levelCount++;
  setTimeout(hint,1000);
}

function hint(){
  var lenOfColors = document.querySelectorAll(".btn").length;
  var index=Math.floor(Math.random()*lenOfColors);
  sequenceToFollow.push(document.querySelectorAll(".btn")[index].getAttribute("id"));
  fadeOutBtn(index);
  setTimeout(function (){fadeInBtn(index);},200);
}

function fadeOutBtn(index){
  document.querySelectorAll(".btn")[index].classList.add("pressed");
}

function fadeInBtn(index){
  document.querySelectorAll(".btn")[index].classList.remove("pressed");
}

function WrongKey(){
  document.querySelector("body").classList.add("game-over");
  setTimeout(function(){
    document.querySelector("body").classList.remove("game-over");
  },500)
}

for(var i=0;i<document.querySelectorAll(".btn").length;i++){
  document.querySelectorAll(".btn")[i].addEventListener("click", function(){
    console.log(this.classList[1]);
  });
}