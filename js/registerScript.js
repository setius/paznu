document.getElementById("loginButton").addEventListener("click", onLoginClick);

function onLoginClick() {
  document.getElementById("loginButton").style.backgroundColor = "yellow";
  window.location.replace("mainPage.html");
}