const { ipcRenderer } = require('electron');

const nextJu = document.getElementById('paipan-next');
const previousJu = document.getElementById('paipan-previous');

nextJu.addEventListener('click', next);

previousJu.addEventListener('click', prev);

function next() {
    isFromData = false;
    const year = document.getElementById('year-number').innerText;
    const month = document.getElementById('month-number').innerText;
    const date = document.getElementById('date-number').innerText;
    let hour = document.getElementById('time-number').innerText;
    let index = hour.indexOf(':');
    hour = hour.slice(0, index);

    const data = {
        timeInfo: addTime(year, month, date, hour),
        paipanMethod: document.getElementById('home-paipanfangshi').value,
    };
    ipcRenderer.send('正时起局', data);
    clearPanJu();
}
function prev() {
    isFromData = false;
    const year = document.getElementById('year-number').innerText;
    const month = document.getElementById('month-number').innerText;
    const date = document.getElementById('date-number').innerText;
    let hour = document.getElementById('time-number').innerText;
    let index = hour.indexOf(':');
    hour = hour.slice(0, index);
    const data = {
        timeInfo: minusTime(year, month, date, hour),
        paipanMethod: document.getElementById('home-paipanfangshi').value,
    };
    ipcRenderer.send('正时起局', data);
    clearPanJu();
}

// 增加一个时辰
function addTime(year, month, date, hour) {
    const baseTime = new Date(year, month - 1, date, hour); // month 参数是 1-12，需要转换为 0-11 表示的月份
    baseTime.setHours(baseTime.getHours() + 2);
    if (baseTime.getHours() >= 24) {
        baseTime.setDate(baseTime.getDate() + 1);
        baseTime.setHours(baseTime.getHours() - 24);
    }

    const maxDate = new Date(year, month, 0).getDate(); // 获取月份的最大日期
    if (baseTime.getDate() > maxDate) {
        baseTime.setMonth(baseTime.getMonth() + 1);
        baseTime.setDate(1);
    }

    if (baseTime.getMonth() >= 12) {
        baseTime.setFullYear(baseTime.getFullYear() + 1);
        baseTime.setMonth(0);
    }
    return formatDateTime(baseTime);
}

// 减去一个时辰
function minusTime(year, month, date, hour) {
    const baseTime = new Date(year, month - 1, date, hour); // month 参数是 1-12，需要转换为 0-11 表示的月份
    baseTime.setHours(baseTime.getHours() - 2);
    if (baseTime.getHours() < 0) {
        baseTime.setDate(baseTime.getDate() - 1);
        baseTime.setHours(baseTime.getHours() + 24);
    }
    if (baseTime.getDate() === 0) {
        // 调整月份
        const lastMonth = new Date(baseTime.getFullYear(), baseTime.getMonth(), 0);
        baseTime.setDate(lastMonth.getDate());
        baseTime.setMonth(baseTime.getMonth() - 1);
    }

    if (baseTime.getMonth() < 0) {
        // 调整年份
        baseTime.setFullYear(baseTime.getFullYear() - 1);
        baseTime.setMonth(11); // 11 表示 12 月
    }
    return formatDateTime(baseTime);
}

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
