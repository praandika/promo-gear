let pathName = document.getElementById("link").innerHTML = "link : " +window.location.pathname;
if (pathName == '/1/') {
    document.getElementsByClassName("path").innerHTML = "Rini";
} else {
    document.getElementsByClassName("path").innerHTML = "Error";
}