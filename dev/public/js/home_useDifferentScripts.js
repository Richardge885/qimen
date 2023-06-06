function choosePaiPanScript() {
    if (document.querySelector('[data-paipanIpc]') !== null) {
        document.querySelector('[data-paipanIpc]').remove();
    }
    const scriptElement = document.createElement('script');
    if (document.getElementById('home-paipanfangshi').value == '飞盘') {
        scriptElement.src = 'js/feipanIpc.js';
        scriptElement.setAttribute('data-paipanIpc', '');
        document.body.appendChild(scriptElement);
    } else if (
        document.getElementById('home-paipanfangshi').value == '传统转盘'
    ) {
        scriptElement.src = 'js/zhuanpanIpc.js';
        scriptElement.setAttribute('data-paipanIpc', '');
        document.body.appendChild(scriptElement);
    } else {
        scriptElement.src = 'js/fushiIpc.js';
        scriptElement.setAttribute('data-paipanIpc', '');
        document.body.appendChild(scriptElement);
    }
}

choosePaiPanScript();

document.getElementById('home-paipanfangshi').addEventListener('change', () => {
    choosePaiPanScript();
});
