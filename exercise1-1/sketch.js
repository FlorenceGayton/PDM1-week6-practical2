class Star {
    x;
    y;
    speed;
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    draw(){
        fill(255, 234, 0);
        noStroke();
        triangle(this.x, this.y - 50, this.x - 20, this.y, this.x + 20, this.y);
        triangle(this.x - 50, this.y - 20, this.x, this.y - 20, this.x, this.y + 10);
        triangle(this.x + 50, this.y - 20, this.x, this.y - 20, this.x, this.y + 10);
        triangle(this.x - 20, this.y - 5, this.x, this.y + 10, this.x - 35, this.y + 30);
        triangle(this.x, this.y + 10, this.x + 20, this.y - 5, this.x + 35, this.y + 30);
    }
    fall(speed){
        this.y = this.y + speed;
    }
    shoot(speed){
        this.x = this.x + speed;
    }

}
let myStar1 = new Star(100, 300);
let myStar2 = new Star(200, 100);

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    myStar1.draw();
    myStar2.draw();
    myStar1.fall(2);
    myStar2.shoot(5);
}

/**
 * Draws a star at the given coordinates.
 * @param {number} this.x 
 * @param {number} y 
 * @param {number} speed
 */
