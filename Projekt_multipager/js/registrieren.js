/**Funktion, um im gleichen Tab zu Login zu navigieren */
function to_login(){
  document.getElementById("registrieren_info").innerHTML="Sie werden weitergeleitet... :)";
  /**Verzögerung für Seitenwechsel */
  setTimeout(() => {
    window.location.href = window.location.href.replace("registrieren", "login");
  }, 500);
}
/**Funktion für Errornachricht, die immer erscheint, wenn User was falsch oder gar nicht eingibt */
function Error_werfen(Error_Nachricht){
  if (typeof Error_Nachricht === "string"){
    document.getElementById("error_info").innerHTML = Error_Nachricht;
  } else {
    document.getElementById("error_info").innerHTML = "Something is not correct!";
  }
}
/**Funktion für Erfoglsnachricht, die immer erscheint, wenn User erfolgreich eingeloggt wird etc */
function Feedback_Erfolg(Erfolgsnachricht){
  if (typeof Erfolgsnachricht === "string"){
    document.getElementById("registrieren_info").innerHTML = Erfolgsnachricht;
  }else{
    document.getElementById("registrieren_info").innerHTML = "Login erfolgreich.";
  }
}
/**Zufällige Auswahl des Captcha-Codes*/
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
/**Setzt eine Zufallszahl für Captcha */
let random_number=getRandomInt(5);
/**wählt zufällig das Bild für den Captcha Code aus  */
let random_input;
/**Gibt dem Nutzer die Info, welches Bild für den Code benutzt werden soll. */
let captcha_info;
if (random_number==0){
  
  random_input="263S2V";
  captcha_info="Geben Sie den Text des Bildes oben links ein!";
}
else if(random_number==1){
  random_input="AAXUE";
  captcha_info="Geben Sie den Text des Bildes oben rechts ein!";
}
else if(random_number==2){
  random_input="RUNAJIX";
  captcha_info="Geben Sie den Text des Bildes mittig links ein!";
}
else if(random_number==3){
  random_input="JIC22U";
  captcha_info="Geben Sie den Text des Bildes mittig rechts ein!";
}
else if(random_number==4){
  random_input="mwxe2";
  captcha_info="Geben Sie den Text des Bildes unten links ein!";
}
else if(random_number==5){
  random_input="Eps10 vecTor";
  captcha_info="Geben Sie den Text des Bildes unten rechts ein!";
}
/**Zähler der Anz Klicks auf "Captcha-Bild ausklappen zählt" */
let zaehler=0;
/**blendet Captcha Bild ein oder aus */
function human(){
  if (zaehler%2==0){
    document.getElementById("Pop_Up_Human").style.display='block';
    zaehler++;
    document.getElementById("captcha_info").innerHTML =captcha_info;
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
    Error_werfen("Der Benutzername darf nur aus Groß- und Kleinbuchstaben und einem '-' oder '_' bestehen.");
    return;
  }else if(username.length > 20){
    Error_werfen("Der Benutzername darf maximal 20 Zeichen lang sein.");
    return;
  }
  /**Eingabe Mail-Adresse */
  let usermail = document.getElementById("reg_inp_mail").value;
  /*prüfen, ob Eingabe vorhanden, oder ob Input-Feld leer*/
  if(usermail == ""){
    Error_werfen("Bitte geben Sie Ihre Mail-Adresse ein!");
    return;
  }else if(! usermail.match("^[A-Za-z0-9._-]+@+\.[A-Za-z0-9.-]+\.[a-z]{2,3}")){
    Error_werfen("Bitte geben Sie eine Adresse nach dem Beispiel: username@email.com an.\nBemerkung: Sonderzeichen könnten zu Problemen führen!");
    return;
  }
  /**Eingabe Passwort */
  let password = document.getElementById("reg_inp_pswd").value;
  /**Eingabe Passwort prüfen */
  if(! password.match("^[a-zA-Z!#,+\-_?0-9]+$") || ! password.match(".*[0-9].*") || ! password.match(".*[!#,+\-_?].*")){
    Error_werfen("Das Passwort darf nur aus Groß- und Kleinbuchstaben, sowie mindestens einer Zahl und einem der folgenden Zeichen bestehen: '!#,+-_?'.");
    return;
  }else if(password.length < 8 || password.length > 20){
    Error_werfen("Das Passwort muss mindestens 8 und maximal 20 Zeichen lang sein.");
    return;
  }
  /**Eingabe Passwort wiederholen */
  let passwordcontrol = document.getElementById("reg_inp_rep_pswd").value;
  /**prüfen, ob Eingabe Passwort wiederholen identisch mit Passwort Eingabe */
  if(passwordcontrol == ""){
    Error_werfen("Bitte füllen Sie das 'Repeat Passwort'-Feld aus!");
    return;
  }else if(passwordcontrol != password){
    Error_werfen("Die Passwörter stimmen nicht überein, bitte prüfen Sie Ihre Eingaben!");
    return;
  }
  
  /**Eingabe Captcha Code */
  let human_input=document.getElementById("Registration_Input_Human").value;
  /**prüfen, ob Eingabe Captcha Code mit Captcha übereinstimmt */
  if(human_input == ""){
    Error_werfen("Bitte geben Sie den Captcha Code ein");
    return;
  }else if(human_input != random_input){
    Error_werfen("Geben Sie den Captcha Code richtig ein!");
    return;
  }
  /**Daten existierender Nutzer einlesen */
  let existingUser = window.localStorage.getItem(`this.${username}`);
  /**prüfen, ob User schon vorhanden */
  if(existingUser !== null){
    Error_werfen("Der Benutzer existiert bereits, bitte ändern Sie ihren Benutzernamen!");
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
  console.log(jsonUser)
  Error_werfen("");
  Feedback_Erfolg("Hallo " + username + " ,die Registrierung war erfolgreich, sie werden gleich weitergeleitet!");
  /**Verzögerung für Seitenwechsel */
  setTimeout(() => {
    window.location.href = window.location.href.replace("registrieren", "login");
  }, 500)
}