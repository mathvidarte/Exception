class figure {
      constructor (posX, posY, tam) {
          this.posX = posX;
          this.posY = posY;
          this.tam = tam;
          this.vel = 2;
      }

      move () {
          this.posX += this.vel;

          if (this.posX > 590 || this.posX < 10) {
              this.vel *= -1;
          }
      }

      draw () {

      }

      aumentarTam () {
          if (this.tam < 160)
          this.tam *= 2;
      }


}