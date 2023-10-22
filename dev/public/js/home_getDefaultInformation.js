if (localStorage.getItem('defaultInfo') == null) {
    const defaultInfo = {
        paipanMethod: '转盘',
        theme: '默认',
        feipanliuqin: '无',
        classicChinese: false,
        baoshuMethod: 'shichen',
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
    switch (JSON.parse(localStorage.getItem('defaultInfo')).baoshuMethod) {
        case 'jushu':
            document.getElementById('jushu').setAttribute('checked', '');
            break;
        case 'shichen':
            document.getElementById('shichen').setAttribute('checked', '');
            break;
        case 'zhichou':
            document.getElementById('zhichou').setAttribute('checked', '');
            break;
    }
}

changeBaoshuRadioInput();
