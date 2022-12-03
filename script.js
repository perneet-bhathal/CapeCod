/*---------- Loading Screen ----------*/

document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector(".LoadingScreen").style.visibility = "visible";
  } else {
    setTimeout(hideLoader, 2000);
  }
};

function hideLoader(){
  document.querySelector(".LoadingScreen").style.display = "none";
  document.querySelector("body").style.visibility = "visible";
}