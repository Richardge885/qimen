if (localStorage.getItem('defaultInfo') == null) {
    const defaultInfo = {
        paipanMethod: '转盘',
        theme: '默认',
        feipanliuqin: false,
        liuqinSimplified: false,
    };
    localStorage.setItem('defaultInfo', JSON.stringify(defaultInfo));
    document.getElementById('home-paipanfangshi').value = defaultInfo.paipanMethod;
    document.getElementById('theme').value = defaultInfo.theme;
    changeBaoshuRadioInput();
} else {
    const defaultInfo = JSON.parse(localStorage.getItem('defaultInfo'));
    document.getElementById('home-paipanfangshi').value = defaultInfo.paipanMethod;
    document.getElementById('theme').value = defaultInfo.theme;
    if (defaultInfo.feipanliuqin) {
        document.getElementById('liuqin-toggle').checked = true;
    } else {
        document.getElementById('liuqin-toggle').checked = false;
    }
    if (defaultInfo.liuqinSimplified) {
        document.getElementById('liuqin-toggle-simplified').checked = true;
    } else {
        document.getElementById('liuqin-toggle-simplified').checked = false;
    }
    changeBaoshuRadioInput();
}

function changeBaoshuRadioInput() {
    if (document.getElementById('home-paipanfangshi').value == '飞盘') {
        document.getElementById('jushu').setAttribute('checked', '');
    } else if (
        document.getElementById('home-paipanfangshi').value == '转盘' ||
        document.getElementById('home-paipanfangshi').value == '星飞门转'
    ) {
        document.getElementById('shichen').setAttribute('checked', '');
    }
}

changeBaoshuRadioInput();
