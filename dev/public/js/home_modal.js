const baoshu = document.getElementById('baoshu'); // 主页: '制筹起局'按钮
const homeModal = document.getElementById('home-modal'); // 主页: 报数弹窗
const overlay = document.getElementById('overlay'); // 主页: 包数弹窗背景
const aboutModal = document.getElementById('home-about-modal');
const aboutModalBtn = document.getElementById('home-guanyu');
const menuBtn = document.getElementById('home-hamburger-menu');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', toggleSideMenu);

function toggleSideMenu() {
    closeModal();
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
}

// 主页: 报数弹窗开关
baoshu.addEventListener('click', openBaoshuModal);
overlay.addEventListener('click', closeModal);

/**
 * 主页报数弹窗开关
 */
function closeModal() {
    homeModal.classList.remove('active');
    aboutModal.classList.remove('active');
    overlay.classList.remove('active');
}

function closeSideMenu() {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
}

function openBaoshuModal() {
    closeSideMenu();
    document.getElementById('shuzi').value = '';
    homeModal.classList.add('active');
    overlay.classList.add('active');
    document.getElementById('shuzi').focus();
}

aboutModalBtn.addEventListener('click', () => {
    closeSideMenu();
    aboutModal.classList.add('active');
    overlay.classList.add('active');
});
