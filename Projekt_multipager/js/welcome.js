/**Funktion, um im gleichen Tab zu Login zu navigieren */
function weiterleiten(){
    window.localStorage.setItem("auth.user", null);
    document.getElementById("welcome_info").innerHTML="Diving...";
    setTimeout(() => {
        window.location.href = window.location.href.replace("welcome", "login");
    }, 500);
}