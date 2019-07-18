const Game = {
  title: "Crazy Clean",
  autor: "Josue Martin",
  version: "1.0",
  license: null,
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  fps: 30,
  keys: {
    ARROW_UP: 73,
    ARROW_DOWN: 75,
    ARROW_RIGHT: 76,
    ARROW_LEFT: 74
  },

  init: function() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = window.innerWidth * 0.98;
    this.height = window.innerHeight * 0.98;
    this.canvas.width = 960;
    this.canvas.height = 640;
    this.start();
  },

  start: function() {
    this.reset();

    setInterval(() => {
      this.clear();
      this.moveAll();
      this.drawAll();
      this.isCollision();
      this.gameWin();
    }, 1000 / this.fps);
  },

  reset: function() {
    this.background = new Background(this.ctx, this.width, this.height);
    this.matrix = new Matrix(this.ctx);
    this.player = new Player(
      this.ctx,
      this.canvas.width,
      this.canvas.height,
      this.keys,
      this.matrix
    );
    this.asteroid = new Asteroid(
      this.ctx,
      this.canvas.width,
      this.canvas.height,
      this.player,
      this.matrix
    );
  },

  moveAll: function() {
    this.player.move();
    this.asteroid.move();
  },

  drawAll: function() {
    this.background.draw();
    this.matrix.draw();
    this.player.draw();
    this.asteroid.draw();
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  /*isCollision: function() {
    if (
      this.player.position.frameX + this.player.width >= this.asteroid.posX &&
      this.player.position.frameY + this.player.height >= this.asteroid.posY &&
      this.player.position.frameX <= this.asteroid.posX + this.asteroid.width &&
      this.player.position.frameY <= this.asteroid.posY + this.asteroid.height
    ) {
      this.gameOver();
    }
    // });
  },*/

  isCollision: function() {
    if (
      this.player.position.frameX * Math.floor(this.width / 30) +
        this.player.width -
        100 >=
        this.asteroid.position.frameX * Math.floor(this.width / 30) &&
      this.player.position.frameX * Math.floor(this.width / 30) <=
        this.asteroid.position.frameX * Math.floor(this.width / 30) +
          this.asteroid.width -
          50 &&
      this.player.position.frameY * Math.floor(this.height / 20) +
        this.player.height +
        80 >=
        this.asteroid.position.frameY * Math.floor(this.height / 20) &&
      this.player.position.frameY * Math.floor(this.height / 20) <=
        this.asteroid.position.frameY * Math.floor(this.height / 20) +
          this.asteroid.height -
          40
    ) {
      this.gameOver();
    }
  },

  gameWin: function() {
    if (this.matrix.board !== "0") {
      clearInterval(this.interval);
      this.ctx.font = "bold 80px verdana";
      this.ctx.fillText("Acabas de ganar", this.width / 2, this.height / 2);
    }
  },

  //clearAll: function() {
  // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  // },

  gameOver: function() {
    clearInterval(this.Interval);
    this.clear();
    this.ctx.font = "bold 80px verdana";
    this.ctx.fillText("Game Over", 480, 320);
    this.matrix.board = undefined;
  }
};
