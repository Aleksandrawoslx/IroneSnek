
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
let pointsDisplay = document.getElementById('points-display')
let gifsEl = document.querySelector('.gifs')
let gameEl = document.querySelector('.game-wrapper')
let gameoverEl = document.querySelector('.game-over')
let gamestartEl = document.querySelector('.game-start')


let width = 500;
let height = 500;
let scale = 25;

canvas.width = width;
canvas.height = height;

let bear = new Image() 
bear.src = "./imgs/bear.png"

let cat = new Image() 
cat.src = "./imgs/cat.png"

let dog = new Image() 
dog.src = "./imgs/dog.png"

let fox = new Image() 
fox.src = "./imgs/fox.png"

let koala = new Image() 
koala.src = "./imgs/koala.png"

let monkey = new Image() 
monkey.src = "./imgs/monkey.png"

let mouse = new Image() 
mouse.src = "./imgs/mouse.png"

let panda = new Image() 
panda.src = "./imgs/panda.png"

let penguin = new Image() 
penguin.src = "./imgs/penguin.png"

let poop = new Image() 
poop.src = "./imgs/poop.png"

let rabbit = new Image() 
rabbit.src = "./imgs/rabbit.png"

let unicorn = new Image()
unicorn.src ="./imgs/unicorn.png"

let foodArray = [bear, cat, dog, fox, koala, monkey, mouse, panda, penguin, poop, rabbit, unicorn]

let goodArray = [
    "https://giphy.com/embed/JQQwgVUMDIyAM",
    "https://giphy.com/embed/Q1D2YJnWHX20w",
    "https://giphy.com/embed/J8FZIm9VoBU6Q",
    "https://giphy.com/embed/xHMIDAy1qkzNS",
    "https://giphy.com/embed/tkApIfibjeWt1ufWwj",
    "https://giphy.com/embed/ci0uDcGQtBh0k",
    "https://giphy.com/embed/KexyRPEQWEZry",
    "https://giphy.com/embed/l1IXVHbLczcWi4Nck",
    "https://giphy.com/embed/vViFKLAOQdDlS",
    "https://giphy.com/embed/ZHn4xJj0hLZ0Q",
    "https://giphy.com/embed/l3q2Z6S6n38zjPswo",
    "https://giphy.com/embed/xNBcChLQt7s9a",
    "https://giphy.com/embed/l1J9JFmNcyVX8FzP2",
    "https://giphy.com/embed/5SzxO5ZrQwGxybUUyZ",
    "https://giphy.com/embed/1xl5fJWRWde29XT21E",
    "https://giphy.com/embed/ftdjfPbZngspX5d3Gu",
    "https://giphy.com/embed/l3q2HWkLF9sy9Jg1q",
    "https://giphy.com/embed/3ohhwi25ISXC7Z4tMs",
    "https://giphy.com/embed/enrlW06aDtvx6nJ4wF",
    "https://giphy.com/embed/1HaFSFfUscXqFfxSgg",
    "https://giphy.com/embed/FpKKILCKqNIgIE1GZf",
    "https://giphy.com/embed/xx1AkH94INP7a",
    "https://giphy.com/embed/20NDbrSQYVKAUKiSoz",
    "https://giphy.com/embed/fAcBZr2vuWD5hlS3Ks",
    "https://giphy.com/embed/hQjHbdOzik3kHH44aP",
    "https://giphy.com/embed/3nmfFpFjCH03gEhJrY",
    "https://giphy.com/embed/G754O1WLSL4c0",
    "https://giphy.com/embed/m4jqqr0kXABqw5a4nb",
    "https://giphy.com/embed/IQVw57Da0uhngcJWSY",
    "https://giphy.com/embed/l4hLHJCwpscYLkArm",
    "https://giphy.com/embed/cn355kwNmtyblxBjXQ",
    "https://giphy.com/embed/7vAwVEdJS5cKxediyK",
    "https://giphy.com/embed/yUXFa7OfDTOyA",
    "https://giphy.com/embed/d1E1EiWLHFU4qrPa",
    "https://giphy.com/embed/3o6vXPYnjBg3gMVFqo",
    "https://giphy.com/embed/UAmdO9mDnFJCllRisF",
    "https://giphy.com/embed/giErKgG4Xz2psoCvT4",
    "https://giphy.com/embed/xUOxf5yBW5pR0SMXqE",
    "https://giphy.com/embed/OqJp9fcjk9HpWBuF4u",
    "https://giphy.com/embed/14cilFdQzr8hG0",
    "https://giphy.com/embed/Ri1bDWI5LRjJOiXRQh",
    "https://giphy.com/embed/1rOYVQobGc5qUsFJIp",
    "https://giphy.com/embed/mBvKIvK2zXFEDNHL9Y",
    "https://giphy.com/embed/q2BjXWGG4x0ze",
    "https://giphy.com/embed/U1getZtwyIzMwGiTM7",
    "https://giphy.com/embed/xT3i1iCePdDpOZuG40",
    "https://giphy.com/embed/26u4cVjpLLJQYWlHi",
    "https://giphy.com/embed/3o6Yg7N6BWeRmqsulO",
    "https://giphy.com/embed/3ornk1ntBR5rrlenN6",
    "https://giphy.com/embed/8clNzChdxG3rFLZGPr",
    "https://giphy.com/embed/3paqw6fRNhG1kBuh5c",
    "https://giphy.com/embed/3ohzdIuqJoo8QdKlnW",
    "https://giphy.com/embed/Z6f7vzq3iP6Mw",
    "https://giphy.com/embed/LeikbswJKXOMM",
    "https://giphy.com/embed/l0IyopK5bMZB6dGIo",
    "https://giphy.com/embed/wysyxWt4ZlQ9q",
    "https://giphy.com/embed/D7z8JfNANqahW",
    "https://giphy.com/embed/12XDYvMJNcmLgQ",
    "https://giphy.com/embed/wRfVij0ow9h28",
    "https://giphy.com/embed/4H1tzoS8UfX24ijTU3",
    "https://giphy.com/embed/3HEKI9lDYNKasx32re",
    "https://giphy.com/embed/3E0Nnz21fcv0XbBXYF",
    "https://giphy.com/embed/GdGOH1HoVscbhkG2e1",
    "https://giphy.com/embed/THHmS27KVidQX2bfcz",
    "https://giphy.com/embed/12eGQWWwAR0aoU",
    "https://giphy.com/embed/l3UcD7vkCptuTGAX6",
    "https://giphy.com/embed/6G1BhuIWyVEhG",
    "https://giphy.com/embed/kAbWiuvtzoG3e",
    "https://giphy.com/embed/3o7ZeTmU77UlPyeR2w",
    "https://giphy.com/embed/l1ugpiu9HmHlbimTm",
    "https://giphy.com/embed/13zeE9qQNC5IKk",
    "https://giphy.com/embed/FdEtkemRg6vo4",
    "https://giphy.com/embed/10tbKyKsjdrOzC",
    "https://giphy.com/embed/POWvddaQEHrgc",
    "https://giphy.com/embed/KffdTQfewxdbKTGEJY",
    "https://giphy.com/embed/10Jpr9KSaXLchW",
    "https://giphy.com/embed/1yn1h2br8fBLZGSzTC",
    "https://giphy.com/embed/11KzAJHqRIbfwY",
    "https://giphy.com/embed/j5QcmXoFWl4Q0",
    "https://giphy.com/embed/nx8GZtGrDYQBa",
    "https://giphy.com/embed/C3Cw3NGfR7cQ",
    "https://giphy.com/embed/3zCKJTGZAkr2o",
    "https://giphy.com/embed/3oEjHFOscgNwdSRRDy",
    "https://giphy.com/embed/ocWanUovGPL1D2r6Rc",
    "https://giphy.com/embed/3SbHPr7tramfAyKrXV",
    "https://giphy.com/embed/Q2LRWdJDq9xy8",
  ];

  let badArray = [
    "https://giphy.com/embed/9jVAv94PRzPoc",
    "https://giphy.com/embed/FO8mbXfBehV0A",
    "https://giphy.com/embed/3Fkw8DCq4eUxp31E4n",
    "https://giphy.com/embed/d10dMmzqCYqQ0",
    "https://giphy.com/embed/d2ZaChASUxF6xqWk",
    "https://giphy.com/embed/1iTIu7WtSfPqMDbW",
    "https://giphy.com/embed/26tPbZzjjJcjTqqVa",
    "https://giphy.com/embed/14saZ73y5Ik5uE",
    "https://giphy.com/embed/m6tmCnGCNvTby",
    "https://giphy.com/embed/9MCLyrLS4Nrm8",
    "https://giphy.com/embed/13lTgtSUmqMrlu",
    "https://giphy.com/embed/1gQtLOocuBTl8dAZo0",
    "https://giphy.com/embed/3nhwVEY66TsfrJ16L5",
    "https://giphy.com/embed/TpvdldAahan7COTlXW",
    "https://giphy.com/embed/8D2dXhKb3O3TuyMwMU",
    "https://giphy.com/embed/YAZrete887OfY3Tiyw",
    "https://giphy.com/embed/TGMBfijgHh5FzsR1fT",
    "https://giphy.com/embed/cr9vIO7NsP5cY",
    "https://giphy.com/embed/fw8XWwT5YuSJGBwddf",
    "https://giphy.com/embed/C4q4k0jLVg9sA",
    "https://giphy.com/embed/Qsh3OpvusLYZBMiHcp",
    "https://giphy.com/embed/l0HlzYSXc5xB3pHQQ",
    "https://giphy.com/embed/3oEdv5b1HA2AXhSDXq",
    "https://giphy.com/embed/kHkyiXXWivvPuE0ksl",
    "https://giphy.com/embed/Sv3b4McHKzo1FwU4e6",
    "https://giphy.com/embed/TpvdldAahan7COTlXW",
    "https://giphy.com/embed/U5XpAYnn4mhiiqu970",
    "https://giphy.com/embed/h8b2OJGocCJ8CenM6o",
    "https://giphy.com/embed/NVmB6AL4kjx6w",
    "https://giphy.com/embed/ac6pkMCoRWUtq",
    "https://giphy.com/embed/ycagKBYEmaili",
    "https://giphy.com/embed/jqvaDnPkUro9a",
    "https://giphy.com/embed/hDSy8w6rGHeTe",
    "https://giphy.com/embed/3o6ZtpRoYe9wbyfcBi",
    "https://giphy.com/embed/ViNi6YMHpirko2Kfi6",
    "https://giphy.com/embed/oAyH7AS1tB3J6",
    "https://giphy.com/embed/l0HlIrxJGgLU6yomY",
    "https://giphy.com/embed/6v2UJRyFAsTXgvJrin",
    "https://giphy.com/embed/0DhHqfExMMT7VdeqIr",
    "https://giphy.com/embed/ZN3jVXH3jZaXKivytT",
    "https://giphy.com/embed/N5PsztQSjkYMw",
    "https://giphy.com/embed/eLaKdIbibMFPglIWxm",
    "https://giphy.com/embed/dQz7TeDGdgfZJlHZ84",
    "https://giphy.com/embed/OVJ7uwVju9EMgTh7o7"
  ];
// Game 1. setup 2. start 3. stop 

class Game {
    constructor (timer){
        this.timer = timer
        this.points = 0
    }
    setup(){
        if (this.gameInterval){
            clearInterval(this.gameInterval)
        }
        this.snake = new Snake()
        this.snake.draw()
        this.foodOne = new Food()
        this.foodTwo = new Food()
        this.foodOne.setup()
        this.foodTwo.setup()
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
        this.points = 0
        pointsDisplay.innerText = "0"
        if (!foodArray.includes(poop)) {
            foodArray.push(poop)
        }
        gameoverEl.classList.add('hidden')
        gamestartEl.classList.add('hidden')
        gameEl.classList.remove('hidden')
        this.setup()
         this.gameInterval = setInterval(() => {
          this.draw()  
        }, this.timer);
        console.log("snake alive")
    }
    
    draw() {
        ctx.clearRect (0, 0, width, height)
        this.eat()
        this.snake.passBorders()
        this.foodOne.draw()
        this.foodTwo.draw()
        this.snake.draw()
        
    }

    stop() {
        gifsEl.classList.remove('hidden')
        let randNumbad = Math.floor(Math.random()* badArray.length)
        gifsEl.src = badArray[randNumbad]
        gameEl.classList.add('hidden')
        gameoverEl.classList.remove('hidden')
        clearInterval(this.gameInterval)
        console.log("snake dead")
    }
    
    eat() {
        
        if (this.snake.x == this.foodOne.x && this.snake.y == this.foodOne.y) {
            gifsEl.classList.remove('hidden')
            if (this.foodOne.picture == poop) {
                this.stop()
            }
            else {
                this.foodOne.setup()
                this.foodOne.draw()
                this.points++
                pointsDisplay.innerText = this.points
            }
            
        }
        if (this.snake.x == this.foodTwo.x && this.snake.y == this.foodTwo.y) {
            gifsEl.classList.remove('hidden')
            if (this.foodTwo.picture == poop) {
                this.stop()
            }
            else {
                this.foodTwo.setup()
                this.foodTwo.draw()
                this.points++
                pointsDisplay.innerText = this.points
            }   
        }   
    }
}

class Snake {
    constructor (){
        this.x = width/2;
        this.y = height/2;
        this.xSpeed = 0;
        this.ySpeed = scale;
        //this.tale = []
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
            game.stop()
        }
        if (this.x < 0) {
          game.stop()
        }
        if (this.y > height - scale) {
           game.stop()
        }
        if (this.y < 0) {
            game.stop()
        }
    }
    
}

class Food {
    constructor (){

    }
    setup(){
        this.x = Math.floor(Math.random()* width/scale) * scale;
        this.y = Math.floor(Math.random()* height/scale) *scale;  
        let randNum = Math.floor(Math.random()*foodArray.length)
        this.picture = foodArray[randNum]
        if (this.picture == poop) {
            foodArray = foodArray.filter(element =>{
                return element != poop
            })
        }

        let randNumgood = Math.floor(Math.random() * goodArray.length)
        gifsEl.src = goodArray[randNumgood]

    }
    draw(){

        ctx.drawImage (this.picture, this.x, this.y, scale, scale)
    }
}

let game = new Game(250)

let btnStart = document.getElementById('startBtn');
btnStart.addEventListener('click', () => {
    game.start()
})

