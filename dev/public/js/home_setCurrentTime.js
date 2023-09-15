const { ipcRenderer } = require('electron');

document.getElementById('setCurrentTime').addEventListener('click', setCurrentTimeToTimeInput); // 软件启动时输入当前系统时间

/**
 * 重置主页时间输入框
 */
function setCurrentTimeToTimeInput() {
    const dateTimeInput = document.getElementById('date-time');
    const now = new Date();
    const timezoneOffset = now.getTimezoneOffset() * -1;
    const nowWithOffset = new Date(now.getTime() + timezoneOffset * 60 * 1000);
    const formattedDate = nowWithOffset.toISOString().slice(0, 16);
    dateTimeInput.value = formattedDate;
}

setCurrentTimeToTimeInput();

ipcRenderer.on('refresh current time', () => {
    setCurrentTimeToTimeInput();
});
