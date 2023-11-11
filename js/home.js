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

var testimonials = [
    {
        name: "Axel",
        stars: 4,
        content: "Nice Gym man! I will come here every day. Your gym has top-notch equipment and a friendly atmosphere."
    },
    {
        name: "Ericka",
        stars: 5,
        content: "I like this gym because the owner is very kind and he recommends me how to execute the technique."
    },
    {
        name: "Richard",
        stars: 5,
        content: "Nice Gym man! I will come here every day. Your gym has top-notch equipment and a friendly atmosphere."
    },
    // Add more testimonials as needed
    {
        name: "Jin",
        stars: 5,
        content: "Nice Gym man! I will come here every day. Your gym has top-notch equipment and a friendly atmosphere."
    },
    {
        name: "Joanne",
        stars: 5,
        content: "Nice Gym man! I will come here every day. Your gym has top-notch equipment and a friendly atmosphere."
    },
    {
        name: "George",
        stars: 5,
        content: "Nice Gym man! I will come here every day. Your gym has top-notch equipment and a friendly atmosphere."
    },
];

var testimonialsPerSlide = 3;
var currentSlideIndex = 0;
var testimonialContainer = document.getElementById("testimonial-carousel");

function showSlide(index) {
    var start = index * testimonialsPerSlide;
    var end = start + testimonialsPerSlide;
    var slideTestimonials = testimonials.slice(start, end);

    testimonialContainer.innerHTML = slideTestimonials.map(function (testimonial, i) {
        return `
            <div class="col">
                <div class="testimonial">
                    <img src="images/${start + i + 12}.jpg" alt="">
                    <div class="name">${testimonial.name}</div>
                    <div class="stars">
                        ${Array.from({ length: testimonial.stars }, () => '<i class="fa-solid fa-star"></i>').join('')}
                        ${Array.from({ length: 5 - testimonial.stars }, () => '<i class="fa-regular fa-star"></i>').join('')}
                    </div>
                    <p>${testimonial.content}</p>
                </div>
            </div>
        `;
    }).join('');
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % Math.ceil(testimonials.length / testimonialsPerSlide);
    showSlide(currentSlideIndex);
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + Math.ceil(testimonials.length / testimonialsPerSlide)) % Math.ceil(testimonials.length / testimonialsPerSlide);
    showSlide(currentSlideIndex);
}

// Display the initial slide
showSlide(currentSlideIndex);



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
