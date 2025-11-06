/**
 * A class representing a UI button.
 */
class Button {
    x;
    y;
    w;
    h;
    label;
    /**
     * Creates a new Button.
     * @param {number} x The x coordinate of the button (CORNER mode).
     * @param {number} y The y coordinate of the button (CORNER mode).
     * @param {number} w The w of the button.
     * @param {number} h The h of the button.
     * @param {string} label The text to display on the button.
     */
    constructor(x, y, w, h, label) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.label = label;
    }

    /**
     * Draws the button at its specified location and dimensions. Also 
     * displays the label on the button. If the mouse is over the button, 
     * the button's fill colour will be blue (0, 0, 255). Otherwise, it 
     * will be black.
     */
    draw() {   
        rectMode(CENTER);
        strokeWeight(3);
        if(this.#mouseIsOver() === true){
            fill(216, 191, 216)
        }
        else{
            fill(225)
        }
        
        rect(this.x, this.y, this.w, this.h);
        fill(0);
        textSize(20);
        textAlign(CENTER, CENTER);
        text(this.label, this.x, this.y)
        
    }

    /**
     * A private method that checks if the mouse is over the button. 
     * @returns {boolean} True if the mouse is over the button, false otherwise.
     */
    #mouseIsOver() {
        if( mouseX >= this.x - this.w / 2 &&
            mouseX <= this.x + this.w / 2&&
            mouseY >= this.y - this.h / 2&&
            mouseY <= this.y + this.h / 2

        ) {return true}
        else{
            return false
        }  
    }

    /**
     * Checks if button is clicked--the mouse is over the button and the mouse 
     * is currently pressed.
     * @returns {boolean} True if the button is clicked, false otherwise.
     */
    clicked() {
        if(wasMousePressed && (this.#mouseIsOver() === true)){
            counter ++
            console.log(counter);
            wasMousePressed = false; //reset after fire
        }
    }
}

let counter = 0;
let wasMousePressed = false;

function setup(){
    createCanvas(600, 600);

}

let mouseClicked;
function draw(){
    background(125, 125, 225);
    let button = new Button(300, 200, 200, 100, "Click me!");
    button.draw();
    button.clicked();
    textSize(20);
    fill(0);
    text(`Button has been clicked ${counter} times!`, 300, 400);
}

function mousePressed(){
    wasMousePressed = true; // change was mouse pressed to true when clicked
    // ensures that mouseIsPressed doesn't continuously fire.
}

function mouseReleased(){
    wasMousePressed = false; // reset once mouse is released
}
