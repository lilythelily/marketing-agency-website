"use strict";

const hamburger = document.querySelector("#hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const close = document.querySelector('#close');

function showMobileNav() {
    mobileNav.classList.remove('hidden');
}

function hideMobileNav() {
    mobileNav.classList.add('hidden');
}

hamburger.addEventListener("click", (e) => {
  showMobileNav();
});

close.addEventListener('click', (e) => {
    hideMobileNav();
})
