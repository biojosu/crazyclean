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
  trigger: false,
  keys: {
    ARROW_UP: 73,
    ARROW_DOWN: 75,
    ARROW_RIGHT: 76,
    ARROW_LEFT: 74
  },
  sum: 0,

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
    this.precomprobacion();
    this.interval = setInterval(() => {
      this.clear();
      this.moveAll();
      this.drawAll();
      this.isCollision();

      if (this.comprobacion()) {
        console.log("blaaaaa");

        // alert("holaa");
      } else {
        console.log(this.matrix.board);
        console.log("loool");
      }
    }, 1000 / this.fps);
  },

  reset: function() {
    this.background = new Background(
      this.ctx,
      this.width,
      this.height,
      "./images/bg.png"
    );
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
    this.background2 = new Background(
      this.ctx,
      this.width,
      this.height,
      "./images/gameOVer.png"
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
      document.getElementById("gameover").play();
      this.gameOver();
    }
  },

  gameWin: function() {
    if (this.matrix.board !== "0") {
      clearInterval(this.interval);
    }
  },

  gameOver: function() {
    clearInterval(this.interval);
    this.clear();
    this.background2.draw();
  },

  precomprobacion: function() {
    this.event = document.getElementById("start-button").onclick = function() {
      this.trigger = true;
    };
  },

  comprobacion: function() {
    return this.matrix.board.every(row => {
      return row.every(casilla => {
        console.log(casilla);
        casilla !== "0";
      });
    });
    // else {
    //   // {
    //   //   console.log("ganas");
    //   // }
    //   console.log("pierdes");
    // }
    // if (this.trigger == true) {
    //   for (let i = 0; i < this.matrix.board.length; i++) {
    //     let row = this.matrix.board[i];
    //     for (let j = 0; j < row.length; j++) {
    //       if (row[j] !== "0") {
    //         console.log("eo");
    //       }
    //     }
    //   }
  }
};
