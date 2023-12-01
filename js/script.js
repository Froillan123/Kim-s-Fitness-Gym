
///////////////////////////////////////// header scripting and lightmode ///////////////////////////////////////////////////////////////////////

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};






let loginForm = document.querySelector('.login-form');

document.querySelector('#loginbtn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}


document.addEventListener('DOMContentLoaded', function() {
  ScrollReveal({ 
      reset: false,
      distance: '80px',
      duration:  1500,
      delay: 170
  });
  
  
  ScrollReveal().reveal('.home-section2,.background-gallery, .title-about, .about2, .contact-background, .background, .section__header', { origin: 'top' });
  ScrollReveal().reveal('.container, .about-content, .wrapper, .home, .contact, .plan, .section__description, .schedule',  { origin: 'bottom' });
  ScrollReveal().reveal('.testimonials, .box, .about, .background-contact, .tab-links, .information, .class__card',  { origin: 'left' });
  });


  
  document.addEventListener("DOMContentLoaded", function () {
    const images = ["images/41.jpg", "images/Gym.png" , "images/Gym1.png"];
    const imageElement = document.getElementById("background");
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
