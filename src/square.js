class square extends figure {
    constructor (posX, posY, tam) {
        super (posX, posY, tam);
        //this.tam = 20;
    }

    draw () {
        noStroke();
        fill (8, 32, 59);
        rectMode(CENTER);
        rect (this.posX, this.posY, this.tam, this.tam);
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