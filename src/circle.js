class circle extends figure {
    constructor (posX, posY,tam) {
        super (posX, posY, tam);
        //this.tam = 20;
    }

    draw () {
        noStroke();
        fill (6, 80, 93);
        ellipse(this.posX, this.posY, this.tam, this.tam);
    }

    getPosX () {
        return this.posX;
    }

    setPosX(posX){
        this.posX = posX;
    }

    getTam () {
        return this.tam;
    }

    setTam(tam) {
        this.tam = tam;
    }
}