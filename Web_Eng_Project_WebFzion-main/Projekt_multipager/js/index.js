function weiterleiten(){
    document.getElementById("index_info").innerHTML="Sie werden weitergeleitet... :)";
    setTimeout(() => {
        window.location.href = window.location.href.replace("index", "profile");
    }, 3000);
}
var r = document.querySelector(':root');
function set_color_green(){
    r.style.setProperty('--black', 'lightgreen');
    r.style.setProperty('--white', 'black');
}
function dark_mode(){
    r.style.setProperty('--black', 'black');
    r.style.setProperty('--white', 'white');
}
function white_mode(){
    r.style.setProperty('--black', 'white');
    r.style.setProperty('--white', 'black');
}
