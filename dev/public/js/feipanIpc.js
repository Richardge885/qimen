const { ipcRenderer } = require('electron');
// 正时排盘
ipcRenderer.on('飞盘排盘', (e, data) => {
    const [year, month, day] = data.time.yangli
        .split('/')
        .map((str) => parseInt(str));
    updateTimeInfo(data, year, month, day);
    updateXunShou(data.paipan.xunshou);
    updateDun(data.paipan.dun);
    updateJushu(data.paipan.jushu);
    paiDiPanGan(data.paipan.dipangan);
    updateFuShi(data.paipan.fushi.zhifu, data.paipan.fushi.zhishi);
    updateWangShuai(data.paipan.wangshuai, data.paipan.dun);
    paiAnGanZhi(
        data.paipan.anganzhi,
        data.paipan.dun,
        data.paipan.dipangan,
        data.paipan.xunshou,
    );
    paiJiuXing(
        document.getElementById('shi').innerHTML,
        data.paipan.dipangan,
        data.paipan.jiuxing,
    );
    paiBaMen(data.paipan.bamen, document.getElementById('shi').innerHTML);
    paiTianPanGan(
        document.getElementById('shi').innerHTML,
        data.paipan.dipangan,
        data.paipan.dun,
        data.paipan.tianpangan,
    );
    paiTianPanShen(
        document.getElementById('shi').innerHTML,
        data.paipan.dun,
        data.paipan.dipangan,
    );
    paiDiPanShen(data.paipan.dun, data.paipan.xunshou, data.paipan.dipangan);
    paiKongWang(
        data.paipan.kongwang,
        document.querySelectorAll('[data-tianpangan]'),
        document.querySelectorAll('[data-dipangan]'),
    );
    paiMaXing(data.paipan.maxing);
    wubuyushi();
    renderImportantColor(
        data.paipan.fushi.zhishi,
        document.getElementById('shi').innerHTML,
        document.getElementById('ri').innerHTML,
    );
});

/**
 * 更新四柱等信息
 */
function updateTimeInfo(data, year, month, day) {
    document.getElementById('nian').innerHTML = data.time.nian;
    document.getElementById('yue').innerHTML = data.time.yue;
    document.getElementById('ri').innerHTML = data.time.ri;
    document.getElementById('shi').innerHTML = data.time.shi;
    document.getElementById('year-number').innerHTML = year;
    document.getElementById('month-number').innerHTML = month;
    document.getElementById('date-number').innerHTML = day;
    document.getElementById('jieqi').innerHTML = data.time.jieqi;
    let updateHour = new Date(document.getElementById('date-time').value);
    updateHour = `${updateHour.getHours()}:${updateHour.getMinutes()}`;
    document.getElementById('time-number').innerHTML = updateHour;
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
        const shen = [
            '值符',
            '螣蛇',
            '太阴',
            '六合',
            '勾陈',
            '太常',
            '朱雀',
            '九地',
            '九天',
        ];
        for (let i = 0; i < array.length; i++) {
            const index = (i + start) % array.length;
            array[index].innerHTML = shen[count];
            count++;
        }
    } else {
        const shen = [
            '值符',
            '螣蛇',
            '太阴',
            '六合',
            '白虎',
            '太常',
            '玄武',
            '九地',
            '九天',
        ];
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
        const shen = [
            '值符',
            '螣蛇',
            '太阴',
            '六合',
            '勾陈',
            '太常',
            '朱雀',
            '九地',
            '九天',
        ];
        for (let i = 0; i < array.length; i++) {
            const index = (i + start) % array.length;
            array[index].innerHTML = shen[count];
            count++;
        }
    } else {
        const shen = [
            '值符',
            '螣蛇',
            '太阴',
            '六合',
            '白虎',
            '太常',
            '玄武',
            '九地',
            '九天',
        ];
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
                document.querySelectorAll('[data-tianpanyikong]')[i].innerHTML =
                    '&#9826';
            }
        }
        for (let i = 0; i < 9; i++) {
            if (dipangan[i].innerHTML == kongwang.liuyi) {
                document.querySelectorAll('[data-dipanyikong]')[i].innerHTML =
                    '&#9826';
            }
        }
    } else {
        gongwei[kongwang.gongwei[0]].innerHTML = '〇';
        for (let i = 0; i < 9; i++) {
            if (tianpangan[i].innerHTML == kongwang.liuyi) {
                document.querySelectorAll('[data-tianpanyikong]')[i].innerHTML =
                    '&#9826';
            }
        }
        for (let i = 0; i < 9; i++) {
            if (dipangan[i].innerHTML == kongwang.liuyi) {
                document.querySelectorAll('[data-dipanyikong]')[i].innerHTML =
                    '&#9826';
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
