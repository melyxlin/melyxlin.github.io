var myVar;
var type;

function myFunction() {
    myVar = setTimeout(showPage, 3500);
    type = setTimeout(typeWriter, 4000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("header").style.display = "block"
    document.getElementById("test").style.display = "block"
    document.getElementById("projects").style.display = "block"
    document.getElementById("landing").style.display = "block"
    document.getElementById("about").style.display = "block"
    document.getElementById("contact").style.display = "block";

    document.getElementById("work").style.display = "block";

    document.getElementById("footer").style.display = "block";
    document.getElementById("social").style.display = "block";

}

var i = 0;
var txt = "I am a Computer Science Student \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB and Noodle Enthusiast \uD83C\uDF5C based out of Boston, MA";
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("subheading").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }