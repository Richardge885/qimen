const { ipcRenderer } = require('electron');
ipcRenderer.on('传统转盘排盘', (e, data) => {
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
    paiJiuXing(data.paipan.jiuxing, document.getElementById('shi').innerText);
    paiTianPanGan();
    paiTianPanShen(data.paipan.dun, document.getElementById('shi').innerText);
    paiDiPanShen(data.paipan.dun);
    wubuyushi();
    renderImportantColor(
        data.paipan.fushi.zhishi,
        document.getElementById('shi').innerHTML,
        document.getElementById('ri').innerHTML,
    );
    zhuanpan_info(info);
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

async function paiJiuXing(jiuxing, shigan) {
    const xingArray = document.querySelectorAll('[data-xing]');
    let shunxu = [];
    let position = document.querySelectorAll('[data-dipangan]');
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
        if (position[i].innerHTML == shigan) {
            start = i;
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
            break;
        }
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
                document.querySelectorAll('[data-tianpanyikong]')[i].innerHTML =
                    dipangan[4].innerHTML;
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

function paiTianPanShen(dun, shigan) {
    let shen = [];
    const shenArray = document.querySelectorAll('[data-tianpanshen]');
    let shunxu = [];
    let position = document.querySelectorAll('[data-dipangan]');
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
    if (dun == '阳') {
        shen = ['值符', '螣蛇', '太阴', '六合', '勾陈', '朱雀', '九地', '九天'];
        for (let i = 0; i < 9; i++) {
            if (position[i].innerHTML == shigan) {
                start = i;
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
                break;
            }
        }
        for (let i = 0; i < 8; i++) {
            shenArray[shunxu[i]].innerHTML = shen[i];
        }
    } else {
        shen = ['值符', '螣蛇', '太阴', '六合', '白虎', '玄武', '九地', '九天'];
        for (let i = 0; i < 9; i++) {
            if (position[i].innerHTML == shigan) {
                start = i;
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
                break;
            }
        }
        for (let i = 0; i < 8; i++) {
            console.log(shen[i]);
            shenArray[shunxu[i]].innerHTML = shen[i];
        }
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
        const shen = ['符', '蛇', '阴', '合', '勾', '雀', '地', '天'];
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
