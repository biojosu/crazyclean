class Player {
  constructor(ctx, keys) {
    this.ctx = ctx;
    this.width = 128;
    this.height = 128;
    this.gamesWidth = 960;
    this.gamesHeight = 640;

    this.image = new Image();
    this.image.src = "./images/player.png";

    this.keys = keys;

    this.posX = this.gamesWidth / 2;
    this.posY = 500; //this.gameHeigth - this.height;

    this.setListeners();
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

  setListeners() {
    document.onkeydown = e => {
      switch (e.keyCode) {
        case this.keys.ARROW_UP:
          this.y -= 5;
          break;

        case this.keys.ARROW_DOWN:
          this.y += 5;
          break;

        case this.keys.ARROW_RIGHT:
          this.x += 5;
          break;

        case this.keys.ARROW_LEFT:
          this.x -= 5;
          break;
      }
    };
  }
}
