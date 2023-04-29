import { app, BrowserWindow, ipcMain } from 'electron';
import { char8, getCurrentDate } from './sizhu';

process.env.NODE_ENV = 'dev';

const isDev = process.env.NODE_ENV !== 'release' ? true : false;

// 主窗口
function createMainWindow() {
    const mainWindow = new BrowserWindow({
        width: 550,
        height: 870,
        resizable: isDev ? true : false,
        webPreferences: {
            nodeIntegration: true,
            preload: `${__dirname}/preload.js`,
            devTools: isDev ? true : false,
        },
    });
    mainWindow.webContents.openDevTools();
    mainWindow.loadFile('./dist/public/homepage.html');
    mainWindow.on('ready-to-show', mainWindow.show);
}

app.whenReady().then(createMainWindow);

app.on('window-all-closed', () => {
    app.quit();
});
