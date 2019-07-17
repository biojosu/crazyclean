class Player {
  constructor(ctx, gameWidth, gameHeight, keys, matrix) {
    this.ctx = ctx;
    this.width = 40;
    this.height = 40;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.velX = 5;
    this.velY = 5;

    this.image = new Image();
    this.image.src = "./images/player.png";

    this.keys = keys;
    this.direction = {
      left: false,
      right: false,
      up: false,
      down: false
    };
    this.matrix = matrix;
    this.position = {
      coord: "N",
      frameY: 19,
      frameX: 15
    };

    this.setEventListeners();
    console.log(this.matrix);
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.position.frameX * Math.floor(this.gameWidth / 30),
      this.position.frameY * Math.floor(this.gameHeight / 20),
      this.width,
      this.height
    );
  }

  move() {
    if (this.direction.left && this.position.frameX > 0) {
      let indexX = this.position.frameX;
      let indexY = this.position.frameY;

      this.position.frameX -= 1;

      this.matrix.board[indexY][indexX] = "1";
      this.matrix.board[indexY][indexX - 1] = "P";
    }

    if (this.direction.right && this.position.frameX <= 28) {
      console.log(this.position.frameX);
      let indexX = this.position.frameX;
      let indexY = this.position.frameY;
      this.position.frameX += 1;

      this.matrix.board[indexY][indexX] = "1";
      this.matrix.board[indexY][indexX + 1] = "P";
    }

    if (this.direction.up && this.position.frameY > 0) {
      let indexX = this.position.frameX;
      let indexY = this.position.frameY;
      this.position.frameY -= 1;

      this.matrix.board[indexY][indexX] = "1";
      this.matrix.board[indexY - 1][indexX] = "P";
    }

    if (this.direction.down && this.position.frameY <= 18) {
      let indexX = this.position.frameX;
      let indexY = this.position.frameY;
      this.position.frameY += 1;

      this.matrix.board[indexY][indexX] = "1";
      this.matrix.board[indexY + 1][indexX] = "P";
    }
  }

  setEventListeners() {
    addEventListener("keydown", e => {
      switch (e.keyCode) {
        case this.keys.ARROW_LEFT:
          this.direction.left = true;
          this.position.coord = "O";
          break;
        case this.keys.ARROW_RIGHT:
          this.direction.right = true;
          this.position.coord = "E";
          break;
        case this.keys.ARROW_UP:
          this.direction.up = true;
          this.position.coord = "N";
          break;
        case this.keys.ARROW_DOWN:
          this.direction.down = true;
          this.position.coord = "S";
          break;
      }
    });

    addEventListener("keyup", e => {
      switch (e.keyCode) {
        case this.keys.ARROW_LEFT:
          this.direction.left = false;
          break;
        case this.keys.ARROW_RIGHT:
          this.direction.right = false;
          break;
        case this.keys.ARROW_UP:
          this.direction.up = false;
          break;
        case this.keys.ARROW_DOWN:
          this.direction.down = false;
          break;
      }
    });
  }
}
