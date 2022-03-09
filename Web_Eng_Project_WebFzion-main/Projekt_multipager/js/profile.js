function weiterleiten(){
    document.getElementById("profile_info").innerHTML="Sie werden weitergeleitet... :)";
    setTimeout(() => {
        window.location.href = window.location.href.replace("profile", "index");
    }, 3000);
}