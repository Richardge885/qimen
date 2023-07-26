function zhuanpan_info(info) {
    document.querySelectorAll('[data-gongwei-overlay]').forEach((overlay, index) => {
        if (index !== 4) {
            overlay.addEventListener('click', () => {
                document.getElementById('paipan-jiamu-info').classList.add('hidden');
                document.getElementById('paipan-gongwei-info').classList.add('rounded-bl-[15px]');
                getCurrentGongweiInfo(index); // 提取被点击的宫位信息并且把宫内信息加载到侧边栏中
                changeFocusItem('geju');
                openInfoWindow();
            });
        } else {
            overlay.addEventListener('click', () => {
                document.getElementById('paipan-overlay').classList.remove('active');
                document.getElementById('paipan-info-modal').classList.remove('active');
            });
        }
    });

    document.getElementById('paipan-geju-info').addEventListener('click', () => {
        changeFocusItem('geju');
    });
    document.getElementById('paipan-tianpanshen-info').addEventListener('click', () => {
        changeFocusItem('tianpanshen');
    });
    document.getElementById('paipan-xing-info').addEventListener('click', () => {
        changeFocusItem('xing');
    });
    document.getElementById('paipan-men-info').addEventListener('click', () => {
        changeFocusItem('men');
    });
    document.getElementById('paipan-tianpangan-info').addEventListener('click', () => {
        changeFocusItem('tianpangan');
    });
    document.getElementById('paipan-jiamu-info').addEventListener('click', () => {
        changeFocusItem('jiamu');
    });
    document.getElementById('paipan-dipangan-info').addEventListener('click', () => {
        changeFocusItem('dipangan');
    });
    document.getElementById('paipan-jigong-info').addEventListener('click', () => {
        changeFocusItem('jigong');
    });
    document.getElementById('paipan-gongwei-info').addEventListener('click', () => {
        changeFocusItem('gua');
    });

    document.getElementById('paipan-overlay').addEventListener('click', () => {
        document.getElementById('paipan-overlay').classList.remove('active');
        document.getElementById('paipan-info-modal').classList.remove('active');
    });

    function openInfoWindow() {
        // open info modal
        document.getElementById('paipan-overlay').classList.add('active');
        document.getElementById('paipan-info-modal').classList.add('active');
    }

    async function getCurrentGongweiInfo(gongweiIndex) {
        const tianpanshen = document.querySelectorAll('[data-tianpanshen]')[gongweiIndex].innerHTML;
        const xing = document.querySelectorAll('[data-xing]')[gongweiIndex].innerHTML;
        const men = document.querySelectorAll('[data-men]')[gongweiIndex].innerHTML;
        const tianpangan = document.querySelectorAll('[data-tianpangan]')[gongweiIndex].innerHTML;
        const dipangan = document.querySelectorAll('[data-dipangan]')[gongweiIndex].innerHTML;
        const angan = document
            .querySelectorAll('[data-anganzhi]')
            [gongweiIndex].innerHTML.charAt(0);
        let bagua = '';
        switch (gongweiIndex) {
            case 0:
                bagua = '坎';
                break;
            case 1:
                bagua = '坤';
                break;
            case 2:
                bagua = '震';
                break;
            case 3:
                bagua = '巽';
                break;
            case 4:
                bagua = '中';
                break;
            case 5:
                bagua = '乾';
                break;
            case 6:
                bagua = '兑';
                break;
            case 7:
                bagua = '艮';
                break;
            case 8:
                bagua = '离';
                break;
        }
        if (xing == '天芮' || bagua == '坤') {
            document.getElementById('paipan-gongwei-info').classList.remove('rounded-bl-[15px]');
            document.getElementById('paipan-gongwei-info').classList.add('gongwei-info-on-bottom');
            document.getElementById('paipan-jigong-info').classList.remove('hidden');
            document.getElementById('paipan-tianpanshen-info').innerText = tianpanshen;
            document.getElementById('paipan-xing-info').innerText = xing;
            document.getElementById('paipan-men-info').innerText = men;
            document.getElementById('paipan-tianpangan-info').innerText = tianpangan;
            document.getElementById('paipan-dipangan-info').innerText = dipangan;
            document.getElementById('paipan-gongwei-info').innerText = bagua;
            document.getElementById('paipan-angan-info').innerText = angan;
            document.getElementById('paipan-jigong-info').innerText =
                document.querySelectorAll('[data-dipangan]')[4].innerHTML;
        } else {
            document.getElementById('paipan-gongwei-info').classList.add('rounded-bl-[15px]');
            document
                .getElementById('paipan-gongwei-info')
                .classList.remove('gongwei-info-on-bottom');
            document.getElementById('paipan-jigong-info').classList.add('hidden');
            document.getElementById('paipan-tianpanshen-info').innerText = tianpanshen;
            document.getElementById('paipan-xing-info').innerText = xing;
            document.getElementById('paipan-men-info').innerText = men;
            document.getElementById('paipan-tianpangan-info').innerText = tianpangan;
            document.getElementById('paipan-dipangan-info').innerText = dipangan;
            document.getElementById('paipan-gongwei-info').innerText = bagua;
            document.getElementById('paipan-angan-info').innerText = angan;
            document.getElementById('paipan-jigong-info').innerText = '';
        }
    }

    function changeFocusItem(item) {
        switch (item) {
            case 'geju':
                document.getElementById('paipan-modal-info-section').innerHTML = '';
                document.getElementById('paipan-geju-info').classList.add('focused-item');
                document.getElementById('paipan-tianpanshen-info').classList.remove('focused-item');
                document.getElementById('paipan-jigong-info').classList.remove('focused-item');
                document.getElementById('paipan-xing-info').classList.remove('focused-item');
                document.getElementById('paipan-men-info').classList.remove('focused-item');
                document.getElementById('paipan-tianpangan-info').classList.remove('focused-item');
                document.getElementById('paipan-jiamu-info').classList.remove('focused-item');
                document.getElementById('paipan-dipangan-info').classList.remove('focused-item');
                document.getElementById('paipan-gongwei-info').classList.remove('focused-item');
                if (
                    document.getElementById('paipan-xing-info').innerText != '天芮' &&
                    document.getElementById('paipan-gongwei-info').innerText != '坤'
                ) {
                    document.getElementById('paipan-modal-info-section').innerHTML = updateGejuInfo(
                        document.getElementById('paipan-tianpangan-info').innerText,
                        document.getElementById('paipan-dipangan-info').innerText,
                        document.getElementById('paipan-xing-info').innerText,
                        document.getElementById('paipan-men-info').innerText,
                        document.getElementById('paipan-tianpanshen-info').innerText,
                        document.getElementById('paipan-angan-info').innerText,
                        document.getElementById('paipan-gongwei-info').innerText,
                    );
                } else if (
                    document.getElementById('paipan-xing-info').innerText == '天芮' &&
                    document.getElementById('paipan-gongwei-info').innerText == '坤'
                ) {
                    document.getElementById('paipan-modal-info-section').innerHTML = updateGejuInfo(
                        document.getElementById('paipan-tianpangan-info').innerText,
                        document.getElementById('paipan-dipangan-info').innerText,
                        document.getElementById('paipan-xing-info').innerText,
                        document.getElementById('paipan-men-info').innerText,
                        document.getElementById('paipan-tianpanshen-info').innerText,
                        document.getElementById('paipan-angan-info').innerText,
                        document.getElementById('paipan-gongwei-info').innerText,
                        true,
                        true,
                    );
                } else if (document.getElementById('paipan-gongwei-info').innerText == '坤') {
                    document.getElementById('paipan-modal-info-section').innerHTML = updateGejuInfo(
                        document.getElementById('paipan-tianpangan-info').innerText,
                        document.getElementById('paipan-dipangan-info').innerText,
                        document.getElementById('paipan-xing-info').innerText,
                        document.getElementById('paipan-men-info').innerText,
                        document.getElementById('paipan-tianpanshen-info').innerText,
                        document.getElementById('paipan-angan-info').innerText,
                        document.getElementById('paipan-gongwei-info').innerText,
                        false,
                        true,
                    );
                } else if (document.getElementById('paipan-xing-info').innerText == '天芮') {
                    document.getElementById('paipan-modal-info-section').innerHTML = updateGejuInfo(
                        document.getElementById('paipan-tianpangan-info').innerText,
                        document.getElementById('paipan-dipangan-info').innerText,
                        document.getElementById('paipan-xing-info').innerText,
                        document.getElementById('paipan-men-info').innerText,
                        document.getElementById('paipan-tianpanshen-info').innerText,
                        document.getElementById('paipan-angan-info').innerText,
                        document.getElementById('paipan-gongwei-info').innerText,
                        true,
                        false,
                    );
                }
                break;
            case 'tianpanshen':
                document.getElementById('paipan-modal-info-section').innerHTML = '';
                document.getElementById('paipan-geju-info').classList.remove('focused-item');
                document.getElementById('paipan-jigong-info').classList.remove('focused-item');
                document.getElementById('paipan-tianpanshen-info').classList.add('focused-item');
                document.getElementById('paipan-xing-info').classList.remove('focused-item');
                document.getElementById('paipan-men-info').classList.remove('focused-item');
                document.getElementById('paipan-tianpangan-info').classList.remove('focused-item');
                document.getElementById('paipan-jiamu-info').classList.remove('focused-item');
                document.getElementById('paipan-dipangan-info').classList.remove('focused-item');
                document.getElementById('paipan-gongwei-info').classList.remove('focused-item');
                updateShenInfo(document.getElementById('paipan-tianpanshen-info').innerText);
                break;
            case 'xing':
                document.getElementById('paipan-modal-info-section').innerHTML = '';
                document.getElementById('paipan-geju-info').classList.remove('focused-item');
                document.getElementById('paipan-tianpanshen-info').classList.remove('focused-item');
                document.getElementById('paipan-jigong-info').classList.remove('focused-item');
                document.getElementById('paipan-xing-info').classList.add('focused-item');
                document.getElementById('paipan-men-info').classList.remove('focused-item');
                document.getElementById('paipan-tianpangan-info').classList.remove('focused-item');
                document.getElementById('paipan-jiamu-info').classList.remove('focused-item');
                document.getElementById('paipan-dipangan-info').classList.remove('focused-item');
                document.getElementById('paipan-gongwei-info').classList.remove('focused-item');
                updateXingInfo(document.getElementById('paipan-xing-info').innerText);
                break;
            case 'men':
                document.getElementById('paipan-modal-info-section').innerHTML = '';
                document.getElementById('paipan-geju-info').classList.remove('focused-item');
                document.getElementById('paipan-jigong-info').classList.remove('focused-item');
                document.getElementById('paipan-tianpanshen-info').classList.remove('focused-item');
                document.getElementById('paipan-xing-info').classList.remove('focused-item');
                document.getElementById('paipan-men-info').classList.add('focused-item');
                document.getElementById('paipan-tianpangan-info').classList.remove('focused-item');
                document.getElementById('paipan-jiamu-info').classList.remove('focused-item');
                document.getElementById('paipan-dipangan-info').classList.remove('focused-item');
                document.getElementById('paipan-gongwei-info').classList.remove('focused-item');
                updateMenInfo(document.getElementById('paipan-men-info').innerText);
                break;
            case 'tianpangan':
                document.getElementById('paipan-modal-info-section').innerHTML = '';
                document.getElementById('paipan-geju-info').classList.remove('focused-item');
                document.getElementById('paipan-tianpanshen-info').classList.remove('focused-item');
                document.getElementById('paipan-jigong-info').classList.remove('focused-item');
                document.getElementById('paipan-xing-info').classList.remove('focused-item');
                document.getElementById('paipan-men-info').classList.remove('focused-item');
                document.getElementById('paipan-tianpangan-info').classList.add('focused-item');
                document.getElementById('paipan-jiamu-info').classList.remove('focused-item');
                document.getElementById('paipan-dipangan-info').classList.remove('focused-item');
                document.getElementById('paipan-gongwei-info').classList.remove('focused-item');
                updateTianganInfo(document.getElementById('paipan-tianpangan-info').innerText);
                break;
            case 'jiamu':
                document.getElementById('paipan-modal-info-section').innerHTML = '';
                document.getElementById('paipan-geju-info').classList.remove('focused-item');
                document.getElementById('paipan-jigong-info').classList.remove('focused-item');
                document.getElementById('paipan-tianpanshen-info').classList.remove('focused-item');
                document.getElementById('paipan-xing-info').classList.remove('focused-item');
                document.getElementById('paipan-men-info').classList.remove('focused-item');
                document.getElementById('paipan-tianpangan-info').classList.remove('focused-item');
                document.getElementById('paipan-jiamu-info').classList.add('focused-item');
                document.getElementById('paipan-dipangan-info').classList.remove('focused-item');
                document.getElementById('paipan-gongwei-info').classList.remove('focused-item');
                updateTianganInfo('甲');
                break;
            case 'dipangan':
                document.getElementById('paipan-modal-info-section').innerHTML = '';
                document.getElementById('paipan-geju-info').classList.remove('focused-item');
                document.getElementById('paipan-tianpanshen-info').classList.remove('focused-item');
                document.getElementById('paipan-xing-info').classList.remove('focused-item');
                document.getElementById('paipan-men-info').classList.remove('focused-item');
                document.getElementById('paipan-tianpangan-info').classList.remove('focused-item');
                document.getElementById('paipan-jiamu-info').classList.remove('focused-item');
                document.getElementById('paipan-jigong-info').classList.remove('focused-item');
                document.getElementById('paipan-dipangan-info').classList.add('focused-item');
                document.getElementById('paipan-gongwei-info').classList.remove('focused-item');
                updateTianganInfo(document.getElementById('paipan-dipangan-info').innerText);
                break;
            case 'jigong':
                document.getElementById('paipan-modal-info-section').innerHTML = '';
                document.getElementById('paipan-geju-info').classList.remove('focused-item');
                document.getElementById('paipan-tianpanshen-info').classList.remove('focused-item');
                document.getElementById('paipan-xing-info').classList.remove('focused-item');
                document.getElementById('paipan-men-info').classList.remove('focused-item');
                document.getElementById('paipan-tianpangan-info').classList.remove('focused-item');
                document.getElementById('paipan-jiamu-info').classList.remove('focused-item');
                document.getElementById('paipan-dipangan-info').classList.remove('focused-item');
                document.getElementById('paipan-gongwei-info').classList.remove('focused-item');
                document.getElementById('paipan-jigong-info').classList.add('focused-item');
                updateTianganInfo(document.getElementById('paipan-dipangan-info').innerText);
                break;
            case 'gua':
                document.getElementById('paipan-modal-info-section').innerHTML = '';
                document.getElementById('paipan-jigong-info').classList.remove('focused-item');
                document.getElementById('paipan-geju-info').classList.remove('focused-item');
                document.getElementById('paipan-tianpanshen-info').classList.remove('focused-item');
                document.getElementById('paipan-xing-info').classList.remove('focused-item');
                document.getElementById('paipan-men-info').classList.remove('focused-item');
                document.getElementById('paipan-tianpangan-info').classList.remove('focused-item');
                document.getElementById('paipan-jiamu-info').classList.remove('focused-item');
                document.getElementById('paipan-dipangan-info').classList.remove('focused-item');
                document.getElementById('paipan-gongwei-info').classList.add('focused-item');
                updateBaguaInfo(document.getElementById('paipan-gongwei-info').innerText);
                break;
        }
    }
    function updateXingInfo(xing) {
        let result = '';
        switch (xing) {
            case '天蓬':
                result = info.xing.天蓬;
                break;
            case '天芮':
                result = info.xing.天芮;
                break;
            case '天冲':
                result = info.xing.天冲;
                break;
            case '天辅':
                result = info.xing.天辅;
                break;
            case '天禽':
                result = info.xing.天禽;
                break;
            case '天心':
                result = info.xing.天心;
                break;
            case '天柱':
                result = info.xing.天柱;
                break;
            case '天任':
                result = info.xing.天任;
                break;
            case '天英':
                result = info.xing.天英;
                break;
        }
        document.getElementById('paipan-modal-info-section').innerHTML =
            result +
            '<br><br>' +
            '<span style="color:#0079FE">九星值时克应：</span><br>' +
            xingZhiShiYing(
                document.getElementById('paipan-xing-info').innerText,
                document.getElementById('shi').innerText.charAt(1),
            );
    }
    function updateMenInfo(men) {
        let result = '';
        switch (men) {
            case '休门':
                result = info.men.休;
                break;
            case '死门':
                result = info.men.死;
                break;
            case '伤门':
                result = info.men.伤;
                break;
            case '杜门':
                result = info.men.杜;
                break;
            case '中门':
                result = info.men.中;
                break;
            case '开门':
                result = info.men.开;
                break;
            case '惊门':
                result = info.men.惊;
                break;
            case '生门':
                result = info.men.生;
                break;
            case '景门':
                result = info.men.景;
                break;
        }
        document.getElementById('paipan-modal-info-section').innerHTML =
            result +
            '<br><br>' +
            '<span style="color:#0079FE">动应：</span><br>' +
            menDongYing(document.getElementById('paipan-men-info').innerText);
    }
    function updateShenInfo(shen) {
        let result = '';
        switch (shen) {
            case '值符':
                result = info.shen.值符;
                break;
            case '螣蛇':
                result = info.shen.螣蛇;
                break;
            case '太阴':
                result = info.shen.太阴;
                break;
            case '六合':
                result = info.shen.六合;
                break;
            case '白虎':
                result = info.shen.白虎;
                break;
            case '勾陈':
                result = info.shen.勾陈;
                break;
            case '太常':
                result = info.shen.太常;
                break;
            case '玄武':
                result = info.shen.玄武;
                break;
            case '朱雀':
                result = info.shen.朱雀;
                break;
            case '九地':
                result = info.shen.九地;
                break;
            case '九天':
                result = info.shen.九天;
                break;
        }
        document.getElementById('paipan-modal-info-section').innerHTML =
            result +
            '<br><br>' +
            '<span style="color:#0079FE">动应：</span><br>' +
            shenDongYing(document.getElementById('paipan-tianpanshen-info').innerText);
    }
    function updateTianganInfo(tiangan) {
        switch (tiangan) {
            case '乙':
                document.getElementById('paipan-modal-info-section').innerHTML = info.tiangan.乙;
                break;
            case '丙':
                document.getElementById('paipan-modal-info-section').innerHTML = info.tiangan.丙;
                break;
            case '丁':
                document.getElementById('paipan-modal-info-section').innerHTML = info.tiangan.丁;
                break;
            case '戊':
                document.getElementById('paipan-modal-info-section').innerHTML = info.tiangan.戊;
                break;
            case '己':
                document.getElementById('paipan-modal-info-section').innerHTML = info.tiangan.己;
                break;
            case '庚':
                document.getElementById('paipan-modal-info-section').innerHTML = info.tiangan.庚;
                break;
            case '辛':
                document.getElementById('paipan-modal-info-section').innerHTML = info.tiangan.辛;
                break;
            case '壬':
                document.getElementById('paipan-modal-info-section').innerHTML = info.tiangan.壬;
                break;
            case '癸':
                document.getElementById('paipan-modal-info-section').innerHTML = info.tiangan.癸;
                break;
        }
    }
    function updateBaguaInfo(gua) {
        switch (gua) {
            case '乾':
                document.getElementById('paipan-modal-info-section').innerHTML = info.gua.乾;
                break;
            case '坎':
                document.getElementById('paipan-modal-info-section').innerHTML = info.gua.坎;
                break;
            case '艮':
                document.getElementById('paipan-modal-info-section').innerHTML = info.gua.艮;
                break;
            case '震':
                document.getElementById('paipan-modal-info-section').innerHTML = info.gua.震;
                break;
            case '巽':
                document.getElementById('paipan-modal-info-section').innerHTML = info.gua.巽;
                break;
            case '离':
                document.getElementById('paipan-modal-info-section').innerHTML = info.gua.离;
                break;
            case '坤':
                document.getElementById('paipan-modal-info-section').innerHTML = info.gua.坤;
                break;
            case '兑':
                document.getElementById('paipan-modal-info-section').innerHTML = info.gua.兑;
                break;
            case '中':
                document.getElementById('paipan-modal-info-section').innerHTML = info.gua.中;
                break;
        }
    }
    function updateGejuInfo(
        tianpangan,
        dipangan,
        xing,
        men,
        tianpanshen,
        angan,
        gongwei,
        tianji = false,
        diji = false,
    ) {
        let result = getZhangSheng(tianpangan, gongwei) + getZhangSheng(dipangan, gongwei);
        if (tianji && diji) {
            result =
                result +
                getZhangSheng(document.getElementById('paipan-jigong-info').innerText, gongwei) +
                '<br>' +
                whichGeJu(tianpangan, dipangan) +
                '<br>' +
                whichGeJu(tianpangan, document.getElementById('paipan-jigong-info').innerText) +
                '<br>' +
                whichGeJu(document.getElementById('paipan-jigong-info').innerText, dipangan) +
                '<br>' +
                whichGeJu(
                    document.getElementById('paipan-jigong-info').innerText,
                    document.getElementById('paipan-jigong-info').innerText,
                ) +
                '<br>' +
                whichGeJu(angan, dipangan) +
                '<br>' +
                whichGeJu(angan, document.getElementById('paipan-jigong-info').innerText);
        } else if (diji) {
            result =
                result +
                getZhangSheng(document.getElementById('paipan-jigong-info').innerText, gongwei) +
                '<br>' +
                whichGeJu(tianpangan, dipangan) +
                '<br>' +
                whichGeJu(tianpangan, document.getElementById('paipan-jigong-info').innerText) +
                '<br>' +
                whichGeJu(angan, dipangan) +
                '<br>' +
                whichGeJu(angan, document.getElementById('paipan-jigong-info').innerText);
        } else if (tianji) {
            result =
                result +
                getZhangSheng(document.getElementById('paipan-jigong-info').innerText, gongwei) +
                '<br>' +
                whichGeJu(tianpangan, dipangan) +
                '<br>' +
                whichGeJu(document.getElementById('paipan-jigong-info').innerText, dipangan) +
                '<br>' +
                whichGeJu(angan, dipangan);
        } else {
            result =
                result +
                '<br>' +
                whichGeJu(tianpangan, dipangan) +
                '<br>' +
                whichGeJu(angan, dipangan);
        }
        result = result + '<br>' + getJiGe(tianpangan, dipangan, xing, men, tianpanshen, gongwei);
        return result;
    }
    function whichGeJu(tianpangan, dipangan) {
        const group = tianpangan + dipangan;
        let output = `${tianpangan} + ${dipangan}：<br>`;
        switch (group) {
            case '乙乙':
                output =
                    output +
                    '<span style="color:#0079FE">日奇伏吟：</span>不宜见上级领导、贵人；求名求利及进取事不可求，只宜安分守己。利主，宜静不宜动，宜守不宜进。<br>';
                break;
            case '乙丙':
                output =
                    output +
                    '<span style="color:#0079FE">奇仪顺遂：</span>吉星加官尽职，凶星夫妻反目离别。临吉星谋事多吉；临凶星求谋不顺，特别是不利于婚姻。<br>';
                break;
            case '乙丁':
                output =
                    output +
                    '<span style="color:#0079FE">奇仪相佐：</span>最利文书、考试，百事可为。<br>';
                break;
            case '乙戊':
                output =
                    output +
                    '<span style="color:#0079FE">阴害阳门：</span>利于阴人阴事，不利于阳人阳事。<br>';
                break;
            case '乙己':
                output =
                    output +
                    '<span style="color:#0079FE">日奇入墓：</span>被土暗昧、门凶事必凶。<br>';
                break;
            case '乙庚':
                output =
                    output + '<span style="color:#0079FE">日奇被刑：</span>有争讼，各怀私意。<br>';
                break;
            case '乙辛':
                output =
                    output +
                    '<span style="color:#0079FE">青龙逃走：</span>人亡财破，奴仆拐带，六畜皆伤。<br>';
                break;
            case '乙壬':
                output =
                    output +
                    '<span style="color:#0079FE">日奇入天罗：</span>尊婢悖乱，官讼是非，有人谋害之事。<br>';
                break;
            case '乙癸':
                output =
                    output +
                    '<span style="color:#0079FE">日奇入地网：</span>宜退不宜进，隐匿藏形，躲灾避难为吉，此格局不利于进 攻。<br>';
                break;

            case '丙乙':
                output =
                    output + '<span style="color:#0079FE">日月并行：</span>公谋私为皆为吉。<br>';
                break;
            case '丙丙':
                output =
                    output +
                    '<span style="color:#0079FE">月奇悖师：</span>文书逼迫，破耗遗失。<br>';
                break;
            case '丙丁':
                output =
                    output +
                    '<span style="color:#0079FE">星奇朱雀：</span>贵人文书吉利，常人平静安乐。<br>';
                break;
            case '丙戊':
                output =
                    output +
                    '<span style="color:#0079FE">飞鸟跌穴：</span>事业可为，可谋大事，对好事大吉大利，如求婚、求财、考试、求官等，不用费多大力气，就能成功。求财遇此格，财来了，到财库了。<br>';
                break;
            case '丙己':
                output =
                    output +
                    '<span style="color:#0079FE">火悖入刑：</span>囚人刑杖，文书不行，吉门得吉，凶门转凶。<br>';
                break;
            case '丙庚':
                output =
                    output +
                    '<span style="color:#0079FE">荧入太白：</span>賊必去。门户破败，盗贼耗失，事业亦凶。<br>';
                break;
            case '丙辛':
                output =
                    output +
                    '<span style="color:#0079FE">日月相会：</span>谋事成就，病人不凶。<br>';
                break;
            case '丙壬':
                output =
                    output +
                    '<span style="color:#0079FE">火入天罗：</span>为客不利，是非颇多。<br>';
                break;
            case '丙癸':
                output =
                    output +
                    '<span style="color:#0079FE">月奇地网：</span>阴人害事，灾祸频生，凡事暗昧不明。<br>';
                break;

            case '丁乙':
                output =
                    output +
                    '<span style="color:#0079FE">玉女奇生：</span>也为人遁吉格，贵人加官进爵，常人婚姻财帛有喜<br>';
                break;
            case '丁丙':
                output =
                    output +
                    '<span style="color:#0079FE">星随月转：</span>贵人越级高升，常人乐极生悲，要忍，不然因小的不忍，而引起大的不幸。<br>';
                break;
            case '丁丁':
                output =
                    output +
                    '<span style="color:#0079FE">星奇入太阴：</span>文书证件即至，喜事从心、万事如意。<br>';
                break;
            case '丁戊':
                output =
                    output +
                    '<span style="color:#0079FE">青龙转光：</span>官人升迁，常人威昌。无论遇到多大困难，将来都会出现转机。<br>';
                break;
            case '丁己':
                output =
                    output +
                    '<span style="color:#0079FE">火入勾陈：</span>奸私仇怨，事因女人。<br>';
                break;
            case '丁庚':
                output =
                    output +
                    '<span style="color:#0079FE">星奇受阻：</span>文书阻隔，行人必归。<br>';
                break;
            case '丁辛':
                output =
                    output +
                    '<span style="color:#0079FE">朱雀入狱：</span>罪人失囚，官人失位。<br>';
                break;
            case '丁壬':
                output =
                    output +
                    '<span style="color:#0079FE">奇仪相合：</span>贵人恩诏，诉狱公平。<br>';
                break;
            case '丁癸':
                output =
                    output +
                    '<span style="color:#0079FE">朱雀投江：</span>文书口舌是非，经官动府、词诉不利，音信沉溺不到。<br>';
                break;

            case '戊乙':
                output =
                    output +
                    '<span style="color:#0079FE">青龙和会：</span>门吉事吉，门凶事也凶。<br>';
                break;
            case '戊丙':
                output =
                    output +
                    '<span style="color:#0079FE">青龙返首：</span>，动作大吉，但若逢门迫、入墓、击刑，则吉事成凶。<br>';
                break;
            case '戊丁':
                output =
                    output +
                    '<span style="color:#0079FE">青龙耀明：</span>宜见上级领导、贵人、求功名，为事吉利，若值墓迫，招惹是非。<br>';
                break;
            case '戊戊':
                output =
                    output +
                    '<span style="color:#0079FE">伏吟：</span>凡事不利，道路闭塞，以守为好。<br>';
                break;
            case '戊己':
                output = output + '<span style="color:#0079FE">贵人入狱：</span>公私皆不利。<br>';
                break;
            case '戊庚':
                output =
                    output +
                    '<span style="color:#0079FE">值符飞宫：</span>吉事不吉，凶事更凶，求财没利益，测病也主凶。<br>';
                break;
            case '戊辛':
                output =
                    output +
                    '<span style="color:#0079FE">青龙折足：</span>，吉门有生助，尚能谋事；若逢凶门，主招灾，失财或有足疾、折伤。<br>';
                break;
            case '戊壬':
                output =
                    output +
                    '<span style="color:#0079FE">青龙入天牢：</span>凡阴阳事皆不吉利。<br>';
                break;
            case '戊癸':
                output =
                    output +
                    '<span style="color:#0079FE">青龙华盖：</span>逢吉门为吉，可招福临门；逢凶门，事多不利，为凶。<br>';
                break;

            case '己乙':
                output =
                    output +
                    '<span style="color:#0079FE">墓神不明：</span>墓神不明，地户逢星，宜遁迹隐形为利。<br>';
                break;
            case '己丙':
                output =
                    output +
                    '<span style="color:#0079FE">火悖地户：</span>男人冤冤相害；女人必致淫污。<br>';
                break;
            case '己丁':
                output =
                    output + '<span style="color:#0079FE">朱雀入狱：</span>文书词讼，先曲后直<br>';
                break;
            case '己戊':
                output =
                    output +
                    '<span style="color:#0079FE">犬遇青龙：</span>门吉为谋望遂意，上人见喜。若门凶，枉费心机。<br>';
                break;
            case '己己':
                output =
                    output +
                    '<span style="color:#0079FE">地户逢鬼：</span>病者发凶或必死，百事不遂，暂不谋为，谋为则凶。<br>';
                break;
            case '己庚':
                output =
                    output +
                    '<span style="color:#0079FE">刑格返名：</span>词讼先动者不利，如临阴星（凶星）则有谋害之情。<br>';
                break;
            case '己辛':
                output =
                    output + '<span style="color:#0079FE">游魂入墓：</span>易招阴邪鬼魅作祟。<br>';
                break;
            case '己壬':
                output =
                    output +
                    '<span style="color:#0079FE">地网高张：</span>狡童佚女，奸情伤杀，凡事不吉，谋为不利。<br>';
                break;
            case '己癸':
                output =
                    output +
                    '<span style="color:#0079FE">地刑玄武：</span>男女疾病垂危，有囚狱词讼之灾。<br>';
                break;

            case '庚乙':
                output =
                    output +
                    '<span style="color:#0079FE">太白逢星：</span>退吉进凶，谋为不利。<br>';
                break;
            case '庚丙':
                output =
                    output +
                    '<span style="color:#0079FE">太白入荧：</span>贼必来，为客进利，为主破财。<br>';
                break;
            case '庚丁':
                output =
                    output +
                    '<span style="color:#0079FE">亭亭之格：</span>因私匿或男女关系起官司是非，门吉有救；门凶，事必凶。<br>';
                break;
            case '庚戊':
                output =
                    output + '<span style="color:#0079FE">天乙伏宫：</span>百事不可谋，大凶。<br>';
                break;
            case '庚己':
                output =
                    output +
                    '<span style="color:#0079FE">官府刑格：</span>主有官司口舌，因官讼被判刑，住牢狱更凶，百事不利。<br>';
                break;
            case '庚庚':
                output = output + '<span style="color:#0079FE">太白同宫：</span>官灾横祸。<br>';
                break;
            case '庚辛':
                output =
                    output +
                    '<span style="color:#0079FE">白虎干格：</span>不宜远行，远行车折马伤，求财更为大凶，诸事有灾殃，时间越长越凶。<br>';
                break;
            case '庚壬':
                output =
                    output +
                    '<span style="color:#0079FE">太白退位：</span>也为小格，金化水流，主远行迷失道路，男女音信难 通、变动、外出。<br>';
                break;
            case '庚癸':
                output =
                    output +
                    '<span style="color:#0079FE">太白冲刑：</span>也为大格，主车祸，行人不至，官事不止，生育母子俱伤，大凶。<br>';
                break;

            case '辛乙':
                output =
                    output +
                    '<span style="color:#0079FE">白虎猖狂：</span>家败人亡（分家、婚散、破产），出行有惊恐，远行多灾殃，尊长不喜，车船俱伤。<br>';
                break;
            case '辛丙':
                output =
                    output +
                    '<span style="color:#0079FE">干合悖师：</span>荧惑出现，占雨无，占晴旱，占事必因财致讼。<br>';
                break;
            case '辛丁':
                output =
                    output +
                    '<span style="color:#0079FE">狱神得奇：</span>经商求财获利倍增，囚人逢天赦释免，办其他事，也会有意外的收获。<br>';
                break;
            case '辛戊':
                output =
                    output +
                    '<span style="color:#0079FE">困龙被伤：</span>主官司破财，屈抑守分尚可，妄动则带来祸殃。<br>';
                break;
            case '辛己':
                output =
                    output +
                    '<span style="color:#0079FE">入狱自刑：</span>故为入狱自刑，主奴仆背主，有苦诉讼难伸。<br>';
                break;
            case '辛庚':
                output =
                    output +
                    '<span style="color:#0079FE">白虎出力：</span>刀刃相交，主客相残，逊让退步则安，强进血溅衣衫。<br>';
                break;
            case '辛辛':
                output =
                    output +
                    '<span style="color:#0079FE">伏吟天庭：</span>公废私就，讼狱自羅罪名。<br>';
                break;
            case '辛壬':
                output =
                    output +
                    '<span style="color:#0079FE">凶蛇入狱：</span>两男争女，一货售两 家、讼狱不息，先动失理，利主不利客。<br>';
                break;
            case '辛癸':
                output =
                    output +
                    '<span style="color:#0079FE">天牢华盖：</span>日月失明，误入天网，动止乖张。<br>';
                break;

            case '壬乙':
                output =
                    output +
                    '<span style="color:#0079FE">小蛇得势：</span>女人柔顺，男人通达。<br>';
                break;
            case '壬丙':
                output =
                    output +
                    '<span style="color:#0079FE">水蛇入火：</span>两败俱伤，为客不利。<br>';
                break;
            case '壬丁':
                output =
                    output +
                    '<span style="color:#0079FE">干合蛇刑：</span>文书牵连，贵人匆匆，男吉女凶。<br>';
                break;
            case '壬戊':
                output =
                    output +
                    '<span style="color:#0079FE">小蛇化龙：</span>男人发达，女产婴童，做事要防耗散。<br>';
                break;
            case '壬己':
                output =
                    output +
                    '<span style="color:#0079FE">反吟蛇刑：</span>主官司败诉，大祸将至，顺守为吉，妄动必凶。<br>';
                break;
            case '壬庚':
                output =
                    output +
                    '<span style="color:#0079FE">太白擒蛇：</span>刑狱公平，立判邪正，这是对于词讼之类来讲的。<br>';
                break;
            case '壬辛':
                output =
                    output +
                    '<span style="color:#0079FE">腾蛇相缠：</span>纵得吉门，亦不能安。<br>';
                break;
            case '壬壬':
                output =
                    output +
                    '<span style="color:#0079FE">天狱自刑/蛇入地罗：</span>求谋无成，祸患起于内部，诸事主破败，外人缠绕，内事索索。<br>';
                break;
            case '壬癸':
                output =
                    output +
                    '<span style="color:#0079FE">幼女奸淫：</span>主有家丑外扬之事发生；门吉星凶，反福为祸。<br>';
                break;

            case '癸乙':
                output =
                    output +
                    '<span style="color:#0079FE">华盖逢星：</span>贵人禄位，常人平安。<br>';
                break;
            case '癸丙':
                output =
                    output +
                    '<span style="color:#0079FE">华盖悖师：</span>贵贱逢之皆不利，唯上人见喜。<br>';
                break;
            case '癸丁':
                output =
                    output +
                    '<span style="color:#0079FE">腾蛇夭矫：</span>文书官司，火焚也逃不掉，虚惊不宁。<br>';
                break;
            case '癸戊':
                output =
                    output +
                    '<span style="color:#0079FE">天乙合会：</span>吉门宜求财，婚姻喜美，吉人赞助成合。<br>';
                break;
            case '癸己':
                output =
                    output +
                    '<span style="color:#0079FE">华盖地户：</span>男女测之，音信皆阻，躲灾避难方为吉。<br>';
                break;
            case '癸庚':
                output =
                    output +
                    '<span style="color:#0079FE">太白入网：</span>以暴力争讼，自邏罪责。<br>';
                break;
            case '癸辛':
                output =
                    output +
                    '<span style="color:#0079FE">网盖天牢：</span>官司败诉，死罪难逃。<br>';
                break;
            case '癸壬':
                output =
                    output +
                    '<span style="color:#0079FE">复见腾蛇：</span>嫁娶重婚，后嫁无子，不保年华。<br>';
                break;
            case '癸癸':
                output =
                    output +
                    '<span style="color:#0079FE">天网四张：</span>主行人失伴，病讼皆伤。<br>';
                break;
        }
        return output;
    }
    function getJiGe(tianpangan, dipangan, xing, men, shen, gongwei) {
        let result = '';
        // todo 却天三门，地四户，地私门
        // 天三门
        // 地四户
        // 地私门

        // 三诈
        if (tianpangan == '乙' || tianpangan == '丙' || tianpangan == '丁') {
            if (men == '开门' || men == '休门' || men == '生门') {
                if (shen == '太阴') {
                    result =
                        result +
                        '<span style="color:#0079FE">真诈：</span>宜施恩，隐遁，出师，招抚，嫁娶，远行，上官，赶赴，经商，求财。<br><br>';
                } else if (shen == '九地') {
                    result =
                        result +
                        '<span style="color:#0079FE">重诈：</span>宜进人口，求财，谒贵，出师，埋伏，嫁娶，远行，上官，赶赴，经商，求财。<br><br>';
                } else if (shen == '六合') {
                    result =
                        result +
                        '<span style="color:#0079FE">休诈：</span>宜合药，治病，嫁娶，远行，上官，赶赴，经商，求财。<br><br>';
                }
            }
        }

        // 五假
        // 天假
        if (tianpangan == '丙') {
            if (men == '景门') {
                if (shen == '九天') {
                    if (dipangan == '戊') {
                        result =
                            result +
                            '<span style="color:#0079FE">天假：</span>宜谒贵，上策，发令，结盟。<br><br>';
                    }
                }
            }
        }
        // 地假
        if (tianpangan == '丁') {
            if (men == '杜门') {
                if (shen == '九地') {
                    if (dipangan == '己') {
                        result =
                            result +
                            '<span style="color:#0079FE">地假：</span>宜藏伏，逃难，侦查。<br><br>';
                    }
                }
            }
        }
        // 物假
        if (tianpangan == '丁') {
            if (men == '杜门') {
                if (shen == '太阴') {
                    if (dipangan == '己') {
                        result =
                            result +
                            '<span style="color:#0079FE">物假：</span>宜埋葬，伏藏，交易。<br><br>';
                    }
                }
            }
        }
        // 人假
        if (tianpangan == '壬') {
            if (men == '惊门') {
                if (shen == '螣蛇') {
                    if (gongwei == '坤') {
                        result =
                            result +
                            '<span style="color:#0079FE">人假：</span>宜逋逃，搜隐。<br><br>';
                    }
                }
            }
        }
        // 鬼假
        if (tianpangan == '己') {
            if (men == '死门') {
                if (shen == '朱雀' || shen == '玄武') {
                    if (gongwei == '艮') {
                        result =
                            result +
                            '<span style="color:#0079FE">鬼假：</span>宜修坟，狩猎。<br><br>';
                    }
                }
            }
        }
        // 神假
        if (tianpangan == '庚') {
            if (men == '伤门') {
                if (shen == '白虎') {
                    if (gongwei == '巽') {
                        result =
                            result +
                            '<span style="color:#0079FE">神假：</span>宜埋葬，捕捉，诈亡，嫁娶，贸易等。<br><br>';
                    }
                }
            }
        }

        // 九遁
        // 天遁
        if (tianpangan == '丙') {
            if (men == '生门') {
                if (dipangan == '丁') {
                    result =
                        result +
                        '<span style="color:#0079FE">天遁：</span>宜征战，上书，求官，除恶，结婚，贸易，百事生旺。<br><br>';
                }
            }
        }
        // 地遁
        if (tianpangan == '乙') {
            if (men == '开门') {
                if (dipangan == '己') {
                    result =
                        result +
                        '<span style="color:#0079FE">地遁：</span>宜安营，藏兵，修造，出阵，求财。<br><br>';
                }
            }
        }
        // 人遁
        if (tianpangan == '丁') {
            if (men == '休门') {
                if (shen == '太阴') {
                    result =
                        result +
                        '<span style="color:#0079FE">人遁：</span>宜攻虚，开路，塞河，造像，教化。<br><br>';
                }
            }
        }
        // 神遁
        if (tianpangan == '丙') {
            if (men == '生门') {
                if (shen == '九天') {
                    result =
                        result +
                        '<span style="color:#0079FE">神遁：</span>大利功名，开创，宣扬等事。<br><br>';
                }
            }
        }
        // 鬼遁
        if (tianpangan == '乙') {
            if (men == '开门' || men == '生门' || dipangan == '丁') {
                if (shen == '九地') {
                    result =
                        result +
                        '<span style="color:#0079FE">鬼遁：</span>宜安营，藏兵，修造，出阵，求财。<br><br>';
                }
            }
        }
        // 风遁
        if (tianpangan == '辛') {
            if (men == '休门') {
                if (gongwei == '巽') {
                    result =
                        result +
                        '<span style="color:#0079FE">风遁：</span>宜烧营截寨，焚粮草，顺风响应。<br><br>';
                }
            }
        }
        // 云遁
        if (tianpangan == '乙') {
            if (men == '休门') {
                if (gongwei == '震') {
                    result =
                        result +
                        '<span style="color:#0079FE">云遁：</span>宜伏藏变化，兴云致雾，利于出兵。<br><br>';
                }
            }
        }
        // 龙遁
        if (tianpangan == '乙') {
            if (men == '休门') {
                if (gongwei == '坎' || dipangan == '癸') {
                    result =
                        result +
                        '<span style="color:#0079FE">龙遁：</span>宜请龙祈雨，治水，水战，把守河渡，谋划，修桥，穿井。<br><br>';
                }
            }
        }
        // 虎遁
        if (gongwei == '艮') {
            if (tianpangan == '乙') {
                if (men == '休门') {
                    if (dipangan == '辛') {
                        result =
                            result +
                            '<span style="color:#0079FE">虎遁：</span>宜立营，招降，设伏，修造。<br><br>';
                    }
                }
            }
        }
        // 文遁
        if (tianpangan == '乙') {
            if (men == '生门') {
                if (dipangan == '丁') {
                    result =
                        result +
                        '<span style="color:#0079FE">文遁：</span>大利文书，谋划等事。<br><br>';
                }
            }
        }
        // 武遁
        if (tianpangan == '丙') {
            if (men == '开门') {
                if (dipangan == '辛') {
                    result =
                        result + '<span style="color:#0079FE">武遁：</span>大利武威等事 。<br><br>';
                }
            }
        }

        if (tianpangan == '乙') {
            if (dipangan == '丁') {
                if (men == '生门') {
                    result =
                        result +
                        '<span style="color:#0079FE">日丽中天：</span>宜伤官谒贵，谋望求财，考试科举，投兵任将，嫁娶，造葬，放水。<br><br>';
                }
            }
        }
        return result;
    }
    function getZhangSheng(tiangan, gongwei) {
        const zhangsheng = '<span style="color:red">长生</span>';
        const muyu = '沐浴';
        const guandai = '冠带';
        const linguan = '<span style="color:red">临官</span>';
        const diwang = '<span style="color:red">帝旺</span>';
        const shuai = '衰';
        const bing = '病';
        const si = '死';
        const mu = '<span style="color:#0079FE">墓</span>';
        const jue = '绝';
        const tai = '胎';
        const yang = '养';

        let result = '';
        switch (tiangan) {
            case '乙':
                switch (gongwei) {
                    case '乾':
                        result = '乙：' + si + '，' + mu;
                        break;
                    case '坎':
                        result = '乙：' + bing;
                        break;
                    case '艮':
                        result = '乙：' + diwang + '，' + shuai;
                        break;
                    case '震':
                        result = '乙：' + linguan;
                        break;
                    case '巽':
                        result = '乙：' + muyu + '，' + guandai;
                        break;
                    case '离':
                        result = '乙：' + zhangsheng;
                        break;
                    case '坤':
                        result = '乙：' + tai + '，' + yang;
                        break;
                    case '兑':
                        result = '乙：' + jue;
                        break;
                }
                break;
            case '丙':
                switch (gongwei) {
                    case '乾':
                        result = '丙：' + mu + '，' + jue;
                        break;
                    case '坎':
                        result = '丙：' + tai;
                        break;
                    case '艮':
                        result = '丙：' + yang + '，' + zhangsheng;
                        break;
                    case '震':
                        result = '丙：' + muyu;
                        break;
                    case '巽':
                        result = '丙：' + guandai + '，' + linguan;
                        break;
                    case '离':
                        result = '丙：' + diwang;
                        break;
                    case '坤':
                        result = '丙：' + shuai + '，' + bing;
                        break;
                    case '兑':
                        result = '丙：' + si;
                        break;
                }
                break;
            case '丁':
                switch (gongwei) {
                    case '乾':
                        result = '丁：' + tai + '，' + yang;
                        break;
                    case '坎':
                        result = '丁：' + jue;
                        break;
                    case '艮':
                        result = '丁：' + si + '，' + mu;
                        break;
                    case '震':
                        result = '丁：' + bing;
                        break;
                    case '巽':
                        result = '丁：' + diwang + '，' + shuai;
                        break;
                    case '离':
                        result = '丁：' + linguan;
                        break;
                    case '坤':
                        result = '丁：' + muyu + '，' + guandai;
                        break;
                    case '兑':
                        result = '丁：' + zhangsheng;
                        break;
                }
                break;
            case '戊':
                switch (gongwei) {
                    case '乾':
                        result = '戊：' + mu + '，' + jue;
                        break;
                    case '坎':
                        result = '戊：' + tai;
                        break;
                    case '艮':
                        result = '戊：' + yang + '，' + zhangsheng;
                        break;
                    case '震':
                        result = '戊：' + muyu;
                        break;
                    case '巽':
                        result = '戊：' + guandai + '，' + linguan;
                        break;
                    case '离':
                        result = '戊：' + diwang;
                        break;
                    case '坤':
                        result = '戊：' + shuai + '，' + bing;
                        break;
                    case '兑':
                        result = '戊：' + si;
                        break;
                }
                break;
            case '己':
                switch (gongwei) {
                    case '乾':
                        result = '己：' + tai + '，' + yang;
                        break;
                    case '坎':
                        result = '己：' + jue;
                        break;
                    case '艮':
                        result = '己：' + si + '，' + mu;
                        break;
                    case '震':
                        result = '己：' + bing;
                        break;
                    case '巽':
                        result = '己：' + diwang + '，' + shuai;
                        break;
                    case '离':
                        result = '己：' + linguan;
                        break;
                    case '坤':
                        result = '己：' + muyu + '，' + guandai;
                        break;
                    case '兑':
                        result = '己：' + zhangsheng;
                        break;
                }
                break;
            case '庚':
                switch (gongwei) {
                    case '乾':
                        result = '庚：' + shuai + '，' + bing;
                        break;
                    case '坎':
                        result = '庚：' + si;
                        break;
                    case '艮':
                        result = '庚：' + mu + '，' + jue;
                        break;
                    case '震':
                        result = '庚：' + tai;
                        break;
                    case '巽':
                        result = '庚：' + yang + '，' + zhangsheng;
                        break;
                    case '离':
                        result = '庚：' + muyu;
                        break;
                    case '坤':
                        result = '庚：' + guandai + '，' + linguan;
                        break;
                    case '兑':
                        result = '庚：' + diwang;
                        break;
                }
                break;
            case '辛':
                switch (gongwei) {
                    case '乾':
                        result = '辛：' + muyu + '，' + guandai;
                        break;
                    case '坎':
                        result = '辛：' + zhangsheng;
                        break;
                    case '艮':
                        result = '辛：' + tai + '，' + yang;
                        break;
                    case '震':
                        result = '辛：' + jue;
                        break;
                    case '巽':
                        result = '辛：' + si + '，' + mu;
                        break;
                    case '离':
                        result = '辛：' + bing;
                        break;
                    case '坤':
                        result = '辛：' + diwang + '，' + shuai;
                        break;
                    case '兑':
                        result = '辛：' + linguan;
                        break;
                }
                break;
            case '壬':
                switch (gongwei) {
                    case '乾':
                        result = '壬：' + guandai + '，' + linguan;
                        break;
                    case '坎':
                        result = '壬：' + diwang;
                        break;
                    case '艮':
                        result = '壬：' + shuai + '，' + bing;
                        break;
                    case '震':
                        result = '壬：' + si;
                        break;
                    case '巽':
                        result = '壬：' + mu + '，' + jue;
                        break;
                    case '离':
                        result = '壬：' + tai;
                        break;
                    case '坤':
                        result = '壬：' + yang + '，' + zhangsheng;
                        break;
                    case '兑':
                        result = '壬：' + muyu;
                        break;
                }
                break;
            case '癸':
                switch (gongwei) {
                    case '乾':
                        result = '癸：' + diwang + '，' + shuai;
                        break;
                    case '坎':
                        result = '癸：' + linguan;
                        break;
                    case '艮':
                        result = '癸：' + muyu + '，' + guandai;
                        break;
                    case '震':
                        result = '癸：' + zhangsheng;
                        break;
                    case '巽':
                        result = '癸：' + tai + '，' + yang;
                        break;
                    case '离':
                        result = '癸：' + jue;
                        break;
                    case '坤':
                        result = '癸：' + si + '，' + mu;
                        break;
                    case '兑':
                        result = '癸：' + bing;
                        break;
                }
                break;
        }
        return result + '<br>';
    }
    function menDongYing(men) {
        if (men == '中门') {
            return '';
        } else {
            switch (men) {
                case '休门':
                    return '休门三十阴贵人，衣着蓝黄及碧青。<br>出此门三十里，见阴贵人，或五十里，见蛇、鼠、水物，吉。宜和集万事，可以休心宁志，人宅营家。';
                case '死门':
                    return '死门二十逢疾病，黄皂衣人见遭迪。<br>出此门二十里，逢有疾病。或五十里、五里内，见血光。远行不还家，嫁娶伤家长，新妇凶。宜刑吊事。';
                case '伤门':
                    return '伤门三十争讼起，凶人着皂血光腥。<br>出此门三十里，有争讼出血之人。若造葬、上官、出行，主遭贼。只宜捕盗、渔猎。';
                case '杜门':
                    return '杜门二十男女辈，绢皂褐碧相从行。<br>出此门二十里，见男女同行。或六十里，见恶人。日奇临，二女人身着青衫；月奇临，主烽火；星奇临，弓驾应。宜掩捕、兴土疆、绝鬼营、修仙隐逸、冲举炼药，吉。';
                case '开门':
                    return '开门二十阴人至，贵人乘马紫衣襟。<br>出此门二十里，见贵人着紫骑马，吉。四十里内，见猪马，逢酒食，万事吉。锣鼓鎗刀，妇人担伞至。手执物，抱孩儿。';
                case '惊门':
                    return '惊门三十鸦鸣噪，官状相逢六畜椁。<br>出此门三十里，见鸦鹊官状，六畜牴触之事。十里内有损物，四十里二人争打，返吉。如无康惊，凶。';
                case '生门':
                    return '生门十五逢公吏，官人着紫皂衣巾。<br>出此门十五里，有紫衣公吏官人。或六十里，见贵人车马，百事吉。可以造仙佛殿。拜将出师，大胜。';
                case '景门':
                    return '景门二十惊忧事，绯皂衣人宴会宾。<br>出此门二十里，有忧惊事。三十里外，见赤身人，或火蛇。七十里，水火失物。宜上书破阵，吉。如起造、嫁娶，杀宅长小口，大凶';
            }
        }
    }
    function shenDongYing(shen) {
        if (shen == '太常') {
            return '';
        } else {
            switch (shen) {
                case '值符':
                    return '贵人星，出行路上遇贵人，或高年老叟。又六甲为青龙，主财物，人从车船竹木而至';
                case '螣蛇':
                    return '主形状古怪奇异之物，或空康花假之物，及有执物而至。客来相会，必淹滞缠扰，难于送别。忧惶惊恐，事多颠倒。';
                case '太阴':
                    return '女人或阴险小人。为密谋文书，又谈方术事。人从南方来引，可依托。';
                case '六合':
                    return '遇人必喜笑相迎，一见如故。更有美女少妇，身着新衣，相将酒食，和颜悦色，殷勤相接';
                case '白虎':
                    return '必遇新丧孝子，或白衣人，或居夫、猎户，闻啼哭之声，或残疾老人，或争斗带伤之客，或骑马而过。';
                case '玄武':
                    return '必遇盗贼，或奸人刺客，或儿童小子，或讲元门课卜之士，或逃亡走审窘迫之人。';
                case '勾陈':
                    return '必遇新丧孝子，或白衣人，或居夫、猎户，闻啼哭之声，或残疾老人，或争斗带伤之客，或骑马而过。';
                case '朱雀':
                    return '必遇盗贼，或奸人刺客，或儿童小子，或讲元门课卜之士，或逃亡走审窘迫之人。';
                case '九地':
                    return '必遇暫日老病、心多忧患之人，或新丧者，或算命卜祝之人，说鬼神幽冥之事。';
                case '九天':
                    return '出行必遇响声，或口舌争斗。或屠夫、兵卒，手中执有兵器物件。此皆随出门之方而占之，不专在直符直使之宫也。';
            }
        }
    }
    function xingZhiShiYing(xing, shi) {
        switch (xing) {
            case '天蓬':
                switch (shi) {
                    case '子':
                        return '天蓬值子时，不利人宅、安坟、上官、嫁娶，主有口舌争讼之事。凡作用时，有鸡鸣大畎、宿鸟闹林、田鼠争斗，或北方作黑云，有雨势，或见蓑笠渔翁、胡面强暴之人，或见青蓝衣之人至应。作用后，申子辰日，有缺唇驼背人来，鸡生肉卵。须防官讼破财，或家有人缢溺而死。';
                    case '丑':
                        return '天蓬值丑时，主墓树倒伤人、雷电风兩、茅莲草舍、鸡鸣犬吠，穉子牵犊过应。作用后，十日内．鸡生怪卵，黄大上屋．枯井水发，防小口灾、家业散、三年内，白头翁作牙®，进商音人田产，财谷大旺，十年后又败。';
                    case '寅':
                        return '天蓬值寅时，有青衣童子持花果来，北方和尚持杖至，公吏猎犬奔驰，青衫蓝裙田妇车水应。作用后，六十日内，如遇黑蛇人宅咬人，或鬼撒砂为怪、牛马伤人，主家道中落。三年后，得进田地，仍复兴旺。';
                    case '卯':
                        return '天蓬值卯时，黄云四起，妇人持铁器前来，免蛇横道。作用后，七日或六十日内，有角徵音人相请宴饮，或送财物。防女人口舌、盗贼牵连之事。若见过百日内当得横财。';
                    case '辰':
                        return '天蓬值辰时，砂雾飞扬，窑烟瘴气，鼓乐铿锵，东北方倒树伤人，渔樵牧子，孝妇奔丧，红衣女子至应。作用后，六十日内，鸦绕屋鸣，须防劫贼，又主有疯疾人上门图赖。如见过，家生贵子，大旺财谷。';
                    case '巳':
                        return '天蓬值巳时，逢驼背老人，持竹杖披蓑衣，妇女携酒，师巫歌唱，大蛇上树。作用后，百日内，遇火灾，反得横财。周年得武职，加官进禄。';
                    case '午':
                        return '天蓬值午时，逢炉冶事，有人持刀战斗，青衣妇抱红衣孩子，东方叫喊，或哭声应。作用后，六十日内，犬为怪，家长有忧。逢赤面疯瘫人，图赖破财。三年后，得古容大发。';
                    case '未':
                        return '天蓬值未时，逢童子逐羊，鸦鹊惊鸣，二女啼哭，北方有红衣女人至。作用后，六十日，须防军贼破财。';
                    case '申':
                        return '天蓬值申时，逢童子打水鼓叫喊，及持雨盖，牵猴走索人至应。作用后，二十日，遇鸡窠内蛇伤人，主奸淫事败露，有妇人投缳。';
                    case '酉':
                        return '天蓬值西时，西方见赤马车奥，群鸦飞噪，远寺钟声，妇人烹饪应。作用后，百日内，僧道人作牙，进商音人田产，大发。三年内，鸡生双子，猫生白种，名利皆吉。';
                    case '戌':
                        return '天蓬值戌时，主闻盗贼之声，老者扶杖来，及白须人担箩运士，西方雷雨应。作用后，六十日内，白犬自至，当因军器得财。';
                    case '亥':
                        return '天蓬值亥时，主孩儿啼哭，山峡瀑泉之声。见江干钓叟，醉翁夜归，孝服女人至。作用后，因捉贼得财。三年内，当出道法术艺人，位至公卿。';
                }
            case '天芮':
                switch (shi) {
                    case '子':
                        return '天芮星值子时，西南有火光，禽惊走，二人相逐，老妪抱孩童至。作用后，六十日内，有猫犬为怪，防妇人产厄。若秋冬用事，当进羽音妻妾人口。';
                    case '丑':
                        return '天芮星值丑时，闻金鼓声自西北至，或老妇锄园瓜果之应。作用后，七日内，遇龟鹊人宅，须防盗贼破财、口舌官讼之事。';
                    case '寅':
                        return '天芮星值寅时，见怀孕瘦妇，蓑笠老人，牵狗舞猴应。作用后，六十日，水牛人屋，名利大旺。';
                    case '卯':
                        return '天芮星值卯时，有红衣女人送花果之物，贵人骑马，两犬斗，水牛鸭应。作用后，六十日，进东方绝户产业，防小儿有汤火之灾。二年内，进羽音人物，及血财，防妇人胎产之厄。';
                    case '辰':
                        return '天芮星值辰时，有土工匠作窑坑之事，或士坍树倒、鸦鸣鼓声应。作用后，如遇野鸟人宅，须防盗劫破财。';
                    case '巳':
                        return '天芮星值巳时，逢驼背老人，持竹杖披蓑衣，妇女携酒，师巫歌唱，大蛇上树。作用后，百日内，遇火灾，反得横财。周年得武职，加官进禄。';
                    case '午':
                        return '天芮星值午时，有大肚胖汉，缺唇白衣人，妊妇牛马过应。作用后，六十日内，遇猫咬人，因买鱼发横财。周年后，得妻财。';
                    case '未':
                        return '天芮星值末时，有捕猎人，老妇牵羊，白衣道人携饮食应。作用后，周年内，乌鸦绕屋噪，赤面三牙须人斗闹，鸡犬瘟疫，须防回禄蛇伤。';
                    case '申':
                        return '天芮星值申时，东方有青盖，或僧道胡领人至，牛鸭犬吠应。作用后，百日内，进羽音人产物。周年内，野鸟人宅，防灾疫。';
                    case '酉':
                        return '天芮星值酉时，有群鸦鹊噪，正马过关，远寺金鼓声应。作用后，进鸡猫，可以求名。';
                    case '戌':
                        return '天芮星值戌时，有老人持杖，军士担锣守关，黄昏犬吠，老妪悲泣应。作用后，白虎来家，主得横财。';
                    case '亥':
                        return '天芮星值亥时，有子母相依，牛马作队应。作用后，有野猪人室，必主以道艺荣身。';
                }
            case '天冲':
                switch (shi) {
                    case '子':
                        return '天冲星值子时，有风兩鹤鸣钟鼓声应。作用后，六十日内，有生气人屋。周年田蚕倍收，防妇人产亡。若拾得古镜，当得僧道之财。';
                    case '丑':
                        return '天冲星值丑时，有青衣车牛，与埙篪鼓声，牛鸣虎啸犬吠，风雾窑烟，小儿妇人来应。作用后，牛产辙犊，乌猫生白子，庭生瑞草，得山林、田产、僧尼之财。若逢匠作伤狗，防庭帏灾变。';
                    case '寅':
                        return '天冲星值寅时，有贵人乘轿，童子执金银器至应。作用后，二十日，进角音人六畜田契，或人送琉璃器肌。六十日，牝鸡晨鸣，防家长有厄。若见过，因口舌争讼得财，主乙己丁生人获福。';
                    case '卯':
                        return '天冲星值卯时，有女子渡桥，贵人乘马，木匠锯树，猎犬逐免应。作用后，宜防妇女有灾。';
                    case '辰':
                        return '天冲星值辰时，主蛇上树，虎出林，僧道士工至应。作用后，拾得黄白古物，发财。七十日，进一男一女，家主防跌蹼。';
                    case '巳':
                        return '天冲星值已时，有牛羊争斗，女人相骂，西南鼓声，东南火发。作用后，六十日，蛇蛇咬鸡，牛人室，女人送契至。一百日，犬生花狗，大旺田财。';
                    case '午':
                        return '天冲星值午时，东邻火起，白衣叫唤，鸦鹊喧闹应。作用后，拾得古器，有鬼运钱谷，大发之兆。';
                    case '未':
                        return '天冲星值未时，有鼓响，孝服儿女，牛羊成群，西北闹喧应。作用后，六十日，白羊人宅，大发。';
                    case '申':
                        return '天冲星值申时，南方有白衣人骑马，吏卒人持刀斗殴应。作用后百日，女人作牙，进绝户产业。';
                    case '酉':
                        return '天冲星值酉时，有远人书信，狐狸咬叫，妇人把火。作用后，周年得贵子，发横财。';
                    case '戌':
                        return '天冲星值戌时，西方三五人，把火寻失物，军吏师巫，三牙须人至应。作用后，六十日，鸡上树鸣，得远信，获羽音人财。周年，防牛伤小口之患。';
                    case '亥':
                        return '天冲星值亥时，有跛足青衣人至，及东北人家火光应。作用后，猫捕得白鼠，大发财禄。';
                }
            case '天辅':
                switch (shi) {
                    case '子':
                        return '天辅星值子时，主天有景星庆云，红白衣人叫唤应。作用后，六十日内，进商音人物。如猿猴人室，主加官孕子之吉。';
                    case '丑':
                        return '天辅星值丑时，东方犬吠，有人争斗应。作用后，六十日，野鸡白免人屋，进僧道之物，或东南方羽音人送文契，远人信来。周年添人口，血财大旺，加官进禄。';
                    case '寅':
                        return '天辅星值寅时，主公吏人手持金木之器，及艺人携文书乐器应。作用后，六十日，有猫咬鸡维，当得盗贼财物。赤面人作牙，进羽音人田契。十二年大发，且生贵子。';
                    case '卯':
                        return '天辅星值卯时，有女人持雨盖，师巫鼓角声应。作用后，六十日，有生气人屋。因女人讼事，得财物产业。';
                    case '辰':
                        return '天辅星值辰时，有白羊黄犬相斗，卖油米菜人相撞，白衣小儿哭，怀事妇人至。作用后，大发钱谷。一年内，双生贵子。';
                    case '巳':
                        return '天辅星值巳时，有僧尼相调，女人抱布，狂风四起，儿童叫喊。作用后，进东方人财，有鬼搬运，大发财源。';
                    case '午':
                        return '天辅星值午时，有僧道持盖，文人把扇，女子穿红，窑冶烟起应。作用后，有贵人送异物，进西方人金银，长者到门，得寡妇之产。';
                    case '未':
                        return '天辅星值末时，有群犬争吠，丐妇携杖，僧道铺啜，西北方争屋喧哗应。作用后，百日内，进商音人财物，或有文信人宅，大发。';
                    case '申':
                        return '天辅星值申时，有肿脚青长人携酒果至，三教色衣人来，西北金鼓声应。作用后，井中出蛇，有人送牛羊至，吉。半年内，得妇人财，大发。';
                    case '酉':
                        return '天辅星值西时，得远信，娶妇来应。作用后，人财大发。';
                    case '戌':
                        return '天辅星值戌时，主窑冶火光，兵卒守关，师巫并行应。作用后，得远方财信，防六畜伤人。';
                    case '亥':
                        return '天辅星值亥时，有野猪奔逐，鸡鸣犬吠，渔翁把钓，僧尼夜奔应。作用后，见白鼠，大吉。';
                }
            case '天禽':
                switch (shi) {
                    case '子':
                        return '天禽星值子时，有怀孕妇人，紫衣费客，鼠走蝠飞应。作用后，六十日，鸡上树，大衔花，儒人赠物，主因武官进田士、财物。二十年后，丁财两发。';
                    case '丑':
                        return '天禽星值丑时，有孝服人持锡器来，小儿拍掌叫笑，黄胖矮子孕妇至。作用后，赌博获财，或得窑中财。三年后，遇牛吗，因获盗致富。';
                    case '寅':
                        return '天禽星值寅时，鸡乱吗，犬样吠，公吏僧道，陶冶匠役，带棕笠人至。作用后，六十日，进羽音人文契，田蚕大旺，庭产瑞草，发福发丁。';
                    case '卯':
                        return '天禽星值卯时，东风大发，小禽四噪，怀孕妇人至，与士木动作应。作用后，半年，野猫自来，园内可以得窖。';
                    case '辰':
                        return '天禽星值辰时，有师巫术艺人争闹，鸦鸣烟雾应。作用后，六十日内，有僧道或无嗣人送产物至，大发。';
                    case '巳':
                        return '天禽星值巳时，有白头野鸭，成队飞鸣，及师巫争闹，贵人骑马，鸡鸣蛇游应。作用后，七十日内，如遇妇人自来求合，生贵子。三年内，田蚕大旺。';
                    case '午':
                        return '天禽星值午时，有白衣女人至，狗街花，鸡斗叫，风云从东来。作用后，六十日，有外犬人室，主得东方人财。一年内，乌鸡出白维，进铁器，诸事荣昌。';
                    case '未':
                        return '天禽星值未时，有老人或跋足人担花过，青衣人携酒至。作用后，六十日内，进羽音人铁器，诸事大吉。';
                    case '申':
                        return '天禽星值申时，主天中飞鸟大叫，师巫执符，老人负辕来。作用后，百日内，如遇女人来，或拾得珠翠归。周年生贵子。';
                    case '酉':
                        return '天禽星值西时，西方火起，喧闹金鼓声应。作用后，一年内，如遇鸡生五子，有昌盛之兆。';
                    case '戌':
                        return '天禽星值戌时，东北方钟声，军人负戈，铙钹樵鼓，青衣童子携篮，或车大应。作用后，六十日，有白龟人室，当得寡妇财产。';
                    case '亥':
                        return '天禽星值亥时，闻西北方嫁女哭声，发西风，树倒拆屋。作用后，六十日，商音人作牙，进僧道田产，或进匠人铜铁器，则主大发。';
                }
            case '天心':
                switch (shi) {
                    case '子':
                        return '天心星值子时，主闻金鼓涛声，西北争斗，赤面长者来应。作用后，百日内，进商音人古器书面，家生白鸡，田蚕大旺。十二年外，因赌博见讼，防破家。';
                    case '丑':
                        return '天心星值丑时，主南方火光，跛足人把伞镜，送宝至。作用后，五日内，有双猫来家。四十日内，进商书远人财物文契，则有多寿之庆。';
                    case '寅':
                        return '天心星值寅时，有白鹭水禽，金鼓四鸣，青衣女人携篮，公吏走狗应。作用后，防遗火伤小口。六十日，有公事至。百日内，获金银。因得古窑，进商羽音人产。三年，得妻财贵子。';
                    case '卯':
                        return '天心星值卯时，有免走鸟飞，跛足妇人争闹，及犬吠鼓声，北方肩奥至。作用后，七日进横财。三年内，有牛自来，六畜大旺。有人来请，因军得财。';
                    case '辰':
                        return '天心星值辰时，主西北云起，青衣人携鱼，女人僧道同行。作用后，六十日，井中气如云出，则主大富贵之兆。';
                    case '巳':
                        return '天心星值已时，有青衣女子，抱小儿至，紫衣骑马，乌蛇上树应。作用后，半月内，得意外之财。跛足作牙，进商音人产，六畜大旺。三年内，女人成家，寡母坐堂之兆。';
                    case '午':
                        return '天心星值午时，主风丽骤至，蛇横当道，红裙女子携酒至。作用时，六十日，釜鸣，跛足人送生气物至。五年内，进金银田蚕，大旺。';
                    case '未':
                        return '天心星值未时，主老人说婚，牵羊担酒，妇女歌笑，衣服首饰之应。作用后，如遇羊生二羔，人财大旺。';
                    case '申':
                        return '天心星值申时，主僧道前来，金鼓四吗，百鸟喧噪，红裙女子送酒赠花果至。作用后，如遇白猿戏环，寡妇当家，主大发积。';
                    case '酉':
                        return '天心星值酉时，主僧道尼姑，把火西南上来，北方金鼓声，鸡鸣马嘶，婢子到门应。作用后，七十日，进商音人骡马、财物，官贵艺术人送远信至，大吉。';
                    case '戌':
                        return '天心星值戌时，主南方犬吠賊惊，小儿骑牛，公吏打犬应。作用后，三年内，鸡犬自来，则大富贵。';
                    case '亥':
                        return '天心星值亥时，有鸡鸣犬吠，皮帽老人手持铁器，渔翁夜归应。作用后，如遇远方人投宿遗下财宝，大吉。';
                }
            case '天柱':
                switch (shi) {
                    case '子':
                        return '天柱星值子时，有火从东至，狂风四起，孩童啼叫，缺唇人米应。作用后，六十日内，如遇蛇犬伤人，须防血光破财之事';
                    case '丑':
                        return '天柱星值丑时，匠人携斧自北来，孕妇产育，树生金花应。作用后，六十日，进羽音人金银器皿，三年外，防回禄穷败，出弄蛇戏，犬作傀儡人。';
                    case '寅':
                        return '天柱星值寅时，有牛鸣马嘶，僧道持盖，雷雨鹊噪应。作用后，如遇贼情牵连，须防妇女产厄。';
                    case '卯':
                        return '天柱星值卯时，瘦妇提筐，两僧尼持盖，女人争斗，及羊免之应。作用后，六十日内，遇鸡犬作怪，则防疫病死绝之危。';
                    case '辰':
                        return '天柱星值辰时，有扛木持鼓人过，农夫负锄，居宰恶人来应。作用后，鸡生双卵，猫生异种，进北方人财物，寡妇送契至，红面人作牙，进羽音女人田产。';
                    case '巳':
                        return '天柱星值已时，有黑牛钟声，乌猪大蛇，风雷火怪应。作用时，二十日，进商音人财物。六十日内，家有女人落水，生气物人宅。周年内，猫捕得白鼠，发富贵之兆。';
                    case '午':
                        return '天柱星值午时，西方有妇女骑骡，炉冶火惊，雷雪鸭吗应。作用后，五日内，孕妇病，防孝服事。六十日内，水边得古器，防小口有灾。';
                    case '未':
                        return '天柱星值末时，有瘦妇与僧道同行，东北携盖骑马逐羊应。作用后，百日内，遇狐狸为怪，防退财。';
                    case '申':
                        return '天柱星值申时，主鹰掠离堕地，猿猴惊啼，青衣人携篮应。作用后，如遇和尚奸拐，防因火丧家。';
                    case '酉':
                        return '天柱星值酉时，有远寺钟声，西方鼓角，鸡吗树上应。作用后，如遇盆鸣，防阴人灾厄。';
                    case '戌':
                        return '天柱星值戌时，有军兵相斗，犬吠荒村，女人纺织。作用后，如遇蛇虫伤人，防瘟疫死败。';
                    case '亥':
                        return '天柱星值亥时，有金声，乞丐啼哭，山下火光应。作用后，如遇妇人馈鲤，主因火得财。';
                }
            case '天任':
                switch (shi) {
                    case '子':
                        return '天任星值子时，有风雾火光，水畔鸡鸣，东南方有人持刀斧过应。作用后，百日内，遇妇人离异事，及木姓三牙须人上门图赖。家道日落，门风大败。';
                    case '丑':
                        return '天任星值丑时，有青衣妇人携酒，闻鼓乐声，山林锄筑应。作用后，半年外，有鹦鹉人宅，因口舌得财。';
                    case '寅':
                        return '天任星值寅时，有火把引女人行动，童子拍手戏笑，西北轿马，公使道人室应，作用后，六十日内，甑鸣，防妇死。百日内，进六畜。遇女人赠钗，防缺唇人争婚之祸。';
                    case '卯':
                        return '天任星值卵时，有老人持杖，喜鹤飞鸣，渔猎之应。作用后，七日内，得古器瓦物。百日内，因女人获财，进牛羊六畜，则有加官进职发财之光。';
                    case '辰':
                        return '天任星值辰时，有采樵渔猎，公吏师巫应。作用后，遇狸獭人宅，防田基争竞之事。';
                    case '巳':
                        return '天任星值已时，有两犬争一物，野人负薪过，吏人持盖，斗鸡走狗应。作用后，六十日，获远方人财。南方人送双鲤，就异途功名，当显。';
                    case '午':
                        return '天任星值午时，有师巫至，西北方黄色飞禽，或马狗来应。作用后，四十日，紫衣人人室，进贵人之物，当生贵子。';
                    case '未':
                        return '天任星值未时，有白鸡或飞马自西北来，鼓声喧闹，风丽大作应。作用后，七日内，女人送白色物至。六十日内，家生异物，六畜大旺。';
                    case '申':
                        return '天任星值申时，有风雨声，黄衣僧道师巫，舞猴挝鼓应。作用后，七日内，防妇女汤火之厄。';
                    case '酉':
                        return '天任星值酉时，有僧尼举火，西方人争斗，鸟鹊喧噪，白衣孕妇，钟声窑烟应。作用后，进商音人骡马，当得远方之财。';
                    case '戌':
                        return '天任星值戌时，女人抱白布至，西方鼓声，北方树倒，军吏惊走，大吠争斗应。作用后，六十日，蛇虫人宅咬人，黄大上屋，有军人来图赖，防瘟疫死败。';
                    case '亥':
                        return '天任星值亥时，有西寺钟声，山下火起，妇女啼哭应。作用后，遇人送双鲤至，因救火得财，大发。';
                }
            case '天英':
                switch (shi) {
                    case '子':
                        return '天英星值子时，有雞飞鼠走，西北锣声，把火伐木应。作用后，缺唇人为祸，防血光与火灾。';
                    case '丑':
                        return '天英星值丑时，东北方师巫至，闻金鼓声，村舍渔火应。作用后，一年内，大作人言，防回禄死败。';
                    case '寅':
                        return '天英星值寅时，有军马渔猎，僧道之应。作用后，女人拾财宝归。六十日内，得寡妇田产。百日内，出遇疾雷暴雨，大发。';
                    case '卯':
                        return '天英星值卯时，有负木器人，及有灯火炉烟，或烧林之应。作用后，六十日内，进妇人财宝，人财两发。';
                    case '辰':
                        return '天英星值辰时，有红衣女子，鼓声渔罟应。作用后，遇鸦鸣绕屋，须防切贼窃盗。';
                    case '巳':
                        return '天英星值巳时，有僧道焚香，蛇狗炉火应。作用后，如得意外之财，或人送鲤来，主人财两旺。';
                    case '午':
                        return '天英星值午时，南方有婚姻事，车马经过，捕猎人执马矢至。作用后，遇梟鸟人宅，须防缢殒殇亡之事。';
                    case '未':
                        return '天英星值末时，有孕如提筐，羊酒喜事，西北方鼓声火光应。作用后，如遇家人落水，须防瘟疫之侵。';
                    case '申':
                        return '天英星值申时，有孕妇啼哭，僧道师巫，金鼓雨盖应。作用后，如遇猴马自来，当防横事。';
                    case '酉':
                        return '天英星值西时，有鸟鹊争食，怀孕妇人，矮飞马走，西方争用②应。作用后，如遇牝鸡晨鸣，须防女眷折足伤损之厄。';
                    case '戌':
                        return '天英星值戌时，有窑灶火惊，军营争斗，黄大来应。作用后，遇赤蛇人宅伤人，须防瘟疫。';
                    case '亥':
                        return '天英星值亥时，有女人把火，孩童叫哭，渔公夜吹，水面波涛之应。作用后，如遇疯疾人上门，防有破耗之事。';
                }
        }
    }
}
