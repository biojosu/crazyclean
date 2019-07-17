class Asteroid {
  constructor(ctx, src) {
    this.ctx = ctx;
    this.width = 192;
    this.height = 192;
    this.gameWidth = 960;
    this.gameHeight = 640;

    this.image = new Image();
    this.image.src = src;

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

    //colisión parte superior de la pantalla
    if (this.posY < 0) {
      this.velY = -this.velY;
    }
    //colisión parte inferior de la pantall
    if (this.posY + this.height > this.gameHeight) {
      this.velY = -this.velY;
    }
    //colisiones laterales

    if (this.posX + this.width > this.gameWidth || this.posX < 0) {
      this.velX = -this.velX;
    }
  }
}
