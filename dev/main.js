// System requirements
const { app, BrowserWindow, ipcMain, desktopCapturer, screen } = require('electron');
const path = require('path');
const fs = require('fs');
const moment = require('moment');

// importing modules
const { timeInfo } = require('./sizhu');
const { paiFeiPan } = require('./feipan');
const { paiZhuanPan } = require('./zhuanpan');

let mainWindow;

ipcMain.on('正时起局', (e, data) => {
    const time = timeInfo(data.timeInfo.date, data.timeInfo.hour, false);
    if (data.paipanMethod == '飞盘') {
        const paipan = paiFeiPan(time.jieqi, time.ri, time.shi);
        const paiPanResult = {
            time: time,
            paipan: paipan,
            hour: data.timeInfo.hour,
        };
        e.reply('飞盘排盘', paiPanResult);
    } else if (data.paipanMethod == '转盘') {
        const paipan = paiZhuanPan(time.jieqi, time.ri, time.shi);
        const paiPanResult = {
            time: time,
            paipan: paipan,
            hour: data.timeInfo.hour,
        };
        e.reply('传统转盘排盘', paiPanResult);
    }
});

ipcMain.on('报数起局', (e, data) => {
    const time = timeInfo(
        data.choosenTime.date,
        data.choosenTime.hour,
        data.choosenMethod,
        data.choosenNumber,
    );
    if (data.paipanMethod == '飞盘') {
        const paipan = paiFeiPan(
            time.jieqi,
            time.ri,
            time.shi,
            data.choosenNumber,
            data.choosenMethod,
        );
        const paiPanResult = {
            time: time,
            paipan: paipan,
            hour: data.timeInfo.hour,
        };
        e.reply('飞盘排盘', paiPanResult);
    } else if (data.paipanMethod == '转盘') {
        const paipan = paiZhuanPan(
            time.jieqi,
            time.ri,
            time.shi,
            data.choosenNumber,
            data.choosenMethod,
        );
        const paiPanResult = {
            time: time,
            paipan: paipan,
            hour: data.timeInfo.hour,
        };
        e.reply('传统转盘排盘', paiPanResult);
    } else {
        const paipan = paiFeiPan(
            time.jieqi,
            time.ri,
            time.shi,
            data.choosenNumber,
            data.choosenMethod,
        );
        const paiPanResult = {
            time: time,
            paipan: paipan,
        };
        e.reply('符使转盘排盘', paiPanResult);
    }
});

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 550,
        height: 870,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            // devTools: true,//todo change this when building
            devTools: false,
        },
    });
    mainWindow.loadFile('./dev/public/homepage.html');
}

app.on('ready', () => {
    createMainWindow();
});

app.on('activate', () => {
    if (mainWindow === null) {
        createMainWindow();
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    } else {
        mainWindow = null;
    }
});

ipcMain.on('screenshot', (e, data) => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    desktopCapturer
        .getSources({
            types: ['window'],
            // thumbnailSize: { width: 7000, height: 7000 },
            thumbnailSize: { width: width, height: height },
        })
        .then((sources) => {
            for (const source of sources) {
                if (true) {
                    // Create a file name based on the current date
                    const fileName = getFileName(data);

                    // Save the screenshot as a JPG file on the desktop
                    const filePath = path.join(app.getPath('desktop'), `${fileName}.jpg`);
                    fs.writeFile(filePath, source.thumbnail.toJPEG(100), (error) => {
                        if (error) {
                            console.error('Failed to save screenshot:', error);
                        }
                    });
                    break;
                }
            }
        })
        .catch((error) => {
            // console.error('Failed to capture screen:', error);
        });
});

// Function to get the file name based on the current date
function getFileName(customFileName) {
    if (customFileName != 'none') {
        return customFileName;
    } else {
        const date = moment().format('YYYY-MM-DD_HH-mm-ss');
        return `奇门预测截图_${date}`;
    }
}
