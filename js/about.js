document.addEventListener("DOMContentLoaded", function () {
    const images = ["images/41.jpg", "images/Gym.png" , "images/Gym1.png", "images/Gym2.png"];
    const imageElement = document.getElementById("title-about");
    let currentImageIndex = 0;

    function changeImage() {
        imageElement.style.backgroundImage = `url(${images[currentImageIndex]})`;
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Initial call to set the background image
    changeImage();

    // Set up an interval to change the image every 3 seconds (adjust as needed)
    setInterval(changeImage, 3000);
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
    console.log("Working");
    var target = event ? event.currentTarget : null;
    if (target) {
        target.classList.add("active-link");
    }

    for (var tablink of tablinks) {
        if (tablink !== target) {
            tablink.classList.remove("active-link");
        }
    }

    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    document.getElementById(tabname).classList.add("active-tab");
}
