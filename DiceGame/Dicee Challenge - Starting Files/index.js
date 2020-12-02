
var player1 = randomize();
var player2 = randomize();


if(player1>player2){
    document.getElementById("winnersign").innerHTML="Player 1 WON!";
}else if (player1<player2) {
    document.getElementById("winnersign").innerHTML="Player 2 WON!";
}else {
    document.getElementById("winnersign").innerHTML="Draw";
}

switch(player1){
    case 1:
        document.querySelector(".img1").setAttribute("src", "images/dice1.png")
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src", "images/dice2.png")
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src", "images/dice3.png")
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src", "images/dice4.png")
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src", "images/dice5.png")
        break;
    case 6:
        document.querySelector(".img1").setAttribute("src", "images/dice6.png")
        break;
}

switch(player2){
    case 1:
        document.querySelector(".img2").setAttribute("src", "images/dice1.png")
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src", "images/dice2.png")
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src", "images/dice3.png")
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src", "images/dice4.png")
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src", "images/dice5.png")
        break;
    case 6:
        document.querySelector(".img2").setAttribute("src", "images/dice6.png")
        break;
}



function randomize(){
    var n = Math.floor((Math.random())*6)+1;
    return n;
}