/**Funktion, um im gleichen Tab zu Login zu navigieren */
function to_login(){
  document.getElementById("registrieren_info").innerHTML="Sie werden weitergeleitet... :)";
  /**Verzögerung für Seitenwechsel */
  setTimeout(() => {
    window.location.href = window.location.href.replace("registrieren", "login");
  }, 3000);
}
/**Funktion für Errornachricht, die immer erscheint, wenn User was falsch oder gar nicht eingibt */
function setError(errorText){
  if (typeof errorText === "string"){
    document.getElementById("error_info").innerHTML = errorText;
  } else {
    document.getElementById("error_info").innerHTML = "Something is not correct!";
  }
}
/**Funktion für Erfoglsnachricht, die immer erscheint, wenn User erfolgreich eingeloggt wird etc */
function setSuccess(successText){
  if (typeof successText === "string"){
    document.getElementById("registrieren_info").innerHTML = successText;
  }else{
    document.getElementById("registrieren_info").innerHTML = "Login erfolgreich.";
  }
}
/**Zähler der Anz Klicks auf "Captcha-Bild ausklappen zählt" */
let zaehler=0;
/**blendet Captcha Bild ein oder aus */
function human(){
  if (zaehler%2==0){
    document.getElementById("Pop_Up_Human").style.display='block';
    zaehler++;
    document.getElementById("captcha_info").innerHTML ="Geben Sie den Text des Bildes oben links ein!";
  }
  else{
    document.getElementById("Pop_Up_Human").style.display='none';
    zaehler++;
    document.getElementById("captcha_info").innerHTML ="";
  }
}
/**Funktion, die den Login regelt und alles prüft */
function register(){
  /**Eingabe Benutzername */
  let username = document.getElementById("reg_inp_user").value;
  /**Eingabe Benutzername prüfen */
  if(! username.match("^[a-zA-Z\-_]+$")){
    setError("Der Benutzername darf nur aus Groß- und Kleinbuchstaben und einem '-' oder '_' bestehen.");
    return;
  }else if(username.length > 20){
    setError("Der Benutzername darf maximal 20 Zeichen lang sein.");
    return;
  }
  /**Eingabe Mail-Adresse */
  let usermail = document.getElementById("reg_inp_mail").value;
  /**prüfen, ob Eingabe vorhanden, oder ob Input-Feld leer */
  if(usermail == ""){
    setError("Bitte geben Sie Ihre Mail-Adresse ein!");
    return;
  }else if(! usermail.match(".*[@].*")){
    setError("Bitte geben Sie eine gültige (mit '@') Mail-Adresse ein!");
    return;
  }
  /**Eingabe Passwort */
  let password = document.getElementById("reg_inp_pswd").value;
  /**Eingabe Passwort prüfen */
  if(! password.match("^[a-zA-Z!#,+\-_?0-9]+$") || ! password.match(".*[0-9].*") || ! password.match(".*[!#,+\-_?].*")){
    setError("Das Passwort darf nur aus Groß- und Kleinbuchstaben, sowie mindestens einer Zahl und einem der folgenden Zeichen bestehen: '!#,+-_?'.");
    return;
  }else if(password.length < 8 || password.length > 20){
    setError("Das Passwort muss mindestens 8 und maximal 20 Zeichen lang sein.");
    return;
  }
  /**Eingabe Passwort wiederholen */
  let passwordcontrol = document.getElementById("reg_inp_rep_pswd").value;
  /**prüfen, ob Eingabe Passwort wiederholen identisch mit Passwort Eingabe */
  if(passwordcontrol == ""){
    setError("Bitte füllen Sie das 'Repeat Passwort'-Feld aus!");
    return;
  }else if(passwordcontrol != password){
    setError("Die Passwörter stimmen nicht überein, bitte prüfen Sie Ihre Eingaben!");
    return;
  }

  /**Eingabe Captcha Code */
  let human_input=document.getElementById("Registration_Input_Human").value;
  /**prüfen, ob Eingabe Captcha Code mit Captcha übereinstimmt */
  if(human_input == ""){
    setError("Bitte geben Sie den Captcha Code ein");
    return;
  }else if(human_input != "263S2V"){
    setError("Geben Sie den Captcha Code richtig ein!");
    return;
  }
  /**Daten existierender Nutzer einlesen */
  let existingUser = window.localStorage.getItem(`this.${username}`);
  /**prüfen, ob User schon vorhanden */
  if(existingUser !== null){
    setError("Der Benutzer existiert bereits, bitte ändern Sie ihren Benutzernamen!");
    return;
  }
  /**Standartfarbe der Homepage auf Schwarz setzen */
  let usercolor = "black";
  /**Nutzerdaten in String umwandeln */
  let jsonUser = JSON.stringify({
    username: username,
    password: password,
    mail: usermail,
    usercolor: usercolor
  })
  /**Nutzerdaten in LocalStorage laden */
  window.localStorage.setItem(`this.${username}`, jsonUser);
  setError("");
  setSuccess("Hallo " + username + " ,die Registrierung war erfolgreich, sie werden gleich weitergeleitet!");
  /**Verzögerung für Seitenwechsel */
  setTimeout(() => {
    window.location.href = window.location.href.replace("registrieren", "login");
  }, 5000)
}