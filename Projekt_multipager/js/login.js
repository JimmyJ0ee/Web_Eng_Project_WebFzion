/**Funktion, um im gleichen Tab zu Registrieren zu navigieren */
function to_register(){
  document.getElementById("login_info").innerHTML="You will be redireceted soon. :)";
  /**Verzögerung für Seitenwechsel */
  setTimeout(() => {
    window.location.href = window.location.href.replace("login", "registrieren");
  }, 500);
}
/**Funktion für Errornachricht, die immer erscheint, wenn User was falsch oder gar nicht eingibt */
function Error_werfen(Error_Nachricht){
  if(typeof Error_Nachricht === "string"){
    document.getElementById("error_info").innerHTML = Error_Nachricht;
  }else{
    document.getElementById("error_info").innerHTML = "Something is not correct!";
  }
}
/**Funktion für Erfoglsnachricht, die immer erscheint, wenn User erfolgreich eingeloggt wird etc */
function Feedback_Erfolg(Erfolgsnachricht){
  if(typeof Erfolgsnachricht === "string"){
    document.getElementById("login_info").innerHTML = Erfolgsnachricht;
  }else{
    document.getElementById("login_info").innerHTML = "Login succesful.";
  }
}
/**Funktion, die den Login regelt und alles prüft */
function login(){
  let currentuser = window.localStorage.getItem("auth.user");
  /**prüft, ob user bereits angemeldet ist */
  if(currentuser == null){
    Error_werfen("auth.user is null.");
  }
  /**eingegebener Benutzername */
  let username = document.getElementById("username").value;
  /**eingegebenes Passwort */
  let password = document.getElementById("password").value;
  /**gespeicherte Nutzer (als String) */
  let savedUserString = window.localStorage.getItem(`this.${username}`);
  /**prüfen, ob Eingaben von User mit gespeicherten Usern übereinstimmen */
  try {
    /**gespeicherten User in Objekt um parsen */
    let savedUserObject = JSON.parse(savedUserString);
    /**Passwortvergleich */
    if(savedUserObject.password === password){
      /**erfolgreicher Login */
      Error_werfen("");
      window.localStorage.setItem("auth.user", savedUserString);
      Feedback_Erfolg("Your login is succesful. :)");
      setTimeout(() => {
        window.location.href = window.location.href.replace("login", "index");
      }, 500);
    } else {
      /**Login fehlgeschlagen */
      Error_werfen("Pasword is not correct.");
    }
  } catch (er) {
    Error_werfen("The user is not available.");
  }
}