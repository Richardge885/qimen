"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
process.env.NODE_ENV = 'dev';
const isDev = process.env.NODE_ENV !== 'release' ? true : false;
function createMainWindow() {
    const mainWindow = new electron_1.BrowserWindow({
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
electron_1.app.whenReady().then(createMainWindow);
electron_1.app.on('window-all-closed', () => {
    electron_1.app.quit();
});
