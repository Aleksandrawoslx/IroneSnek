let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let pointsDisplay = document.getElementById("points-display");
let gifsEl = document.querySelector(".gifs");
let gameEl = document.querySelector(".game-wrapper");
let gameoverEl = document.querySelector(".game-over");
let gamestartEl = document.querySelector(".game-start");

let width = 500;
let height = 500;
let scale = 25;

canvas.width = width;
canvas.height = height;

let bear = new Image();
bear.src = "./imgs/bear.png";

let cat = new Image();
cat.src = "./imgs/cat.png";

let dog = new Image();
dog.src = "./imgs/dog.png";

let fox = new Image();
fox.src = "./imgs/fox.png";

let koala = new Image();
koala.src = "./imgs/koala.png";

let monkey = new Image();
monkey.src = "./imgs/monkey.png";

let mouse = new Image();
mouse.src = "./imgs/mouse.png";

let panda = new Image();
panda.src = "./imgs/panda.png";

let penguin = new Image();
penguin.src = "./imgs/penguin.png";

let poop = new Image();
poop.src = "./imgs/poop.png";

let rabbit = new Image();
rabbit.src = "./imgs/rabbit.png";

let unicorn = new Image();
unicorn.src = "./imgs/unicorn.png";

let foodArray = [
  bear,
  cat,
  dog,
  fox,
  koala,
  monkey,
  mouse,
  panda,
  penguin,
  poop,
  rabbit,
  unicorn,
];

class Game {
  constructor(timer) {
    this.timer = timer;
    this.points = 0;
  }
  setup() {
    if (this.gameInterval) {
      clearInterval(this.gameInterval);
    }
    this.snake = new Snake();
    this.snake.draw();
    this.foodOne = new Food();
    this.foodTwo = new Food();
    this.foodOne.setup();
    this.foodTwo.setup();
    window.addEventListener("keydown", (e) => {
      if (e.key == "ArrowUp") {
        this.snake.xSpeed = 0;
        this.snake.ySpeed = -scale;
      }
      if (e.key == "ArrowDown") {
        this.snake.xSpeed = 0;
        this.snake.ySpeed = scale;
      }
      if (e.key == "ArrowLeft") {
        this.snake.xSpeed = -scale;
        this.snake.ySpeed = 0;
      }
      if (e.key == "ArrowRight") {
        this.snake.xSpeed = scale;
        this.snake.ySpeed = 0;
      }
    });
  }

  start() {
    this.points = 0;
    pointsDisplay.innerText = "0";
    if (!foodArray.includes(poop)) {
      foodArray.push(poop);
    }
    gameoverEl.classList.add("hidden");
    gamestartEl.classList.add("hidden");
    gameEl.classList.remove("hidden");
    this.setup();
    this.gameInterval = setInterval(() => {
      this.draw();
    }, this.timer);
    console.log("snake alive");
  }

  checkCollision() {
    for (let i = 1; i < this.snake.eaten - 1; i++) {
      if (
        this.snake.x == this.snake.tail[i].x &&
        this.snake.y == this.snake.tail[i].y
      ) {
        this.stop();
      }
    }

    if (this.snake.x > width - scale) {
      this.stop();
    }
    if (this.snake.x < 0) {
      this.stop();
    }
    if (this.snake.y > height - scale) {
      this.stop();
    }
    if (this.snake.y < 0) {
      this.stop();
    }
  }

  draw() {
    ctx.clearRect(0, 0, width, height);
    this.eat();
    this.snake.updateTail();
    this.snake.drawTail();
    this.checkCollision();
    this.foodOne.draw();
    this.foodTwo.draw();
    this.snake.draw();
  }

  stop() {
    gifsEl.classList.remove("hidden");
    let randNumbad = Math.floor(Math.random() * badArray.length);
    gifsEl.src = badArray[randNumbad];
    gameEl.classList.add("hidden");
    gameoverEl.classList.remove("hidden");
    clearInterval(this.gameInterval);
    console.log("snake dead");
  }

  eat() {
    if (this.snake.x == this.foodOne.x && this.snake.y == this.foodOne.y) {
      gifsEl.classList.remove("hidden");
      if (this.foodOne.picture == poop) {
        this.stop();
      } else {
        this.foodOne.setup();
        this.foodOne.draw();
        this.points++;
        this.snake.eaten++;
        pointsDisplay.innerText = this.points;
      }
    }
    if (this.snake.x == this.foodTwo.x && this.snake.y == this.foodTwo.y) {
      gifsEl.classList.remove("hidden");
      if (this.foodTwo.picture == poop) {
        this.stop();
      } else {
        this.foodTwo.setup();
        this.foodTwo.draw();
        this.points++;
        this.snake.eaten++;
        pointsDisplay.innerText = this.points;
      }
    }
  }
}

class Snake {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.xSpeed = 0;
    this.ySpeed = scale;
    this.tail = [];
    this.eaten = 0;
  }

  draw() {
    this.update();
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, scale, scale);
  }
  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  updateTail() {
    this.tail[this.eaten] = { x: this.x, y: this.y };
    for (let i = 0; i < this.eaten; i++) {
      this.tail[i] = this.tail[i + 1];
    }
  }
  drawTail() {
    for (let i = 0; i < this.eaten; i++) {
      ctx.strokeStyle = "#55423d";
      ctx.strokeRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }
  }
}

class Food {
  constructor() {}
  setup() {
    this.x = Math.floor((Math.random() * width) / scale) * scale;
    this.y = Math.floor((Math.random() * height) / scale) * scale;
    let randNum = Math.floor(Math.random() * foodArray.length);
    this.picture = foodArray[randNum];
    if (this.picture == poop) {
      foodArray = foodArray.filter((element) => {
        return element != poop;
      });
    }

    let randNumgood = Math.floor(Math.random() * goodArray.length);
    gifsEl.src = goodArray[randNumgood];
  }
  draw() {
    ctx.drawImage(this.picture, this.x, this.y, scale, scale);
  }
}

let gameFast = new Game(100);
let gameSlow = new Game(250);

let slowStart = document.getElementById("slow");
let fastStart = document.getElementById("fast");

slowStart.addEventListener("click", () => {
  gameFast.stop();
  gameSlow.start();
  slowStart.src = "./imgs/slow-light.png";
  fastStart.src = "./imgs/fastmode.png";
});

fastStart.addEventListener("click", () => {
  gameSlow.stop();
  gameFast.start();
  slowStart.src = "./imgs/slowmode.png";
  fastStart.src = "./imgs/fast-light.png";
});
