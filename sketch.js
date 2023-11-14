let particles = [];

function setup() {
  createCanvas(1920, 500);
  noStroke();
}

function draw() {
  background(360);

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();
    
    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
  }
}

function mousePressed() {
  let numParticles = 100;
  for (let i = 0; i < numParticles; i++) {
    let p = new Particle(mouseX, mouseY);
    particles.push(p);
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velX = random(-5, 5);
    this.velY = random(-5, 5);
    this.size = random(5, 20);
    this.color = color((89), (195), (195), 150);
    this.life = 255;
  }

  update() {
    this.x += this.velX;
    this.y += this.velY;
    this.life -= 2;
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }

  isDead() {
    return this.life <= 0;
  }
}
