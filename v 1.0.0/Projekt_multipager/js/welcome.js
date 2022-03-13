/**Funktion, um im gleichen Tab zu Login zu navigieren */
function weiterleiten(){
    window.localStorage.setItem("auth.user", null);
    console.log(window.localStorage.getItem("auth.user"));
    document.getElementById("welcome_info").innerHTML="Diving...";
    /**Verzögerung für Seitenwechsel */
    setTimeout(() => {
        window.location.href = window.location.href.replace("welcome", "login");
    }, 500);
}
