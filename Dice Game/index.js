var random = Math.floor(Math.random()*6)+1;
var image = "images/dice"+random+".png";
var p1= document.querySelectorAll("img")[0].setAttribute("src",image);

var random2 = Math.floor(Math.random()*6)+1;
var image2 = "images/dice"+random2+".png";
var p2= document.querySelectorAll("img")[1].setAttribute("src",image2);

if(random>random2){
	document.querySelector("h1").textContent = "Player 1 Wins";
}
else if(random<random2){
	document.querySelector("h1").textContent = "Player 2 Wins";
}
else{
	document.querySelector("h1").innerHTML = "Its A Draw";
}

