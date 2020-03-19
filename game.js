window.addEventListener('load',run);
var new_game,player=new Array(2),result=new Array(2),actevated=new Array(2),current=new Array(2),result=new Array(2),dice=new Array(2);
var roll,hold;
var currentPlayer=0;
var win,max,maxValue;

function run() {
  max=document.getElementById("max");

  player[0]=document.getElementById("p1");
  player[1]=document.getElementById("p2");
  new_game=document.getElementById("newGame");
  new_game.addEventListener("click",newGame);
  new_game.addEventListener("mouseover",newGameOver);
  new_game.addEventListener("mouseout",newGameOut);
  win=document.getElementById("win");
  win.setAttribute("style","display: none");
  result[0]=document.getElementById("result1");
  result[0].innerHTML="0";
  result[1]=document.getElementById("result2");
  result[1].innerHTML="0";
  actevated[0]=document.getElementById('r1');
  actevated[1]=document.getElementById('r2');
  actevated[1].setAttribute("style","display: none");
  current[0]=document.getElementById('current1');
  current[0].innerHTML="0";
  current[1]=document.getElementById('current2');
  current[1].innerHTML="0";
  dice[0]=document.getElementById("dice1");
  dice[1]=document.getElementById("dice2");
  dice[0].setAttribute("style","display: none");
  dice[1].setAttribute("style","display: none");
  roll=document.getElementById("roll");
  roll.addEventListener("click",rollDice);
  roll.addEventListener("mouseover",rollOver);
  roll.addEventListener("mouseout",rollOut);
  hold=document.getElementById("hold");
  hold.addEventListener("click",holdResult);
  hold.addEventListener("mouseout",holdOut);
  hold.addEventListener("mouseover",holdOver);


}
function rollOver() {
  roll.setAttribute("class","rollOver");

}
function rollOut() {
  roll.setAttribute("class","rollOut");

}
function holdOver() {
  hold.setAttribute("class","holdOver");

}
function holdOut() {
  hold.setAttribute("class","holdOut");

}
function newGameOver() {
  new_game.setAttribute("class","newGameOver");

}
function newGameOut() {
  new_game.setAttribute("class","newGameOut");
}
function newGame() {
  current[0].innerHTML="0";
  current[1].innerHTML="0";
  result[0].innerHTML="0";
  result[1].innerHTML="0";
  dice[0].setAttribute("style","display: none");
  dice[1].setAttribute("style","display: none");
  actevated[1].setAttribute("style","display: none");
  actevated[0].setAttribute("style","display: block");
  player[1].setAttribute("style","background-color:#ffffff;");
  player[0].setAttribute("style","background-color:#cccccc;");
  win.setAttribute("style","display: none");

}
function rollDice() {
    dice[0].setAttribute("style","display: none");
    dice[1].setAttribute("style","display: none");
  if(Math.floor(Math.random()*2)) {
    var num1=Math.floor(Math.random()*6)+1;
    var num2=Math.floor(Math.random()*6)+1;
    dice[0].src=num1+".png";
    dice[1].src=num2+".png";
    current[currentPlayer].innerHTML=parseInt(current[currentPlayer].innerHTML)+num1+num2;
    dice[0].setAttribute("style","display: block");
    dice[1].setAttribute("style","display: block");
  }
  else {
    if(currentPlayer==0) {
    actevated[0].setAttribute("style","display: none");
    actevated[1].setAttribute("style","display: block");
    current[0].innerHTML="0";
    currentPlayer=1;
    player[0].setAttribute("style","background-color:#ffffff;");
    player[1].setAttribute("style","background-color:#cccccc;");

  }
  else {
    actevated[1].setAttribute("style","display: none");
    actevated[0].setAttribute("style","display: block");
    current[1].innerHTML="0";
    currentPlayer=0;
    player[1].setAttribute("style","background-color:#ffffff;");
    player[0].setAttribute("style","background-color:#cccccc;");
  }
  dice[0].setAttribute("style","display: none");
  dice[1].setAttribute("style","display: none");
  }

}
function holdResult() {
  result[currentPlayer].innerHTML=parseInt(current[currentPlayer].innerHTML)+parseInt(result[currentPlayer].innerHTML);
  maxValue=parseInt(max.value);
  if(isNaN(maxValue) || maxValue<0) {
    maxValue=100;
  }
  if(parseInt(result[currentPlayer].innerHTML)>=maxValue) {
    win.setAttribute("style","display: block");
    if(currentPlayer==0)
    win.innerHTML='<img src="win.png" alt="" width="20%" height="20%" style="float:left">'+"player 1 <br>winner winner chicken dinner";
else
  win.innerHTML='<img src="win.png" alt="" width="20%" height="20%" style="float:left">'+"player 2 <br>winner winner chicken dinner";
  } else {
  if(currentPlayer==0) {
    actevated[0].setAttribute("style","display: none");
    actevated[1].setAttribute("style","display: block");
    current[0].innerHTML="0";
    currentPlayer=1;
    player[0].setAttribute("style","background-color:#ffffff;");
    player[1].setAttribute("style","background-color:#cccccc;");
  } else {
    actevated[1].setAttribute("style","display: none");
    actevated[0].setAttribute("style","display: block");
    current[1].innerHTML="0";
    currentPlayer=0;
    player[1].setAttribute("style","background-color:#ffffff;");
    player[0].setAttribute("style","background-color:#cccccc;");
  }
}
  dice[0].setAttribute("style","display: none");
  dice[1].setAttribute("style","display: none");
}
