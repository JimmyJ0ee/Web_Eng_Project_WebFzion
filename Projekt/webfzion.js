function layer_switch_welcome(){
    var x = document.getElementById("Welcome");
    x.style.display = "none";
    var x = document.getElementById("Profile");
    x.style.display = "none";
}
function layer_switch_login(){
  var x = document.getElementById("Login");
  x.style.display = "none";
  document.getElementById("Pop_Up_Human").style.display='none';
}
function layer_switch_registration(){
  let human_input=document.getElementById("Registration_Input_Human").value;
  console.log(human_input)
  if (human_input==='263S2V'){
    var x = document.getElementById("Registration");
    x.style.display = "none";
  }
  else{
    alert("Geben Sie das Captcha richtig ein!")
  }
}
function open_profile(){
  document.getElementById("Profile").style.display = 'inherit';
}
function layer_switch_homepage(){
  document.getElementById("Profile").style.display = "none";
}
let zaehler =0;
function human(){
  if (zaehler%2==0){
    document.getElementById("Pop_Up_Human").style.display='block';
    zaehler++;
    alert("Geben Sie den Text des Bildes oben links ein!")
  }
  else{
    document.getElementById("Pop_Up_Human").style.display='none';
    zaehler++;
  }
}