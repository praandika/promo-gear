let pathName = window.location.pathname;
document.getElementById("link").innerHTML = pathName;
if (pathName == '/1') {
    document.getElementById("path").innerHTML = "Rini";
} else {
    document.getElementById("path").innerHTML = "Error";
}