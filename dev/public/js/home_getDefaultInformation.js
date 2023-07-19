if (localStorage.getItem('defaultInfo') == null) {
    let defaultInfo = {
        paipanMethod: '转盘',
        theme: '默认',
    };
    defaultInfo = JSON.stringify(defaultInfo);
    localStorage.setItem('defaultInfo', defaultInfo);
} else {
    const defaultInfo = JSON.parse(localStorage.getItem('defaultInfo'));
    document.getElementById('home-paipanfangshi').value = defaultInfo.paipanMethod;
    document.getElementById('theme').value = defaultInfo.theme;
}

function changeBaoshuRadioInput() {
    if (document.getElementById('home-paipanfangshi').value == '飞盘') {
        document.getElementById('jushu').setAttribute('checked', '');
    } else if (
        document.getElementById('home-paipanfangshi').value == '转盘' ||
        document.getElementById('home-paipanfangshi').value == '符使'
    ) {
        document.getElementById('shichen').setAttribute('checked', '');
    }
}

changeBaoshuRadioInput();
