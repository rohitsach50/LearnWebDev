let canvasEl = document.getElementById("canvas-el")
let mouse = {
    x: undefined,
    y: undefined
}
let gravity=1;
let friction=0.999;
let radi=40



var c = canvasEl.getContext('2d');
let colours = ["#ffb0b0", "#fe7171", "#335d2d", "#7ea04d", "#612897", "#EEEEEE", "#32e0c4", "#d96098", "#325288"]
window.addEventListener('mousemove', (event) => {
    mouse.x = event.x
    mouse.y = event.y
   
})

window.addEventListener('click',init)

window.addEventListener('resize',init)

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// function randomColor(colours) {
//     return colours[Math.floor(Math.random() * colours.length)];
// }

function Ball(x, y, radius, dy, dx) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = colours[Math.floor(Math.random() * colours.length)];
    this.dx=dx;
    this.dy = dy;
    

    this.update = function () {
        if (this.y +this.radius+20 > canvasEl.height ) {
            this.dy = (-this.dy) * friction;
        }
        else {
            this.dy += gravity 
            // console.log(this.dy)
        }
        if(this.x+this.radius>canvasEl.width || this.x-this.radius<0){
            this.dx=-this.dx
        }
        this.y += this.dy
        this.x +=this.dx

        this.draw();
    }
    

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;

        c.fill();
        c.stroke();
        c.closePath();


    }
}

let ballArr = [];
   
function init() {
    // c.clearRect(0, 0, canvasEl.width, canvasEl.height);
    ballArr = [];
    for (let i = 0; i < 250; i++) {
        let radius = randomIntFromRange(6, 25);

        let x = randomIntFromRange(radius, (window.innerWidth - radius));
        let y = randomIntFromRange(radius, (window.innerHeight - radius));
        let dx = randomIntFromRange(-1,1)
        let ball = new Ball(x, y, radius, 4,dx)
        ballArr.push(ball) 
        // animate()
    }
}
function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, canvasEl.width, canvasEl.height);
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;
    for (let i = 0; i < ballArr.length; i++) {
        ballArr[i].update() 
    }
    // c.fillText("HTML CANVAS BOIERPLATE", mouse.x,mouse.y)
    
}
animate()
init()
