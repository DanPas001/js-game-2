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
  ctx.fillRect(x, y-100, 200, 200);

  ctx.fillStyle = "DarkGray";
  ctx.fillRect(x-50, y-100, 20, 200);
  ctx.fillRect(x+50, y-100, 20, 200);

  ctx.fillStyle = "Blue";
  circle(x, y, 100);

  ctx.fillStyle = "Black";
  circle(x-30, y+30, 20);
  circle(x+30, y+30, 20);

}

drawBird(320, 240);
