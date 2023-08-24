const baoshu = document.getElementById('baoshu'); // 主页: '制筹起局'按钮
const homeModal = document.getElementById('home-modal'); // 主页: 报数弹窗
const overlay = document.getElementById('overlay'); // 主页: 包数弹窗背景
const aboutModal = document.getElementById('home-about-modal');
const aboutModalBtn = document.getElementById('home-guanyu');
const menuBtn = document.getElementById('home-hamburger-menu');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    if (menuState) {
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
        overlay.classList.remove('active');
        menuState = false;
    } else {
        closeModal();
        menuBtn.classList.add('active');
        menu.classList.add('active');
        overlay.classList.add('active');
        menuState = true;
    }
});

// 主页: 报数弹窗开关
baoshu.addEventListener('click', openBaoshuModal);
overlay.addEventListener('click', () => {
    closeModal();
    closeSideMenu();
});

function closeSideMenu() {
    document.getElementById('home-hamburger-menu').classList.remove('active');
    document.getElementById('menu').classList.remove('active');
    document.getElementById('overlay').classList.remove('active'); // 主页: 包数弹窗背景
    menuState = false;
}

/**
 * 主页报数弹窗开关
 */
function closeModal() {
    homeModal.classList.remove('active');
    aboutModal.classList.remove('active');
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    overlay.classList.remove('active');
}

function openBaoshuModal() {
    document.getElementById('shuzi').value = '';
    homeModal.classList.add('active');
    overlay.classList.add('active');
    document.getElementById('shuzi').focus();
}

aboutModalBtn.addEventListener('click', () => {
    aboutModal.classList.add('active');
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
    menuState = false;
    overlay.classList.add('active');
});
