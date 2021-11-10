// set the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "DarkTurquoise";
ctx.fillRect(0, 0, 1280, 720);

// function for drawing circles
var circle = function (x, y, radius){
  ctx.beginPath();
  ctx.arc(x, y,  radius, 0, Math.PI * 2, false);
  ctx.fill();
}


// drawing a bird
var drawBird = function (x, y) {
  ctx.fillStyle = "DarkBlue";
  ctx.fillRect(x, y-20, 40, 40);

  ctx.fillStyle = "DarkGray";
  ctx.fillRect(x-10, y-20, 4, 40);
  ctx.fillRect(x+10, y-20, 4, 40);

  ctx.fillStyle = "Blue";
  circle(x, y, 20);

  ctx.fillStyle = "Black";
  circle(x-6, y+6, 4);
  circle(x+6, y+6, 4);

}

drawBird(320, 240);
