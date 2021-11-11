// set the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "DarkTurquoise";
ctx.fillRect(0, 0, 500, 500);

// function for drawing circles
var circle = function (x, y, radius){
  ctx.beginPath();
  ctx.arc(x, y,  radius, 0, Math.PI * 2, false);
  ctx.fill();
}


// drawing a ball
var drawBall = function (x, y) {

  ctx.fillStyle = "Gold";
  circle(x, y, 100);
  ctx.fillStyle = "GoldenRod";
  circle(x-120, y, 20);
  circle(x+120, y, 20);

}

var update = function(coordinate){
  var offset = Math.random()*4-2;
  coordinate += offset;

  if(coordinate > 500){
    coordinate = 500;
  }

  if(coordinate > 0){
    coordinate = 0;
  }

  return coordinate;

}

drawBall(x+250, y-250);
