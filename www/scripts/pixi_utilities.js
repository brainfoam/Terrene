function PIXI_makeSprite(path, stage) {
    let s = new PIXI.Sprite.from(path);
    s.anchor.set(0.5);
    stage.addChild(s);
    return s;
}

function PIXI_copyTransform(from, to) {
    to.width  = from.width;
    to.height = from.height;
    to.x      = from.x;
    to.y      = from.y;
}