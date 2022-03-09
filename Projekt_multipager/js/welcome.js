function weiterleiten(){
    document.getElementById("welcome_info").innerHTML="Sie werden weitergeleitet... :)";
    setTimeout(() => {
        window.location.href = window.location.href.replace("welcome", "login");
    }, 3000);
}
