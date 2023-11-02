
///////////////////////////////////////// header scripting and lightmode ///////////////////////////////////////////////////////////////////////

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};





let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};





var icon = document.getElementById("icon");
var body = document.body;

// Check if there's a preference in local storage
var userPreference = localStorage.getItem("light-mode");

// Apply the user's preference
if (userPreference) {
    if (userPreference === "dark") {
        body.classList.add("light-mode");
        icon.src = "images/sun.png";
    } else {
        body.classList.remove("light-mode");
        icon.src = "images/moon.png";
    }
}

icon.onclick = function () {
    // Toggle the light mode class
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
        icon.src = "images/sun.png";
        // Save the user's preference to local storage
        localStorage.setItem("light-mode", "dark");
    } else {
        icon.src = "images/moon.png";
        localStorage.setItem("light-mode", "light");
    }
};


let loginForm = document.querySelector('.login-form');

document.querySelector('#loginbtn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}
const name = document.getElementById('username');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e) =>{
  let message = []
  if (password.value.length <= 8){
    message.push('Password must be longer 8 characters')
  }
  if (password.value.length >= 20){
    message.push('Password must be less than 20 characters')
  }
  if (message.length > 0){
    e.preventDefault()
    swal({
      title: "Oops!",
      text: message.join(', '),
      icon: "error",
      button: "OK",
    });
  }
});