const menu = document.querySelector('.mobile-menu');
const menuList = document.querySelectorAll('.mobile-menu li');
const openMenu = document.querySelector('#hamburger-icon');
const closeMenu = document.querySelector('#cross-arrow');
const list = Array.from(menuList);

function displayMenu() {
  menu.style.display = 'flex';
}

function disappearMenu() {
  menu.style.display = 'none';
}

openMenu.addEventListener('click', displayMenu);
closeMenu.addEventListener('click', disappearMenu);
list.forEach((link) => { link.addEventListener('click', disappearMenu); });