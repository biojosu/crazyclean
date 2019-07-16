class Player {
  constructor(ctx, keys) {
    this.ctx = ctx;
    this.width = 32;
    this.height = 32;
    this.gameWidth = 960;
    this.gameHeight = 640;

    this.velX = 10;
    this.velY = 10;

    this.image = new Image();
    this.image.src = "./images/player.png";

    this.keys = keys;
    this.direction = {
      left: false,
      right: false,
      up: false,
      down: false
    };

    this.posX = this.gameWidth / 2 - this.width / 2;
    this.posY = this.gameHeight - this.height;
    this.posY0 = this.gameHeight - this.height;

    this.setEventListeners();
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
    if (this.direction.left && this.posX > 0) {
      this.posX -= this.velX;
    }
    if (this.direction.right && this.posX + this.width <= this.gameWidth) {
      this.posX += this.velX;
    }
    if (this.direction.up && this.posY > 0) {
      console.log("pepe");
      this.posY -= this.velY;
    }
    if (this.direction.down && this.posY + this.height <= this.gameHeight) {
      this.posY += this.velY;
    }
  }

  setEventListeners() {
    addEventListener("keydown", e => {
      switch (e.keyCode) {
        case 37:
          this.direction.left = true;
          break;
        case 39:
          this.direction.right = true;
          break;
        case 38:
          this.direction.up = true;
          break;
        case 40:
          this.direction.down = true;
          break;
      }
    });

    addEventListener("keyup", e => {
      switch (e.keyCode) {
        case 37:
          this.direction.left = false;
          break;
        case 39:
          this.direction.right = false;
          break;
        case 38:
          this.direction.up = false;
          break;
        case 40:
          this.direction.down = false;
          break;
      }
    });
  }
}
