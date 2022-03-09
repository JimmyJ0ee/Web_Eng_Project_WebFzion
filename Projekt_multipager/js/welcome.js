function weiterleiten(){
    document.getElementById("welcome_info").innerHTML="Diving...";
    setTimeout(() => {
        window.location.href = window.location.href.replace("welcome", "login");
    }, 3000);
}
