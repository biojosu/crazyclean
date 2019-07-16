const Game = {
  title: "Crazy Clean",
  autor: "Josue Martin",
  version: "1.0",
  license: null,
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  fps: 60,
  keys: {
    ARROW_UP: 38,
    ARROW_DOWN: 40,
    ARROW_RIGHT: 39,
    ARROW_LEFT: 37
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
      this.drawAll();
      this.moveAll();
    }, 1000 / this.fps);
  },

  reset: function() {
    this.background = new Background(this.ctx, this.width, this.height);
    this.matrix = new Matrix(this.ctx);
    this.player = new Player(this.ctx, 960, 640, this.keys);
    //this.asteroid = new Asteroid(this.ctx);
  },

  moveAll: function() {
    this.player.move();
  },

  drawAll: function() {
    this.background.draw();
    this.matrix.draw();
    this.player.draw();
    //this.asteroid.draw();
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};
