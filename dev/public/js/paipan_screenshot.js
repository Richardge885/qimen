const { ipcRenderer } = require('electron');
// Function to take a screenshot and save it as a JPG file
document.getElementById('screenshot-btn').addEventListener('click', takeScreenshot);
async function takeScreenshot() {
    let filename = document.getElementById('paipan-pizhu').value;
    if (filename == '') {
        filename = 'none';
    }
    ipcRenderer.send('screenshot', filename);
}
