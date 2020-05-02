let screen;

let number;

let figures = [];
let figuresTwo = [];

let myCircle;

let pressContinue;
let remove;
let create;

function setup () {
    createCanvas (600, 600);

    screen = 0;
    number = 0;

    pressContinue = false;
    remove = false;
    create = false;
    myCircle = false;

    //figures = new Array [number];

    for (let i = 0; i < number; i++) {
        figures[i] = new square (100, 100, 20); 
    }
    for (let j = 0; j < number; j++) {
        figuresTwo[j] = new circle (100, 100, 20);
    }
    
}

function draw () {

    switch (screen) {
        case 0:
            background (8, 32, 59);

            noStroke();
           
            fill (6,80, 93);
            ellipse (300, 300, 100, 100);
            ellipse (200, 300, 50, 50);
            ellipse (400, 300, 50, 50);

            

            rectMode (CENTER);
            fill (6,80, 93);
            rect (300, 383, 150, 30);
            
            fill (208, 159, 16);
            textSize(50);
            text (number, 285, 315);
            textSize (20);
            text ('+ 1', 385, 305);
            text ('- 1', 185, 305)
            text ('Continuar', 260, 390);

            try {
                zero(number);
            } catch (error) {
                console.log(error.message);
                text('Debes aumentarle al menos 1', 180, 200);
            }

            break;
        case 1:
        background (208, 159, 16)
        fill (8, 32, 59);
        ellipse (145, 300, 80, 80);
        ellipse (230, 300, 80, 80);
        ellipse (315, 300, 80, 80);
        ellipse (400, 300, 80, 80);
        
        textSize (20);
        fill (255);
        text ('+ 1', 130, 305);
        text ('- 1', 220, 305);
        text ('Tamaño', 280, 305);
        text ('Circulo', 370, 305);

        for (let i = 0; i < figures.length; i++) {
            f = figures[i];
            f.draw();
            f.move();
            //figures.push(new square ((i*40)+ 20, 100));
        }

        for (let j = 0; j < figuresTwo.length; j++) {
            ft = figuresTwo[j];
            ft.draw();
            ft.move();
        }

        try {
            add(figures);
        } catch (error) {
            text('No puedes agregar más', 180, 200);
            console.log(error.message);
            
        } 

        try {
            delate(figures)
        } catch (error) {
            text('No puedes eliminar más', 180, 200);
            
        }


        break;
            

    }
        //console.log ('mouseX',mouseX);
        //console.log ('mouseY',mouseY);

    
}

function mousePressed () {

    switch (screen) {
        case 0:

            if (mouseX > 176 && mouseX < 226 && mouseY > 278 && mouseY < 327) {
                console.log('click');
                if (number >= 1) {
                    number --;
                    figures.pop();
                }
            }
        
            if (mouseX > 376 && mouseX < 427 && mouseY > 278 && mouseY < 327) {
                if (number <= 9) {
                    number ++;
                    figures.push(new square (random (20,580), random (20, 250), 20));
                }
            }
        
            if (mouseX > 225 && mouseX < 376 && mouseY > 371 && mouseY < 402) {
                pressContinue = true;
                if (number != 0) {
                    screen ++;
                }
            }
            break;
            case 1:

                if (mouseX > 191 && mouseX < 270 && mouseY > 262 && mouseY < 340) {
                    if (figures.length > 1) {
                        remove = true;
                        figures.pop();

                    }
                    if (myCircle == true) {
                        if (figuresTwo.length > 1) {
                            figuresTwo.pop();
                        }
                    }
                        
                }

                if (mouseX > 105 && mouseX < 186 && mouseY > 262 && mouseY < 340) {
                    if (myCircle == true) {
                        if (figuresTwo.length <9){
                            figuresTwo.push (new circle (random (20,580), random (350, 580), 20));
                        }
                    }
                    if (figures.length <= 9) {
                        create = true;
                        figures.push(new square (random (20,580), random (20, 250), 20));
                    }
                    
                }
                if (mouseX > 277 && mouseX < 355 && mouseY > 262 && mouseY < 340) {
                    figures.forEach(elemento => {
                        elemento.aumentarTam();
                    })

                    if (myCircle == true) {
                        figuresTwo.forEach(element => {
                            element.aumentarTam();
                        })
                    }
    
                }

                if (mouseX > 362 && mouseX < 442 && mouseY > 262 && mouseY < 340) {
                    if (myCircle == false) {
                        figuresTwo = figures.map(elemento => {
                            return elemento = new circle (random (20,580), random (350, 580), 20);
                        })
                        myCircle = true;
                    }
                }

               
    }
}

function zero (number) {
    if (number == 0 && pressContinue == true) {
        throw new myException ("Debes aumentarle 1");
    }
}

function add (figures) {
    if (figures.length == 10 && create == true) {
        throw new myException ('No puedes agregar más');
    }
}

function delate (figures) {
    if (figures.length == 1 && remove == true) {
        throw new myException ('No puedes eliminar más');
    } 
}