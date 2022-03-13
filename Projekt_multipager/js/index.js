/**Funktion, um im gleichen Tab zu Profil zu navigieren */
function weiterleiten(){
    document.getElementById("index_info").innerHTML="Sie werden weitergeleitet... :)";
    /**Verzögerung bei Seitenwechsel */
    setTimeout(() => {
        window.location.href = window.location.href.replace("index", "profile");
    }, 500);
}