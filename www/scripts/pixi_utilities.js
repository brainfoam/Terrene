function PIXI_makeSprite(path, stage) {
    let s = new PIXI.Sprite.from(path);
    s.anchor.set(0.5);
    stage.addChild(s);
    return s;
}

function PIXI_makeText(text, style, stage) {
    let t = new PIXI.Text(text, style);  
    t.anchor.set(0.5);
    stage.addChild(t);
    return t;
}

function PIXI_copyTransform(from, to) {
    to.width  = from.width;
    to.height = from.height;
    to.x      = from.x;
    to.y      = from.y;
}

function PIXI_translate(obj, x, y) {
    obj.x = x;
    obj.y = y;
}

function PIXI_resize(obj, width, height) {
    obj.width = width;
    obj.height = height;
}

function PIXI_alterFX(obj, alpha, rotation) {
    obj.alpha = alpha;
    obj.rotation = rotation;
}

function PIXI_setAttributes(obj, x, y, width, height, alpha = -1, rotation = -999) {
    PIXI_translate(obj, x, y);
    PIXI_resize(obj, width, height);
    if(alpha != -1)
        PIXI_alterFX(obj, alpha, obj.rotation);
    if(rotation != -999)
        PIXI_alterFX(obj, obj.alpha, rotation);
}