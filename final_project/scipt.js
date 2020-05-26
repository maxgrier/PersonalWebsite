// Has some functionality for the website, like
// unhiding pages

var aboutMe = document.getElementById("about");
var projects = document.getElementById("projects");
var footer = document.getElementById("contact");
topContainer = document.getElementById("top-container");

function slideAboutMe(){
    aboutMe.classList.remove("hide");
    footer.classList.remove("hide");
    aboutMe.classList.add("onload-slideLeft");
    projects.classList.add("hide");
    topContainer.classList.add("hide");
}

function slideProject(){
    projects.classList.remove("hide");
    footer.classList.remove("hide");
    projects.classList.add("onload-slideRight");
    aboutMe.classList.add("hide");
    topContainer.classList.add("hide");
}

function slideContacts(){
    topContainer.classList.remove("hide");
    footer.classList.add("hide");
    topContainer.classList.add("onload-slideRight");
    projects.classList.add("hide");
    aboutMe.classList.add("hide");
}