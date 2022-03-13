/**Funktion, um im gleichen Tab zu Homepage zu navigieren */
function to_homepage(){
  document.getElementById("profile_info").innerHTML="You will be redireceted soon. :)";
  setTimeout(() => {
    window.location.href = window.location.href.replace("profile", "index");
  }, 500);
}
/**Funkton für Logout des aktuellen Users */
function logout(){
  document.getElementById("profile_info").innerHTML="Log out proceeding.";
  setTimeout(() => {
    window.location.href = window.location.href.replace("profile", "login");
  }, 500);
}
/**Darstellung der beim Registrieren eingegebenen Daten des angemeldeten Users */
function user_load(){
  /**aktuellen User einlesen */
  let user = JSON.parse(window.localStorage.getItem("auth.user"));
  /**Benutzername aktueller User */
  let username = user.username;
  /**Mail aktueller User */
  let mail = user.mail;
  /**Passwort aktueller User */
  let password = user.password;
  document.getElementById("name").placeholder = "USERNAME\t" + username;
  document.getElementById("mail").placeholder = "       E-MAIL\t" + mail;
  document.getElementById("password").placeholder = "PASSWORD\t" + password;
}
/**Funktion für Farbgestaltung der Homepage, dem User entsprechend */
function color_load(){
  /**aktuellen User einlesen */
  let user = JSON.parse(window.localStorage.getItem("auth.user"));
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
/**Farbe auf Grau stellen */
function set_color_gray(){
  /**aktuellen User einlesen */
  let user = JSON.parse(window.localStorage.getItem("auth.user"));
  r.style.setProperty('--black', '#6B6B6B');
  r.style.setProperty('--white', 'black');
  r.style.setProperty('--gray', '#6B6B6B');
  r.style.setProperty('--blue', '#74421E');
  r.style.setProperty('--Button_hover', '#74421E');
  user.usercolor="gray";
  /**Benutzername für Key setzen */
  let username = user.username;
  /**user zu String umformatieren */
  let jsonUser = JSON.stringify(user);
  window.localStorage.setItem("auth.user", jsonUser);
  window.localStorage.setItem(`this.${username}`, jsonUser);
}
/**Farbe auf Schwarz stellen */
function dark_mode(){
  /**aktuellen User einlesen */
  let user = JSON.parse(window.localStorage.getItem("auth.user"));
  r.style.setProperty('--black', 'black');
  r.style.setProperty('--white', 'white');
  r.style.setProperty('--gray', '#000');
  r.style.setProperty('--blue', '#0A676D');
  r.style.setProperty('--Button_hover', '#0A676D');
  user.usercolor="black";
  /**Benutzername für Key setzen */
  let username = user.username;
  /**user zu String umformatieren */
  let jsonUser = JSON.stringify(user);
  window.localStorage.setItem("auth.user", jsonUser);
  window.localStorage.setItem(`this.${username}`, jsonUser);
}
/**Farbe auf Weiß stellen */
function white_mode(){
  /**aktuellen User einlesen */
  let user = JSON.parse(window.localStorage.getItem("auth.user"));
  r.style.setProperty('--black', 'white');
  r.style.setProperty('--white', 'black');
  r.style.setProperty('--gray', '#fff');
  r.style.setProperty('--blue', '#74421E');
  r.style.setProperty('--Button_hover', '#74421E');
  user.usercolor="white";
  /**Benutzername für Key setzen */
  let username = user.username;
  /**user zu String umformatieren */
  let jsonUser = JSON.stringify(user);
  window.localStorage.setItem("auth.user", jsonUser);
  window.localStorage.setItem(`this.${username}`, jsonUser);
}
/**Farbe auf Rot stellen */
function warm_red(){
  /**aktuellen User einlesen */
  let user = JSON.parse(window.localStorage.getItem("auth.user"));
  r.style.setProperty('--black', '#513A3E');
  r.style.setProperty('--white', '#C4C4C4');
  r.style.setProperty('--gray', '#513A3E');
  r.style.setProperty('--blue', '#74421E');
  r.style.setProperty('--Button_hover', '#fff');
  user.usercolor="warm_red";
  /**Benutzername für Key setzen */
  let username = user.username;
  /**user zu String umformatieren */
  let jsonUser = JSON.stringify(user);
  window.localStorage.setItem("auth.user", jsonUser);
  window.localStorage.setItem(`this.${username}`, jsonUser);
}
/**Funktion für Errornachricht, die immer erscheint, wenn User was falsch oder gar nicht eingibt */
function change_info(info){
  document.getElementById("change_info").innerHTML = info;
}
/**Funktion, damit User seine Daten ändern kann */
function change(){
  /**Eingabe Benutzername */
  let username_change = document.getElementById("reg_inp_user").value;
  if(! username_change.match("^[a-zA-Z\-_]+$")){
    change_info("Only use letters and '_' and '-' for your username.");
    return;
  }else if(username_change.length > 20){
    change_info("The length of username is limited by 20.");
    return;
  }
  /**Eingabe Mail-Adresse */
  let usermail_change = document.getElementById("reg_inp_mail").value;
  if(usermail_change == ""){
    change_info("Fill in your E-Mail pls.");
    return;
  }else if(! usermail_change.match("^[A-Za-z0-9._-]+@+\.[A-Za-z0-9.-]+\.[a-z]{2,3}")){
    change_info("example: username@email.com an.\nnote: speccial signs could make problems.");
    return;
  }
  /**Eingabe Passwort */
  let password_change = document.getElementById("reg_inp_pswd").value;
  if(! password_change.match("^[a-zA-Z!#,+\-_?0-9]+$") || ! password_change.match(".*[0-9].*") || ! password_change.match(".*[!#,+\-_?].*")){
    change_info("Password has to only contain letters, at least on number and one special sign ('!#,+-_?'.");
    return;
  }else if(password_change.length < 8 || password_change.length > 20){
    change_info("The password must at least contain 8 letters.");
    return;
  }
  /**Eingabe Passwort wiederholen */
  let passwordcontrol = document.getElementById("reg_inp_rep_pswd").value;
  if(passwordcontrol == ""){
    change_info("Please fill up the input: Repeat Password.");
    return;
  }else if(passwordcontrol != password_change){
    change_info("The passwords don't match. Try again.");
    return;
  }
  /**Daten aktueller User einlesen */
  let currentuser = window.localStorage.getItem("auth.user");
  /**gibt aktuelle Farbe an geändertes Profil weiter */
  let color_change = currentuser.usercolor;
  /**Nutzerdaten in String umwandeln */
  let jsonUser = JSON.stringify({
    username: username_change,
    password: password_change,
    mail: usermail_change,
    usercolor: color_change
  })
  window.localStorage.setItem(`this.${username_change}`, jsonUser);
  change_info("");
  change_info("Hello " + username_change + "your change is succesful.");
  setTimeout(() => {
    window.location.href = window.location.href.replace("profile", "login");
  }, 500)
}