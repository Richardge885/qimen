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
        switch (xing) {
            case '天蓬':
                document.getElementById('paipan-modal-info-section').innerHTML = info.xing.天蓬;
                break;
            case '天芮':
                document.getElementById('paipan-modal-info-section').innerHTML = info.xing.天芮;
                break;
            case '天冲':
                document.getElementById('paipan-modal-info-section').innerHTML = info.xing.天冲;
                break;
            case '天辅':
                document.getElementById('paipan-modal-info-section').innerHTML = info.xing.天辅;
                break;
            case '天禽':
                document.getElementById('paipan-modal-info-section').innerHTML = info.xing.天禽;
                break;
            case '天心':
                document.getElementById('paipan-modal-info-section').innerHTML = info.xing.天心;
                break;
            case '天柱':
                document.getElementById('paipan-modal-info-section').innerHTML = info.xing.天柱;
                break;
            case '天任':
                document.getElementById('paipan-modal-info-section').innerHTML = info.xing.天任;
                break;
            case '天英':
                document.getElementById('paipan-modal-info-section').innerHTML = info.xing.天英;
                break;
        }
    }
    function updateMenInfo(men) {
        switch (men) {
            case '休门':
                document.getElementById('paipan-modal-info-section').innerHTML = info.men.休;
                break;
            case '死门':
                document.getElementById('paipan-modal-info-section').innerHTML = info.men.死;
                break;
            case '伤门':
                document.getElementById('paipan-modal-info-section').innerHTML = info.men.伤;
                break;
            case '杜门':
                document.getElementById('paipan-modal-info-section').innerHTML = info.men.杜;
                break;
            case '中门':
                document.getElementById('paipan-modal-info-section').innerHTML = info.men.中;
                break;
            case '开门':
                document.getElementById('paipan-modal-info-section').innerHTML = info.men.开;
                break;
            case '惊门':
                document.getElementById('paipan-modal-info-section').innerHTML = info.men.惊;
                break;
            case '生门':
                document.getElementById('paipan-modal-info-section').innerHTML = info.men.生;
                break;
            case '景门':
                document.getElementById('paipan-modal-info-section').innerHTML = info.men.景;
                break;
        }
    }
    function updateShenInfo(shen) {
        switch (shen) {
            case '值符':
                document.getElementById('paipan-modal-info-section').innerHTML = info.shen.值符;
                break;
            case '螣蛇':
                document.getElementById('paipan-modal-info-section').innerHTML = info.shen.螣蛇;
                break;
            case '太阴':
                document.getElementById('paipan-modal-info-section').innerHTML = info.shen.太阴;
                break;
            case '六合':
                document.getElementById('paipan-modal-info-section').innerHTML = info.shen.六合;
                break;
            case '白虎':
                document.getElementById('paipan-modal-info-section').innerHTML = info.shen.白虎;
                break;
            case '勾陈':
                document.getElementById('paipan-modal-info-section').innerHTML = info.shen.勾陈;
                break;
            case '太常':
                document.getElementById('paipan-modal-info-section').innerHTML = info.shen.太常;
                break;
            case '玄武':
                document.getElementById('paipan-modal-info-section').innerHTML = info.shen.玄武;
                break;
            case '朱雀':
                document.getElementById('paipan-modal-info-section').innerHTML = info.shen.朱雀;
                break;
            case '九地':
                document.getElementById('paipan-modal-info-section').innerHTML = info.shen.九地;
                break;
            case '九天':
                document.getElementById('paipan-modal-info-section').innerHTML = info.shen.九天;
                break;
        }
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
        // if (men == document.getElementById('paipan-zhishi').innerText) {
        //     result = result + '<br>' + qiyizhimen(dipangan);
        // }

        // 吉凶格局 暂时只有吉格选项，todo吉格做完了再做凶格
        result = result + '<br>' + getJiGe(tianpangan, dipangan, xing, men, tianpanshen, gongwei);

        // 吉凶格局最终完成后的代码
        // result =
        //     result +
        //     '<br>' +
        //     getJiGe(tianpangan, dipangan, xing, men, tianpanshen, gongwei) +
        //     '<br>' +
        //     getXiongGe(tianpangan, dipangan, xing, men, tianpanshen, gongwei);
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
    // function qiyizhimen(dipangan) {
    //     switch (dipangan) {
    //         case '乙':
    //             return '<span style="color:#0079FE">日照当门：</span>主谋为多有贵人帮助，能逢凶化吉<br>';
    //         case '丙':
    //             return '<span style="color:#0079FE">月拱福户：</span>凡事世是有贵人帮助，家中女人胜男人<br>';
    //         case '丁':
    //             return '<span style="color:#0079FE">玉女守门：</span>主宜阴私和合之事，多有阴贵人相助<br>';
    //         case '己':
    //             return '<span style="color:#0079FE">地户蔽门：</span>凡事利于隐藏。如果旁边有庙宇，更为不利，当有灾祸<br>';
    //         case '庚':
    //             return '<span style="color:#0079FE">太白刑门：</span>凡事多阻碍，必然见纷争<br>';
    //         case '辛':
    //             return '<span style="color:#0079FE">天庭抵户：</span>凡是有艰难，半途之中难以进退<br>';
    //         case '壬':
    //             return '<span style="color:#0079FE">使入地牢：</span>凡事多变动，不然难有成功<br>';
    //     }
    // }
    function getJiGe(tianpangan, dipangan, xing, men, shen, gongwei) {
        let result = '';
        // 三诈
        if (tianpangan == '乙' || tianpangan == '丙' || tianpangan == '丁') {
            if (men == '开门' || men == '休门' || men == '生门') {
                if (shen == '太阴') {
                    result =
                        result +
                        '<span style="color:#0079FE">真诈：</span>宜施恩，隐遁，出师，招抚，嫁娶，远行，上官，赶赴，经商，求财。<br>';
                } else if (shen == '太阴') {
                    result =
                        result +
                        '<span style="color:#0079FE">重诈：</span>宜进人口，求财，谒贵，出师，埋伏，嫁娶，远行，上官，赶赴，经商，求财。<br>';
                } else if (shen == '太阴') {
                    result =
                        result +
                        '<span style="color:#0079FE">休诈：</span>宜合药，治病，嫁娶，远行，上官，赶赴，经商，求财。<br>';
                }
            }
        }
        // 五假
        // if()
        return result;
    }
    function getXiongGe(tianpangan, dipangan, xing, men, shen, gongwei) {}
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
}
