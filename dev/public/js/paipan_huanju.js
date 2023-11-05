const { ipcRenderer } = require('electron');
import { clearPanJu } from './clearPanju.js';

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
    clearAllGongweiListeners();
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
    clearAllGongweiListeners();
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

function clearAllGongweiListeners() {
    const elements = document.querySelectorAll('[data-gongwei-overlay]');

    elements.forEach((originalElement) => {
        const clonedElement = originalElement.cloneNode(true);

        // Replace the original element with the cloned element
        originalElement.parentNode.replaceChild(clonedElement, originalElement);

        // Remove all event listeners from the cloned element
        const clonedElementClone = clonedElement.cloneNode(true);
        clonedElement.parentNode.replaceChild(clonedElementClone, clonedElement);
    });
}
