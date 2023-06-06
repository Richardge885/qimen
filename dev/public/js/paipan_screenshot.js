// Function to take a screenshot and save it as a JPG file
async function takeScreenshot() {
    let filename = document.getElementById('paipan-pizhu').value;
    if (filename == '') {
        filename = 'none';
    }
    console.log(filename);
    ipcRenderer.send('screenshot', filename);
}
