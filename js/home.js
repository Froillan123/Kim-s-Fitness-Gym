var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    centerSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Define an array of image URLs you want to cycle through
const imageUrls = ["images/02.jpg", "images/about2.jpg", "images/about1.png"];

const imgElement = document.getElementById("about-img");
let currentImageIndex = 0;

function changeImage() {
    imgElement.src = imageUrls[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
}

// Change the image every 5 seconds
setInterval(changeImage, 5000);


