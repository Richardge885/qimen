const { ipcRenderer } = require('electron');

// 排盘页内容
const paipan = document.getElementById('paipan'); // 排盘页
const returnBtn = document.getElementById('return'); // 排盘: 页返回按钮

returnBtn.addEventListener('click', toggleHomeAndPaipan); // 排盘: 页面返回主页按钮

function changeBaoshuRadioInput() {
    if (document.getElementById('home-paipanfangshi').value == '飞盘') {
        document.getElementById('jushu').setAttribute('checked', '');
    } else if (
        document.getElementById('home-paipanfangshi').value == '传统转盘' ||
        document.getElementById('home-paipanfangshi').value == '符使转盘'
    ) {
        document.getElementById('shichen').setAttribute('checked', '');
    }
}

// 正时排盘按键跳转功能
document.getElementById('zhengshi').addEventListener('click', () => {
    updateDefaultInformation();
    changeBaoshuRadioInput();
    clearPanJu(); // 清空盘面
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
        changeBaoshuRadioInput();
        clearPanJu(); // 清空盘面
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

document.getElementById('shuzi').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (
            document.getElementById('shuzi').value != '' &&
            document.getElementById('shuzi').value > 0
        ) {
            updateDefaultInformation();
            changeBaoshuRadioInput();
            clearPanJu();
            let choosenTime = formatDateTime(document.getElementById('date-time').value);
            let data = {
                paipanMethod: document.getElementById('home-paipanfangshi').value, // 排盘方式（飞盘，传统转盘，符使转盘）
                choosenTime: choosenTime,
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
    };
    localStorage.setItem('defaultInfo', JSON.stringify(updateInfo));
}

function clearPanJu() {
    const jiuxing = document.querySelectorAll('[data-xing]');
    const bamen = document.querySelectorAll('[data-men]');
    const tianpanshen = document.querySelectorAll('[data-tianpanshen]');
    const dipanshen = document.querySelectorAll('[data-dipanshen]');
    const tianpangan = document.querySelectorAll('[data-tianpangan]');
    const dipangan = document.querySelectorAll('[data-dipangan]');
    const wangshuai = document.querySelectorAll('[data-wangshuai]');
    const kongwang = document.querySelectorAll('[data-kongwang]');
    const maxing = document.querySelectorAll('[data-maxing]');
    const anganzhi = document.querySelectorAll('[data-anganzhi]');
    const tianpanyikong = document.querySelectorAll('[data-tianpanyikong]');
    const dipanyikong = document.querySelectorAll('[data-dipanyikong]');
    const textarea = document.getElementById('paipan-pizhu');
    const wubuyushi = document.getElementById('paipan-wubuyushi');
    wubuyushi.innerHTML = '';
    textarea.value = '';
    jiuxing.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
        element.classList.remove('highlight');
        element.classList.remove('jin');
        element.classList.remove('mu');
        element.classList.remove('shui');
        element.classList.remove('huo');
        element.classList.remove('tu');
    });
    bamen.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
        element.classList.remove('highlight');
        element.classList.remove('jin');
        element.classList.remove('mu');
        element.classList.remove('shui');
        element.classList.remove('huo');
        element.classList.remove('tu');
    });
    tianpanshen.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
        element.classList.remove('highlight');
        element.classList.remove('jin');
        element.classList.remove('mu');
        element.classList.remove('shui');
        element.classList.remove('huo');
        element.classList.remove('tu');
    });
    dipanshen.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
        element.classList.remove('highlight');
        element.classList.remove('jin');
        element.classList.remove('mu');
        element.classList.remove('shui');
        element.classList.remove('huo');
        element.classList.remove('tu');
    });
    tianpangan.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
        element.classList.remove('rigan');
        element.classList.remove('highlight');
        element.classList.remove('highlight-rigan');
        element.classList.remove('jin');
        element.classList.remove('mu');
        element.classList.remove('shui');
        element.classList.remove('huo');
        element.classList.remove('tu');
    });
    dipangan.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
        element.classList.remove('rigan');
        element.classList.remove('highlight');
        element.classList.remove('highlight-rigan');
        element.classList.remove('jin');
        element.classList.remove('mu');
        element.classList.remove('shui');
        element.classList.remove('huo');
        element.classList.remove('tu');
    });
    wangshuai.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
    });
    kongwang.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
    });
    maxing.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
    });
    anganzhi.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
        element.classList.remove('anganzhi-color');
    });
    tianpanyikong.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
        element.classList.remove('rigan');
        element.classList.remove('highlight');
        element.classList.remove('highlight-rigan');
        element.classList.remove('jin');
        element.classList.remove('mu');
        element.classList.remove('shui');
        element.classList.remove('huo');
        element.classList.remove('tu');
    });
    dipanyikong.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
        element.classList.remove('rigan');
        element.classList.remove('highlight');
        element.classList.remove('highlight-rigan');
        element.classList.remove('jin');
        element.classList.remove('mu');
        element.classList.remove('shui');
        element.classList.remove('huo');
        element.classList.remove('tu');
    });
    document.getElementById('nian').innerHTML = '';
    document.getElementById('yue').innerHTML = '';
    document.getElementById('ri').innerHTML = '';
    document.getElementById('shi').innerHTML = '';
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
