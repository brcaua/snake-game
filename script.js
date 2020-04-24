window.onload = function () {
  var stage = document.getElementById("stage");
  var ctx = stage.getContext("2d");
  document.addEventListener("keydown", keyPush);

  setInterval(game, 120);

  const velocity = 1; //velocity
  var velX = (velY = 0); //velocity x and velocity y
  var px = (py = 10); //point x and point y
  var lengthPeca = 20; //part size
  var quantPeca = 30; //number of pieces
  var ax = (ay = 15); //position init (x) and position init (y)

  var trail = [];
  tail = 5;

  function game() {
    px += velX;
    py += velY;

    if (px < 0) {
      px = quantPeca - 1;
    }
    if (px > quantPeca - 1) {
      px = 0;
    }
    if (py < 0) {
      py = quantPeca - 1;
    }
    if (py > quantPeca - 1) {
      py = 0;
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, stage.width, stage.height);

    ctx.fillStyle = "red";
    ctx.fillRect(ax * lengthPeca, ay * lengthPeca, lengthPeca, lengthPeca);

    ctx.fillStyle = "yellow";
    for (var i = 0; i < trail.length; i++) {
      ctx.fillRect(
        trail[i].x * lengthPeca,
        trail[i].y * lengthPeca,
        lengthPeca - 1,
        lengthPeca - 1
      );

      if (trail[i].x === px && trail[i].y == py) {
        velX = velY = 0;
        tail = 5;
      }
    }
    trail.push({ x: px, y: py });
    while (trail.length > tail) {
      trail.shift();
    }

    if (ax == px && ay == py) {
      tail++;
      ax = Math.floor(Math.random() * quantPeca);
      ay = Math.floor(Math.random() * quantPeca);
    }
  }
  function keyPush(event) {
    switch (event.keyCode) {
      case 37: //left
        velX = -velocity;
        velY = 0;
        break;
      case 38: //up
        velX = 0;
        velY = -velocity;
        break;
      case 39: //right
        velX = velocity;
        velY = 0;
        break;
      case 40: //down
        velX = 0;
        velY = velocity;
        break;

      default:
        break;
    }
  }
};
