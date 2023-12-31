const { ipcRenderer } = require('electron');
import { zhuanpan_info } from '../zhuanpan/paipan_zhuanpan_gongneixinxi.js';

ipcRenderer.on('符使法', (e, data) => {
    const [year, month, day] = data.time.yangli.split('/').map((str) => parseInt(str));
    updateTimeInfo(data, year, month, day, data.hour);
    updateXunShou(data.paipan.xunshou);
    updateDun(data.paipan.dun);
    updateJushu(data.paipan.jushu);
    updateFuShi(data.paipan.fushi.zhifu, data.paipan.fushi.zhishi);
    paiDiPanGan(data.paipan.dipangan);
    paiAnGanZhi(data.paipan.anganzhi, data.paipan.dun, data.paipan.dipangan, data.paipan.xunshou);
    paiMaXing(data.paipan.maxing);
    paiKongWang(data.paipan.kongwang);
    paiBaMen(data.paipan.bamen, document.getElementById('shi').innerText);
    paiJiuXing(data.paipan.jiuxing, document.getElementById('shi').innerText, data.paipan.dun, data.paipan.jushu);
    paiTianPanGan();
    paiTianPanShen(data.paipan.dun);
    paiDiPanShen(data.paipan.dun);
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

    // 繁体盘面
    if (document.getElementById('classic-chinese').checked) {
        classicChinese();
    }

    // 用于宫位弹窗提示
    zhuanpan_info(info, '转盘');
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

async function updateXunShou(xunshou) {
    document.getElementById('paipan-xunshou').innerHTML = xunshou;
}

async function updateDun(dun) {
    document.getElementById('paipan-dun').innerHTML = dun;
}

async function updateJushu(jushu) {
    document.getElementById('paipan-jushu').innerHTML = jushu;
}

function paiDiPanGan(result) {
    const dipangan = document.querySelectorAll('[data-dipangan]');
    for (let i = 0; i < 9; i++) {
        dipangan[i].innerHTML = result[i];
    }
    document.querySelectorAll('[data-dipanyikong]')[1].innerText =
        document.querySelectorAll('[data-dipangan]')[4].innerText;
}

async function updateFuShi(zhifu, zhishi) {
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

async function paiKongWang(kongwang) {
    const gongwei = document.querySelectorAll('[data-kongwang]');
    if (kongwang.length == 2) {
        gongwei[kongwang[0]].innerHTML = '〇';
        gongwei[kongwang[1]].innerHTML = '〇';
    } else {
        gongwei[kongwang[0]].innerHTML = '〇';
    }
}

async function wubuyushi() {
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

async function paiMaXing(maxing) {
    const gongwei = document.querySelectorAll('[data-maxing]');
    for (let i = 0; i < 9; i++) {
        if (i == maxing) {
            gongwei[i].innerHTML = '马';
            return;
        }
    }
}

async function paiBaMen(bamen, shizhi) {
    const menArray = document.querySelectorAll('[data-men]');
    let men = [];
    let position = document.querySelectorAll('[data-anganzhi]');
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
            switch (start) {
                case 0:
                    men = [0, 7, 2, 3, 8, 1, 6, 5];
                    break;
                case 7:
                    men = [7, 2, 3, 8, 1, 6, 5, 0];
                    break;
                case 2:
                    men = [2, 3, 8, 1, 6, 5, 0, 7];
                    break;
                case 3:
                    men = [3, 8, 1, 6, 5, 0, 7, 2];
                    break;
                case 8:
                    men = [8, 1, 6, 5, 0, 7, 2, 3];
                    break;
                case 1:
                    men = [1, 6, 5, 0, 7, 2, 3, 8];
                    break;
                case 4:
                    men = [1, 6, 5, 0, 7, 2, 3, 8];
                    break;
                case 6:
                    men = [6, 5, 0, 7, 2, 3, 8, 1];
                    break;
                case 5:
                    men = [5, 0, 7, 2, 3, 8, 1, 6];
                    break;
            }
            break;
        }
    }
    for (let i = 0; i < 8; i++) {
        menArray[men[i]].innerHTML = bamen[i];
    }
}

async function paiJiuXing(jiuxing, shigan, dun, jushu) {
    shigan = shigan.charAt(0);
    const xingArray = document.querySelectorAll('[data-xing]');
    let shunxu = [];
    let start = 0;

    if (shigan == '甲' || shigan == '己') {
        start = jushu;
    } else {
        if (dun == '阳') {
            switch (shigan) {
                case '乙':
                    start = jushu;
                    for (let i = 0; i < 1; i++) {
                        if (start - 1 == 0) {
                            start = 9;
                        } else {
                            start = start - 1;
                        }
                    }
                    break;
                case '丙':
                    start = jushu;
                    for (let i = 0; i < 2; i++) {
                        if (start - 1 == 0) {
                            start = 9;
                        } else {
                            start--;
                        }
                    }
                    break;
                case '丁':
                    start = jushu;
                    for (let i = 0; i < 3; i++) {
                        if (start - 1 == 0) {
                            start = 9;
                        } else {
                            start--;
                        }
                    }
                    break;
                case '戊':
                    start = jushu;
                    for (let i = 0; i < 4; i++) {
                        if (start - 1 == 0) {
                            start = 9;
                        } else {
                            start--;
                        }
                    }
                    break;
                case '庚':
                    start = jushu;
                    for (let i = 0; i < 1; i++) {
                        if (start + 1 == 10) {
                            start = 1;
                        } else {
                            start++;
                        }
                    }
                    break;
                case '辛':
                    start = jushu;
                    for (let i = 0; i < 2; i++) {
                        if (start + 1 == 10) {
                            start = 1;
                        } else {
                            start++;
                        }
                    }
                    break;
                case '壬':
                    start = jushu;
                    for (let i = 0; i < 3; i++) {
                        if (start + 1 == 10) {
                            start = 1;
                        } else {
                            start++;
                        }
                    }
                    break;
                case '癸':
                    start = jushu;
                    for (let i = 0; i < 4; i++) {
                        if (start + 1 == 10) {
                            start = 1;
                        } else {
                            start++;
                        }
                    }
                    break;
            }
        } else {
            switch (shigan) {
                case '乙':
                    start = jushu;
                    for (let i = 0; i < 1; i++) {
                        if (start + 1 == 10) {
                            start = 1;
                        } else {
                            start++;
                        }
                    }
                    break;
                case '丙':
                    start = jushu;
                    for (let i = 0; i < 2; i++) {
                        if (start + 1 == 10) {
                            start = 1;
                        } else {
                            start++;
                        }
                    }
                    break;
                case '丁':
                    start = jushu;
                    for (let i = 0; i < 3; i++) {
                        if (start + 1 >= 10) {
                            start = 1;
                        } else {
                            start++;
                        }
                    }
                    break;
                case '戊':
                    start = jushu;
                    for (let i = 0; i < 4; i++) {
                        if (start + 1 == 10) {
                            start = 1;
                        } else {
                            start++;
                        }
                    }
                    break;
                case '庚':
                    start = jushu;
                    for (let i = 0; i < 1; i++) {
                        if (start - 1 == 0) {
                            start = 9;
                        } else {
                            start--;
                        }
                    }
                    break;
                case '辛':
                    start = jushu;
                    for (let i = 0; i < 2; i++) {
                        if (start - 1 == 0) {
                            start = 9;
                        } else {
                            start--;
                        }
                    }
                    break;
                case '壬':
                    start = jushu;
                    for (let i = 0; i < 3; i++) {
                        if (start - 1 == 0) {
                            start = 9;
                        } else {
                            start--;
                        }
                    }
                    break;
                case '癸':
                    start = jushu;
                    for (let i = 0; i < 4; i++) {
                        if (start - 1 == 0) {
                            start = 9;
                        } else {
                            start--;
                        }
                    }
                    break;
            }
        }
    }

    switch (start) {
        case 1:
            start = 0;
            break;
        case 2:
            start = 1;
            break;
        case 3:
            start = 2;
            break;
        case 4:
            start = 3;
            break;
        case 5:
            start = 1;
            break;
        case 6:
            start = 5;
            break;
        case 7:
            start = 6;
            break;
        case 8:
            start = 7;
            break;
        case 9:
            start = 8;
            break;
    }

    switch (start) {
        case 0:
            shunxu = [0, 7, 2, 3, 8, 1, 6, 5];
            break;
        case 7:
            shunxu = [7, 2, 3, 8, 1, 6, 5, 0];
            break;
        case 2:
            shunxu = [2, 3, 8, 1, 6, 5, 0, 7];
            break;
        case 3:
            shunxu = [3, 8, 1, 6, 5, 0, 7, 2];
            break;
        case 8:
            shunxu = [8, 1, 6, 5, 0, 7, 2, 3];
            break;
        case 1:
            shunxu = [1, 6, 5, 0, 7, 2, 3, 8];
            break;
        case 4:
            shunxu = [1, 6, 5, 0, 7, 2, 3, 8];
            break;
        case 6:
            shunxu = [6, 5, 0, 7, 2, 3, 8, 1];
            break;
        case 5:
            shunxu = [5, 0, 7, 2, 3, 8, 1, 6];
            break;
    }
    for (let i = 0; i < 8; i++) {
        xingArray[shunxu[i]].innerText = jiuxing[i];
    }
}

function paiTianPanGan() {
    const tianpangan = document.querySelectorAll('[data-tianpangan]');
    const dipangan = document.querySelectorAll('[data-dipangan]');
    const xing = document.querySelectorAll('[data-xing]');
    for (let i = 0; i < 9; i++) {
        switch (xing[i].innerHTML) {
            case '天蓬':
                tianpangan[i].innerHTML = dipangan[0].innerHTML;
                break;
            case '天任':
                tianpangan[i].innerHTML = dipangan[7].innerHTML;
                break;
            case '天冲':
                tianpangan[i].innerHTML = dipangan[2].innerHTML;
                break;
            case '天辅':
                tianpangan[i].innerHTML = dipangan[3].innerHTML;
                break;
            case '天英':
                tianpangan[i].innerHTML = dipangan[8].innerHTML;
                break;
            case '天芮':
                tianpangan[i].innerHTML = dipangan[1].innerHTML;
                document.querySelectorAll('[data-tianpanyikong]')[i].innerHTML = dipangan[4].innerHTML;
                break;
            case '天柱':
                tianpangan[i].innerHTML = dipangan[6].innerHTML;
                break;
            case '天心':
                tianpangan[i].innerHTML = dipangan[5].innerHTML;
                break;
        }
    }
}

function paiTianPanShen(dun) {
    const shen = ['值符', '螣蛇', '太阴', '六合', '白虎', '玄武', '九地', '九天'];
    const xing = document.querySelectorAll('[data-xing]');
    const shenArray = document.querySelectorAll('[data-tianpanshen]');
    const zhifuxing = document.getElementById('paipan-zhifu').innerText;
    let shunxu = [];
    let start = 0;
    for (let i = 0; i < 9; i++) {
        if (zhifuxing == xing[i].innerText) {
            start = i;
            break;
        }
    }
    if (dun == '阳') {
        switch (start) {
            case 0:
                shunxu = [0, 7, 2, 3, 8, 1, 6, 5];
                break;
            case 7:
                shunxu = [7, 2, 3, 8, 1, 6, 5, 0];
                break;
            case 2:
                shunxu = [2, 3, 8, 1, 6, 5, 0, 7];
                break;
            case 3:
                shunxu = [3, 8, 1, 6, 5, 0, 7, 2];
                break;
            case 8:
                shunxu = [8, 1, 6, 5, 0, 7, 2, 3];
                break;
            case 1:
                shunxu = [1, 6, 5, 0, 7, 2, 3, 8];
                break;
            case 4:
                shunxu = [1, 6, 5, 0, 7, 2, 3, 8];
                break;
            case 6:
                shunxu = [6, 5, 0, 7, 2, 3, 8, 1];
                break;
            case 5:
                shunxu = [5, 0, 7, 2, 3, 8, 1, 6];
                break;
        }
    } else {
        switch (start) {
            case 0:
                shunxu = [0, 5, 6, 1, 8, 3, 2, 7];
                break;
            case 7:
                shunxu = [7, 0, 5, 6, 1, 8, 3, 2];
                break;
            case 2:
                shunxu = [2, 7, 0, 5, 6, 1, 8, 3];
                break;
            case 3:
                shunxu = [3, 2, 7, 0, 5, 6, 1, 8];
                break;
            case 8:
                shunxu = [8, 3, 2, 7, 0, 5, 6, 1];
                break;
            case 1:
                shunxu = [1, 8, 3, 2, 7, 0, 5, 6];
                break;
            case 4:
                shunxu = [1, 8, 3, 2, 7, 0, 5, 6];
                break;
            case 6:
                shunxu = [6, 1, 8, 3, 2, 7, 0, 5];
                break;
            case 5:
                shunxu = [5, 6, 1, 8, 3, 2, 7, 0];
                break;
        }
    }
    for (let i = 0; i < 8; i++) {
        shenArray[shunxu[i]].innerText = shen[i];
    }
}

function paiDiPanShen(dun) {
    const shenArray = document.querySelectorAll('[data-dipanshen]');
    let shunxu = [];
    const anganzhi = document.querySelectorAll('[data-anganzhi]');
    let start = 0;
    for (let i = 0; i < 9; i++) {
        if (anganzhi[i].innerHTML.charAt(0) == '癸') {
            start = i;
            break;
        }
    }
    if (dun == '阳') {
        const shen = ['符', '蛇', '阴', '合', '虎', '玄', '地', '天'];
        switch (start) {
            case 0:
                shunxu = [0, 7, 2, 3, 8, 1, 6, 5];
                break;
            case 7:
                shunxu = [7, 2, 3, 8, 1, 6, 5, 0];
                break;
            case 2:
                shunxu = [2, 3, 8, 1, 6, 5, 0, 7];
                break;
            case 3:
                shunxu = [3, 8, 1, 6, 5, 0, 7, 2];
                break;
            case 8:
                shunxu = [8, 1, 6, 5, 0, 7, 2, 3];
                break;
            case 1:
                shunxu = [1, 6, 5, 0, 7, 2, 3, 8];
                break;
            case 4:
                shunxu = [1, 6, 5, 0, 7, 2, 3, 8];
                break;
            case 6:
                shunxu = [6, 5, 0, 7, 2, 3, 8, 1];
                break;
            case 5:
                shunxu = [5, 0, 7, 2, 3, 8, 1, 6];
                break;
        }
        for (let i = 0; i < 8; i++) {
            shenArray[shunxu[i]].innerHTML = shen[i];
        }
    } else {
        const shen = ['符', '蛇', '阴', '合', '虎', '玄', '地', '天'];
        switch (start) {
            case 0:
                shunxu = [0, 5, 6, 1, 8, 3, 2, 7];
                break;
            case 7:
                shunxu = [7, 0, 5, 6, 1, 8, 3, 2];
                break;
            case 2:
                shunxu = [2, 7, 0, 5, 6, 1, 8, 3];
                break;
            case 3:
                shunxu = [3, 2, 7, 0, 5, 6, 1, 8];
                break;
            case 8:
                shunxu = [8, 3, 2, 7, 0, 5, 6, 1];
                break;
            case 1:
                shunxu = [1, 8, 3, 2, 7, 0, 5, 6];
                break;
            case 4:
                shunxu = [1, 8, 3, 2, 7, 0, 5, 6];
                break;
            case 6:
                shunxu = [6, 1, 8, 3, 2, 7, 0, 5];
                break;
            case 5:
                shunxu = [5, 6, 1, 8, 3, 2, 7, 0];
                break;
        }
        for (let i = 0; i < 8; i++) {
            shenArray[shunxu[i]].innerHTML = shen[i];
        }
    }
}

function renderImportantColor(zhishi, shigan, rigan) {
    const tianpanshen = document.querySelectorAll('[data-tianpanshen]');
    // const dipanshen = document.querySelectorAll('[data-dipanshen]');
    const bamen = document.querySelectorAll('[data-men]');
    const tianpangan = document.querySelectorAll('[data-tianpangan]');
    const dipangan = document.querySelectorAll('[data-dipangan]');
    const jigong = document.querySelectorAll('[data-tianpanyikong]');
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
        if (tianpangan[i].innerHTML == rigan) {
            tianpangan[i].classList.add('rigan');
        }
        if (jigong[i].innerHTML == rigan) {
            jigong[i].classList.add('rigan');
        }
        if (document.querySelectorAll('[data-dipanyikong]')[i].innerHTML == rigan) {
            document.querySelectorAll('[data-dipanyikong]')[i].classList.add('rigan');
        }
        if (dipangan[i].innerHTML == rigan) {
            dipangan[i].classList.add('rigan');
        }
        if (bamen[i].innerHTML == zhishi) {
            bamen[i].classList.add('important');
        }
        if (tianpangan[i].innerHTML == shigan) {
            tianpangan[i].classList.remove('rigan');
            tianpangan[i].classList.add('important');
        }
        if (jigong[i].innerHTML == shigan) {
            jigong[i].classList.remove('rigan');
            jigong[i].classList.add('important');
        }
        if (dipangan[i].innerHTML == shigan) {
            dipangan[i].classList.remove('rigan');
            dipangan[i].classList.add('important');
        }
        if (document.querySelectorAll('[data-dipanyikong]')[i].innerHTML == shigan) {
            document.querySelectorAll('[data-dipanyikong]')[i].classList.remove('rigan');
            document.querySelectorAll('[data-dipanyikong]')[i].classList.add('shigan');
        }
        if (tianpanshen[i].innerHTML == '值符') {
            tianpanshen[i].classList.add('important');
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
    document.querySelectorAll('[data-tianpanyikong]').forEach((element, index) => {
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
    document.querySelectorAll('[data-dipanyikong]').forEach((element, index) => {
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
        }
    });
    document.querySelectorAll('[data-dipanshen]').forEach((element, index) => {
        switch (element.innerText) {
            case '符':
                element.classList.add('mu');
                break;
            case '蛇':
                element.classList.add('huo');
                break;
            case '阴':
                element.classList.add('jin');
                break;
            case '合':
                element.classList.add('mu');
                break;
            case '虎':
                element.classList.add('jin');
                break;
            case '玄':
                element.classList.add('shui');
                break;
            case '地':
                element.classList.add('tu');
                break;
            case '天':
                element.classList.add('jin');
                break;
        }
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
            case '阴':
                element.innerText = '陰';
                break;
        }
    });
}
