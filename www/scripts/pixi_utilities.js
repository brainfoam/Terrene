function PIXI_makeSprite(path, stage) {
    let s = new PIXI.Sprite.from(path);
    s.anchor.set(0.5);
    stage.addChild(s);
    return s;
}