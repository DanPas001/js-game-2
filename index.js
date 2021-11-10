// set the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "DarkTurquoise";
ctx.fillRect(0, 0, 640, 480);

// function for drawing circles
var circle = function (x, y, radius){
  ctx.beginPath();
  ctx.arc(x, y,  radius, 0, Math.PI * 2, false);
  ctx.fill();
}


// drawing a bird
var drawBird = function (x, y) {
  ctx.fillStyle = "DarkBlue";
  ctx.fillRect(x, y-10, 20, 20);

  ctx.fillStyle = "DarkGray";
  ctx.fillRect(x-5, y-10, 2, 20);
  ctx.fillRect(x+5, y-10, 2, 20);

  ctx.fillStyle = "Blue";
  circle(x, y, 10);

  ctx.fillStyle = "Black";
  circle(x-3, y+3, 2);
  circle(x+3, y+3, 2);

}
