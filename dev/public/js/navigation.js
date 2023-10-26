const { ipcRenderer, webFrame } = require('electron');

// 排盘页内容
const paipan = document.getElementById('paipan'); // 排盘页

webFrame.setZoomLevel(0.5);

ipcRenderer.on('back to home page', (e) => {
    if (
        paipan.classList.contains('hidden') &&
        document.getElementById('saved-info-section').classList.contains('hidden')
    ) {
    } else {
        home.classList.remove('hidden');
        paipan.classList.add('hidden');
        paipan.classList.remove('flex');
        document.getElementById('saved-info-section').classList.add('hidden');
        document.getElementById('paipan-overlay').classList.remove('active');
        document.getElementById('paipan-info-modal').classList.remove('active');
        menuState = false;
    }
});

// 正时排盘按键跳转功能
document.getElementById('zhengshi').addEventListener('click', () => {
    updateDefaultInformation();
    let choosenTime = formatDateTime(document.getElementById('date-time').value);
    const data = {
        paipanMethod: document.getElementById('home-paipanfangshi').value, // 排盘方式（飞盘，传统转盘，符使转盘）
        timeInfo: choosenTime,
    };
    ipcRenderer.send('正时起局', data); // 把时间参数发送至后台
    if (data.paipanMethod == '飞盘') {
        useFeipanStyle();
    } else {
        useZhuanpanStyle();
    }
    toggleHomeAndPaipan(); // 切换页面
    closeSideMenu();
});

document.getElementById('modal-btn').addEventListener('click', () => {
    if (
        document.getElementById('shuzi').value != '' &&
        document.getElementById('shuzi').value > 0
    ) {
        updateDefaultInformation();
        let choosenTime = formatDateTime(document.getElementById('date-time').value);
        let data = {
            paipanMethod: document.getElementById('home-paipanfangshi').value, // 排盘方式（飞盘，传统转盘，符使转盘）
            timeInfo: choosenTime,
            choosenMethod: '',
            choosenNumber: document.getElementById('shuzi').value,
        };
        if (document.getElementById('shichen').checked) {
            data.choosenMethod = 'shichen';
        } else if (document.getElementById('jushu').checked) {
            data.choosenMethod = 'jushu';
        } else {
            data.choosenMethod = 'zhichou';
        }
        ipcRenderer.send('报数起局', data); // 把时间参数发送至后台
        if (data.paipanMethod == '飞盘') {
            useFeipanStyle();
        } else {
            useZhuanpanStyle();
        }
        toggleHomeAndPaipan(); // 切换页面
        closeModal(); // 关闭弹窗
        closeSideMenu();
    }
});

document.getElementById('jushu').addEventListener('click', () => {
    document.getElementById('shuzi').focus();
});
document.getElementById('shichen').addEventListener('click', () => {
    document.getElementById('shuzi').focus();
});
document.getElementById('zhichou').addEventListener('click', () => {
    document.getElementById('shuzi').focus();
});

document.getElementById('shuzi').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (
            document.getElementById('shuzi').value != '' &&
            document.getElementById('shuzi').value > 0
        ) {
            updateDefaultInformation();
            let choosenTime = formatDateTime(document.getElementById('date-time').value);
            let data = {
                paipanMethod: document.getElementById('home-paipanfangshi').value, // 排盘方式（飞盘，传统转盘，符使转盘）
                timeInfo: choosenTime,
                choosenMethod: '',
                choosenNumber: document.getElementById('shuzi').value,
            };
            if (document.getElementById('shichen').checked) {
                data.choosenMethod = 'shichen';
            } else if (document.getElementById('jushu').checked) {
                data.choosenMethod = 'jushu';
            } else {
                data.choosenMethod = 'zhichou';
            }
            ipcRenderer.send('报数起局', data); // 把时间参数发送至后台
            if (data.paipanMethod == '飞盘') {
                useFeipanStyle();
            } else {
                useZhuanpanStyle();
            }
            toggleHomeAndPaipan(); // 切换页面
            closeModal(); // 关闭弹窗
        }
    }
});

/**
 * 页面更换
 */
function toggleHomeAndPaipan() {
    home.classList.toggle('hidden');
    paipan.classList.toggle('hidden');
    paipan.classList.toggle('flex');
}

/**
 * 格式化日期和时间
 * @param {*} dateTimeString
 * @returns
 */
function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const formattedDate = `${year}/${month}/${day}`;
    const formattedHour = `${hour}`;
    return {
        date: formattedDate,
        hour: formattedHour,
    };
}

/**
 * 更新默认主题跟排盘方式
 */
function updateDefaultInformation() {
    const updateInfo = {
        paipanMethod: document.getElementById('home-paipanfangshi').value,
        theme: document.getElementById('theme').value,
        feipanliuqin: document.getElementById('liuqin').value,
        classicChinese: document.getElementById('classic-chinese').checked,
        baoshuMethod: '',
    };
    if (document.getElementById('shichen').checked) {
        updateInfo.baoshuMethod = 'shichen';
    } else if (document.getElementById('jushu').checked) {
        updateInfo.baoshuMethod = 'jushu';
    } else {
        updateInfo.baoshuMethod = 'zhichou';
    }
    localStorage.setItem('defaultInfo', JSON.stringify(updateInfo));
}

function closeSideMenu() {
    document.getElementById('home-hamburger-menu').classList.remove('active');
    document.getElementById('menu').classList.remove('active');
    document.getElementById('overlay').classList.remove('active'); // 主页: 包数弹窗背景
}

function closeModal() {
    document.getElementById('home-modal').classList.remove('active'); // 主页: 报数弹窗
    document.getElementById('overlay').classList.remove('active'); // 主页: 包数弹窗背景
    document.getElementById('home-about-modal').classList.remove('active');
}

function useFeipanStyle() {
    document.querySelectorAll('[data-tianpanshen]').forEach((element, index) => {
        element.classList.remove('zhuanpan-tianpanshen');
        element.classList.add('tianpanshen');
    });
    document.querySelectorAll('[data-xing]').forEach((element, index) => {
        element.classList.remove('zhuanpan-xing');
        element.classList.add('xing');
    });
    document.querySelectorAll('[data-men]').forEach((element, index) => {
        element.classList.remove('zhuanpan-men');
        element.classList.add('men');
    });
    document.querySelectorAll('[data-dipanshen]').forEach((element, index) => {
        element.classList.remove('zhuanpan-dipanshen');
        element.classList.add('dipanshen');
    });
    document.querySelectorAll('[data-tianpangan]').forEach((element, index) => {
        element.classList.remove('zhuanpan-tianpangan');
        element.classList.add('tianpangan');
    });
    document.querySelectorAll('[data-dipangan]').forEach((element, index) => {
        element.classList.remove('zhuanpan-dipangan');
        element.classList.add('dipangan');
    });
    document.querySelectorAll('[data-anganzhi]').forEach((element, index) => {
        element.classList.remove('zhuanpan-anganzhi');
        element.classList.add('anganzhi');
    });
    document.querySelectorAll('[data-tianpanyikong]').forEach((element, index) => {
        element.classList.remove('zhuanpan-tianpanyikong');
        element.classList.add('tianpanyikong');
    });
    document.querySelectorAll('[data-dipanyikong]').forEach((element, index) => {
        element.classList.remove('zhuanpan-dipanyikong');
        element.classList.add('dipanyikong');
    });
    document.querySelectorAll('[data-maxing]').forEach((element, index) => {
        element.classList.remove('zhuanpan-maxing');
        element.classList.add('maxing');
    });
    document.querySelectorAll('[data-kongwang]').forEach((element, index) => {
        element.classList.remove('zhuanpan-kongwang');
        element.classList.add('kongwang');
    });
    document.querySelectorAll('[data-wangshuai]').forEach((element, index) => {
        element.classList.remove('zhuanpan-wangshuai');
        element.classList.add('wangshuai');
    });
}

function useZhuanpanStyle() {
    document.querySelectorAll('[data-maxing]').forEach((element, index) => {
        element.classList.remove('maxing');
        element.classList.add('zhuanpan-maxing');
    });
    document.querySelectorAll('[data-tianpanshen]').forEach((element, index) => {
        element.classList.remove('tianpanshen');
        element.classList.add('zhuanpan-tianpanshen');
    });
    document.querySelectorAll('[data-xing]').forEach((element, index) => {
        element.classList.remove('xing');
        element.classList.add('zhuanpan-xing');
    });
    document.querySelectorAll('[data-men]').forEach((element, index) => {
        element.classList.remove('men');
        element.classList.add('zhuanpan-men');
    });
    document.querySelectorAll('[data-dipanshen]').forEach((element, index) => {
        element.classList.remove('dipanshen');
        element.classList.add('zhuanpan-dipanshen');
    });
    document.querySelectorAll('[data-tianpangan]').forEach((element, index) => {
        element.classList.remove('tianpangan');
        element.classList.add('zhuanpan-tianpangan');
    });
    document.querySelectorAll('[data-dipangan]').forEach((element, index) => {
        element.classList.remove('dipangan');
        element.classList.add('zhuanpan-dipangan');
    });
    document.querySelectorAll('[data-anganzhi]').forEach((element, index) => {
        element.classList.remove('anganzhi');
        element.classList.add('zhuanpan-anganzhi');
    });
    document.querySelectorAll('[data-tianpanyikong]').forEach((element, index) => {
        element.classList.remove('tianpanyikong');
        element.classList.add('zhuanpan-tianpanyikong');
    });
    document.querySelectorAll('[data-dipanyikong]').forEach((element, index) => {
        element.classList.remove('dipanyikong');
        element.classList.add('zhuanpan-dipanyikong');
    });
    document.querySelectorAll('[data-kongwang]').forEach((element, index) => {
        element.classList.remove('kongwang');
        element.classList.add('zhuanpan-kongwang');
    });
    document.querySelectorAll('[data-wangshuai]').forEach((element, index) => {
        element.classList.remove('wangshuai');
        element.classList.add('zhuanpan-wangshuai');
    });
}
