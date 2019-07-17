class Player {
  constructor(ctx, gameWidth, gameHeight, keys, matrix) {
    this.ctx = ctx;
    this.width = 32;
    this.height = 32;
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

    this.posX = 0; //this.gameWidth / 2 - this.width / 2;
    this.posY = 0; //this.gameHeight - this.height;

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

  // if (this.direction.down && this.posY + this.height <= this.gameHeight) {
  //   this.posY += this.velY;
  //   for (let i = 0; i < this.board.length; i++) {
  //     let row = this.board[i];
  //     for (let j = 0; j < row.length; j++) {
  //       let column = row[j];
  //       if (column === "P") {
  //         column = "1";
  //         this.nextStep = row[i - 1];
  //         this.nextStep = "P";

  //         this.playerInitialPosition = i + "," + j;
  //         this.travelInitial.push(this.playerInitialPosition);

  //         this.playerFinalPosition = i - 1 + "," + j;
  //         this.travelFinal.push(this.playerInitialPosition);
  //       }
  //     }
  //   }
  // }

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
