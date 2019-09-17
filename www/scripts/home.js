var GL_CANVAS_H = 120;
var GL_CANVAS_W = 999;
let canvas, ctx;

function setUpCanvas() {
    canvas        = document.querySelector("#client_level_bar");
    ctx           = canvas.getContext("2d");
    canvas.height = GL_CANVAS_H;
    canvas.width  = GL_CANVAS_W;
    
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0,900,900);
}

setUpCanvas();