class Asteroid {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 192;
    this.height = 128;
    this.gameWidth = 960;
    this.gameHeight = 640;

    this.image = new Image();
    this.image.src = "./images/ast1.png";

    this.posX = 500;
    this.posY = 500;
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
}
