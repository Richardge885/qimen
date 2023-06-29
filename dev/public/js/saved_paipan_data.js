const infoPage = document.getElementById('saved-info-section');

function fromHomeToInfo() {
    home.classList.toggle('hidden');
    closeSideMenu();
    infoPage.classList.toggle('hidden');
}

function fromInfoToHome() {
    home.classList.toggle('hidden');
    infoPage.classList.toggle('hidden');
}
