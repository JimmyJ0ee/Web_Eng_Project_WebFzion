/**Funktion, um im gleichen Tab zu Profil zu navigieren */
function weiterleiten(){
    document.getElementById("index_info").innerHTML="Sie werden weitergeleitet... :)";
    /**Verzögerung bei Seitenwechsel */
    setTimeout(() => {
        window.location.href = window.location.href.replace("index", "profile");
    }, 3000);
}
var r = document.querySelector(':root');
/**Farbe Homepage auf Grün stellen */
function set_color_green(){
    /**aktuellen User einlesen */
    let user = JSON.parse(window.localStorage.getItem("auth.user"));
    r.style.setProperty('--black', 'lightgreen');
    r.style.setProperty('--white', 'black');
    /**dem User die geänderte Farbe zuweisen */
    user.usercolor="green";
    /**user zu String umformatieren */
    let username = user.username;
    let jsonUser = JSON.stringify(user);
    /**User speichern */
    window.localStorage.setItem("auth.user", jsonUser);
    window.localStorage.setItem(`this.${username}`, jsonUser);
}
/**Farbe Homepage auf Schwarz stellen */
function dark_mode(){
    /**aktuellen User einlesen */
    let user = JSON.parse(window.localStorage.getItem("auth.user"));
    r.style.setProperty('--black', 'black');
    r.style.setProperty('--white', 'white');
    /**dem User die geänderte Farbe zuweisen */
    user.usercolor="black";
    /**user zu String umformatieren */
    let username = user.username;
    let jsonUser = JSON.stringify(user);
    /**User speichern */
    window.localStorage.setItem("auth.user", jsonUser);
    window.localStorage.setItem(`this.${username}`, jsonUser);
}
/**Farbe Homepage auf Weiß stellen */
function white_mode(){
    /**aktuellen User einlesen */
    let user = JSON.parse(window.localStorage.getItem("auth.user"));
    r.style.setProperty('--black', 'white');
    r.style.setProperty('--white', 'black');
    /**dem User die geänderte Farbe zuweisen */
    user.usercolor="white";
    /**user zu String umformatieren */
    let username = user.username;
    let jsonUser = JSON.stringify(user);
    /**User speichern */
    window.localStorage.setItem("auth.user", jsonUser);
    window.localStorage.setItem(`this.${username}`, jsonUser);
}
/**Funktion für Farbgestaltung der Homepage, dem User entsprechend */
function set_color(){
    /**aktuellen User einlesen */
    let user = JSON.parse(window.localStorage.getItem("auth.user"));
    /**prüfen, welche Farbe der User eingestellt hat */
    if(user.usercolor == "black"){
        r.style.setProperty('--black', 'black');
        r.style.setProperty('--white', 'white');
    }else if(user.usercolor=="white"){
        r.style.setProperty('--black', 'white');
        r.style.setProperty('--white', 'black');
    }else if(user.usercolor=="green"){
        r.style.setProperty('--black', 'lightgreen');
        r.style.setProperty('--white', 'black');
    }
}