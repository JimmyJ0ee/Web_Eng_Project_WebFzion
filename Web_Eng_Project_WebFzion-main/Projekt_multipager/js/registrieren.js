/*function weiterleiten(){
    document.getElementById("registrieren_info").innerHTML="Sie werden weitergeleitet... :)";
    setTimeout(() => {
        window.location.href = window.location.href.replace("registrieren", "index");
    }, 3000);
}*/
function setError(errorText) {
    if (typeof errorText === "string") {
      document.getElementById("error_info").innerHTML = errorText;
    } else {
      document.getElementById("error_info").innerHTML = "Something is not correct!";
    }
  }
  function setSuccess(successText) {
    if (typeof successText === "string") {
      document.getElementById("registrieren_info").innerHTML = successText;
    } else {
      document.getElementById("registrieren_info").innerHTML = "Login erfolgreich.";
    }
  }
function register() {
    //Nutzerinfo überprüfen
    let username = document.getElementById("reg_inp_user").value;
    if (! username.match("^[a-zA-Z\-_]+$")) {
      setError("Der Benutzername darf nur aus Groß- und Kleinbuchstaben und einem '-' oder '_' bestehen.");
      return;
    } else if (username.length > 20) {
      setError("Der Benutzername darf maximal 20 Zeichen lang sein.");
      return;
    }
    let password = document.getElementById("reg_inp_pswd").value;
    if (! password.match("^[a-zA-Z!#,+\-_?0-9]+$") || ! password.match(".*[0-9].*") || ! password.match(".*[!#,+\-_?].*")) {
      setError("Das Passwort darf nur aus Groß- und Kleinbuchstaben, sowie mindestens einer Zahl und einem der folgenden Zeichen bestehen: '!#,+-_?'.");
      return;
    } else if (password.length < 8 || password.length > 20) {
      setError("Das Passwort muss mindestens 8 und maximal 20 Zeichen lang sein.");
      return;
    }
    //geschlecht prüfen, hier dann evtl. Farbwahl (noch in Registrieren implementieren)
    /*let gender = "";
    let gendertxt="";
    let isMale = document.getElementById("Maennlich").checked;
    let isFemale = document.getElementById("Weiblich").checked;
    if (isMale && !isFemale) {
      gender = "Männlich";
      gendertxt = "Herr";
    } else if (!isMale && isFemale) {
      gender = "Weiblich";
      gendertxt = "Frau";
    } else {
      setError("Bitte wählen sie genau EIN geschlecht aus!");
      return;
    }*/
    //Captcha Code prüfen
    let human_input=document.getElementById("Registration_Input_Human").value;
    if (! human_input==='263S2V'){
        setError("Geben Sie das Captcha richtig ein!")
    }
    //prüfen, ob Nutzer schon vorhanden
    let existingUser = window.localStorage.getItem(`this.${username}`);
    if (existingUser !== null) {
      setError("Der Benutzer existiert bereits, bitte ändern Sie ihren Benutzernamen!");
      return;
    }
    let jsonUser = JSON.stringify({
      username: username,
      password: password
    })
    window.localStorage.setItem(`this.${username}`, jsonUser)
    console.log(jsonUser);
    setError("");
    setSuccess("Hallo " + username + " ,die Registrierung war erfolgreich, sie werden gleich weitergeleitet!");
    setTimeout(() => {
      window.location.href = window.location.href.replace("registrieren", "login");
    }, 5000)
  }