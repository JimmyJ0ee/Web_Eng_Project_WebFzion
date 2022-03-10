/**Funktion, um im gleichen Tab zu Homepage zu navigieren */
function to_homepage(){
    document.getElementById("profile_info").innerHTML="Sie werden weitergeleitet... :)";
    /**Verzögerung für Seitenwechsel */
    setTimeout(() => {
        window.location.href = window.location.href.replace("profile", "index");
    }, 3000);
}
/**Funkton für Logout des aktuellen Users */
function logout(){
    //window.localStorage.removeItem("auth.user");
    document.getElementById("profile_info").innerHTML="Sie werden ausgeloggt...";
    /**Verzögerung beim Seitenwechsel */
    setTimeout(() => {
        window.location.href = window.location.href.replace("profile", "login");
    }, 3000);
}
/**Darstellung der beim Registrieren eingegebenen Daten des angemeldeten Users */
function nutzerdaten_profile(){
    /**aktuellen User einlesen */
    let user = JSON.parse(window.localStorage.getItem("auth.user"));
    document.getElementById("name").innerHTML = `Benutzername: ${user.username}`;
    document.getElementById("mail").innerHTML = `Mail: ${user.mail}`;
    document.getElementById("password").innerHTML = `Passwort: ${user.password}`;
}