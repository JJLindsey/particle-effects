let p;

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    //console.log(width);
    p = new Particle();
    
}

function draw() {
    // if(mouseIsPressed) {
    //     fill(0);
    // } else {
    //     fill(100);
    // }
    
    // circle(mouseX, mouseY, 80);
    background(55, 100, 144);
    p.update();
    p.draw();
}

class Particle {
    constructor() {
        //position
        this.pos = createVector(random((width)), random(height));
        //velocity
        this.vel = createVector(random(-2, 2), random(-2, 2));
        //size
        this.size = 10;
    }

    update() {
        this.pos.add(this.vel);
    }

    draw() {
        noStroke();
        fill('rgba(255, 255, 255, 0.5)');
        circle(this.pos.x, this.pos.y, this.size);
    }
}