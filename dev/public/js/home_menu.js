const menuBtn = document.getElementById('home-hamburger-menu');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', toggleSideMenu);

function toggleSideMenu() {
    closeModal();
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
}

function closeSideMenu() {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
}
