class Background {
  constructor(ctx, w, h) {
    this.ctx = ctx;
    this.width = 960;
    this.height = 640;

    this.image = new Image();
    this.image.src = "./images/bg.png";

    this.posX = 0;
    this.posY = 0;
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
