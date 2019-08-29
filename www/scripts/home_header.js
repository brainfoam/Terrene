var GL_CANVAS_H = 120;
var GL_CANVAS_W = 999;
let canvas, ctx;

function setUpCanvas() {
    canvas        = document.querySelector("#app_home_header_canvas");
    ctx           = canvas.getContext("2d");
    canvas.height = GL_CANVAS_H;
    canvas.width  = GL_CANVAS_W;
}

setUpCanvas();