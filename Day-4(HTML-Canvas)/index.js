let canvasEl = document.getElementById("canvas-el")


var c = canvasEl.getContext('2d');
let colours = ["#16193b","#35478c","#fc4349","#7fb2f0",]
window.addEventListener('mousemove', (event) => {
    mouse.x = event.x
    mouse.y = event.y
 
})
let maxRadius=30


let mouse = {
    x:undefined,
    y:undefined
}

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius=radius
    this.colour = colours[Math.floor(Math.random() * colours.length)];
    this.draw = function () {
        
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        // c.strokeStyle = this.colour;
        // c.stroke()
        c.fillStyle=this.colour;
        
        c.fill()
    }

    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        else if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy

        }
        this.x += this.dx
        this.y += this.dy
        if (mouse.x-this.x<50 && mouse.x-this.x>-50 && mouse.y-this.y<50 && mouse.y-this.y>-50)
        {
            if (this.radius<maxRadius){
                this.radius+=1;

            }
        }
        else if(this.radius>this.minRadius){
            this.radius-=1;
        }
        this.draw()

    }
}
circleArr=[]
for (var i = 0; i < 400; i++) {
    let radius = Math.floor(Math.random() * 10)
    let y = Math.random() * (innerHeight-radius*2)+radius
    let x = Math.random() * (innerWidth-radius*2)+radius
    let dx = (Math.random() - 0.5) * 4
    let dy = (Math.random() - 0.5) * 4
    
    let circle = new Circle(x, y, dx, dy, radius)
    circleArr.push(circle)
    
}
console.log(circleArr.length)
function animate() {
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight)
    // circle.update()
    for (var i = 0; i < circleArr.length; i++) {
        circleArr[i].update();
    }
}
animate();

