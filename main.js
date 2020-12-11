
const canvas = document.querySelector("canvas");
const clear = document.getElementById("clear")
const colorBox =document.getElementById("color-box")
const color = document.getElementById("color")
const thick = document.getElementById("thick")
const menu = document.querySelector(".menu")
const ctx = canvas.getContext("2d")


let isDrawing = false
color.addEventListener("input", ()=>{
    colorBox.style.backgroundColor = color.value

})
canvas.addEventListener("mousedown", start)
canvas.addEventListener("mousemove", draw)
canvas.addEventListener("mouseup", stop)

canvas.addEventListener("touchmove", (e)=>{

    ctx.lineCap = "round"
    ctx.strokeStyle = color.value
    ctx.lineWidth = thick.value

    ctx.lineTo(e.targetTouches[0].clientX, e.targetTouches[0].clientY)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(e.targetTouches[0].clientX, e.targetTouches[0].clientY)

})

canvas.addEventListener("touchend", stop)

function start(e){
    isDrawing = true
    draw(e)
}

function draw({clientX: x, clientY: y}){
    if(!isDrawing) return
    ctx.lineCap = "round"
    ctx.strokeStyle = color.value
    ctx.lineWidth = thick.value
    
    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x, y)
    
    
}

function stop(){
    isDrawing = false
    ctx.beginPath()
}

clear.addEventListener("click", ()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})



window.addEventListener('resize', resizeCanvas);
function resizeCanvas () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

}
resizeCanvas();