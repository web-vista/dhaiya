'use strict';

/**
 * navbar toggle
 */
const contactBtn = document.getElementById('contactBtn');
const contactBtn1 = document.getElementById('contactBtn1');
const popupForm = document.getElementById('popupForm');
const closeBtn = document.getElementById('closeBtn');

        contactBtn.addEventListener('click', () => {
            popupForm.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            popupForm.classList.remove('active');
        });

        window.addEventListener('click', (e) => {
            if (e.target === popupForm) {
                popupForm.classList.remove('active');
            }
        });
const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});