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
document.addEventListener("DOMContentLoaded", function () {
    const images = ["images/man-gym.jpg", "images/222.jpg" , "images/f4.jpg", "images/41.jpg", "images/42.jpg"];
    const imageElement = document.getElementById("home");
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

  

var testimonials = [
    {
        name: "Axel",
        stars: 4,
        content: "Impressive gym! The variety of equipment keeps me coming back every day. The friendly atmosphere is a bonus."
    },
    {
        name: "Ericka",
        stars: 5,
        content: "I'm a fan of this gym because the owner's kindness stands out. His technique recommendations have greatly improved my workouts."
    },
    {
        name: "Richard",
        stars: 5,
        content: "Outstanding Gym! Daily visits are a must for me. The top-notch equipment and welcoming atmosphere make it my fitness haven."
    },
    // Add more testimonials as needed
    {
        name: "Jin",
        stars: 5,
        content: "Awesome Gym! I'll be here daily. The top-notch equipment and friendly atmosphere create the perfect workout setting for me."
    },
    {
        name: "Joanne",
        stars: 4,
        content: "Fantastic Gym! Daily visits are part of my routine. The top-notch equipment and friendly atmosphere make it a joy to work out here."
    },
    {
        name: "George",
        stars: 4,
        content: "Excellent Gym! Daily workouts are a pleasure here. The top-notch equipment and friendly atmosphere make it a standout fitness spot."
    },
    {
        name: "Wilson",
        stars: 4,
        content: "Superb Gym! I'm a regular here, thanks to the top-notch equipment and friendly atmosphere. It's the perfect place for my fitness journey."
    },
    {
        name: "Alexis",
        stars: 5,
        content: "Exceptional Gym! Daily visits are a must for me. The top-notch equipment and friendly atmosphere make it my go-to fitness destination."
    },
    {
        name: "Washington",
        stars: 4,
        content: "Top-notch Gym! Regular visits are on my agenda. The quality equipment and friendly atmosphere contribute to a fantastic workout experience."
    },
    {
        name: "Zoro",
        stars: 5,
        content: "Interesting Gym! By the way, where am I? Have you seen Luffy and my crewmates? If you spot them, let me know."
    },
    {
        name: "Yunhai",
        stars: 5,
        content: "Amazing Gym! I'll be here every day. The top-notch equipment and friendly atmosphere make it the ideal place for my fitness routine."
    },
    {
        name: "Kenny",
        stars: 5,
        content: "Terrific Gym! Daily visits are a must. The top-notch equipment and friendly atmosphere make it a standout fitness spot."
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

function updateTestimonialsPerSlide() {
    if (window.innerWidth <= 990) {
        testimonialsPerSlide = 1;
    } else {
        testimonialsPerSlide = 3;
    }

    // Reset the slide index and show the first slide when the number of testimonials per slide changes
    currentSlideIndex = 0;
    showSlide(currentSlideIndex);
}

// Initial setup
updateTestimonialsPerSlide();

// Event listener for window resize
window.addEventListener('resize', updateTestimonialsPerSlide);

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
var testimonialInterval = setInterval(nextSlide, 5000);

function stopTestimonialInterval() {
    clearInterval(testimonialInterval);
}

testimonialContainer.addEventListener('mouseenter', stopTestimonialInterval);
testimonialContainer.addEventListener('mouseleave', function () {
    testimonialInterval = setInterval(nextSlide, 5000);
});



var swiper = new Swiper(".swiper-container", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3
,
      },
    },
  });


