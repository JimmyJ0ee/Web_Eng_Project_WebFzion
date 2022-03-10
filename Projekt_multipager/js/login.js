/**Funktion, um im gleichen Tab zu Registrieren zu navigieren */
function to_register(){
  document.getElementById("login_info").innerHTML="Sie werden weitergeleitet... :)";
  /**Verzögerung für Seitenwechsel */
  setTimeout(() => {
    window.location.href = window.location.href.replace("login", "registrieren");
  }, 3000);
}
/**Funktion für Errornachricht, die immer erscheint, wenn User was falsch oder gar nicht eingibt */
function setError(errorText){
  if(typeof errorText === "string"){
    document.getElementById("error_info").innerHTML = errorText;
  }else{
    document.getElementById("error_info").innerHTML = "Something is not correct!";
  }
}
/**Funktion für Erfoglsnachricht, die immer erscheint, wenn User erfolgreich eingeloggt wird etc */
function setSuccess(successText){
  if(typeof successText === "string"){
    document.getElementById("login_info").innerHTML = successText;
  }else{
    document.getElementById("login_info").innerHTML = "Login erfolgreich.";
  }
}
/**Funktion, die den Login regelt und alles prüft */
function login(){
  let currentuser = window.localStorage.getItem("auth.user");
  /**prüft, ob user bereits angemeldet ist */
  if(currentuser == null){
    setError("Der auth.user ist null");
    /**Verzögerung für Seitenwechsel */
    /*setTimeout(() => {
      window.location.href = window.location.href.replace("login", "index");
    }, 1000);*/
    //return;
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
      setError("");
      window.localStorage.setItem("auth.user", savedUserString);
      setSuccess("Sie sind erfolgreich eingeloggt und werden gleich weitergeleitet!");
      setTimeout(() => {
        window.location.href = window.location.href.replace("login", "index");
      }, 3000);
    } else {
      /**Login fehlgeschlagen */
      setError("Das Passwort ist nicht korrekt!");
    }
  } catch (er) {
    setError("Der Benutzer konnte nicht gefunden werden.");
  }
}