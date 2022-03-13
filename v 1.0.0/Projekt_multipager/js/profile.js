/**Funktion, um im gleichen Tab zu Homepage zu navigieren */
function to_homepage(){
    document.getElementById("profile_info").innerHTML="Sie werden weitergeleitet... :)";
    /**Verzögerung für Seitenwechsel */
    setTimeout(() => {
        window.location.href = window.location.href.replace("profile", "index");
    }, 500);
}
/**Funkton für Logout des aktuellen Users */
function logout(){
    //window.localStorage.removeItem("auth.user");
    document.getElementById("profile_info").innerHTML="Sie werden ausgeloggt...";
    /**Verzögerung beim Seitenwechsel */
    setTimeout(() => {
        window.location.href = window.location.href.replace("profile", "login");
    }, 500);
}
function user_load(){
    /**Darstellung der beim Registrieren eingegebenen Daten des angemeldeten Users */
    /**aktuellen User einlesen */
    let user = JSON.parse(window.localStorage.getItem("auth.user"));
    let username = user.username;
    let mail = user.mail;
    let password = user.password;
    document.getElementById("name").placeholder = "USERNAME\t" + username;
    document.getElementById("mail").placeholder = "       E-MAIL\t" + mail;
    document.getElementById("password").placeholder = "PASSWORD\t" + password;
}

    /**Funktion für Farbgestaltung der Homepage, dem User entsprechend */
function color_load(){
   
    /**aktuellen User einlesen */
    let user = JSON.parse(window.localStorage.getItem("auth.user"));
    /**prüfen, welche Farbe der User eingestellt hat */
    if(user.usercolor == "black"){
        r.style.setProperty('--black', 'black');
        r.style.setProperty('--white', 'white');
        r.style.setProperty('--gray', '#000');
        r.style.setProperty('--blue', '#0A676D');
        r.style.setProperty('--Button_hover', '#0A676D');
    }else if(user.usercolor=="white"){
        r.style.setProperty('--black', 'white');
        r.style.setProperty('--white', 'black');
        r.style.setProperty('--gray', '#fff');
        r.style.setProperty('--blue', '#74421E');
        r.style.setProperty('--Button_hover', '#74421E');
    }else if(user.usercolor=="gray"){
        r.style.setProperty('--black', '#6B6B6B');
        r.style.setProperty('--white', 'black');
        r.style.setProperty('--gray', '#6B6B6B');
        r.style.setProperty('--blue', '#74421E');
        r.style.setProperty('--Button_hover', '#74421E');
    }
    else if(user.usercolor=="warm_red"){
        r.style.setProperty('--black', '#513A3E');
        r.style.setProperty('--white', '#C4C4C4');
        r.style.setProperty('--gray', '#513A3E');
        r.style.setProperty('--blue', '#74421E');
        r.style.setProperty('--Button_hover', '#fff');
    }
}
var r = document.querySelector(':root');
/**Farbe Homepage auf Grau stellen */
function set_color_gray(){
    /**aktuellen User einlesen */
    let user = JSON.parse(window.localStorage.getItem("auth.user"));
    r.style.setProperty('--black', '#6B6B6B');
    r.style.setProperty('--white', 'black');
    r.style.setProperty('--gray', '#6B6B6B');
    r.style.setProperty('--blue', '#74421E');
    r.style.setProperty('--Button_hover', '#74421E');
    /**dem User die geänderte Farbe zuweisen */
    user.usercolor="gray";
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
    r.style.setProperty('--gray', '#000');
    r.style.setProperty('--blue', '#0A676D');
    r.style.setProperty('--Button_hover', '#0A676D');
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
    r.style.setProperty('--gray', '#fff');
    r.style.setProperty('--blue', '#74421E');
    r.style.setProperty('--Button_hover', '#74421E');
    /**dem User die geänderte Farbe zuweisen */
    user.usercolor="white";
    /**user zu String umformatieren */
    let username = user.username;
    let jsonUser = JSON.stringify(user);
    /**User speichern */
    window.localStorage.setItem("auth.user", jsonUser);
    window.localStorage.setItem(`this.${username}`, jsonUser);
}
function warm_red(){
    /**aktuellen User einlesen */
    let user = JSON.parse(window.localStorage.getItem("auth.user"));
    r.style.setProperty('--black', '#513A3E');
    r.style.setProperty('--white', '#C4C4C4');
    r.style.setProperty('--gray', '#513A3E');
    r.style.setProperty('--blue', '#74421E');
    r.style.setProperty('--Button_hover', '#fff');
    /**dem User die geänderte Farbe zuweisen */
    user.usercolor="warm_red";
    /**user zu String umformatieren */
    let username = user.username;
    let jsonUser = JSON.stringify(user);
    /**User speichern */
    window.localStorage.setItem("auth.user", jsonUser);
    window.localStorage.setItem(`this.${username}`, jsonUser);
}
/**Funktion für Errornachricht, die immer erscheint, wenn User was falsch oder gar nicht eingibt */
function change_info(info){
      document.getElementById("change_info").innerHTML = info;
}

function change(){
    /**Eingabe Benutzername */
  let username_change = document.getElementById("reg_inp_user").value;
  /**Eingabe Benutzername prüfen */
  if(! username_change.match("^[a-zA-Z\-_]+$")){
    change_info("Der Benutzername darf nur aus Groß- und Kleinbuchstaben und einem '-' oder '_' bestehen.");
    return;
  }else if(username_change.length > 20){
    change_info("Der Benutzername darf maximal 20 Zeichen lang sein.");
    return;
  }
  /**Eingabe Mail-Adresse */
  let usermail_change = document.getElementById("reg_inp_mail").value;
  /*prüfen, ob Eingabe vorhanden, oder ob Input-Feld leer*/
  if(usermail_change == ""){
    change_info("Bitte geben Sie Ihre Mail-Adresse ein!");
    return;
  }else if(! usermail_change.match("^[A-Za-z0-9._-]+@+\.[A-Za-z0-9.-]+\.[a-z]{2,3}")){
    change_info("Bitte geben Sie eine Adresse nach dem Beispiel: username@email.com an.\nBemerkung: Sonderzeichen könnten zu Problemen führen!");
    return;
  }
  /**Eingabe Passwort */
  let password_change = document.getElementById("reg_inp_pswd").value;
  /**Eingabe Passwort prüfen */
  if(! password_change.match("^[a-zA-Z!#,+\-_?0-9]+$") || ! password_change.match(".*[0-9].*") || ! password_change.match(".*[!#,+\-_?].*")){
    change_info("Das Passwort darf nur aus Groß- und Kleinbuchstaben, sowie mindestens einer Zahl und einem der folgenden Zeichen bestehen: '!#,+-_?'.");
    return;
  }else if(password_change.length < 8 || password_change.length > 20){
    change_info("Das Passwort muss mindestens 8 und maximal 20 Zeichen lang sein.");
    return;
  }
  /**Eingabe Passwort wiederholen */
  let passwordcontrol = document.getElementById("reg_inp_rep_pswd").value;
  /**prüfen, ob Eingabe Passwort wiederholen identisch mit Passwort Eingabe */
  if(passwordcontrol == ""){
    change_info("Bitte füllen Sie das 'Repeat Passwort'-Feld aus!");
    return;
  }else if(passwordcontrol != password_change){
    change_info("Die Passwörter stimmen nicht überein, bitte prüfen Sie Ihre Eingaben!");
    return;
  }
  
  /**Daten existierender Nutzer einlesen */
  let existingUser = window.localStorage.getItem(`this.${username_change}`);
  let currentuser = window.localStorage.getItem("auth.user");
  /**prüfen, ob User schon vorhanden */
  if(existingUser !== null && existingUser === currentuser){
    change_info("Der Benutzer existiert bereits, bitte ändern Sie ihren Benutzernamen!");
    return;
  }
  let color_change = currentuser.usercolor;

  /**Nutzerdaten in String umwandeln */
  let jsonUser = JSON.stringify({
    username: username_change,
    password: password_change,
    mail: usermail_change,
    usercolor: color_change
  })
  /**Nutzerdaten in LocalStorage laden */
  window.localStorage.setItem(`this.${username_change}`, jsonUser);
  change_info("");
  change_info("Hallo " + username_change + " ,die Änderung war erfolgreich.");
  /**Verzögerung für Seitenwechsel */
  setTimeout(() => {
    window.location.href = window.location.href.replace("profile", "login");
  }, 500)

}

