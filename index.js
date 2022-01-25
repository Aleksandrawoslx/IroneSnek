
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')


let width = 400;
let height = 400;
let scale = 20;

canvas.width = width;
canvas.height = height;


// Game 1. setup 2. start 3. stop 

class Game {
    constructor (timer){
        this.timer = timer
    }
    setup(){
        this.snake = new Snake()
        this.snake.draw()
        this.food = new Food()
        this.food.setup()
        window.addEventListener("keydown", (e) =>{

           if (e.key == "ArrowUp"){
               this.snake.xSpeed = 0;
               this.snake.ySpeed = -scale;
           }
           if (e.key == "ArrowDown"){
            this.snake.xSpeed = 0;
            this.snake.ySpeed = scale;
            }
            if (e.key == "ArrowLeft"){
            this.snake.xSpeed = -scale;
            this.snake.ySpeed = 0;
            }
            if (e.key == "ArrowRight"){
            this.snake.xSpeed = scale;
            this.snake.ySpeed = 0;
        }
        })
    }

    start() {
        this.setup()
         this.gameInterval = setInterval(() => {
          this.draw()  
        }, this.timer);
        console.log("snake alive")
    }
    
    draw() {
        ctx.clearRect (0, 0, width, height)
        this.snake.draw()
        this.snake.passBorders()
        this.food.draw()
        this.eat()
    }

    stop() {
        clearInterval(this.gameInterval)
        console.log("snake dead")
    }
    eat() {
        if (this.snake.x == this.food.x && this.snake.y == this.food.y) {
            this.food.setup()
            this.food.draw()
        }
    }
}

class Snake {
    constructor (){
        this.x = width/2;
        this.y = height/2;
        this.xSpeed = 0;
        this.ySpeed = scale;
    }

    draw() {
        this.update()
        ctx.fillStyle = "black"
        ctx.fillRect (this.x, this.y, scale, scale) 
       
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
    passBorders() {
        if (this.x > width - scale) {
            this.x = 0
        }
        if (this.x < 0) {
            this.x = width 
        }
        if (this.y > height - scale) {
            this.y = 0
        }
        if (this.y < 0) {
            this.y = height
        }
    }
    
}

class Food {
    constructor (){

    }
    setup(){
       this.x = Math.floor(Math.random()* width/scale) * scale;
       this.y = Math.floor(Math.random()* height/scale) *scale;  
    }
    draw(){
        ctx.fillStyle = "pink";
        ctx.fillRect (this.x, this.y, scale, scale)
    }
}

let game = new Game(500)

