if (localStorage.getItem('defaultInfo') == null) {
    // 初次使用软件时
    const defaultInfo = {
        paipanMethod: '转盘', // 默认排盘方式
        theme: '默认', // 默认主体颜色
        feipanliuqin: '无', // 是否使用启用飞盘六亲提示
        classicChinese: false, // 是否使用繁体盘面
        baoshuMethod: 'shichen', // 报数方式默认为时辰
    };
    localStorage.setItem('defaultInfo', JSON.stringify(defaultInfo));
    document.getElementById('home-paipanfangshi').value = defaultInfo.paipanMethod;
    document.getElementById('theme').value = defaultInfo.theme;
    changeBaoshuRadioInput();
} else {
    // 非初次使用软件时
    const defaultInfo = JSON.parse(localStorage.getItem('defaultInfo'));
    document.getElementById('home-paipanfangshi').value = defaultInfo.paipanMethod;
    document.getElementById('theme').value = defaultInfo.theme;
    document.getElementById('liuqin').value = defaultInfo.feipanliuqin;
    if (defaultInfo.classicChinese) {
        document.getElementById('classic-chinese').checked = true;
    }
    changeBaoshuRadioInput();
}

/**
 * 根据 (defaultInfo.baoshuMethod) 报数方式修改报数方式
 */
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

// changeBaoshuRadioInput();
