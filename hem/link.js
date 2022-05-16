let pathName = window.location.pathname;
document.getElementById("link").innerHTML = pathName;
if (pathName == '/1/') {
    // RINI
    document.getElementById("wa").innerHTML = `<a href="https://api.whatsapp.com/send?phone=6285857458292&text=Halo%20Kak%20Rini%2C%20saya%20dapat%20iklan%20dari%20website%2C%20mau%20tanya%20harga%20terbaru%20Yamaha%20Gear%20(https://gear125.yamahabismamandiri.com/1/)" class="pulse" id="wa"><i class="fa-brands fa-whatsapp"></i> <br> WA CS DISINI</a>`;
} else if (pathName == '/2/') {
    document.getElementById("wa").innerHTML = "Diah"
    // DIAH
    // document.getElementById("wa").innerHTML = `<a href="https://api.whatsapp.com/send?phone=628999309098&text=Halo%20Kak%20Diah%2C%20saya%20dapat%20iklan%20dari%20website%2C%20mau%20tanya%20harga%20terbaru%20Yamaha%20Gear%20(https://gear125.yamahabismamandiri.com/2/)" class="pulse" id="wa"><i class="fa-brands fa-whatsapp"></i> <br> WA CS DISINI</a>`;
} else if (pathName == '/3/') {
    // BAYU
    document.getElementById("wa").innerHTML = `<a href="https://api.whatsapp.com/send?phone=6285739531894&text=Halo%20Kak%20Bayu%2C%20saya%20dapat%20iklan%20dari%20website%2C%20mau%20tanya%20harga%20terbaru%20Yamaha%20Gear%20(https://gear125.yamahabismamandiri.com/3/)" class="pulse" id="wa"><i class="fa-brands fa-whatsapp"></i> <br> WA CS DISINI</a>`;
} else if (pathName == '/4/') {
    // DELLA
    document.getElementById("wa").innerHTML = `<a href="https://api.whatsapp.com/send?phone=6285646834734&text=Halo%20Kak%20Della%2C%20saya%20dapat%20iklan%20dari%20website%2C%20mau%20tanya%20harga%20terbaru%20Yamaha%20Gear%20(https://gear125.yamahabismamandiri.com/4/)" class="pulse" id="wa"><i class="fa-brands fa-whatsapp"></i> <br> WA CS DISINI</a>`;
} else if (pathName == '/5/') {
    // YOGI
    document.getElementById("wa").innerHTML = `<a href="https://api.whatsapp.com/send?phone=6281558933592&text=Halo%20Kak%20Yogi%2C%20saya%20dapat%20iklan%20dari%20website%2C%20mau%20tanya%20harga%20terbaru%20Yamaha%20Gear%20(https://gear125.yamahabismamandiri.com/5/)" class="pulse" id="wa"><i class="fa-brands fa-whatsapp"></i> <br> WA CS DISINI</a>`;
} else if (pathName == '/6/') {
    // HANIF
    document.getElementById("wa").href = "https://api.whatsapp.com/send?phone=6287861186070&text=Halo%20Kak%20Hanif%2C%20saya%20dapat%20iklan%20dari%20website%2C%20mau%20tanya%20harga%20terbaru%20Yamaha%20Gear%20(https://gear125.yamahabismamandiri.com/6/)";
} else if (pathName == '/7/') {
    // HELMY
    document.getElementById("wa").href = "https://api.whatsapp.com/send?phone=6281946306260&text=Halo%20Kak%20Helmy%2C%20saya%20dapat%20iklan%20dari%20website%2C%20mau%20tanya%20harga%20terbaru%20Yamaha%20Gear%20(https://gear125.yamahabismamandiri.com/7/)";
} else if (pathName == '/8/') {
    // AGUS
    document.getElementById("wa").href = "https://api.whatsapp.com/send?phone=62895630475382&text=Halo%20Kak%20Agus%2C%20saya%20dapat%20iklan%20dari%20website%2C%20mau%20tanya%20harga%20terbaru%20Yamaha%20Gear%20(https://gear125.yamahabismamandiri.com/8/)";
} else if (pathName == '/9/') {
    // DEWANGSA
    document.getElementById("wa").href = "https://api.whatsapp.com/send?phone=6281339510973&text=Halo%20Kak%20Dewangsa%2C%20saya%20dapat%20iklan%20dari%20website%2C%20mau%20tanya%20harga%20terbaru%20Yamaha%20Gear%20(https://gear125.yamahabismamandiri.com/9/)";
} else if (pathName == '/10/') {
    // WAHYU
    document.getElementById("wa").href = "https://api.whatsapp.com/send?phone=6281805967888&text=Halo%20Kak%20Wahyu%2C%20saya%20dapat%20iklan%20dari%20website%2C%20mau%20tanya%20harga%20terbaru%20Yamaha%20Gear%20(https://gear125.yamahabismamandiri.com/10/)";
} else(
    document.getElementById("wa").href = "https://yamahabismamandiri.com/our-sales"
)