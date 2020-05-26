// Has some functionality for the website, like
// unhiding pages

var aboutMe = document.getElementById("about");
var projects = document.getElementById("projects");
var footer = document.getElementById("contact");
var formFooter = document.getElementById("form_footer");
var home = document.getElementById("home");

function aboutMeSlide(){
    aboutMe.classList.remove("hide");
    footer.classList.remove("hide");
    formFooter.classList.add("hide");
    projects.classList.add("hide");
    home.classList.add("hide");
    form.classList.add("hide");
    aboutMe.classList.add("onload-slideLeft");
}

function projectsSlide(){
    projects.classList.remove("hide");
    footer.classList.remove("hide");
    projects.classList.add("onload-slideLeft");
    aboutMe.classList.add("hide");
    home.classList.add("hide");
    form.classList.add("hide");
    formFooter.classList.add("hide");

}

function homeSlide(){
    home.classList.remove("hide");
    footer.classList.add("hide");
    formFooter.classList.add("hide");
    home.classList.add("onload-slideLeft");
    projects.classList.add("hide");
    aboutMe.classList.add("hide");
    form.classList.add("hide");
}

function formSlide(){
    form.classList.remove("hide");
    home.classList.add("hide");
    formFooter.classList.remove("hide");
    form.classList.add("onload-slideLeft");
    projects.classList.add("hide");
    aboutMe.classList.add("hide");
    footer.classList.add("hide");
}

var pictureIndex = 0;
showCarousel();
var pictures;

function nextPicture(position) {
    // This will increment or decrement the carousel for button functionality
    pictureIndex += position;
    if (pictureIndex > pictures.length){
        pictureIndex = 1
    }else if(pictureIndex < 1){
        pictureIndex = pictures.length
    }
    for (i = 0; i < pictures.length; i++) {
    pictures[i].style.display = "none";  
    }
    pictures[pictureIndex-1].style.display = "block";  
    }

function showCarousel() {
    // This function displays the carousel of images 
    pictures = document.getElementsByClassName("images");
    for (var i = 0; i < pictures.length; i++) {
    pictures[i].style.display = "none";  
    }
    pictureIndex++;
    if (pictureIndex > pictures.length) {
        pictureIndex = 1
    }    
    pictures[pictureIndex - 1].style.display = "block";  
        // Change image every 5 seconds
    setTimeout(showCarousel, 5000);
}