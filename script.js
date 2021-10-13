const particles = [];

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    //console.log(width);
    const particlesLength = Math.floor(window.innerWidth / 10 );
    
    for (let i = 0; i < particlesLength; i++) {
        particles.push(new Particle());

    }
}

function draw() {
    // if(mouseIsPressed) {
    //     fill(0);
    // } else {
    //     fill(100);
    // }
    
    // circle(mouseX, mouseY, 80);
    background(55, 100, 144);
    particles.forEach((p, index) => {
        p.update();
        p.draw();
        p.checkParticles(particles.slice(index));
    });
}

class Particle {
    constructor() {
        //position
        this.pos = createVector(random((width)), random(height));
        //velocity larger numbers faster movement
        this.vel = createVector(random(-2, 2), random(-2, 2));
        //size
        this.size = 10;
    }
//update movment by adding velocity
    update() {
        this.pos.add(this.vel);
        this.edges();
    }
//draw single particle
    draw() {
        noStroke();
        fill('rgba(255, 255, 255, 0.5)');
        circle(this.pos.x, this.pos.y, this.size);
    }
    //detect edge
    edges() {
        if(this.pos.x < 0 || this.pos.x > width) {
            this.vel.x *= -1;
        }

        if(this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1;
        }
    }

    //connect particles
    checkParticles(particles) {
        particles.forEach(particle => {
            const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);

            if(d < 120) {
                stroke('rgba(255,255,255,0.1)');
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            }
        });
    }
}