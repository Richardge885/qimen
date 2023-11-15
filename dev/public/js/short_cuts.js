import { openBaoshuModal, closeModal, closeSideMenu } from './home_modal.js';
import { navigateToDataPage } from './savedData.js';

window.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'e') {
        // ctrl + e 打开报数窗口
        if (document.getElementById('overlay').classList.contains('active')) {
            closeModal();
            closeSideMenu();
        } else {
            openBaoshuModal();
            document.getElementById('shuzi').value = '';
        }
    } else if ((event.ctrlKey || event.metaKey) && event.key === 'f') {
        // ctrl + f 聚焦搜索栏或盘局批注
        if (!document.getElementById('saved-info-section').classList.contains('hidden')) {
            document.getElementById('search-data').focus();
        } else if (!document.getElementById('paipan').classList.contains('hidden')) {
            document.getElementById('paipan-pizhu').focus();
        }
    } else if ((event.ctrlKey || event.metaKey) && event.key === 'd') {
        // ctrl + d 从主页前往数据页面
        if (!document.getElementById('home').classList.contains('hidden')) {
            navigateToDataPage();
            closeModal();
            closeSideMenu();
        }
    }
});
