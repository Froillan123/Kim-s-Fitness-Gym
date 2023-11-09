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

document.addEventListener("DOMContentLoaded", function() {
  

  const imageUrls = ["images/02.jpg", "images/about2.jpg", "images/about1.png"];
  const imgElement = document.getElementById("about-img");
  let currentImageIndex = 0;

  function changeImage() {
      imgElement.src = imageUrls[currentImageIndex];
      currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
  }


  setInterval(changeImage, 2000);
});

const carousel = document.querySelector(".card");
        const cardWidth = carousel.querySelectorAll(".card").offsetWidth;
        let currentCardIndex = 0;
        const maxScreenWidth = 0; 

        function changeCard() {
            currentCardIndex = (currentCardIndex + 1) % carousel.children.length;
            const scrollOffset = currentCardIndex * cardWidth;
            carousel.scrollTo({
                left: scrollOffset,
                behavior: 'smooth',
            });
        }

        setInterval(changeCard, 2000);

let currentIndex = 0; 

function scrollCarousel(direction) {
    const cardWidth = document.querySelector('.card').offsetWidth;
    const carousel = document.querySelector('.carousel');
    const maxIndex = carousel.childElementCount - 1;
    const containerWidth = carousel.offsetWidth;
    const maxScrollLeft = cardWidth * maxIndex - containerWidth;
    
    if (direction === 'next' && currentIndex < maxIndex) {
        currentIndex++;
    } else if (direction === 'prev' && currentIndex > 0) {
        currentIndex--;
    } else if (direction === 'next' && currentIndex === maxIndex) {
        // If at the end, jump to the beginning (circular)
        currentIndex = 0;
    } else if (direction === 'prev' && currentIndex === 0) {
        // If at the beginning, jump to the end (circular)
        currentIndex = maxIndex;
    }

    const scrollLeft = currentIndex * cardWidth;
    carousel.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
    });
}

  

document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    prevButton.addEventListener('click', () => scrollCarousel('prev'));
    nextButton.addEventListener('click', () => scrollCarousel('next'));
});
document.addEventListener('DOMContentLoaded', function() {
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration:  1600,
    delay: 200
});


ScrollReveal().reveal('.home-section2, .heading, ', { origin: 'top' });
ScrollReveal().reveal('.container, .about-content, .wrapper, .home',  { origin: 'bottom' });
ScrollReveal().reveal('.about-img, .testimonials',  { origin: 'left' });
});
