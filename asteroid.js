class Asteroid {
  constructor(ctx, gameWidth, gameHeight, player, matrix) {
    this.ctx = ctx;
    this.width = 192;
    this.height = 160;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.player = player;
    this.matrix = matrix;

    this.image = new Image();
    this.image.src = "./images/ast1.png";

    this.velX = 0.5;
    this.velY = 0.5;
    this.travel = [];
    this.position = {
      coord: "N",
      frameY: 10,
      frameX: 15
    };
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
    // console.log(casilla);
    //
    // if (this.matrix.board[indexY + this.velY][indexX + this.velX] === "0") {
    //   this.matrix.board[indexY][indexX] = "0";
    //   // this.matrix.board[indexY + this.velY][indexX + this.velX] = "A"
    // }
    // let xPlayer = this.player.position.frameX * Math.floor(this.gameWidth / 30);
    // let yPlayer =
    //   this.player.position.frameY * Math.floor(this.gameHeight / 20);

    // let xAst = this.position.frameX * Math.floor(this.gameWidth / 30);
    // let yAst = this.position.frameY * Math.floor(this.gameHeight / 20);
    // console.log(xPlayer, yPlayer);
    // console.log(xAst, yAst);

    // this.matrix.board[indexY][indexX] = "A";
    // console.log(this.position.frameX, this.position.frameY);
    // console.log(this.matrix.board[this.position.frameY][this.position.frameX]);
    // console.log(this.player.position.frameX, this.player.position.frameY);
    // console.log(
    //   this.player.frameX, this.player.frameY
    // );
    // console.log(
    //   this.matrix.board[this.player.position.frameY][
    //     this.player.position.frameX
    //   ]
    // );

    this.position.frameX += this.velX;
    this.position.frameY += this.velY;

    // console.log(xPlayer, yPlayer);
    // console.log(xAst, yAst);

    // if (
    //   xPlayer + this.player.width >= xAst &&
    //   xPlayer < xAst + this.width &&
    //   yPlayer + this.player.height >= yAst &&
    //   yPlayer < yAst + this.height
    // ) {
    //   alert("ha chocado");
    // }

    // if (
    //   this.player.position.frameX * Math.floor(this.gameWidth / 30) +
    //     this.player.width >=
    //     this.position.frameX * Math.floor(this.gameWidth / 30) &&
    //   this.player.position.frameX * Math.floor(this.gameWidth / 30) <
    //     this.position.frameX * Math.floor(this.gameWidth / 30) +
    //       this.width / 4 &&
    //   this.player.position.frameY * Math.floor(this.gameHeight / 20) +
    //     this.player.height / 4 >=
    //     this.position.frameY * Math.floor(this.gameHeight / 20) &&
    //   this.player.position.frameY * Math.floor(this.gameHeight / 20) <
    //     this.position.frameY * Math.floor(this.gameHeight / 20) +
    //       this.height / 2
    // ) {
    //   alert("ha chocado");
    // }

    // if (this.matrix.board[this.position.frameY][this.position.frameX] === "P") {
    //   alert("ha chocado");
    // }
    // if (this.matrix.board[this.position.frameY][this.position.frameX] === "0") {
    //   this.matrix.board[this.position.frameY][this.position.frameX] = "A";
    //   this.matrix.board[this.position.frameY - this.velY][
    //     this.position.frameX - this.velX
    //   ] = "0";
    // }
    // if (this.matrix.board[this.position.frameY][this.position.frameX] === "1") {
    //   this.matrix.board[this.position.frameY][this.position.frameX] = "B";

    //   this.matrix.board[this.position.frameY - this.velY][
    //     this.position.frameX - this.velX
    //   ] = "0";
    // }

    // console.table(this.matrix.board);
    // console.log(this.position.frameX, this.position.frameY);
    // console.log(this.matrix.board[this.position.frameY][this.position.frameX]);
    // console.log(
    //   this.matrix.board[this.player.position.frameY][
    //     this.player.position.frameX
    //   ]
    // );
    // console.log(this.player.position.frameX, this.player.position.frameY);
    // console.log(this.position.frameX, this.position.frameY);
    // console.log(casilla);
    // this.matrix.board[indexY][indexX] = casilla;
    // this.matrix.board[this.position.frameY][this.position.frameX] = "A";
    // console.log(indexY, indexX);
    // console.log(this.matrix.board);
    // console.log(indexX, indexY);
    // console.log(casilla);
    // console.log(this.matrix.board[indexY][indexX]);

    // if (this.position.frameX > 0) {
    //   let indexX = this.position.frameX;
    //   let indexY = this.position.frameY;

    //   this.position.frameX -= 1;

    //   this.matrix.board[indexY][indexX] = "1";
    //   this.matrix.board[indexY][indexX - 1] = "P";
    // }
    // console.log(this.matrix.board[this.position.frameY][this.position.frameX]);

    // console.log(this.matrix.board[indexY][indexX]);
    // if (
    //   this.matrix.board[indexY + 1][indexX + 1] === "0" ||
    //   this.matrix.board[indexY + 1][indexX - 1] === "0" ||
    //   this.matrix.board[indexY - 1][indexX + 1] === "0" ||
    //   this.matrix.board[indexY - 1][indexX - 1] === "0"
    // ) {
    //   console.log("hace lo que tiene que hacer");
    // }

    // switch(this.matrix.board[indexY][indexX])

    // this.matrix.board

    //colisión parte superior de la pantalla
    if (this.position.frameY > 0) {
      this.velY = -this.velY;
      // let indexX = this.position.frameX;
      // let indexY = this.position.frameY;
      //console.log(indexX);
      //console.log(indexY);
      //this.position.frameY -= this.velY;
      // console.log((this.position.frameY -= 1));
      // this.matrix.board[indexY][indexX] = "0";
      // console.log(this.matrix.board[indexY][indexX]);
      // this.matrix.board[indexY - 1][indexX] = "0";
    }
    //colisión parte inferior de la pantalla
    if (this.position.frameY <= 18) {
      this.velY = -this.velY;
    }
    //colisiones laterales
    if (this.position.frameX > 0) this.velX = -this.velX;
    if (this.position.frameX <= 28) this.velX = -this.velX;
  }
}
