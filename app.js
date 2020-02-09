const navBtn = document.querySelector('.nav_btn');
const navLinks = document.querySelector('.nav_links');

//Collapsible Navbar
const navCollapse = () => navLinks.classList.toggle('collapsed');
navBtn.onclick = () => navCollapse();

//Rotate bars
navBtn.addEventListener('click', (event) =>
    navBtn.classList.toggle('nav_bars_move'));

