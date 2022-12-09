
var x = document.getElementById("myLinks");
var burger = document.getElementById("burger");
var arrow = document.getElementById("arrow");

function myFunction() {
    
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
function hidme(){
    x.style.display = "none";
    burger.style.display = "block";
     arrow.style.display = "none";
}



