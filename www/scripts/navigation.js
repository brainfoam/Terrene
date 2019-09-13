$("#nav_home").click(    function() { loadPage("home");     });
$("#nav_game").click(    function() { loadPage("game");     });
$("#nav_health").click(  function() { loadPage("health");   });
$("#nav_tracking").click(function() { loadPage("tracking"); });

function clearAppBody() {
    document.querySelector("#app_body").innerHTML = "";
}

function loadPage(pageName) {
    clearAppBody();
    $("#app_body").load("pages/" + pageName + ".html");
}