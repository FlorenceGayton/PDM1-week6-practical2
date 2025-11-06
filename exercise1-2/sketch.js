class Coordinate {
    x;
    y;
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    isInBounds(bbX, bbY, bbW, bbH){
        if( this.x >= bbX &&
            this.x <= (bbX+bbW) &&
            this.y >= bbY &&
            this.y <= (bbY+bbH)

        ) {return true}
        else{
            return false
        }
    }

}

let ellipses = [];


function setup() {
    createCanvas(400, 400);
}


function draw() {
    background(225);
    for (let e of ellipses){
        fill(e.r, e.g, e.b);
        ellipse(e.x, e.y, e.w, e.h);
    }
}

function mouseClicked(){
    let coordinate = new Coordinate(mouseX, mouseY);
    if(coordinate.isInBounds(0, 0, 400, 400) === true){
        let newEllipse = {
            x : random(0, width),
            y : random(0, height),
            w : random(40, 70),
            h : random(40, 70),
            r : random(0, 255),
            g : random(0, 225),
            b : random(0, 255)
    }

    ellipses.push(newEllipse);
    }
}

/**
 * 
 * @param {number} x 
 * @param {number} y 
 */
