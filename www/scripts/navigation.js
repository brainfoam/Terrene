$("#nav_home").click(function() {
    clearAppBody();
    $("#app_body").load("pages/home.html");
});

$("#nav_game").click(function() {
    clearAppBody();
    $("#app_body").load("pages/game.html");
});

function clearAppBody() {
    document.querySelector("#app_body").innerHTML = "";
}