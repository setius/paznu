document.getElementById("loginButton").addEventListener("click", onLoginClick);
document.getElementById("registerButton").addEventListener("click", onRegisterClick);

function onLoginClick() {
  window.location.replace("mainPage.html");
}

function onRegisterClick() {
  window.location.replace("registerPage.html");
}