let pathName = document.getElementById("link").innerHTML = "link : " +window.location.pathname;
if (pathName == '/1/') {
    document.getElementById("path").innerHTML = "Rini";
} else {
    document.getElementById("path").innerHTML = "Error";
}