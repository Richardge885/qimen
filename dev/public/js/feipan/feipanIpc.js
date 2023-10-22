const { ipcRenderer } = require('electron');

ipcRenderer.on('飞盘排盘', (e, data) => {
    const [year, month, day] = data.time.yangli.split('/').map((str) => parseInt(str));
    updateTimeInfo(data, year, month, day, data.hour);
    updateXunShou(data.paipan.xunshou);
    updateDun(data.paipan.dun);
    updateJushu(data.paipan.jushu);
    paiDiPanGan(data.paipan.dipangan);
    updateFuShi(data.paipan.fushi.zhifu, data.paipan.fushi.zhishi);
    updateWangShuai(data.paipan.wangshuai, data.paipan.dun);
    paiAnGanZhi(data.paipan.anganzhi, data.paipan.dun, data.paipan.dipangan, data.paipan.xunshou);
    paiJiuXing(document.getElementById('shi').innerHTML, data.paipan.dipangan, data.paipan.jiuxing);
    paiBaMen(data.paipan.bamen, document.getElementById('shi').innerHTML);
    paiTianPanGan(
        document.getElementById('shi').innerHTML,
        data.paipan.dipangan,
        data.paipan.dun,
        data.paipan.tianpangan,
    );
    paiTianPanShen(document.getElementById('shi').innerHTML, data.paipan.dun, data.paipan.dipangan);
    paiDiPanShen(data.paipan.dun, data.paipan.xunshou, data.paipan.dipangan);
    paiKongWang(
        data.paipan.kongwang,
        document.querySelectorAll('[data-tianpangan]'),
        document.querySelectorAll('[data-dipangan]'),
    );
    paiMaXing(data.paipan.maxing);
    wubuyushi();
    if (document.getElementById('theme').value == '五行颜色') {
        renderWuXingColor(
            data.paipan.fushi.zhishi,
            document.getElementById('shi').innerHTML,
            document.getElementById('ri').innerHTML,
        );
    } else {
        renderImportantColor(
            data.paipan.fushi.zhishi,
            document.getElementById('shi').innerHTML,
            document.getElementById('ri').innerHTML,
        );
    }

    // 是否显示六亲或十神
    switch (document.getElementById('liuqin').value) {
        case '六亲':
            paiLiuQin(document.getElementById('shi').innerText.charAt(0));
            break;
        case '十神':
            shishen(document.getElementById('shi').innerText.charAt(0));
            break;
        case '六亲简化':
            paiLiuQinSimplified(document.getElementById('shi').innerText.charAt(0));
            break;
        case '十神简化':
            shishenSimplified(document.getElementById('shi').innerText.charAt(0));
            break;
        default:
            break;
    }
    // 繁体盘面
    if (document.getElementById('classic-chinese').checked) {
        classicChinese();
    }
    // 用于宫位弹窗提示
    feipan_info(info);
    if (document.getElementById('paipan-pizhu').value == '') {
        isFromData = false;
    }
    document.getElementById('paipan-pizhu').scrollTop = 0;
});

function updateTimeInfo(data, year, month, day, hour) {
    document.getElementById('nian').innerHTML = data.time.nian;
    document.getElementById('yue').innerHTML = data.time.yue;
    document.getElementById('ri').innerHTML = data.time.ri;
    document.getElementById('shi').innerHTML = data.time.shi;
    document.getElementById('year-number').innerHTML = year;
    document.getElementById('month-number').innerHTML = month;
    document.getElementById('date-number').innerHTML = day;
    document.getElementById('jieqi').innerHTML = data.time.jieqi;
    let index = document.getElementById('date-time').value.indexOf(':');
    hour = hour + document.getElementById('date-time').value.slice(index);
    document.getElementById('time-number').innerHTML = hour;
}

function updateXunShou(xunshou) {
    document.getElementById('paipan-xunshou').innerHTML = xunshou;
}

function updateDun(dun) {
    document.getElementById('paipan-dun').innerHTML = dun;
}

function updateJushu(jushu) {
    document.getElementById('paipan-jushu').innerHTML = jushu;
}

function paiDiPanGan(result) {
    const dipangan = document.querySelectorAll('[data-dipangan]');
    for (let i = 0; i < 9; i++) {
        dipangan[i].innerHTML = result[i];
    }
}

function updateFuShi(zhifu, zhishi) {
    document.getElementById('paipan-zhifu').innerHTML = zhifu;
    document.getElementById('paipan-zhishi').innerHTML = zhishi;
}

function paiAnGanZhi(anganzhi, dun, dipangan, xunshou) {
    const array = document.querySelectorAll('[data-anganzhi]');
    let start = 0;
    if (xunshou == '甲子') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '戊') {
                start = i;
            }
        }
    } else if (xunshou == '甲戌') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '己') {
                start = i;
            }
        }
    } else if (xunshou == '甲申') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '庚') {
                start = i;
            }
        }
    } else if (xunshou == '甲午') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '辛') {
                start = i;
            }
        }
    } else if (xunshou == '甲辰') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '壬') {
                start = i;
            }
        }
    } else if (xunshou == '甲寅') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '癸') {
                start = i;
            }
        }
    }
    let count = 0;
    if (dun == '阳') {
        for (let i = 0; i < array.length; i++) {
            const index = (i + start) % array.length;
            array[index].innerHTML = anganzhi[count];
            count++;
        }
    } else {
        start++;
        for (let i = array.length - 1; i >= 0; i--) {
            const index = (i + start) % array.length;
            array[index].innerHTML = anganzhi[count];
            count++;
        }
    }
}

function paiJiuXing(shigan, dipangan, jiuxing) {
    let array = document.querySelectorAll('[data-xing]');
    let count = 0;
    let start = 0;
    if (shigan == '甲子') {
        shigan = '戊';
    } else if (shigan == '甲戌') {
        shigan = '己';
    } else if (shigan == '甲申') {
        shigan = '庚';
    } else if (shigan == '甲午') {
        shigan = '辛';
    } else if (shigan == '甲辰') {
        shigan = '壬';
    } else if (shigan == '甲寅') {
        shigan = '癸';
    } else {
        shigan = shigan.charAt(0);
    }

    for (let i = 0; i < 9; i++) {
        if (dipangan[i] == shigan) {
            start = i;
        }
    }
    for (let i = 0; i < array.length; i++) {
        const index = (i + start) % array.length;
        array[index].innerHTML = jiuxing[count];
        count++;
    }
}

function paiTianPanGan(shigan, dipangan, dun, tianpangan) {
    let array = document.querySelectorAll('[data-tianpangan]');
    let count = 0;
    let start = 0;
    if (shigan == '甲子') {
        shigan = '戊';
    } else if (shigan == '甲戌') {
        shigan = '己';
    } else if (shigan == '甲申') {
        shigan = '庚';
    } else if (shigan == '甲午') {
        shigan = '辛';
    } else if (shigan == '甲辰') {
        shigan = '壬';
    } else if (shigan == '甲寅') {
        shigan = '癸';
    } else {
        shigan = shigan.charAt(0);
    }
    for (let i = 0; i < 9; i++) {
        if (dipangan[i] == shigan) {
            start = i;
        }
    }
    if (dun == '阳') {
        for (let i = 0; i < array.length; i++) {
            const index = (i + start) % array.length;
            array[index].innerHTML = tianpangan[count];
            count++;
        }
    } else {
        start++;
        for (let i = array.length - 1; i >= 0; i--) {
            const index = (i + start) % array.length;
            array[index].innerHTML = tianpangan[count];
            count++;
        }
    }
}

function paiBaMen(bamen, shizhi) {
    let array = document.querySelectorAll('[data-men]');
    let position = document.querySelectorAll('[data-anganzhi]');
    let count = 0;
    let start = 0;
    if (shizhi == '甲子') {
        shizhi = '酉';
    } else if (shizhi == '甲戌') {
        shizhi = '未';
    } else if (shizhi == '甲申') {
        shizhi = '巳';
    } else if (shizhi == '甲午') {
        shizhi = '卯';
    } else if (shizhi == '甲辰') {
        shizhi = '丑';
    } else if (shizhi == '甲寅') {
        shizhi = '亥';
    } else {
        shizhi = shizhi.charAt(1);
    }
    for (let i = 0; i < 9; i++) {
        if (position[i].innerHTML.charAt(1) == shizhi) {
            start = i;
        }
    }
    for (let i = 0; i < array.length; i++) {
        const index = (i + start) % array.length;
        array[index].innerHTML = bamen[count];
        count++;
    }
}

function paiTianPanShen(shigan, dun, dipangan) {
    let array = document.querySelectorAll('[data-tianpanshen]');
    let count = 0;
    let start = 0;
    if (shigan == '甲子') {
        shigan = '戊';
    } else if (shigan == '甲戌') {
        shigan = '己';
    } else if (shigan == '甲申') {
        shigan = '庚';
    } else if (shigan == '甲午') {
        shigan = '辛';
    } else if (shigan == '甲辰') {
        shigan = '壬';
    } else if (shigan == '甲寅') {
        shigan = '癸';
    } else {
        shigan = shigan.charAt(0);
    }
    for (let i = 0; i < 9; i++) {
        if (dipangan[i] == shigan) {
            start = i;
        }
    }
    if (dun == '阳') {
        const shen = ['值符', '螣蛇', '太阴', '六合', '勾陈', '太常', '朱雀', '九地', '九天'];
        for (let i = 0; i < array.length; i++) {
            const index = (i + start) % array.length;
            array[index].innerHTML = shen[count];
            count++;
        }
    } else {
        const shen = ['值符', '螣蛇', '太阴', '六合', '白虎', '太常', '玄武', '九地', '九天'];
        start++;
        for (let i = array.length - 1; i >= 0; i--) {
            const index = (i + start) % array.length;
            array[index].innerHTML = shen[count];
            count++;
        }
    }
}

function paiDiPanShen(dun, xunshou, dipangan) {
    let array = document.querySelectorAll('[data-dipanshen]');
    let start = 0;
    if (xunshou == '甲子') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '戊') {
                start = i;
            }
        }
    } else if (xunshou == '甲戌') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '己') {
                start = i;
            }
        }
    } else if (xunshou == '甲申') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '庚') {
                start = i;
            }
        }
    } else if (xunshou == '甲午') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '辛') {
                start = i;
            }
        }
    } else if (xunshou == '甲辰') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '壬') {
                start = i;
            }
        }
    } else if (xunshou == '甲寅') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '癸') {
                start = i;
            }
        }
    }
    let count = 0;
    if (dun == '阳') {
        const shen = ['值符', '螣蛇', '太阴', '六合', '勾陈', '太常', '朱雀', '九地', '九天'];
        for (let i = 0; i < array.length; i++) {
            const index = (i + start) % array.length;
            array[index].innerHTML = shen[count];
            count++;
        }
    } else {
        const shen = ['值符', '螣蛇', '太阴', '六合', '白虎', '太常', '玄武', '九地', '九天'];
        start++;
        for (let i = array.length - 1; i >= 0; i--) {
            const index = (i + start) % array.length;
            array[index].innerHTML = shen[count];
            count++;
        }
    }
}

function updateWangShuai(wangshuai, dun) {
    const gongwei = document.querySelectorAll('[data-wangshuai]');
    for (let i = 0; i < 9; i++) {
        gongwei[i].innerHTML = wangshuai[i];
    }
    if (dun == '阳') {
        gongwei[4].innerHTML = gongwei[7].innerHTML;
    } else {
        gongwei[4].innerHTML = gongwei[1].innerHTML;
    }
}

function paiKongWang(kongwang, tianpangan, dipangan) {
    const gongwei = document.querySelectorAll('[data-kongwang]');
    if (kongwang.gongwei.length == 2) {
        gongwei[kongwang.gongwei[0]].innerHTML = '〇';
        gongwei[kongwang.gongwei[1]].innerHTML = '〇';
        for (let i = 0; i < 9; i++) {
            if (tianpangan[i].innerHTML == kongwang.liuyi) {
                // document.querySelectorAll('[data-tianpanyikong]')[i].innerHTML = '&#9826';
                document.querySelectorAll('[data-tianpanyikong]')[i].innerHTML = '&#9826';
            }
        }
        for (let i = 0; i < 9; i++) {
            if (dipangan[i].innerHTML == kongwang.liuyi) {
                document.querySelectorAll('[data-dipanyikong]')[i].innerHTML = '&#9826';
            }
        }
    } else {
        gongwei[kongwang.gongwei[0]].innerHTML = '〇';
        for (let i = 0; i < 9; i++) {
            if (tianpangan[i].innerHTML == kongwang.liuyi) {
                document.querySelectorAll('[data-tianpanyikong]')[i].innerHTML = '&#9826';
            }
        }
        for (let i = 0; i < 9; i++) {
            if (dipangan[i].innerHTML == kongwang.liuyi) {
                document.querySelectorAll('[data-dipanyikong]')[i].innerHTML = '&#9826';
            }
        }
    }
}

function paiMaXing(maxing) {
    const gongwei = document.querySelectorAll('[data-maxing]');
    for (let i = 0; i < 9; i++) {
        if (i == maxing) {
            gongwei[i].innerHTML = '马';
            return;
        }
    }
}

function wubuyushi() {
    const shigan = document.getElementById('shi').innerHTML.charAt(0);
    const rigan = document.getElementById('ri').innerHTML.charAt(0);
    if (shigan == '甲' && rigan == '戊') {
        document.getElementById('paipan-wubuyushi').innerHTML = '五不遇时';
    } else if (shigan == '庚' && rigan == '甲') {
        document.getElementById('paipan-wubuyushi').innerHTML = '五不遇时';
    } else if (shigan == '丙' && rigan == '庚 ') {
        document.getElementById('paipan-wubuyushi').innerHTML = '五不遇时';
    } else if (shigan == '壬' && rigan == '丙') {
        document.getElementById('paipan-wubuyushi').innerHTML = '五不遇时';
    } else if (shigan == '戊' && rigan == '壬') {
        document.getElementById('paipan-wubuyushi').innerHTML = '五不遇时';
    } else if (shigan == '乙' && rigan == '己') {
        document.getElementById('paipan-wubuyushi').innerHTML = '五不遇时';
    } else if (shigan == '己' && rigan == '癸') {
        document.getElementById('paipan-wubuyushi').innerHTML = '五不遇时';
    } else if (shigan == '癸' && rigan == '丁') {
        document.getElementById('paipan-wubuyushi').innerHTML = '五不遇时';
    } else if (shigan == '丁' && rigan == '辛') {
        document.getElementById('paipan-wubuyushi').innerHTML = '五不遇时';
    } else if (shigan == '辛' && rigan == '乙') {
        document.getElementById('paipan-wubuyushi').innerHTML = '五不遇时';
    }
}

function renderImportantColor(zhishi, shigan, rigan) {
    const tianpanshen = document.querySelectorAll('[data-tianpanshen]');
    const dipanshen = document.querySelectorAll('[data-dipanshen]');
    const bamen = document.querySelectorAll('[data-men]');
    const tianpangan = document.querySelectorAll('[data-tianpangan]');
    const dipangan = document.querySelectorAll('[data-dipangan]');
    if (shigan == '甲子') {
        shigan = '戊';
    } else if (shigan == '甲戌') {
        shigan = '己';
    } else if (shigan == '甲申') {
        shigan = '庚';
    } else if (shigan == '甲午') {
        shigan = '辛';
    } else if (shigan == '甲辰') {
        shigan = '壬';
    } else if (shigan == '甲寅') {
        shigan = '癸';
    } else {
        shigan = shigan.charAt(0);
    }

    if (rigan == '甲子') {
        rigan = '戊';
    } else if (rigan == '甲戌') {
        rigan = '己';
    } else if (rigan == '甲申') {
        rigan = '庚';
    } else if (rigan == '甲午') {
        rigan = '辛';
    } else if (rigan == '甲辰') {
        rigan = '壬';
    } else if (rigan == '甲寅') {
        rigan = '癸';
    } else {
        rigan = rigan.charAt(0);
    }

    for (let i = 0; i < 9; i++) {
        if (tianpanshen[i].innerHTML == '值符') {
            tianpanshen[i].classList.add('important');
        }
    }
    for (let i = 0; i < 9; i++) {
        if (dipanshen[i].innerHTML == '值符') {
            dipanshen[i].classList.add('important');
        }
    }
    for (let i = 0; i < 9; i++) {
        if (bamen[i].innerHTML == zhishi) {
            bamen[i].classList.add('important');
        }
    }
    for (let i = 0; i < 9; i++) {
        if (tianpangan[i].innerHTML == shigan) {
            tianpangan[i].classList.add('important');
        }
        if (dipangan[i].innerHTML == shigan) {
            dipangan[i].classList.add('important');
        }
    }
    for (let i = 0; i < 9; i++) {
        if (tianpangan[i].innerHTML == rigan) {
            tianpangan[i].classList.add('rigan');
        }
        if (dipangan[i].innerHTML == rigan) {
            dipangan[i].classList.add('rigan');
        }
    }
}

function renderWuXingColor(zhishi, shi, ri) {
    switch (shi) {
        case '甲子':
            shi = '戊';
            break;
        case '甲戌':
            shi = '己';
            break;
        case '甲申':
            shi = '庚';
            break;
        case '甲午':
            shi = '辛';
            break;
        case '甲辰':
            shi = '壬';
            break;
        case '甲寅':
            shi = '癸';
            break;
    }
    switch (ri) {
        case '甲子':
            ri = '戊';
            break;
        case '甲戌':
            ri = '己';
            break;
        case '甲申':
            ri = '庚';
            break;
        case '甲午':
            ri = '辛';
            break;
        case '甲辰':
            ri = '壬';
            break;
        case '甲寅':
            ri = '癸';
            break;
    }
    document.querySelectorAll('[data-tianpangan]').forEach((element, index) => {
        if (element.innerText == shi.charAt(0)) {
            element.classList.add('highlight');
        }
        if (element.innerText == ri.charAt(0)) {
            element.classList.add('highlight-rigan');
        }
        switch (element.innerText) {
            case '乙':
                element.classList.add('mu');
                break;

            case '丙':
                element.classList.add('huo');
                break;
            case '丁':
                element.classList.add('huo');
                break;

            case '戊':
                element.classList.add('tu');
                break;
            case '己':
                element.classList.add('tu');
                break;

            case '庚':
                element.classList.add('jin');
                break;
            case '辛':
                element.classList.add('jin');
                break;

            case '壬':
                element.classList.add('shui');
                break;
            case '癸':
                element.classList.add('shui');
                break;
        }
    });
    document.querySelectorAll('[data-dipangan]').forEach((element, index) => {
        if (element.innerText == ri.charAt(0)) {
            element.classList.add('highlight-rigan');
        }
        switch (element.innerText) {
            case '乙':
                element.classList.add('mu');
                break;

            case '丙':
                element.classList.add('huo');
                break;
            case '丁':
                element.classList.add('huo');
                break;

            case '戊':
                element.classList.add('tu');
                break;
            case '己':
                element.classList.add('tu');
                break;

            case '庚':
                element.classList.add('jin');
                break;
            case '辛':
                element.classList.add('jin');
                break;

            case '壬':
                element.classList.add('shui');
                break;
            case '癸':
                element.classList.add('shui');
                break;
        }
    });
    document.querySelectorAll('[data-men]').forEach((element, index) => {
        if (element.innerText == zhishi) {
            element.classList.add('highlight');
        }
        switch (element.innerText) {
            case '休门':
                element.classList.add('shui');
                break;
            case '生门':
                element.classList.add('tu');
                break;
            case '伤门':
                element.classList.add('mu');
                break;
            case '杜门':
                element.classList.add('mu');
                break;
            case '景门':
                element.classList.add('huo');
                break;
            case '死门':
                element.classList.add('tu');
                break;
            case '惊门':
                element.classList.add('jin');
                break;
            case '开门':
                element.classList.add('jin');
                break;
        }
    });
    document.querySelectorAll('[data-xing]').forEach((element, index) => {
        switch (element.innerText) {
            case '天蓬':
                element.classList.add('shui');
                break;
            case '天任':
                element.classList.add('tu');
                break;
            case '天冲':
                element.classList.add('mu');
                break;
            case '天辅':
                element.classList.add('mu');
                break;
            case '天英':
                element.classList.add('huo');
                break;
            case '天芮':
                element.classList.add('tu');
                break;
            case '天柱':
                element.classList.add('jin');
                break;
            case '天心':
                element.classList.add('jin');
                break;
            case '天禽':
                element.classList.add('tu');
                break;
        }
    });
    document.querySelectorAll('[data-tianpanshen]').forEach((element, index) => {
        if (element.innerText == '值符') {
            element.classList.add('highlight');
        }
        switch (element.innerText) {
            case '值符':
                element.classList.add('mu');
                break;
            case '螣蛇':
                element.classList.add('huo');
                break;
            case '太阴':
                element.classList.add('jin');
                break;
            case '六合':
                element.classList.add('mu');
                break;
            case '白虎':
                element.classList.add('jin');
                break;
            case '太常':
                element.classList.add('tu');
                break;
            case '玄武':
                element.classList.add('shui');
                break;
            case '九地':
                element.classList.add('tu');
                break;
            case '九天':
                element.classList.add('jin');
                break;
            case '朱雀':
                element.classList.add('huo');
                break;
            case '勾陈':
                element.classList.add('tu');
                break;
        }
    });
    document.querySelectorAll('[data-dipanshen]').forEach((element, index) => {
        if (element.innerText == '值符') {
            element.classList.add('highlight');
        }
        switch (element.innerText) {
            case '值符':
                element.classList.add('mu');
                break;
            case '螣蛇':
                element.classList.add('huo');
                break;
            case '太阴':
                element.classList.add('jin');
                break;
            case '六合':
                element.classList.add('mu');
                break;
            case '白虎':
                element.classList.add('jin');
                break;
            case '太常':
                element.classList.add('tu');
                break;
            case '玄武':
                element.classList.add('shui');
                break;
            case '九地':
                element.classList.add('tu');
                break;
            case '九天':
                element.classList.add('jin');
                break;
            case '朱雀':
                element.classList.add('huo');
                break;
            case '勾陈':
                element.classList.add('tu');
                break;
        }
    });
    document.querySelectorAll('[data-anganzhi]').forEach((element, index) => {
        element.classList.add('anganzhi-color');
    });

    let niangan = document.getElementById('nian').innerText.charAt(0);
    let nianzhi = document.getElementById('nian').innerText.charAt(1);
    let yuegan = document.getElementById('yue').innerText.charAt(0);
    let yuezhi = document.getElementById('yue').innerText.charAt(1);
    let rigan = document.getElementById('ri').innerText.charAt(0);
    let rizhi = document.getElementById('ri').innerText.charAt(1);
    let shigan = document.getElementById('shi').innerText.charAt(0);
    let shizhi = document.getElementById('shi').innerText.charAt(1);
    switch (niangan) {
        case '甲':
            niangan = '<span style="color:#008200">甲</span>';
            break;
        case '乙':
            niangan = '<span style="color:#008200">乙</span>';
            break;

        case '丙':
            niangan = '<span style="color:#fc0003">丙</span>';
            break;
        case '丁':
            niangan = '<span style="color:#fc0003">丁</span>';
            break;

        case '戊':
            niangan = '<span style="color:#9c4f01">戊</span>';
            break;
        case '己':
            niangan = '<span style="color:#9c4f01">己</span>';
            break;

        case '庚':
            niangan = '<span style="color:#fe8106">庚</span>';
            break;
        case '辛':
            niangan = '<span style="color:#fe8106">辛</span>';
            break;

        case '壬':
            niangan = '<span style="color:#0401b3">壬</span>';
            break;
        case '癸':
            niangan = '<span style="color:#0401b3">癸</span>';
            break;
    }
    switch (yuegan) {
        case '甲':
            yuegan = '<span style="color:#008200">甲</span>';
            break;
        case '乙':
            yuegan = '<span style="color:#008200">乙</span>';
            break;

        case '丙':
            yuegan = '<span style="color:#fc0003">丙</span>';
            break;
        case '丁':
            yuegan = '<span style="color:#fc0003">丁</span>';
            break;

        case '戊':
            yuegan = '<span style="color:#9c4f01">戊</span>';
            break;
        case '己':
            yuegan = '<span style="color:#9c4f01">己</span>';
            break;

        case '庚':
            yuegan = '<span style="color:#fe8106">庚</span>';
            break;
        case '辛':
            yuegan = '<span style="color:#fe8106">辛</span>';
            break;

        case '壬':
            yuegan = '<span style="color:#0401b3">壬</span>';
            break;
        case '癸':
            yuegan = '<span style="color:#0401b3">癸</span>';
            break;
    }
    switch (rigan) {
        case '甲':
            rigan = '<span style="color:#008200">甲</span>';
            break;
        case '乙':
            rigan = '<span style="color:#008200">乙</span>';
            break;

        case '丙':
            rigan = '<span style="color:#fc0003">丙</span>';
            break;
        case '丁':
            rigan = '<span style="color:#fc0003">丁</span>';
            break;

        case '戊':
            rigan = '<span style="color:#9c4f01">戊</span>';
            break;
        case '己':
            rigan = '<span style="color:#9c4f01">己</span>';
            break;

        case '庚':
            rigan = '<span style="color:#fe8106">庚</span>';
            break;
        case '辛':
            rigan = '<span style="color:#fe8106">辛</span>';
            break;

        case '壬':
            rigan = '<span style="color:#0401b3">壬</span>';
            break;
        case '癸':
            rigan = '<span style="color:#0401b3">癸</span>';
            break;
    }
    switch (shigan) {
        case '甲':
            shigan = '<span style="color:#008200">甲</span>';
            break;
        case '乙':
            shigan = '<span style="color:#008200">乙</span>';
            break;

        case '丙':
            shigan = '<span style="color:#fc0003">丙</span>';
            break;
        case '丁':
            shigan = '<span style="color:#fc0003">丁</span>';
            break;

        case '戊':
            shigan = '<span style="color:#9c4f01">戊</span>';
            break;
        case '己':
            shigan = '<span style="color:#9c4f01">己</span>';
            break;

        case '庚':
            shigan = '<span style="color:#fe8106">庚</span>';
            break;
        case '辛':
            shigan = '<span style="color:#fe8106">辛</span>';
            break;

        case '壬':
            shigan = '<span style="color:#0401b3">壬</span>';
            break;
        case '癸':
            shigan = '<span style="color:#0401b3">癸</span>';
            break;
    }
    switch (nianzhi) {
        case '寅':
            nianzhi = '<span style="color:#008200">寅</span>';
            break;
        case '卯':
            nianzhi = '<span style="color:#008200">卯</span>';
            break;

        case '巳':
            nianzhi = '<span style="color:#fc0003">巳</span>';
            break;
        case '午':
            nianzhi = '<span style="color:#fc0003">午</span>';
            break;

        case '辰':
            nianzhi = '<span style="color:#9c4f01">辰</span>';
            break;
        case '戌':
            nianzhi = '<span style="color:#9c4f01">戌</span>';
            break;
        case '丑':
            nianzhi = '<span style="color:#9c4f01">丑</span>';
            break;
        case '未':
            nianzhi = '<span style="color:#9c4f01">未</span>';
            break;

        case '申':
            nianzhi = '<span style="color:#fe8106">申</span>';
            break;
        case '酉':
            nianzhi = '<span style="color:#fe8106">酉</span>';
            break;

        case '亥':
            nianzhi = '<span style="color:#0401b3">亥</span>';
            break;
        case '子':
            nianzhi = '<span style="color:#0401b3">子</span>';
            break;
    }
    switch (yuezhi) {
        case '寅':
            yuezhi = '<span style="color:#008200">寅</span>';
            break;
        case '卯':
            yuezhi = '<span style="color:#008200">卯</span>';
            break;

        case '巳':
            yuezhi = '<span style="color:#fc0003">巳</span>';
            break;
        case '午':
            yuezhi = '<span style="color:#fc0003">午</span>';
            break;

        case '辰':
            yuezhi = '<span style="color:#9c4f01">辰</span>';
            break;
        case '戌':
            yuezhi = '<span style="color:#9c4f01">戌</span>';
            break;
        case '丑':
            yuezhi = '<span style="color:#9c4f01">丑</span>';
            break;
        case '未':
            yuezhi = '<span style="color:#9c4f01">未</span>';
            break;

        case '申':
            yuezhi = '<span style="color:#fe8106">申</span>';
            break;
        case '酉':
            yuezhi = '<span style="color:#fe8106">酉</span>';
            break;

        case '亥':
            yuezhi = '<span style="color:#0401b3">亥</span>';
            break;
        case '子':
            yuezhi = '<span style="color:#0401b3">子</span>';
            break;
    }
    switch (rizhi) {
        case '寅':
            rizhi = '<span style="color:#008200">寅</span>';
            break;
        case '卯':
            rizhi = '<span style="color:#008200">卯</span>';
            break;

        case '巳':
            rizhi = '<span style="color:#fc0003">巳</span>';
            break;
        case '午':
            rizhi = '<span style="color:#fc0003">午</span>';
            break;

        case '辰':
            rizhi = '<span style="color:#9c4f01">辰</span>';
            break;
        case '戌':
            rizhi = '<span style="color:#9c4f01">戌</span>';
            break;
        case '丑':
            rizhi = '<span style="color:#9c4f01">丑</span>';
            break;
        case '未':
            rizhi = '<span style="color:#9c4f01">未</span>';
            break;

        case '申':
            rizhi = '<span style="color:#fe8106">申</span>';
            break;
        case '酉':
            rizhi = '<span style="color:#fe8106">酉</span>';
            break;

        case '亥':
            rizhi = '<span style="color:#0401b3">亥</span>';
            break;
        case '子':
            rizhi = '<span style="color:#0401b3">子</span>';
            break;
    }
    switch (shizhi) {
        case '寅':
            shizhi = '<span style="color:#008200">寅</span>';
            break;
        case '卯':
            shizhi = '<span style="color:#008200">卯</span>';
            break;

        case '巳':
            shizhi = '<span style="color:#fc0003">巳</span>';
            break;
        case '午':
            shizhi = '<span style="color:#fc0003">午</span>';
            break;

        case '辰':
            shizhi = '<span style="color:#9c4f01">辰</span>';
            break;
        case '戌':
            shizhi = '<span style="color:#9c4f01">戌</span>';
            break;
        case '丑':
            shizhi = '<span style="color:#9c4f01">丑</span>';
            break;
        case '未':
            shizhi = '<span style="color:#9c4f01">未</span>';
            break;

        case '申':
            shizhi = '<span style="color:#fe8106">申</span>';
            break;
        case '酉':
            shizhi = '<span style="color:#fe8106">酉</span>';
            break;

        case '亥':
            shizhi = '<span style="color:#0401b3">亥</span>';
            break;
        case '子':
            shizhi = '<span style="color:#0401b3">子</span>';
            break;
    }
    document.getElementById('nian').innerHTML = niangan + nianzhi;
    document.getElementById('yue').innerHTML = yuegan + yuezhi;
    document.getElementById('ri').innerHTML = rigan + rizhi;
    document.getElementById('shi').innerHTML = shigan + shizhi;
}

function paiLiuQin(shigan) {
    const tianpangan = document.querySelectorAll('[data-tianpangan]');
    const dipangan = document.querySelectorAll('[data-dipangan]');
    const tianpanliuqin = document.querySelectorAll('[data-tianpanliuqin]');
    const dipanliuqin = document.querySelectorAll('[data-dipanliuqin]');
    const fumu = '父母';
    const xiongdi = '兄弟';
    const zisun = '子孙';
    const qicai = '妻财';
    const guangui = '官鬼';
    tianpangan.forEach((element, index) => {
        if (shigan == '甲' || shigan == '乙') {
            if (element.innerText == '甲' || element.innerText == '乙') {
                tianpanliuqin[index].innerText = xiongdi;
            } else if (element.innerText == '丙' || element.innerText == '丁') {
                tianpanliuqin[index].innerText = zisun;
            } else if (element.innerText == '戊' || element.innerText == '己') {
                tianpanliuqin[index].innerText = qicai;
            } else if (element.innerText == '庚' || element.innerText == '辛') {
                tianpanliuqin[index].innerText = guangui;
            } else if (element.innerText == '壬' || element.innerText == '癸') {
                tianpanliuqin[index].innerText = fumu;
            }
        } else if (shigan == '丙' || shigan == '丁') {
            if (element.innerText == '甲' || element.innerText == '乙') {
                tianpanliuqin[index].innerText = fumu;
            } else if (element.innerText == '丙' || element.innerText == '丁') {
                tianpanliuqin[index].innerText = xiongdi;
            } else if (element.innerText == '戊' || element.innerText == '己') {
                tianpanliuqin[index].innerText = zisun;
            } else if (element.innerText == '庚' || element.innerText == '辛') {
                tianpanliuqin[index].innerText = qicai;
            } else if (element.innerText == '壬' || element.innerText == '癸') {
                tianpanliuqin[index].innerText = guangui;
            }
        } else if (shigan == '戊' || shigan == '己') {
            if (element.innerText == '甲' || element.innerText == '乙') {
                tianpanliuqin[index].innerText = guangui;
            } else if (element.innerText == '丙' || element.innerText == '丁') {
                tianpanliuqin[index].innerText = fumu;
            } else if (element.innerText == '戊' || element.innerText == '己') {
                tianpanliuqin[index].innerText = xiongdi;
            } else if (element.innerText == '庚' || element.innerText == '辛') {
                tianpanliuqin[index].innerText = zisun;
            } else if (element.innerText == '壬' || element.innerText == '癸') {
                tianpanliuqin[index].innerText = qicai;
            }
        } else if (shigan == '庚' || shigan == '辛') {
            if (element.innerText == '甲' || element.innerText == '乙') {
                tianpanliuqin[index].innerText = qicai;
            } else if (element.innerText == '丙' || element.innerText == '丁') {
                tianpanliuqin[index].innerText = guangui;
            } else if (element.innerText == '戊' || element.innerText == '己') {
                tianpanliuqin[index].innerText = fumu;
            } else if (element.innerText == '庚' || element.innerText == '辛') {
                tianpanliuqin[index].innerText = xiongdi;
            } else if (element.innerText == '壬' || element.innerText == '癸') {
                tianpanliuqin[index].innerText = zisun;
            }
        } else if (shigan == '壬' || shigan == '癸') {
            if (element.innerText == '甲' || element.innerText == '乙') {
                tianpanliuqin[index].innerText = zisun;
            } else if (element.innerText == '丙' || element.innerText == '丁') {
                tianpanliuqin[index].innerText = qicai;
            } else if (element.innerText == '戊' || element.innerText == '己') {
                tianpanliuqin[index].innerText = guangui;
            } else if (element.innerText == '庚' || element.innerText == '辛') {
                tianpanliuqin[index].innerText = fumu;
            } else if (element.innerText == '壬' || element.innerText == '癸') {
                tianpanliuqin[index].innerText = xiongdi;
            }
        }
    });
    dipangan.forEach((element, index) => {
        if (shigan == '甲' || shigan == '乙') {
            if (element.innerText == '甲' || element.innerText == '乙') {
                dipanliuqin[index].innerText = xiongdi;
            } else if (element.innerText == '丙' || element.innerText == '丁') {
                dipanliuqin[index].innerText = zisun;
            } else if (element.innerText == '戊' || element.innerText == '己') {
                dipanliuqin[index].innerText = qicai;
            } else if (element.innerText == '庚' || element.innerText == '辛') {
                dipanliuqin[index].innerText = guangui;
            } else if (element.innerText == '壬' || element.innerText == '癸') {
                dipanliuqin[index].innerText = fumu;
            }
        } else if (shigan == '丙' || shigan == '丁') {
            if (element.innerText == '甲' || element.innerText == '乙') {
                dipanliuqin[index].innerText = fumu;
            } else if (element.innerText == '丙' || element.innerText == '丁') {
                dipanliuqin[index].innerText = xiongdi;
            } else if (element.innerText == '戊' || element.innerText == '己') {
                dipanliuqin[index].innerText = zisun;
            } else if (element.innerText == '庚' || element.innerText == '辛') {
                dipanliuqin[index].innerText = qicai;
            } else if (element.innerText == '壬' || element.innerText == '癸') {
                dipanliuqin[index].innerText = guangui;
            }
        } else if (shigan == '戊' || shigan == '己') {
            if (element.innerText == '甲' || element.innerText == '乙') {
                dipanliuqin[index].innerText = guangui;
            } else if (element.innerText == '丙' || element.innerText == '丁') {
                dipanliuqin[index].innerText = fumu;
            } else if (element.innerText == '戊' || element.innerText == '己') {
                dipanliuqin[index].innerText = xiongdi;
            } else if (element.innerText == '庚' || element.innerText == '辛') {
                dipanliuqin[index].innerText = zisun;
            } else if (element.innerText == '壬' || element.innerText == '癸') {
                dipanliuqin[index].innerText = qicai;
            }
        } else if (shigan == '庚' || shigan == '辛') {
            if (element.innerText == '甲' || element.innerText == '乙') {
                dipanliuqin[index].innerText = qicai;
            } else if (element.innerText == '丙' || element.innerText == '丁') {
                dipanliuqin[index].innerText = guangui;
            } else if (element.innerText == '戊' || element.innerText == '己') {
                dipanliuqin[index].innerText = fumu;
            } else if (element.innerText == '庚' || element.innerText == '辛') {
                dipanliuqin[index].innerText = xiongdi;
            } else if (element.innerText == '壬' || element.innerText == '癸') {
                dipanliuqin[index].innerText = zisun;
            }
        } else if (shigan == '壬' || shigan == '癸') {
            if (element.innerText == '甲' || element.innerText == '乙') {
                dipanliuqin[index].innerText = zisun;
            } else if (element.innerText == '丙' || element.innerText == '丁') {
                dipanliuqin[index].innerText = qicai;
            } else if (element.innerText == '戊' || element.innerText == '己') {
                dipanliuqin[index].innerText = guangui;
            } else if (element.innerText == '庚' || element.innerText == '辛') {
                dipanliuqin[index].innerText = fumu;
            } else if (element.innerText == '壬' || element.innerText == '癸') {
                dipanliuqin[index].innerText = xiongdi;
            }
        }
    });
}

function paiLiuQinSimplified(shigan) {
    const tianpangan = document.querySelectorAll('[data-tianpangan]');
    const dipangan = document.querySelectorAll('[data-dipangan]');
    const tianpanliuqin = document.querySelectorAll('[data-tianpanliuqin]');
    const dipanliuqin = document.querySelectorAll('[data-dipanliuqin]');
    const fumu = '父';
    const xiongdi = '兄';
    const zisun = '子';
    const qicai = '财';
    const guangui = '官';
    tianpangan.forEach((element, index) => {
        if (shigan == '甲' || shigan == '乙') {
            if (element.innerText == '甲' || element.innerText == '乙') {
                tianpanliuqin[index].innerText = xiongdi;
            } else if (element.innerText == '丙' || element.innerText == '丁') {
                tianpanliuqin[index].innerText = zisun;
            } else if (element.innerText == '戊' || element.innerText == '己') {
                tianpanliuqin[index].innerText = qicai;
            } else if (element.innerText == '庚' || element.innerText == '辛') {
                tianpanliuqin[index].innerText = guangui;
            } else if (element.innerText == '壬' || element.innerText == '癸') {
                tianpanliuqin[index].innerText = fumu;
            }
        } else if (shigan == '丙' || shigan == '丁') {
            if (element.innerText == '甲' || element.innerText == '乙') {
                tianpanliuqin[index].innerText = fumu;
            } else if (element.innerText == '丙' || element.innerText == '丁') {
                tianpanliuqin[index].innerText = xiongdi;
            } else if (element.innerText == '戊' || element.innerText == '己') {
                tianpanliuqin[index].innerText = zisun;
            } else if (element.innerText == '庚' || element.innerText == '辛') {
                tianpanliuqin[index].innerText = qicai;
            } else if (element.innerText == '壬' || element.innerText == '癸') {
                tianpanliuqin[index].innerText = guangui;
            }
        } else if (shigan == '戊' || shigan == '己') {
            if (element.innerText == '甲' || element.innerText == '乙') {
                tianpanliuqin[index].innerText = guangui;
            } else if (element.innerText == '丙' || element.innerText == '丁') {
                tianpanliuqin[index].innerText = fumu;
            } else if (element.innerText == '戊' || element.innerText == '己') {
                tianpanliuqin[index].innerText = xiongdi;
            } else if (element.innerText == '庚' || element.innerText == '辛') {
                tianpanliuqin[index].innerText = zisun;
            } else if (element.innerText == '壬' || element.innerText == '癸') {
                tianpanliuqin[index].innerText = qicai;
            }
        } else if (shigan == '庚' || shigan == '辛') {
            if (element.innerText == '甲' || element.innerText == '乙') {
                tianpanliuqin[index].innerText = qicai;
            } else if (element.innerText == '丙' || element.innerText == '丁') {
                tianpanliuqin[index].innerText = guangui;
            } else if (element.innerText == '戊' || element.innerText == '己') {
                tianpanliuqin[index].innerText = fumu;
            } else if (element.innerText == '庚' || element.innerText == '辛') {
                tianpanliuqin[index].innerText = xiongdi;
            } else if (element.innerText == '壬' || element.innerText == '癸') {
                tianpanliuqin[index].innerText = zisun;
            }
        } else if (shigan == '壬' || shigan == '癸') {
            if (element.innerText == '甲' || element.innerText == '乙') {
                tianpanliuqin[index].innerText = zisun;
            } else if (element.innerText == '丙' || element.innerText == '丁') {
                tianpanliuqin[index].innerText = qicai;
            } else if (element.innerText == '戊' || element.innerText == '己') {
                tianpanliuqin[index].innerText = guangui;
            } else if (element.innerText == '庚' || element.innerText == '辛') {
                tianpanliuqin[index].innerText = fumu;
            } else if (element.innerText == '壬' || element.innerText == '癸') {
                tianpanliuqin[index].innerText = xiongdi;
            }
        }
    });
    dipangan.forEach((element, index) => {
        if (shigan == '甲' || shigan == '乙') {
            if (element.innerText == '甲' || element.innerText == '乙') {
                dipanliuqin[index].innerText = xiongdi;
            } else if (element.innerText == '丙' || element.innerText == '丁') {
                dipanliuqin[index].innerText = zisun;
            } else if (element.innerText == '戊' || element.innerText == '己') {
                dipanliuqin[index].innerText = qicai;
            } else if (element.innerText == '庚' || element.innerText == '辛') {
                dipanliuqin[index].innerText = guangui;
            } else if (element.innerText == '壬' || element.innerText == '癸') {
                dipanliuqin[index].innerText = fumu;
            }
        } else if (shigan == '丙' || shigan == '丁') {
            if (element.innerText == '甲' || element.innerText == '乙') {
                dipanliuqin[index].innerText = fumu;
            } else if (element.innerText == '丙' || element.innerText == '丁') {
                dipanliuqin[index].innerText = xiongdi;
            } else if (element.innerText == '戊' || element.innerText == '己') {
                dipanliuqin[index].innerText = zisun;
            } else if (element.innerText == '庚' || element.innerText == '辛') {
                dipanliuqin[index].innerText = qicai;
            } else if (element.innerText == '壬' || element.innerText == '癸') {
                dipanliuqin[index].innerText = guangui;
            }
        } else if (shigan == '戊' || shigan == '己') {
            if (element.innerText == '甲' || element.innerText == '乙') {
                dipanliuqin[index].innerText = guangui;
            } else if (element.innerText == '丙' || element.innerText == '丁') {
                dipanliuqin[index].innerText = fumu;
            } else if (element.innerText == '戊' || element.innerText == '己') {
                dipanliuqin[index].innerText = xiongdi;
            } else if (element.innerText == '庚' || element.innerText == '辛') {
                dipanliuqin[index].innerText = zisun;
            } else if (element.innerText == '壬' || element.innerText == '癸') {
                dipanliuqin[index].innerText = qicai;
            }
        } else if (shigan == '庚' || shigan == '辛') {
            if (element.innerText == '甲' || element.innerText == '乙') {
                dipanliuqin[index].innerText = qicai;
            } else if (element.innerText == '丙' || element.innerText == '丁') {
                dipanliuqin[index].innerText = guangui;
            } else if (element.innerText == '戊' || element.innerText == '己') {
                dipanliuqin[index].innerText = fumu;
            } else if (element.innerText == '庚' || element.innerText == '辛') {
                dipanliuqin[index].innerText = xiongdi;
            } else if (element.innerText == '壬' || element.innerText == '癸') {
                dipanliuqin[index].innerText = zisun;
            }
        } else if (shigan == '壬' || shigan == '癸') {
            if (element.innerText == '甲' || element.innerText == '乙') {
                dipanliuqin[index].innerText = zisun;
            } else if (element.innerText == '丙' || element.innerText == '丁') {
                dipanliuqin[index].innerText = qicai;
            } else if (element.innerText == '戊' || element.innerText == '己') {
                dipanliuqin[index].innerText = guangui;
            } else if (element.innerText == '庚' || element.innerText == '辛') {
                dipanliuqin[index].innerText = fumu;
            } else if (element.innerText == '壬' || element.innerText == '癸') {
                dipanliuqin[index].innerText = xiongdi;
            }
        }
    });
    tianpanliuqin.forEach((element) => {
        element.classList.add('simplified-liuqin');
    });
    dipanliuqin.forEach((element) => {
        element.classList.add('simplified-liuqin');
    });
}

function shishen(shigan) {
    const tianpangan = document.querySelectorAll('[data-tianpangan]');
    const dipangan = document.querySelectorAll('[data-dipangan]');
    const tianpanliuqin = document.querySelectorAll('[data-tianpanliuqin]');
    const dipanliuqin = document.querySelectorAll('[data-dipanliuqin]');
    const zhengyin = '正印';
    const pianyin = '偏印';
    const zhengguan = '正官';
    const qisha = '七杀';
    const zhengcai = '正财';
    const piancai = '偏财';
    const shishen = '食神';
    const shangguan = '伤官';
    const bijian = '比肩';
    const jiecai = '劫财';
    tianpangan.forEach((element, index) => {
        switch (shigan) {
            case '甲':
                switch (element.innerText) {
                    case '甲':
                        tianpanliuqin[index].innerText = bijian;
                        break;
                    case '乙':
                        tianpanliuqin[index].innerText = jiecai;
                        break;
                    case '丙':
                        tianpanliuqin[index].innerText = shishen;
                        break;
                    case '丁':
                        tianpanliuqin[index].innerText = shangguan;
                        break;
                    case '戊':
                        tianpanliuqin[index].innerText = piancai;
                        break;
                    case '己':
                        tianpanliuqin[index].innerText = zhengcai;
                        break;
                    case '庚':
                        tianpanliuqin[index].innerText = qisha;
                        break;
                    case '辛':
                        tianpanliuqin[index].innerText = zhengguan;
                        break;
                    case '壬':
                        tianpanliuqin[index].innerText = pianyin;
                        break;
                    case '癸':
                        tianpanliuqin[index].innerText = zhengyin;
                        break;
                }
                break;
            case '乙':
                switch (element.innerText) {
                    case '甲':
                        tianpanliuqin[index].innerText = jiecai;
                        break;
                    case '乙':
                        tianpanliuqin[index].innerText = bijian;
                        break;
                    case '丙':
                        tianpanliuqin[index].innerText = shangguan;
                        break;
                    case '丁':
                        tianpanliuqin[index].innerText = shishen;
                        break;
                    case '戊':
                        tianpanliuqin[index].innerText = zhengcai;
                        break;
                    case '己':
                        tianpanliuqin[index].innerText = piancai;
                        break;
                    case '庚':
                        tianpanliuqin[index].innerText = zhengguan;
                        break;
                    case '辛':
                        tianpanliuqin[index].innerText = qisha;
                        break;
                    case '壬':
                        tianpanliuqin[index].innerText = zhengyin;
                        break;
                    case '癸':
                        tianpanliuqin[index].innerText = pianyin;
                        break;
                }
                break;
            case '丙':
                switch (element.innerText) {
                    case '甲':
                        tianpanliuqin[index].innerText = pianyin;
                        break;
                    case '乙':
                        tianpanliuqin[index].innerText = zhengyin;
                        break;
                    case '丙':
                        tianpanliuqin[index].innerText = bijian;
                        break;
                    case '丁':
                        tianpanliuqin[index].innerText = jiecai;
                        break;
                    case '戊':
                        tianpanliuqin[index].innerText = shishen;
                        break;
                    case '己':
                        tianpanliuqin[index].innerText = shangguan;
                        break;
                    case '庚':
                        tianpanliuqin[index].innerText = piancai;
                        break;
                    case '辛':
                        tianpanliuqin[index].innerText = zhengcai;
                        break;
                    case '壬':
                        tianpanliuqin[index].innerText = qisha;
                        break;
                    case '癸':
                        tianpanliuqin[index].innerText = zhengguan;
                        break;
                }
                break;
            case '丁':
                switch (element.innerText) {
                    case '甲':
                        tianpanliuqin[index].innerText = zhengyin;
                        break;
                    case '乙':
                        tianpanliuqin[index].innerText = pianyin;
                        break;
                    case '丙':
                        tianpanliuqin[index].innerText = jiecai;
                        break;
                    case '丁':
                        tianpanliuqin[index].innerText = bijian;
                        break;
                    case '戊':
                        tianpanliuqin[index].innerText = shangguan;
                        break;
                    case '己':
                        tianpanliuqin[index].innerText = shishen;
                        break;
                    case '庚':
                        tianpanliuqin[index].innerText = zhengcai;
                        break;
                    case '辛':
                        tianpanliuqin[index].innerText = piancai;
                        break;
                    case '壬':
                        tianpanliuqin[index].innerText = zhengguan;
                        break;
                    case '癸':
                        tianpanliuqin[index].innerText = qisha;
                        break;
                }
                break;
            case '戊':
                switch (element.innerText) {
                    case '甲':
                        tianpanliuqin[index].innerText = qisha;
                        break;
                    case '乙':
                        tianpanliuqin[index].innerText = zhengguan;
                        break;
                    case '丙':
                        tianpanliuqin[index].innerText = pianyin;
                        break;
                    case '丁':
                        tianpanliuqin[index].innerText = zhengyin;
                        break;
                    case '戊':
                        tianpanliuqin[index].innerText = bijian;
                        break;
                    case '己':
                        tianpanliuqin[index].innerText = jiecai;
                        break;
                    case '庚':
                        tianpanliuqin[index].innerText = shishen;
                        break;
                    case '辛':
                        tianpanliuqin[index].innerText = shangguan;
                        break;
                    case '壬':
                        tianpanliuqin[index].innerText = piancai;
                        break;
                    case '癸':
                        tianpanliuqin[index].innerText = zhengcai;
                        break;
                }
                break;
            case '己':
                switch (element.innerText) {
                    case '甲':
                        tianpanliuqin[index].innerText = zhengguan;
                        break;
                    case '乙':
                        tianpanliuqin[index].innerText = qisha;
                        break;
                    case '丙':
                        tianpanliuqin[index].innerText = zhengyin;
                        break;
                    case '丁':
                        tianpanliuqin[index].innerText = pianyin;
                        break;
                    case '戊':
                        tianpanliuqin[index].innerText = jiecai;
                        break;
                    case '己':
                        tianpanliuqin[index].innerText = bijian;
                        break;
                    case '庚':
                        tianpanliuqin[index].innerText = shangguan;
                        break;
                    case '辛':
                        tianpanliuqin[index].innerText = shishen;
                        break;
                    case '壬':
                        tianpanliuqin[index].innerText = zhengcai;
                        break;
                    case '癸':
                        tianpanliuqin[index].innerText = piancai;
                        break;
                }
                break;
            case '庚':
                switch (element.innerText) {
                    case '甲':
                        tianpanliuqin[index].innerText = piancai;
                        break;
                    case '乙':
                        tianpanliuqin[index].innerText = zhengcai;
                        break;
                    case '丙':
                        tianpanliuqin[index].innerText = qisha;
                        break;
                    case '丁':
                        tianpanliuqin[index].innerText = zhengguan;
                        break;
                    case '戊':
                        tianpanliuqin[index].innerText = pianyin;
                        break;
                    case '己':
                        tianpanliuqin[index].innerText = zhengyin;
                        break;
                    case '庚':
                        tianpanliuqin[index].innerText = bijian;
                        break;
                    case '辛':
                        tianpanliuqin[index].innerText = jiecai;
                        break;
                    case '壬':
                        tianpanliuqin[index].innerText = shishen;
                        break;
                    case '癸':
                        tianpanliuqin[index].innerText = shangguan;
                        break;
                }
                break;
            case '辛':
                switch (element.innerText) {
                    case '甲':
                        tianpanliuqin[index].innerText = zhengcai;
                        break;
                    case '乙':
                        tianpanliuqin[index].innerText = piancai;
                        break;
                    case '丙':
                        tianpanliuqin[index].innerText = zhengguan;
                        break;
                    case '丁':
                        tianpanliuqin[index].innerText = qisha;
                        break;
                    case '戊':
                        tianpanliuqin[index].innerText = zhengyin;
                        break;
                    case '己':
                        tianpanliuqin[index].innerText = pianyin;
                        break;
                    case '庚':
                        tianpanliuqin[index].innerText = jiecai;
                        break;
                    case '辛':
                        tianpanliuqin[index].innerText = bijian;
                        break;
                    case '壬':
                        tianpanliuqin[index].innerText = shangguan;
                        break;
                    case '癸':
                        tianpanliuqin[index].innerText = shishen;
                        break;
                }
                break;
            case '壬':
                switch (element.innerText) {
                    case '甲':
                        tianpanliuqin[index].innerText = shishen;
                        break;
                    case '乙':
                        tianpanliuqin[index].innerText = shangguan;
                        break;
                    case '丙':
                        tianpanliuqin[index].innerText = piancai;
                        break;
                    case '丁':
                        tianpanliuqin[index].innerText = zhengcai;
                        break;
                    case '戊':
                        tianpanliuqin[index].innerText = qisha;
                        break;
                    case '己':
                        tianpanliuqin[index].innerText = zhengguan;
                        break;
                    case '庚':
                        tianpanliuqin[index].innerText = pianyin;
                        break;
                    case '辛':
                        tianpanliuqin[index].innerText = zhengyin;
                        break;
                    case '壬':
                        tianpanliuqin[index].innerText = bijian;
                        break;
                    case '癸':
                        tianpanliuqin[index].innerText = jiecai;
                        break;
                }
                break;
            case '癸':
                switch (element.innerText) {
                    case '甲':
                        tianpanliuqin[index].innerText = shangguan;
                        break;
                    case '乙':
                        tianpanliuqin[index].innerText = shishen;
                        break;
                    case '丙':
                        tianpanliuqin[index].innerText = zhengcai;
                        break;
                    case '丁':
                        tianpanliuqin[index].innerText = piancai;
                        break;
                    case '戊':
                        tianpanliuqin[index].innerText = zhengguan;
                        break;
                    case '己':
                        tianpanliuqin[index].innerText = qisha;
                        break;
                    case '庚':
                        tianpanliuqin[index].innerText = zhengyin;
                        break;
                    case '辛':
                        tianpanliuqin[index].innerText = pianyin;
                        break;
                    case '壬':
                        tianpanliuqin[index].innerText = jiecai;
                        break;
                    case '癸':
                        tianpanliuqin[index].innerText = bijian;
                        break;
                }
                break;
        }
    });
    dipangan.forEach((element, index) => {
        switch (shigan) {
            case '甲':
                switch (element.innerText) {
                    case '甲':
                        dipanliuqin[index].innerText = bijian;
                        break;
                    case '乙':
                        dipanliuqin[index].innerText = jiecai;
                        break;
                    case '丙':
                        dipanliuqin[index].innerText = shishen;
                        break;
                    case '丁':
                        dipanliuqin[index].innerText = shangguan;
                        break;
                    case '戊':
                        dipanliuqin[index].innerText = piancai;
                        break;
                    case '己':
                        dipanliuqin[index].innerText = zhengcai;
                        break;
                    case '庚':
                        dipanliuqin[index].innerText = qisha;
                        break;
                    case '辛':
                        dipanliuqin[index].innerText = zhengguan;
                        break;
                    case '壬':
                        dipanliuqin[index].innerText = pianyin;
                        break;
                    case '癸':
                        dipanliuqin[index].innerText = zhengyin;
                        break;
                }
                break;
            case '乙':
                switch (element.innerText) {
                    case '甲':
                        dipanliuqin[index].innerText = jiecai;
                        break;
                    case '乙':
                        dipanliuqin[index].innerText = bijian;
                        break;
                    case '丙':
                        dipanliuqin[index].innerText = shangguan;
                        break;
                    case '丁':
                        dipanliuqin[index].innerText = shishen;
                        break;
                    case '戊':
                        dipanliuqin[index].innerText = zhengcai;
                        break;
                    case '己':
                        dipanliuqin[index].innerText = piancai;
                        break;
                    case '庚':
                        dipanliuqin[index].innerText = zhengguan;
                        break;
                    case '辛':
                        dipanliuqin[index].innerText = qisha;
                        break;
                    case '壬':
                        dipanliuqin[index].innerText = zhengyin;
                        break;
                    case '癸':
                        dipanliuqin[index].innerText = pianyin;
                        break;
                }
                break;
            case '丙':
                switch (element.innerText) {
                    case '甲':
                        dipanliuqin[index].innerText = pianyin;
                        break;
                    case '乙':
                        dipanliuqin[index].innerText = zhengyin;
                        break;
                    case '丙':
                        dipanliuqin[index].innerText = bijian;
                        break;
                    case '丁':
                        dipanliuqin[index].innerText = jiecai;
                        break;
                    case '戊':
                        dipanliuqin[index].innerText = shishen;
                        break;
                    case '己':
                        dipanliuqin[index].innerText = shangguan;
                        break;
                    case '庚':
                        dipanliuqin[index].innerText = piancai;
                        break;
                    case '辛':
                        dipanliuqin[index].innerText = zhengcai;
                        break;
                    case '壬':
                        dipanliuqin[index].innerText = qisha;
                        break;
                    case '癸':
                        dipanliuqin[index].innerText = zhengguan;
                        break;
                }
                break;
            case '丁':
                switch (element.innerText) {
                    case '甲':
                        dipanliuqin[index].innerText = zhengyin;
                        break;
                    case '乙':
                        dipanliuqin[index].innerText = pianyin;
                        break;
                    case '丙':
                        dipanliuqin[index].innerText = jiecai;
                        break;
                    case '丁':
                        dipanliuqin[index].innerText = bijian;
                        break;
                    case '戊':
                        dipanliuqin[index].innerText = shangguan;
                        break;
                    case '己':
                        dipanliuqin[index].innerText = shishen;
                        break;
                    case '庚':
                        dipanliuqin[index].innerText = zhengcai;
                        break;
                    case '辛':
                        dipanliuqin[index].innerText = piancai;
                        break;
                    case '壬':
                        dipanliuqin[index].innerText = zhengguan;
                        break;
                    case '癸':
                        dipanliuqin[index].innerText = qisha;
                        break;
                }
                break;
            case '戊':
                switch (element.innerText) {
                    case '甲':
                        dipanliuqin[index].innerText = qisha;
                        break;
                    case '乙':
                        dipanliuqin[index].innerText = zhengguan;
                        break;
                    case '丙':
                        dipanliuqin[index].innerText = pianyin;
                        break;
                    case '丁':
                        dipanliuqin[index].innerText = zhengyin;
                        break;
                    case '戊':
                        dipanliuqin[index].innerText = bijian;
                        break;
                    case '己':
                        dipanliuqin[index].innerText = jiecai;
                        break;
                    case '庚':
                        dipanliuqin[index].innerText = shishen;
                        break;
                    case '辛':
                        dipanliuqin[index].innerText = shangguan;
                        break;
                    case '壬':
                        dipanliuqin[index].innerText = piancai;
                        break;
                    case '癸':
                        dipanliuqin[index].innerText = zhengcai;
                        break;
                }
                break;
            case '己':
                switch (element.innerText) {
                    case '甲':
                        dipanliuqin[index].innerText = zhengguan;
                        break;
                    case '乙':
                        dipanliuqin[index].innerText = qisha;
                        break;
                    case '丙':
                        dipanliuqin[index].innerText = zhengyin;
                        break;
                    case '丁':
                        dipanliuqin[index].innerText = pianyin;
                        break;
                    case '戊':
                        dipanliuqin[index].innerText = jiecai;
                        break;
                    case '己':
                        dipanliuqin[index].innerText = bijian;
                        break;
                    case '庚':
                        dipanliuqin[index].innerText = shangguan;
                        break;
                    case '辛':
                        dipanliuqin[index].innerText = shishen;
                        break;
                    case '壬':
                        dipanliuqin[index].innerText = zhengcai;
                        break;
                    case '癸':
                        dipanliuqin[index].innerText = piancai;
                        break;
                }
                break;
            case '庚':
                switch (element.innerText) {
                    case '甲':
                        dipanliuqin[index].innerText = piancai;
                        break;
                    case '乙':
                        dipanliuqin[index].innerText = zhengcai;
                        break;
                    case '丙':
                        dipanliuqin[index].innerText = qisha;
                        break;
                    case '丁':
                        dipanliuqin[index].innerText = zhengguan;
                        break;
                    case '戊':
                        dipanliuqin[index].innerText = pianyin;
                        break;
                    case '己':
                        dipanliuqin[index].innerText = zhengyin;
                        break;
                    case '庚':
                        dipanliuqin[index].innerText = bijian;
                        break;
                    case '辛':
                        dipanliuqin[index].innerText = jiecai;
                        break;
                    case '壬':
                        dipanliuqin[index].innerText = shishen;
                        break;
                    case '癸':
                        dipanliuqin[index].innerText = shangguan;
                        break;
                }
                break;
            case '辛':
                switch (element.innerText) {
                    case '甲':
                        dipanliuqin[index].innerText = zhengcai;
                        break;
                    case '乙':
                        dipanliuqin[index].innerText = piancai;
                        break;
                    case '丙':
                        dipanliuqin[index].innerText = zhengguan;
                        break;
                    case '丁':
                        dipanliuqin[index].innerText = qisha;
                        break;
                    case '戊':
                        dipanliuqin[index].innerText = zhengyin;
                        break;
                    case '己':
                        dipanliuqin[index].innerText = pianyin;
                        break;
                    case '庚':
                        dipanliuqin[index].innerText = jiecai;
                        break;
                    case '辛':
                        dipanliuqin[index].innerText = bijian;
                        break;
                    case '壬':
                        dipanliuqin[index].innerText = shangguan;
                        break;
                    case '癸':
                        dipanliuqin[index].innerText = shishen;
                        break;
                }
                break;
            case '壬':
                switch (element.innerText) {
                    case '甲':
                        dipanliuqin[index].innerText = shishen;
                        break;
                    case '乙':
                        dipanliuqin[index].innerText = shangguan;
                        break;
                    case '丙':
                        dipanliuqin[index].innerText = piancai;
                        break;
                    case '丁':
                        dipanliuqin[index].innerText = zhengcai;
                        break;
                    case '戊':
                        dipanliuqin[index].innerText = qisha;
                        break;
                    case '己':
                        dipanliuqin[index].innerText = zhengguan;
                        break;
                    case '庚':
                        dipanliuqin[index].innerText = pianyin;
                        break;
                    case '辛':
                        dipanliuqin[index].innerText = zhengyin;
                        break;
                    case '壬':
                        dipanliuqin[index].innerText = bijian;
                        break;
                    case '癸':
                        dipanliuqin[index].innerText = jiecai;
                        break;
                }
                break;
            case '癸':
                switch (element.innerText) {
                    case '甲':
                        dipanliuqin[index].innerText = shangguan;
                        break;
                    case '乙':
                        dipanliuqin[index].innerText = shishen;
                        break;
                    case '丙':
                        dipanliuqin[index].innerText = zhengcai;
                        break;
                    case '丁':
                        dipanliuqin[index].innerText = piancai;
                        break;
                    case '戊':
                        dipanliuqin[index].innerText = zhengguan;
                        break;
                    case '己':
                        dipanliuqin[index].innerText = qisha;
                        break;
                    case '庚':
                        dipanliuqin[index].innerText = zhengyin;
                        break;
                    case '辛':
                        dipanliuqin[index].innerText = pianyin;
                        break;
                    case '壬':
                        dipanliuqin[index].innerText = jiecai;
                        break;
                    case '癸':
                        dipanliuqin[index].innerText = bijian;
                        break;
                }
                break;
        }
    });
}

function shishenSimplified(shigan) {
    const tianpangan = document.querySelectorAll('[data-tianpangan]');
    const dipangan = document.querySelectorAll('[data-dipangan]');
    const tianpanliuqin = document.querySelectorAll('[data-tianpanliuqin]');
    const dipanliuqin = document.querySelectorAll('[data-dipanliuqin]');
    const zhengyin = '印';
    const pianyin = '枭';
    const zhengguan = '官';
    const qisha = '杀';
    const zhengcai = '财';
    const piancai = '才';
    const shishen = '食';
    const shangguan = '伤';
    const bijian = '比';
    const jiecai = '劫';
    tianpangan.forEach((element, index) => {
        switch (shigan) {
            case '甲':
                switch (element.innerText) {
                    case '甲':
                        tianpanliuqin[index].innerText = bijian;
                        break;
                    case '乙':
                        tianpanliuqin[index].innerText = jiecai;
                        break;
                    case '丙':
                        tianpanliuqin[index].innerText = shishen;
                        break;
                    case '丁':
                        tianpanliuqin[index].innerText = shangguan;
                        break;
                    case '戊':
                        tianpanliuqin[index].innerText = piancai;
                        break;
                    case '己':
                        tianpanliuqin[index].innerText = zhengcai;
                        break;
                    case '庚':
                        tianpanliuqin[index].innerText = qisha;
                        break;
                    case '辛':
                        tianpanliuqin[index].innerText = zhengguan;
                        break;
                    case '壬':
                        tianpanliuqin[index].innerText = pianyin;
                        break;
                    case '癸':
                        tianpanliuqin[index].innerText = zhengyin;
                        break;
                }
                break;
            case '乙':
                switch (element.innerText) {
                    case '甲':
                        tianpanliuqin[index].innerText = jiecai;
                        break;
                    case '乙':
                        tianpanliuqin[index].innerText = bijian;
                        break;
                    case '丙':
                        tianpanliuqin[index].innerText = shangguan;
                        break;
                    case '丁':
                        tianpanliuqin[index].innerText = shishen;
                        break;
                    case '戊':
                        tianpanliuqin[index].innerText = zhengcai;
                        break;
                    case '己':
                        tianpanliuqin[index].innerText = piancai;
                        break;
                    case '庚':
                        tianpanliuqin[index].innerText = zhengguan;
                        break;
                    case '辛':
                        tianpanliuqin[index].innerText = qisha;
                        break;
                    case '壬':
                        tianpanliuqin[index].innerText = zhengyin;
                        break;
                    case '癸':
                        tianpanliuqin[index].innerText = pianyin;
                        break;
                }
                break;
            case '丙':
                switch (element.innerText) {
                    case '甲':
                        tianpanliuqin[index].innerText = pianyin;
                        break;
                    case '乙':
                        tianpanliuqin[index].innerText = zhengyin;
                        break;
                    case '丙':
                        tianpanliuqin[index].innerText = bijian;
                        break;
                    case '丁':
                        tianpanliuqin[index].innerText = jiecai;
                        break;
                    case '戊':
                        tianpanliuqin[index].innerText = shishen;
                        break;
                    case '己':
                        tianpanliuqin[index].innerText = shangguan;
                        break;
                    case '庚':
                        tianpanliuqin[index].innerText = piancai;
                        break;
                    case '辛':
                        tianpanliuqin[index].innerText = zhengcai;
                        break;
                    case '壬':
                        tianpanliuqin[index].innerText = qisha;
                        break;
                    case '癸':
                        tianpanliuqin[index].innerText = zhengguan;
                        break;
                }
                break;
            case '丁':
                switch (element.innerText) {
                    case '甲':
                        tianpanliuqin[index].innerText = zhengyin;
                        break;
                    case '乙':
                        tianpanliuqin[index].innerText = pianyin;
                        break;
                    case '丙':
                        tianpanliuqin[index].innerText = jiecai;
                        break;
                    case '丁':
                        tianpanliuqin[index].innerText = bijian;
                        break;
                    case '戊':
                        tianpanliuqin[index].innerText = shangguan;
                        break;
                    case '己':
                        tianpanliuqin[index].innerText = shishen;
                        break;
                    case '庚':
                        tianpanliuqin[index].innerText = zhengcai;
                        break;
                    case '辛':
                        tianpanliuqin[index].innerText = piancai;
                        break;
                    case '壬':
                        tianpanliuqin[index].innerText = zhengguan;
                        break;
                    case '癸':
                        tianpanliuqin[index].innerText = qisha;
                        break;
                }
                break;
            case '戊':
                switch (element.innerText) {
                    case '甲':
                        tianpanliuqin[index].innerText = qisha;
                        break;
                    case '乙':
                        tianpanliuqin[index].innerText = zhengguan;
                        break;
                    case '丙':
                        tianpanliuqin[index].innerText = pianyin;
                        break;
                    case '丁':
                        tianpanliuqin[index].innerText = zhengyin;
                        break;
                    case '戊':
                        tianpanliuqin[index].innerText = bijian;
                        break;
                    case '己':
                        tianpanliuqin[index].innerText = jiecai;
                        break;
                    case '庚':
                        tianpanliuqin[index].innerText = shishen;
                        break;
                    case '辛':
                        tianpanliuqin[index].innerText = shangguan;
                        break;
                    case '壬':
                        tianpanliuqin[index].innerText = piancai;
                        break;
                    case '癸':
                        tianpanliuqin[index].innerText = zhengcai;
                        break;
                }
                break;
            case '己':
                switch (element.innerText) {
                    case '甲':
                        tianpanliuqin[index].innerText = zhengguan;
                        break;
                    case '乙':
                        tianpanliuqin[index].innerText = qisha;
                        break;
                    case '丙':
                        tianpanliuqin[index].innerText = zhengyin;
                        break;
                    case '丁':
                        tianpanliuqin[index].innerText = pianyin;
                        break;
                    case '戊':
                        tianpanliuqin[index].innerText = jiecai;
                        break;
                    case '己':
                        tianpanliuqin[index].innerText = bijian;
                        break;
                    case '庚':
                        tianpanliuqin[index].innerText = shangguan;
                        break;
                    case '辛':
                        tianpanliuqin[index].innerText = shishen;
                        break;
                    case '壬':
                        tianpanliuqin[index].innerText = zhengcai;
                        break;
                    case '癸':
                        tianpanliuqin[index].innerText = piancai;
                        break;
                }
                break;
            case '庚':
                switch (element.innerText) {
                    case '甲':
                        tianpanliuqin[index].innerText = piancai;
                        break;
                    case '乙':
                        tianpanliuqin[index].innerText = zhengcai;
                        break;
                    case '丙':
                        tianpanliuqin[index].innerText = qisha;
                        break;
                    case '丁':
                        tianpanliuqin[index].innerText = zhengguan;
                        break;
                    case '戊':
                        tianpanliuqin[index].innerText = pianyin;
                        break;
                    case '己':
                        tianpanliuqin[index].innerText = zhengyin;
                        break;
                    case '庚':
                        tianpanliuqin[index].innerText = bijian;
                        break;
                    case '辛':
                        tianpanliuqin[index].innerText = jiecai;
                        break;
                    case '壬':
                        tianpanliuqin[index].innerText = shishen;
                        break;
                    case '癸':
                        tianpanliuqin[index].innerText = shangguan;
                        break;
                }
                break;
            case '辛':
                switch (element.innerText) {
                    case '甲':
                        tianpanliuqin[index].innerText = zhengcai;
                        break;
                    case '乙':
                        tianpanliuqin[index].innerText = piancai;
                        break;
                    case '丙':
                        tianpanliuqin[index].innerText = zhengguan;
                        break;
                    case '丁':
                        tianpanliuqin[index].innerText = qisha;
                        break;
                    case '戊':
                        tianpanliuqin[index].innerText = zhengyin;
                        break;
                    case '己':
                        tianpanliuqin[index].innerText = pianyin;
                        break;
                    case '庚':
                        tianpanliuqin[index].innerText = jiecai;
                        break;
                    case '辛':
                        tianpanliuqin[index].innerText = bijian;
                        break;
                    case '壬':
                        tianpanliuqin[index].innerText = shangguan;
                        break;
                    case '癸':
                        tianpanliuqin[index].innerText = shishen;
                        break;
                }
                break;
            case '壬':
                switch (element.innerText) {
                    case '甲':
                        tianpanliuqin[index].innerText = shishen;
                        break;
                    case '乙':
                        tianpanliuqin[index].innerText = shangguan;
                        break;
                    case '丙':
                        tianpanliuqin[index].innerText = piancai;
                        break;
                    case '丁':
                        tianpanliuqin[index].innerText = zhengcai;
                        break;
                    case '戊':
                        tianpanliuqin[index].innerText = qisha;
                        break;
                    case '己':
                        tianpanliuqin[index].innerText = zhengguan;
                        break;
                    case '庚':
                        tianpanliuqin[index].innerText = pianyin;
                        break;
                    case '辛':
                        tianpanliuqin[index].innerText = zhengyin;
                        break;
                    case '壬':
                        tianpanliuqin[index].innerText = bijian;
                        break;
                    case '癸':
                        tianpanliuqin[index].innerText = jiecai;
                        break;
                }
                break;
            case '癸':
                switch (element.innerText) {
                    case '甲':
                        tianpanliuqin[index].innerText = shangguan;
                        break;
                    case '乙':
                        tianpanliuqin[index].innerText = shishen;
                        break;
                    case '丙':
                        tianpanliuqin[index].innerText = zhengcai;
                        break;
                    case '丁':
                        tianpanliuqin[index].innerText = piancai;
                        break;
                    case '戊':
                        tianpanliuqin[index].innerText = zhengguan;
                        break;
                    case '己':
                        tianpanliuqin[index].innerText = qisha;
                        break;
                    case '庚':
                        tianpanliuqin[index].innerText = zhengyin;
                        break;
                    case '辛':
                        tianpanliuqin[index].innerText = pianyin;
                        break;
                    case '壬':
                        tianpanliuqin[index].innerText = jiecai;
                        break;
                    case '癸':
                        tianpanliuqin[index].innerText = bijian;
                        break;
                }
                break;
        }
    });
    dipangan.forEach((element, index) => {
        switch (shigan) {
            case '甲':
                switch (element.innerText) {
                    case '甲':
                        dipanliuqin[index].innerText = bijian;
                        break;
                    case '乙':
                        dipanliuqin[index].innerText = jiecai;
                        break;
                    case '丙':
                        dipanliuqin[index].innerText = shishen;
                        break;
                    case '丁':
                        dipanliuqin[index].innerText = shangguan;
                        break;
                    case '戊':
                        dipanliuqin[index].innerText = piancai;
                        break;
                    case '己':
                        dipanliuqin[index].innerText = zhengcai;
                        break;
                    case '庚':
                        dipanliuqin[index].innerText = qisha;
                        break;
                    case '辛':
                        dipanliuqin[index].innerText = zhengguan;
                        break;
                    case '壬':
                        dipanliuqin[index].innerText = pianyin;
                        break;
                    case '癸':
                        dipanliuqin[index].innerText = zhengyin;
                        break;
                }
                break;
            case '乙':
                switch (element.innerText) {
                    case '甲':
                        dipanliuqin[index].innerText = jiecai;
                        break;
                    case '乙':
                        dipanliuqin[index].innerText = bijian;
                        break;
                    case '丙':
                        dipanliuqin[index].innerText = shangguan;
                        break;
                    case '丁':
                        dipanliuqin[index].innerText = shishen;
                        break;
                    case '戊':
                        dipanliuqin[index].innerText = zhengcai;
                        break;
                    case '己':
                        dipanliuqin[index].innerText = piancai;
                        break;
                    case '庚':
                        dipanliuqin[index].innerText = zhengguan;
                        break;
                    case '辛':
                        dipanliuqin[index].innerText = qisha;
                        break;
                    case '壬':
                        dipanliuqin[index].innerText = zhengyin;
                        break;
                    case '癸':
                        dipanliuqin[index].innerText = pianyin;
                        break;
                }
                break;
            case '丙':
                switch (element.innerText) {
                    case '甲':
                        dipanliuqin[index].innerText = pianyin;
                        break;
                    case '乙':
                        dipanliuqin[index].innerText = zhengyin;
                        break;
                    case '丙':
                        dipanliuqin[index].innerText = bijian;
                        break;
                    case '丁':
                        dipanliuqin[index].innerText = jiecai;
                        break;
                    case '戊':
                        dipanliuqin[index].innerText = shishen;
                        break;
                    case '己':
                        dipanliuqin[index].innerText = shangguan;
                        break;
                    case '庚':
                        dipanliuqin[index].innerText = piancai;
                        break;
                    case '辛':
                        dipanliuqin[index].innerText = zhengcai;
                        break;
                    case '壬':
                        dipanliuqin[index].innerText = qisha;
                        break;
                    case '癸':
                        dipanliuqin[index].innerText = zhengguan;
                        break;
                }
                break;
            case '丁':
                switch (element.innerText) {
                    case '甲':
                        dipanliuqin[index].innerText = zhengyin;
                        break;
                    case '乙':
                        dipanliuqin[index].innerText = pianyin;
                        break;
                    case '丙':
                        dipanliuqin[index].innerText = jiecai;
                        break;
                    case '丁':
                        dipanliuqin[index].innerText = bijian;
                        break;
                    case '戊':
                        dipanliuqin[index].innerText = shangguan;
                        break;
                    case '己':
                        dipanliuqin[index].innerText = shishen;
                        break;
                    case '庚':
                        dipanliuqin[index].innerText = zhengcai;
                        break;
                    case '辛':
                        dipanliuqin[index].innerText = piancai;
                        break;
                    case '壬':
                        dipanliuqin[index].innerText = zhengguan;
                        break;
                    case '癸':
                        dipanliuqin[index].innerText = qisha;
                        break;
                }
                break;
            case '戊':
                switch (element.innerText) {
                    case '甲':
                        dipanliuqin[index].innerText = qisha;
                        break;
                    case '乙':
                        dipanliuqin[index].innerText = zhengguan;
                        break;
                    case '丙':
                        dipanliuqin[index].innerText = pianyin;
                        break;
                    case '丁':
                        dipanliuqin[index].innerText = zhengyin;
                        break;
                    case '戊':
                        dipanliuqin[index].innerText = bijian;
                        break;
                    case '己':
                        dipanliuqin[index].innerText = jiecai;
                        break;
                    case '庚':
                        dipanliuqin[index].innerText = shishen;
                        break;
                    case '辛':
                        dipanliuqin[index].innerText = shangguan;
                        break;
                    case '壬':
                        dipanliuqin[index].innerText = piancai;
                        break;
                    case '癸':
                        dipanliuqin[index].innerText = zhengcai;
                        break;
                }
                break;
            case '己':
                switch (element.innerText) {
                    case '甲':
                        dipanliuqin[index].innerText = zhengguan;
                        break;
                    case '乙':
                        dipanliuqin[index].innerText = qisha;
                        break;
                    case '丙':
                        dipanliuqin[index].innerText = zhengyin;
                        break;
                    case '丁':
                        dipanliuqin[index].innerText = pianyin;
                        break;
                    case '戊':
                        dipanliuqin[index].innerText = jiecai;
                        break;
                    case '己':
                        dipanliuqin[index].innerText = bijian;
                        break;
                    case '庚':
                        dipanliuqin[index].innerText = shangguan;
                        break;
                    case '辛':
                        dipanliuqin[index].innerText = shishen;
                        break;
                    case '壬':
                        dipanliuqin[index].innerText = zhengcai;
                        break;
                    case '癸':
                        dipanliuqin[index].innerText = piancai;
                        break;
                }
                break;
            case '庚':
                switch (element.innerText) {
                    case '甲':
                        dipanliuqin[index].innerText = piancai;
                        break;
                    case '乙':
                        dipanliuqin[index].innerText = zhengcai;
                        break;
                    case '丙':
                        dipanliuqin[index].innerText = qisha;
                        break;
                    case '丁':
                        dipanliuqin[index].innerText = zhengguan;
                        break;
                    case '戊':
                        dipanliuqin[index].innerText = pianyin;
                        break;
                    case '己':
                        dipanliuqin[index].innerText = zhengyin;
                        break;
                    case '庚':
                        dipanliuqin[index].innerText = bijian;
                        break;
                    case '辛':
                        dipanliuqin[index].innerText = jiecai;
                        break;
                    case '壬':
                        dipanliuqin[index].innerText = shishen;
                        break;
                    case '癸':
                        dipanliuqin[index].innerText = shangguan;
                        break;
                }
                break;
            case '辛':
                switch (element.innerText) {
                    case '甲':
                        dipanliuqin[index].innerText = zhengcai;
                        break;
                    case '乙':
                        dipanliuqin[index].innerText = piancai;
                        break;
                    case '丙':
                        dipanliuqin[index].innerText = zhengguan;
                        break;
                    case '丁':
                        dipanliuqin[index].innerText = qisha;
                        break;
                    case '戊':
                        dipanliuqin[index].innerText = zhengyin;
                        break;
                    case '己':
                        dipanliuqin[index].innerText = pianyin;
                        break;
                    case '庚':
                        dipanliuqin[index].innerText = jiecai;
                        break;
                    case '辛':
                        dipanliuqin[index].innerText = bijian;
                        break;
                    case '壬':
                        dipanliuqin[index].innerText = shangguan;
                        break;
                    case '癸':
                        dipanliuqin[index].innerText = shishen;
                        break;
                }
                break;
            case '壬':
                switch (element.innerText) {
                    case '甲':
                        dipanliuqin[index].innerText = shishen;
                        break;
                    case '乙':
                        dipanliuqin[index].innerText = shangguan;
                        break;
                    case '丙':
                        dipanliuqin[index].innerText = piancai;
                        break;
                    case '丁':
                        dipanliuqin[index].innerText = zhengcai;
                        break;
                    case '戊':
                        dipanliuqin[index].innerText = qisha;
                        break;
                    case '己':
                        dipanliuqin[index].innerText = zhengguan;
                        break;
                    case '庚':
                        dipanliuqin[index].innerText = pianyin;
                        break;
                    case '辛':
                        dipanliuqin[index].innerText = zhengyin;
                        break;
                    case '壬':
                        dipanliuqin[index].innerText = bijian;
                        break;
                    case '癸':
                        dipanliuqin[index].innerText = jiecai;
                        break;
                }
                break;
            case '癸':
                switch (element.innerText) {
                    case '甲':
                        dipanliuqin[index].innerText = shangguan;
                        break;
                    case '乙':
                        dipanliuqin[index].innerText = shishen;
                        break;
                    case '丙':
                        dipanliuqin[index].innerText = zhengcai;
                        break;
                    case '丁':
                        dipanliuqin[index].innerText = piancai;
                        break;
                    case '戊':
                        dipanliuqin[index].innerText = zhengguan;
                        break;
                    case '己':
                        dipanliuqin[index].innerText = qisha;
                        break;
                    case '庚':
                        dipanliuqin[index].innerText = zhengyin;
                        break;
                    case '辛':
                        dipanliuqin[index].innerText = pianyin;
                        break;
                    case '壬':
                        dipanliuqin[index].innerText = jiecai;
                        break;
                    case '癸':
                        dipanliuqin[index].innerText = bijian;
                        break;
                }
                break;
        }
    });
    tianpanliuqin.forEach((element) => {
        element.classList.add('simplified-liuqin');
    });
    dipanliuqin.forEach((element) => {
        element.classList.add('simplified-liuqin');
    });
}

function classicChinese() {
    document.querySelectorAll('[data-tianpanshen]').forEach((element) => {
        switch (element.innerText) {
            case '太阴':
                element.innerText = '太陰';
                break;
            case '勾陈':
                element.innerText = '勾陳';
                break;
        }
    });
    document.querySelectorAll('[data-xing]').forEach((element) => {
        switch (element.innerText) {
            case '天冲':
                element.innerText = '天沖';
                break;
            case '天辅':
                element.innerText = '天輔';
                break;
        }
    });
    document.querySelectorAll('[data-men]').forEach((element) => {
        switch (element.innerText) {
            case '休门':
                element.innerText = '休門';
                break;
            case '死门':
                element.innerText = '死門';
                break;
            case '伤门':
                element.innerText = '傷門';
                break;
            case '杜门':
                element.innerText = '杜門';
                break;
            case '中门':
                element.innerText = '中門';
                break;
            case '开门':
                element.innerText = '開門';
                break;
            case '惊门':
                element.innerText = '驚門';
                break;
            case '生门':
                element.innerText = '生門';
                break;
            case '景门':
                element.innerText = '景門';
                break;
        }
    });
    document.querySelectorAll('[data-dipanshen]').forEach((element) => {
        switch (element.innerText) {
            case '太阴':
                element.innerText = '太陰';
                break;
            case '勾陈':
                element.innerText = '勾陳';
                break;
        }
    });
}
