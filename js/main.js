var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3500);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("header").style.display = "block"
    document.getElementById("particles-js").style.display = "block"
        document.getElementById("projects").style.display = "block"
        document.getElementById("landing").style.display = "block"
        document.getElementById("about").style.display = "block"
        document.getElementById("contact").style.display = "block";

    document.getElementById("footer").style.display = "block";
    document.getElementById("scrollup").style.display = "block";
    document.getElementById("scrolldown").style.display = "block";
}