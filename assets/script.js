const menu_btn = document.querySelector(".ph-ham");
const mobile_menu = document.querySelector(".mobile-nav");

const nav_links1 = document.querySelector('.nav-link1')
const nav_links2 = document.querySelector('.nav-link2')
const nav_links3 = document.querySelector('.nav-link3')
const nav_links4 = document.querySelector('.nav-link4')
const nav_links5 = document.querySelector('.nav-link5')

menu_btn.addEventListener("click", function() {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});

nav_links1.addEventListener("click", function() {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
} );

nav_links2.addEventListener("click", function() {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
} );

nav_links3.addEventListener("click", function() {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
} );

nav_links4.addEventListener("click", function() {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
} );

nav_links5.addEventListener("click", function() {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
} );