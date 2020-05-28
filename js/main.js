var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3500);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("header").style.display = "block"
    document.getElementById("particles-js").style.display = "block"
    if (document.body.classList.contains('aboutpage')) {
        document.getElementById("about").style.display = "block"

    }
    else if (document.body.classList.contains('projectspage')) {
        document.getElementById("projects").style.display = "block"

    }
    else if (document.body.classList.contains('indexpage')) {
        document.getElementById("landing").style.display = "block"

    }
    else if (document.body.classList.contains('workpage')) {
        document.getElementById("work").style.display = "block"

    }

    document.getElementById("footer").style.display = "block";
}