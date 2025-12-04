/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//Activar menú en dispositivo pequeño
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".header__toggle");
  const nav = document.querySelector(".header__nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("is-active");
    });
  }
});
