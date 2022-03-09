function to_homepage(){
    document.getElementById("profile_info").innerHTML="Sie werden weitergeleitet... :)";
    setTimeout(() => {
        window.location.href = window.location.href.replace("profile", "index");
    }, 3000);
}
function logout() {
    window.localStorage.removeItem("auth.user")
    //location.reload()
    document.getElementById("profile_info").innerHTML="Sie werden ausgeloggt...";
    setTimeout(() => {
        window.location.href = window.location.href.replace("profile", "login");
    }, 3000);
}