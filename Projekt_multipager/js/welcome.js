/**Funktion, um im gleichen Tab zu Login zu navigieren */
function weiterleiten(){
    window.localStorage.setItem("auth.user", null);
    document.getElementById("welcome_info").innerHTML="Diving...";
    /**Sound, der gespielt wird */
    var sound = new Audio("mp3/slow_trap.mp3");
    sound.loop = true;
    setTimeout(() => {
        sound.play();
        window.open("login.html");
    }, 500);
}