/**Funktion, um im gleichen Tab zu Login zu navigieren */
function to_login(){
  document.getElementById("registrieren_info").innerHTML="You will be redireceted soon. :)";
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
    document.getElementById("registrieren_info").innerHTML = "Login succesful.";
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
  captcha_info="picture: top-left";
}
else if(random_number==1){
  random_input="AAXUE";
  captcha_info="picture: top-right";
}
else if(random_number==2){
  random_input="RUNAJIX";
  captcha_info="picture: mid-left";
}
else if(random_number==3){
  random_input="JIC22U";
  captcha_info="picture: mid-right";
}
else if(random_number==4){
  random_input="mwxe2";
  captcha_info="picture: bottom-left";
}
else if(random_number==5){
  random_input="Eps10 vecTor";
  captcha_info="picture: bottom-right";
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
    Error_werfen("Only use letters and '_' and '-' for your username.");
    return;
  }else if(username.length > 20){
    Error_werfen("The length of username is limited by 20.");
    return;
  }
  /**Eingabe Mail-Adresse */
  let usermail = document.getElementById("reg_inp_mail").value;
  /*prüfen, ob Eingabe vorhanden, oder ob Input-Feld leer*/
  if(usermail == ""){
    Error_werfen("Fill in your E-Mail pls.");
    return;
  }else if(! usermail.match("^[A-Za-z0-9._-]+@+\.[A-Za-z0-9.-]+\.[a-z]{2,3}")){
    Error_werfen("example: username@email.com an.\nnote: speccial signs could make problems.");
    return;
  }
  /**Eingabe Passwort */
  let password = document.getElementById("reg_inp_pswd").value;
  /**Eingabe Passwort prüfen */
  if(! password.match("^[a-zA-Z!#,+\-_?0-9]+$") || ! password.match(".*[0-9].*") || ! password.match(".*[!#,+\-_?].*")){
    Error_werfen("Password has to only contain letters, at least on number and one special sign ('!#,+-_?'.");
    return;
  }else if(password.length < 8 || password.length > 20){
    Error_werfen("The password must at least contain 8 letters.");
    return;
  }
  /**Eingabe Passwort wiederholen */
  let passwordcontrol = document.getElementById("reg_inp_rep_pswd").value;
  /**prüfen, ob Eingabe Passwort wiederholen identisch mit Passwort Eingabe */
  if(passwordcontrol == ""){
    Error_werfen("Please fill up the input: Repeat Password.");
    return;
  }else if(passwordcontrol != password){
    Error_werfen("The passwords don't match. Try again.");
    return;
  }
  /**Eingabe Captcha Code */
  let human_input=document.getElementById("Registration_Input_Human").value;
  /**prüfen, ob Eingabe Captcha Code mit Captcha übereinstimmt */
  if(human_input == ""){
    Error_werfen("Please put in the Captcha-Code.");
    return;
  }else if(human_input != random_input){
    Error_werfen("Please put in the correct Captcha-Code.");
    return;
  }
  /**Daten existierender Nutzer einlesen */
  let existingUser = window.localStorage.getItem(`this.${username}`);
  /**prüfen, ob User schon vorhanden */
  if(existingUser !== null){
    Error_werfen("Username exists already. Please change the username.");
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
  Feedback_Erfolg("Hello " + username + " ,the registration is succesful.");
  /**Verzögerung für Seitenwechsel */
  setTimeout(() => {
    window.location.href = window.location.href.replace("registrieren", "login");
  }, 500)
}