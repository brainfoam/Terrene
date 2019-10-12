function lerp(v0, v1, t)
{
    return(1-t)*v0+t*v1;
}

function animate(element, type) {
    element.addClass("animate");
    element.addClass(type);
}

function removeAnimation(element, type = undefined) {
    element.removeClass("animate");
    if(type != undefined)
        element.removeClass(type);
}

function clearAppBody() {
    document.querySelector("#app_body").innerHTML = "";
}

function loadPage(pageName) {
    clearAppBody();
    $("#app_body").load("pages/" + pageName + ".html");
}