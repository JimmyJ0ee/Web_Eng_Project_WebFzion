/*function weiterleiten(){
    document.getElementById("login_info").innerHTML="Sie werden weitergeleitet... :)";
    setTimeout(() => {
        window.location.href = window.location.href.replace("login", "registrieren");
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
      document.getElementById("login_info").innerHTML = successText;
    } else {
      document.getElementById("login_info").innerHTML = "Login erfolgreich.";
    }
  }
  
  function login() {
    if (window.localStorage.getItem("auth.user") !== null) {
      setError("Sie sind bereits angemeldet!");
      setTimeout(() => {
        window.location.href = window.location.href.replace("login", "index");
      }, 1000);
      return;
    }
    // Check user info
    let username = document.getElementById("USERNAME").value;
    let password = document.getElementById("PASSWORD").value;
    
    let savedUserString = window.localStorage.getItem(`this.${username}`);
    try {
      let savedUserObject = JSON.parse(savedUserString)
  
      if (savedUserObject.password === password) {
        // Login successfull
        setError("");
        window.localStorage.setItem("auth.user", savedUserString);
        setSuccess("Sie sind erfolgreich eingeloggt und werden gleich weitergeleitet!");
        setTimeout(() => {
          window.location.href = window.location.href.replace("login", "index");
        }, 3000);
      } else {
        // Login false
        setError("Das Passwort ist nicht korrekt!")
        console.log(savedUserObject.password)
      }
    } catch (er) {
      setError("Der Benutzer konnte nicht gefunden werden.")
    }
  }