const pocetna = document.getElementById("pocetna");
const onama = document.getElementById("onamaPart");
const konta = document.getElementById("contact");
const homeOnama = document.getElementById("homeOnama");
const kontaBtn = document.getElementById("kontaktiraj");

var bck = document.getElementById("home");
var whyUs = document.getElementById("why-us");
var usluge = document.getElementById("usluge");
// next page
var onam = document.getElementById("onama");
var ordinacija = document.getElementById("ordinacija");
var doktor = document.getElementById("doktor");
// next page
var Kontakt = document.getElementById("kontakt");
// style dropdown
var x = document.getElementById("myLinks");

function pocetnaStranica() {
    x.style.display = "none";
    arrow.style.display = "none";
    burger.style.display = "block";
    
    bck.classList.remove("hidde");
    whyUs.classList.remove("hidde");
    usluge.classList.remove("hidde");

    onam.classList.add("hidde");
    ordinacija.classList.add("hidde");
    doktor.classList.add("hidde");
    Kontakt.classList.add("hidde");
}

function onamaStranica() {
    x.style.display = "none";
    arrow.style.display = "none";
    burger.style.display = "block";

    onam.classList.remove("hidde");
    ordinacija.classList.remove("hidde");
    doktor.classList.remove("hidde");

    bck.classList.add("hidde");
    whyUs.classList.add("hidde");
    usluge.classList.add("hidde");
    Kontakt.classList.add("hidde");
}

function kontaktStranica() {
    x.style.display = "none";
    arrow.style.display = "none";
    burger.style.display = "block";

    Kontakt.classList.remove("hidde");

    onam.classList.add("hidde");
    ordinacija.classList.add("hidde");
    doktor.classList.add("hidde");
    bck.classList.add("hidde");
    whyUs.classList.add("hidde");
    usluge.classList.add("hidde");
}


pocetna.addEventListener('click', pocetnaStranica);

onama.addEventListener('click', onamaStranica);

homeOnama.addEventListener('click', onamaStranica);

konta.addEventListener('click', kontaktStranica)

kontaBtn.addEventListener('click', kontaktStranica)




jQuery(document).ready(function($) {

    if (window.history && window.history.pushState) {

        window.history.pushState('forward', null, './#home');

        $(window).on('popstate', function() {
            if (window.location.href.indexOf('home') > -1) {
                pocetnaStranica();
            }
            if (window.location.href.indexOf('#onama') > -1) {
                onamaStranica();
            }
            if (window.location.href.indexOf('kontakt') > -1) {
                kontaktStranica();
            }
        });

    }
});


function myFunction() {

    var burger = document.getElementById("burger");
    var arrow = document.getElementById("arrow");

    if (x.style.display === "block") {
        x.style.display = "none";
        burger.style.display = "block";
        arrow.style.display = "none";
    } else {
        x.style.display = "block";
        burger.style.display = "none";
        arrow.style.display = "block";
    }
}


