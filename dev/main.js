// Set Environment
process.env.NODE_ENV = 'development';
// process.env.NODE_ENV = 'production';

// System requirements
const { app, BrowserWindow, ipcMain, desktopCapturer, dialog } = require('electron');

const path = require('path');
const fs = require('fs');
const moment = require('moment');

// importing modules
const { timeInfo } = require('./sizhu');
const { paiFeiPan } = require('./feipan');
const { paiZhuanPan } = require('./zhuanpan');
const { xingfeiMenzhuan } = require('./xingfeiMenZhuan');

const isDev = process.env.NODE_ENV !== 'production' ? true : false;

let mainWindow;

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 550,
        height: 870,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: isDev,
        },
    });
    if (process.platform == 'darwin') {
        mainWindow.loadFile('./dev/public/mac-index.html');
    } else if (process.platform == 'win32') {
        mainWindow.loadFile('./dev/public/win-index.html');
    }
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

ipcMain.on('正时起局', (e, data) => {
    currentPanjuData = data;
    const time = timeInfo(data.timeInfo.date, data.timeInfo.hour, false);
    if (data.paipanMethod == '飞盘') {
        const paipan = paiFeiPan(time.jieqi, time.ri, time.shi);
        const paiPanResult = {
            time: time,
            paipan: paipan,
            hour: data.timeInfo.hour,
        };
        e.reply('current panju data', data);
        e.reply('飞盘排盘', paiPanResult);
    } else if (data.paipanMethod == '转盘') {
        const paipan = paiZhuanPan(time.jieqi, time.ri, time.shi);
        const paiPanResult = {
            time: time,
            paipan: paipan,
            hour: data.timeInfo.hour,
        };
        e.reply('current panju data', data);
        e.reply('传统转盘排盘', paiPanResult);
    } else if (data.paipanMethod == '星飞门转') {
        const paipan = xingfeiMenzhuan(time.jieqi, time.ri, time.shi);
        const paiPanResult = {
            time: time,
            paipan: paipan,
            hour: data.timeInfo.hour,
        };
        e.reply('current panju data', data);
        e.reply('星飞门转', paiPanResult);
    }
});

ipcMain.on('报数起局', (e, data) => {
    currentPanjuData = data;
    const time = timeInfo(
        data.timeInfo.date,
        data.timeInfo.hour,
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
        e.reply('current panju data', data);
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
        e.reply('current panju data', data);
        e.reply('传统转盘排盘', paiPanResult);
    } else if (data.paipanMethod == '星飞门转') {
        const paipan = xingfeiMenzhuan(
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
        e.reply('current panju data', data);
        e.reply('星飞门转', paiPanResult);
    }
});

ipcMain.on('screenshot', (e, data) => {
    desktopCapturer
        .getSources({
            types: ['window'],
            thumbnailSize: { width: 8000, height: 8000 },
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

function getFileName(customFileName) {
    if (customFileName != 'none') {
        for (let i = 0; i < customFileName.length; i++) {
            if (customFileName[i] == '\n') {
                customFileName = customFileName.slice(0, i);
                return customFileName;
            }
        }
    } else {
        const date = moment().format('YYYY-MM-DD_HH-mm-ss');
        return `奇门预测截图_${date}`;
    }
}

ipcMain.on('export saved data', (e, data) => {
    data = JSON.stringify(data);
    const filePath = path.join(app.getPath('desktop'), '奇门盘局记录.json');
    fs.writeFile(filePath, data, (err) => {
        if (err) {
            e.reply('error', err);
        }
    });
});

ipcMain.on('import data', (e, data) => {
    dialog
        .showOpenDialog({
            properties: ['openFile'],
            filters: [{ name: 'JSON Files', extensions: ['json'] }],
        })
        .then((result) => {
            if (!result.canceled) {
                const filePath = result.filePaths[0];
                fs.readFile(filePath, 'utf-8', (err, data) => {
                    if (err) {
                        e.reply('error', err);
                        return;
                    }
                    const contents = JSON.parse(data);
                    let localData = [];
                    for (let i = contents.length - 1; i >= 0; i--) {
                        localData.unshift(contents[i]);
                    }
                    e.reply('import data to render process', localData);
                });
            }
        })
        .catch((err) => {
            e.reply('error', err);
        });
});
