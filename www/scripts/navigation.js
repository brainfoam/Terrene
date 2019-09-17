let nav_home = $("#nav_home");
let nav_game = $("#nav_game");
let nav_hlth = $("#nav_health");
let nav_trck = $("#nav_tracking");

nav_home.click(function() { loadPage("home");     });
nav_game.click(function() { loadPage("game");     });
nav_hlth.click(function() { loadPage("health");   });
nav_trck.click(function() { loadPage("tracking"); });

function clearAppBody() {
    document.querySelector("#app_body").innerHTML = "";
}

function loadPage(pageName) {
    clearAppBody();
    $("#app_body").load("pages/" + pageName + ".html");
}