if (localStorage.getItem('defaultInfo') == null) {
    const defaultInfo = {
        paipanMethod: '转盘',
        theme: '默认',
        feipanliuqin: '无',
        classicChinese: false,
    };
    localStorage.setItem('defaultInfo', JSON.stringify(defaultInfo));
    document.getElementById('home-paipanfangshi').value = defaultInfo.paipanMethod;
    document.getElementById('theme').value = defaultInfo.theme;
    changeBaoshuRadioInput();
} else {
    const defaultInfo = JSON.parse(localStorage.getItem('defaultInfo'));
    document.getElementById('home-paipanfangshi').value = defaultInfo.paipanMethod;
    document.getElementById('theme').value = defaultInfo.theme;
    document.getElementById('liuqin').value = defaultInfo.feipanliuqin;
    if (defaultInfo.classicChinese) {
        document.getElementById('classic-chinese').checked = true;
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
