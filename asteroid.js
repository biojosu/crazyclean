class Asteroid {
  constructor(ctx, gameWidth, gameHeight, player, matrix) {
    this.ctx = ctx;
    this.width = 32;
    this.height = 32;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.player = player;
    this.matrix = matrix;

    this.image = new Image();
    this.image.src = "./images/ast1.png";

    this.velX = 0.1;
    this.velY = 0.1;

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
    this.position.frameX += this.velX;
    this.position.frameY += this.velY;

    //colisión parte superior de la pantalla
    if (this.position.frameY > 0) {
      this.velY = -this.velY;
    }
    //colisión parte inferior de la pantalla
    if (this.position.frameY <= 19) {
      this.velY = -this.velY;
    }
    //colisiones laterales
    if (this.position.frameX > 0) this.velX = -this.velX;
    if (this.position.frameX <= 29) this.velX = -this.velX;
  }
}
