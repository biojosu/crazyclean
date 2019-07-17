class Asteroid {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 192;
    this.height = 160;
    this.gameWidth = 960;
    this.gameHeight = 640;

    this.image = new Image();
    this.image.src = "./images/ast1.png";

    this.posX = this.gameWidth / 2;
    this.posY = this.gameHeight / 2;

    this.velX = 5;
    this.velY = 5;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }

  move() {
    this.posX += this.velX;
    this.posY += this.velY;
  }
}
