function feipan_info(info) {
    let whichGong;
    document.querySelectorAll('[data-gongwei-overlay]').forEach((overlay, index) => {
        overlay.addEventListener('click', () => {
            whichGong = index;
            if (
                document.querySelectorAll('[data-tianpanshen]')[index].innerHTML == '值符' &&
                document.querySelectorAll('[data-dipanshen]')[index].innerHTML == '值符'
            ) {
                document.getElementById('paipan-jiamu-info').classList.remove('hidden');
                document
                    .getElementById('paipan-gongwei-info')
                    .classList.remove('rounded-bl-[15px]');
                document
                    .getElementById('paipan-gongwei-info')
                    .classList.add('gongwei-info-on-bottom');
                getCurrentGongweiInfo(index); // 提取被点击的宫位信息并且把宫内信息加载到侧边栏中
                changeFocusItem(
                    'geju',
                    true,
                    true,
                    document.querySelectorAll('[data-tianpanshen]')[index].innerText,
                    document.querySelectorAll('[data-xing]')[index].innerText,
                    document.querySelectorAll('[data-men]')[index].innerText,
                );
                openInfoWindow();
            } else if (document.querySelectorAll('[data-tianpanshen]')[index].innerHTML == '值符') {
                document.getElementById('paipan-jiamu-info').classList.remove('hidden');
                document
                    .getElementById('paipan-gongwei-info')
                    .classList.remove('rounded-bl-[15px]');
                document
                    .getElementById('paipan-gongwei-info')
                    .classList.add('gongwei-info-on-bottom');
                getCurrentGongweiInfo(index); // 提取被点击的宫位信息并且把宫内信息加载到侧边栏中
                changeFocusItem(
                    'geju',
                    true,
                    false,
                    document.querySelectorAll('[data-tianpanshen]')[index].innerText,
                    document.querySelectorAll('[data-xing]')[index].innerText,
                    document.querySelectorAll('[data-men]')[index].innerText,
                );
                openInfoWindow();
            } else if (document.querySelectorAll('[data-dipanshen]')[index].innerHTML == '值符') {
                document.getElementById('paipan-jiamu-info').classList.remove('hidden');
                document
                    .getElementById('paipan-gongwei-info')
                    .classList.remove('rounded-bl-[15px]');
                document
                    .getElementById('paipan-gongwei-info')
                    .classList.add('gongwei-info-on-bottom');
                getCurrentGongweiInfo(index); // 提取被点击的宫位信息并且把宫内信息加载到侧边栏中
                changeFocusItem(
                    'geju',
                    false,
                    true,
                    document.querySelectorAll('[data-tianpanshen]')[index].innerText,
                    document.querySelectorAll('[data-xing]')[index].innerText,
                    document.querySelectorAll('[data-men]')[index].innerText,
                );
                openInfoWindow();
            } else {
                document.getElementById('paipan-jiamu-info').classList.add('hidden');
                document.getElementById('paipan-gongwei-info').classList.add('rounded-bl-[15px]');
                document
                    .getElementById('paipan-gongwei-info')
                    .classList.remove('gongwei-info-on-bottom');
                getCurrentGongweiInfo(index); // 提取被点击的宫位信息并且把宫内信息加载到侧边栏中
                changeFocusItem(
                    'geju',
                    false,
                    false,
                    document.querySelectorAll('[data-tianpanshen]')[index].innerText,
                    document.querySelectorAll('[data-xing]')[index].innerText,
                    document.querySelectorAll('[data-men]')[index].innerText,
                );
                openInfoWindow();
            }
        });
    });
    document.getElementById('paipan-geju-info').addEventListener('click', () => {
        if (
            document.querySelectorAll('[data-tianpanshen]')[whichGong].innerHTML == '值符' &&
            document.querySelectorAll('[data-dipanshen]')[whichGong].innerHTML == '值符'
        ) {
            changeFocusItem(
                'geju',
                true,
                true,
                document.querySelectorAll('[data-tianpanshen]')[whichGong].innerText,
                document.querySelectorAll('[data-xing]')[whichGong].innerText,
                document.querySelectorAll('[data-men]')[whichGong].innerText,
            );
        } else if (document.querySelectorAll('[data-tianpanshen]')[whichGong].innerHTML == '值符') {
            changeFocusItem(
                'geju',
                true,
                false,
                document.querySelectorAll('[data-tianpanshen]')[whichGong].innerText,
                document.querySelectorAll('[data-xing]')[whichGong].innerText,
                document.querySelectorAll('[data-men]')[whichGong].innerText,
            );
        } else if (document.querySelectorAll('[data-dipanshen]')[whichGong].innerHTML == '值符') {
            changeFocusItem(
                'geju',
                false,
                true,
                document.querySelectorAll('[data-tianpanshen]')[whichGong].innerText,
                document.querySelectorAll('[data-xing]')[whichGong].innerText,
                document.querySelectorAll('[data-men]')[whichGong].innerText,
            );
        } else {
            changeFocusItem(
                'geju',
                false,
                false,
                document.querySelectorAll('[data-tianpanshen]')[whichGong].innerText,
                document.querySelectorAll('[data-xing]')[whichGong].innerText,
                document.querySelectorAll('[data-men]')[whichGong].innerText,
            );
        }
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
        document.getElementById('paipan-tianpanshen-info').innerText = tianpanshen;
        document.getElementById('paipan-xing-info').innerText = xing;
        document.getElementById('paipan-men-info').innerText = men;
        document.getElementById('paipan-tianpangan-info').innerText = tianpangan;
        document.getElementById('paipan-dipangan-info').innerText = dipangan;
        document.getElementById('paipan-gongwei-info').innerText = bagua;
    }
    function changeFocusItem(item, tianpanjia = false, dipanjia = false) {
        switch (item) {
            case 'geju':
                document.getElementById('paipan-modal-info-section').innerHTML = '';
                document.getElementById('paipan-geju-info').classList.add('focused-item');
                document.getElementById('paipan-tianpanshen-info').classList.remove('focused-item');
                document.getElementById('paipan-xing-info').classList.remove('focused-item');
                document.getElementById('paipan-men-info').classList.remove('focused-item');
                document.getElementById('paipan-tianpangan-info').classList.remove('focused-item');
                document.getElementById('paipan-jiamu-info').classList.remove('focused-item');
                document.getElementById('paipan-dipangan-info').classList.remove('focused-item');
                document.getElementById('paipan-gongwei-info').classList.remove('focused-item');
                document.getElementById('paipan-modal-info-section').innerHTML = updateGejuInfo(
                    document.getElementById('paipan-tianpangan-info').innerText,
                    document.getElementById('paipan-dipangan-info').innerText,
                    document.getElementById('paipan-gongwei-info').innerText,
                    tianpanjia,
                    dipanjia,
                );
                break;
            case 'tianpanshen':
                document.getElementById('paipan-modal-info-section').innerHTML = '';
                document.getElementById('paipan-geju-info').classList.remove('focused-item');
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
                document.getElementById('paipan-tianpanshen-info').classList.remove('focused-item');
                document.getElementById('paipan-xing-info').classList.remove('focused-item');
                document.getElementById('paipan-men-info').classList.add('focused-item');
                document.getElementById('paipan-tianpangan-info').classList.remove('focused-item');
                document.getElementById('paipan-jiamu-info').classList.remove('focused-item');
                document.getElementById('paipan-dipangan-info').classList.remove('focused-item');
                document.getElementById('paipan-gongwei-info').classList.remove('focused-item');
                updateMenInfo(
                    document.getElementById('paipan-men-info').innerText,
                    document.getElementById('paipan-gongwei-info').innerText,
                );
                break;
            case 'tianpangan':
                document.getElementById('paipan-modal-info-section').innerHTML = '';
                document.getElementById('paipan-geju-info').classList.remove('focused-item');
                document.getElementById('paipan-tianpanshen-info').classList.remove('focused-item');
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
                document.getElementById('paipan-dipangan-info').classList.add('focused-item');
                document.getElementById('paipan-gongwei-info').classList.remove('focused-item');
                updateTianganInfo(document.getElementById('paipan-dipangan-info').innerText);
                break;
            case 'gua':
                document.getElementById('paipan-modal-info-section').innerHTML = '';
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
            case '甲':
                document.getElementById('paipan-modal-info-section').innerHTML = info.tiangan.甲;
                break;
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
        gong,
        tianpanjia = false,
        dipanjia = false,
        tianpanshen,
        xing,
        men,
    ) {
        let result = '';
        if (gong !== '中') {
            if (tianpanjia == true || dipanjia == true) {
                result =
                    getZhangSheng(tianpangan, gong) +
                    getZhangSheng(dipangan, gong) +
                    getZhangSheng('甲', gong) +
                    '<br>' +
                    getZhengGe(tianpangan, dipangan) +
                    '<br>';
                if (tianpanjia == true && dipanjia == true) {
                    result =
                        result +
                        getZhengGe('甲', '甲') +
                        '<br>' +
                        getZhengGe(tianpangan, '甲') +
                        '<br>' +
                        getZhengGe('甲', dipangan) +
                        '<br>' +
                        getFuGe(tianpangan, gong) +
                        '<br><br>' +
                        getFuGe('甲', gong);
                } else if (tianpanjia == true) {
                    result =
                        result +
                        getZhengGe('甲', dipangan) +
                        '<br>' +
                        getFuGe(tianpangan, gong) +
                        '<br><br>' +
                        getFuGe(dipangan, gong) +
                        '<br><br>' +
                        getFuGe('甲', gong);
                } else if (dipanjia == true) {
                    result =
                        result +
                        getZhengGe(tianpangan, '甲') +
                        '<br>' +
                        getFuGe(tianpangan, gong) +
                        '<br><br>' +
                        getFuGe(dipangan, gong) +
                        '<br><br>' +
                        getFuGe('甲', gong);
                }
            } else {
                result =
                    getZhangSheng(tianpangan, gong) +
                    getZhangSheng(dipangan, gong) +
                    '<br>' +
                    getZhengGe(tianpangan, dipangan) +
                    '<br>' +
                    getFuGe(tianpangan, gong) +
                    '<br><br>' +
                    getFuGe(dipangan, gong);
            }
        } else {
            for (let i = 0; i < 9; i++) {
                if (document.querySelectorAll('[data-wangshuai]')[i].innerText == '旺') {
                    switch (i) {
                        case 0:
                            gong = '坎';
                            break;
                        case 1:
                            gong = '坤';
                            break;
                        case 2:
                            gong = '震';
                            break;
                        case 3:
                            gong = '巽';
                            break;
                        case 5:
                            gong = '乾';
                            break;
                        case 6:
                            gong = '兑';
                            break;
                        case 7:
                            gong = '艮';
                            break;
                        case 8:
                            gong = '离';
                            break;
                    }
                    if (tianpanjia == true || dipanjia == true) {
                        result =
                            getZhangSheng(tianpangan, gong) +
                            getZhangSheng(dipangan, gong) +
                            getZhangSheng('甲', gong) +
                            '<br>' +
                            getZhengGe(tianpangan, dipangan) +
                            '<br>';
                        if (tianpanjia == true && dipanjia == true) {
                            result =
                                result +
                                getZhengGe('甲', '甲') +
                                '<br>' +
                                getZhengGe(tianpangan, '甲') +
                                '<br>' +
                                getZhengGe('甲', dipangan) +
                                '<br>' +
                                getFuGe(tianpangan, '中') +
                                '<br><br>' +
                                getFuGe('甲', '中');
                        } else if (tianpanjia == true) {
                            result =
                                result +
                                getZhengGe('甲', dipangan) +
                                '<br>' +
                                getFuGe(tianpangan, '中') +
                                '<br><br>' +
                                getFuGe(dipangan, '中') +
                                '<br><br>' +
                                getFuGe('甲', '中');
                        } else if (dipanjia == true) {
                            result =
                                result +
                                getZhengGe(tianpangan, '甲') +
                                '<br>' +
                                getFuGe(tianpangan, '中') +
                                '<br><br>' +
                                getFuGe(dipangan, '中') +
                                '<br><br>' +
                                getFuGe('甲', '中');
                        }
                    } else {
                        result =
                            getZhangSheng(tianpangan, gong) +
                            getZhangSheng(dipangan, gong) +
                            '<br>' +
                            getZhengGe(tianpangan, dipangan) +
                            '<br>' +
                            getFuGe(tianpangan, '中') +
                            '<br><br>' +
                            getFuGe(dipangan, '中');
                    }
                }
            }
        }
        return result;
    }
    function getZhengGe(tianpangan, dipangan) {
        const group = tianpangan + dipangan;
        const fuyinge = '<span style="color:#0079FE">伏吟格</span><br>';
        const jinruge =
            '<span style="color:#0079FE">进茹格：</span>凡谋为等事，不论吉凶，以进步为吉。欲穷千里目，要更上一层楼。但如测病反而不利<br>';
        const tuiruge =
            '<span style="color:#0079FE">退茹格：</span>凡谋为等事，无论吉凶，以退步为美。退一步海阔天空，不宜争先斗狠。但也有例外，比如进茹但是逢空，为进空，所以不宜前进，反而应该抽身退守：同理如果退茹遇到空亡，为退空，则应该积极进取为好<br>';
        const qianjiange =
            '<span style="color:#0079FE">前间格：</span>主我欲前进，而中途有人阳隔，欲进不能之象。阻隔之人事，可以看中间所间隔之干及其落宫，察其具体状态及原因<br>';
        const houjiange =
            '<span style="color:#0079FE">后间格：</span>主我欲后退，而当中有人催促于我，欲退不能之象。阻隔之人事也可看中间所间隔之千及它的落宫，察其具体状态及原因<br>';
        const haoqige =
            '<span style="color:#0079FE">耗气格：</span>我之财务不周全。主我帮助他人，而伤了我的骨血，脱耗我的精华<br>';
        const jiaoyinge =
            '<span style="color:#0079FE">交阴格：</span>事情存在阴谋，与不为人知的信息或事情<br>';
        const jiaoyangge =
            '<span style="color:#0079FE">交阳格：</span>事情存在阴谋，与不为人知的信息或事情<br>';
        const shanghege =
            '<span style="color:#0079FE">上合格：</span>上亲下之象，领导，长辈关心下属，晚辈<br>';
        const xiahege =
            '<span style="color:#0079FE">下合格：</span>下敬上之象，下属，晚辈主动向在上者表示恭敬<br>';
        const huofuge =
            '<span style="color:#0079FE">获父格：</span>有椿萱并茂之象，主有长上之人恩重于我<br>';
        const demuge =
            '<span style="color:#0079FE">得母格：</span>有椿萱并茂之象，主有长上之人恩重于我<br>';
        const chengquange =
            '<span style="color:#0079FE">乘权格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
        const duoquange =
            '<span style="color:#0079FE">夺权格：</span>我之财务不周全。主我帮助他人，而伤了我的骨血，脱耗我的精华<br>';
        const yishige =
            '<span style="color:#0079FE">倚势格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
        const beichongge =
            '<span style="color:#0079FE">背冲格：</span>背地受损，损伤多从内部来<br>';
        const zhengchongge = '<span style="color:#0079FE">正冲格：</span>正面冲突<br>';
        const zhipoge =
            '<span style="color:#0079FE">支破格：</span>支破无成灾祸息，谋为难就有冲突<br>';
        const waihaige =
            '<span style="color:#0079FE">外害格：</span>主事从外入，需防外人欺凌，外人主动来找我。';
        const neihaige =
            '<span style="color:#0079FE">内害格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
        const wailuange =
            '<span style="color:#0079FE">外乱格：</span>主事从外入，需防外人欺凌，外人主动来找我。<br>';
        const neiluange =
            '<span style="color:#0079FE">内乱格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
        const waizhige =
            '<span style="color:#0079FE">外制格：</span>主事从外入，需防外人欺凌，外人主动来找我。<br>';
        const neizhige =
            '<span style="color:#0079FE">内制格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
        const waiqinge =
            '<span style="color:#0079FE">外侵格：</span>主事从外入，需防外人欺凌，外人主动来找我<br>';
        const neiqinge =
            '<span style="color:#0079FE">内侵格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
        const jinmu = '金木相加：主官事，口舌斗争。<br>';
        const shuihuo = '水火相乘：主惊恐，妇女不安。<br>';
        const tushui = '土水相克：主遗财患病，争竞家园。<br>';
        const mutu = '木土相犯：主牢狱口舌，争财夺利。<br>';
        const huojin = '火金相见：主怪异血光，突发灾难。<br>';

        let output = `${tianpangan} + ${dipangan}：<br>`;
        switch (group) {
            case '甲甲':
                output = output + fuyinge;
                break;
            case '甲乙':
                output = output + jinruge;
                break;
            case '甲丙':
                output = output + qianjiange + haoqige;
                break;
            case '甲丁':
                output = output + jiaoyinge;
                break;
            case '甲戊':
                output = output + waizhige + mutu;
                break;
            case '甲己':
                output = output + shanghege + waiqinge + mutu;
                break;
            case '甲庚':
                output = output + beichongge + neizhige + jinmu;
                break;
            case '甲辛':
                output = output + neihaige + jinmu;
                break;
            case '甲壬':
                output = output + houjiange + chengquange;
                break;
            case '甲癸':
                output = output + demuge;
                break;

            case '乙甲':
                output = output + tuiruge;
                break;
            case '乙乙':
                output =
                    output +
                    fuyinge +
                    '<span style="color:#0079FE">日奇伏吟：</span>不宜见上级领导、贵人；求名求利及进取事不可求，只宜安分守己。利主，宜静不宜动，宜守不宜进。<br>';
                break;
            case '乙丙':
                output =
                    output +
                    jinruge +
                    jiaoyangge +
                    '<span style="color:#0079FE">奇仪顺遂：</span>吉星加官尽职，凶星夫妻反目离别。临吉星谋事多吉；临凶星求谋不顺，特别是不利于婚姻。<br>';
                break;
            case '乙丁':
                output =
                    output +
                    qianjiange +
                    duoquange +
                    '<span style="color:#0079FE">奇仪相佐：</span>最利文书、考试，百事可为。<br>';
                break;
            case '乙戊':
                output =
                    output +
                    waihaige +
                    mutu +
                    '<span style="color:#0079FE">阴害阳门：</span>利于阴人阴事，不利于阳人阳事。<br>';
                break;
            case '乙己':
                output =
                    output +
                    neiluange +
                    mutu +
                    '<span style="color:#0079FE">日奇入墓：</span>被土暗昧、门凶事必凶。<br>';
                break;
            case '乙庚':
                output =
                    output +
                    shanghege +
                    neiqinge +
                    jinmu +
                    '<span style="color:#0079FE">日奇被刑：</span>有争讼，各怀私意。<br>';
                break;
            case '乙辛':
                output =
                    output +
                    beichongge +
                    neiluange +
                    jinmu +
                    '<span style="color:#0079FE">青龙逃走：</span>人亡财破，奴仆拐带，六畜皆伤。<br>';
                break;
            case '乙壬':
                output =
                    output +
                    huofuge +
                    '<span style="color:#0079FE">日奇入天罗：</span>尊婢悖乱，官讼是非，有人谋害之事。<br>';
                break;
            case '乙癸':
                output =
                    output +
                    houjiange +
                    yishige +
                    '<span style="color:#0079FE">日奇入地网：</span>宜退不宜进，隐匿藏形，躲灾避难为吉，此格局不利于进 攻。<br>';
                break;

            case '丙甲':
                output = output + houjiange + chengquange;
                break;
            case '丙乙':
                output =
                    output +
                    tuiruge +
                    demuge +
                    '<span style="color:#0079FE">日月并行：</span>公谋私为皆为吉。<br>';
                break;
            case '丙丙':
                output =
                    output +
                    fuyinge +
                    '<span style="color:#0079FE">月奇悖师：</span>文书逼迫，破耗遗失。<br>';
                break;
            case '丙丁':
                output =
                    output +
                    jinruge +
                    '<span style="color:#0079FE">星奇朱雀：</span>贵人文书吉利，常人平静安乐。<br>';
                break;
            case '丙戊':
                output =
                    output +
                    qianjiange +
                    haoqige +
                    '<span style="color:#0079FE">飞鸟跌穴：</span>事业可为，可谋大事，对好事大吉大利，如求婚、求财、考试、求官等，不用费多大力气，就能成功。求财遇此格，财来了，到财库了。<br>';
                break;
            case '丙己':
                output =
                    output +
                    jiaoyinge +
                    '<span style="color:#0079FE">火悖入刑：</span>囚人刑杖，文书不行，吉门得吉，凶门转凶。<br>';
                break;
            case '丙庚':
                output =
                    output +
                    waizhige +
                    huojin +
                    '<span style="color:#0079FE">荧入太白：</span>賊必去。门户破败，盗贼耗失，事业亦凶。<br>';
                break;
            case '丙辛':
                output =
                    output +
                    shanghege +
                    waiqinge +
                    huojin +
                    '<span style="color:#0079FE">日月相会：</span>谋事成就，病人不凶。<br>';
                break;
            case '丙壬':
                output =
                    output +
                    beichongge +
                    neizhige +
                    shuihuo +
                    '<span style="color:#0079FE">火入天罗：</span>为客不利，是非颇多。<br>';
                break;
            case '丙癸':
                output =
                    output +
                    neihaige +
                    shuihuo +
                    '<span style="color:#0079FE">月奇地网：</span>阴人害事，灾祸频生，凡事暗昧不明。<br>';
                break;

            case '丁甲':
                output = output + huofuge;
                break;
            case '丁乙':
                output =
                    output +
                    houjiange +
                    yishige +
                    '<span style="color:#0079FE">玉女奇生：</span>也为人遁吉格，贵人加官进爵，常人婚姻财帛有喜<br>';
                break;
            case '丁丙':
                output =
                    output +
                    tuiruge +
                    '<span style="color:#0079FE">星随月转：</span>贵人越级高升，常人乐极生悲，要忍，不然因小的不忍，而引起大的不幸。<br>';
                break;
            case '丁丁':
                output =
                    output +
                    fuyinge +
                    '<span style="color:#0079FE">星奇入太阴：</span>文书证件即至，喜事从心、万事如意。<br>';
                break;
            case '丁戊':
                output =
                    output +
                    jinruge +
                    jiaoyangge +
                    '<span style="color:#0079FE">青龙转光：</span>官人升迁，常人威昌。无论遇到多大困难，将来都会出现转机。<br>';
                break;
            case '丁己':
                output =
                    output +
                    qianjiange +
                    duoquange +
                    '<span style="color:#0079FE">火入勾陈：</span>奸私仇怨，事因女人。<br>';
                break;
            case '丁庚':
                output =
                    output +
                    waihaige +
                    huojin +
                    '<span style="color:#0079FE">星奇受阻：</span>文书阻隔，行人必归。<br>';
                break;
            case '丁辛':
                output =
                    output +
                    wailuange +
                    huojin +
                    '<span style="color:#0079FE">朱雀入狱：</span>罪人失囚，官人失位。<br>';
                break;
            case '丁壬':
                output =
                    output +
                    shanghege +
                    neiqinge +
                    shuihuo +
                    '<span style="color:#0079FE">奇仪相合：</span>贵人恩诏，诉狱公平。<br>';
                break;
            case '丁癸':
                output =
                    output +
                    beichongge +
                    neiluange +
                    shuihuo +
                    '<span style="color:#0079FE">朱雀投江：</span>文书口舌是非，经官动府、词诉不利，音信沉溺不到。<br>';
                break;

            case '戊甲':
                output = output + neizhige + mutu;
                break;
            case '戊乙':
                output =
                    output +
                    neihaige +
                    mutu +
                    '<span style="color:#0079FE">青龙和会：</span>门吉事吉，门凶事也凶。<br>';
                break;
            case '戊丙':
                output =
                    output +
                    houjiange +
                    chengquange +
                    '<span style="color:#0079FE">青龙返首：</span>，动作大吉，但若逢门迫、入墓、击刑，则吉事成凶。<br>';
                break;
            case '戊丁':
                output =
                    output +
                    tuiruge +
                    demuge +
                    '<span style="color:#0079FE">青龙耀明：</span>宜见上级领导、贵人、求功名，为事吉利，若值墓迫，招惹是非。<br>';
                break;
            case '戊戊':
                output =
                    output +
                    fuyinge +
                    '<span style="color:#0079FE">伏吟：</span>凡事不利，道路闭塞，以守为好。<br>';
                break;
            case '戊己':
                output =
                    output +
                    jinruge +
                    '<span style="color:#0079FE">贵人入狱：</span>公私皆不利。<br>';
                break;
            case '戊庚':
                output =
                    output +
                    qianjiange +
                    haoqige +
                    '<span style="color:#0079FE">值符飞宫：</span>吉事不吉，凶事更凶，求财没利益，测病也主凶。<br>';
                break;
            case '戊辛':
                output =
                    output +
                    jiaoyinge +
                    zhipoge +
                    '<span style="color:#0079FE">青龙折足：</span>，吉门有生助，尚能谋事；若逢凶门，主招灾，失财或有足疾、折伤。<br>';
                break;
            case '戊壬':
                output =
                    output +
                    waizhige +
                    tushui +
                    '<span style="color:#0079FE">青龙入天牢：</span>凡阴阳事皆不吉利。<br>';
                break;
            case '戊癸':
                output =
                    output +
                    shanghege +
                    waiqinge +
                    tushui +
                    '<span style="color:#0079FE">青龙华盖：</span>逢吉门为吉，可招福临门；逢凶门，事多不利，为凶。<br>';
                break;

            case '己甲':
                output = output + xiahege + neiqinge;
                break;
            case '己乙':
                output =
                    output +
                    neiluange +
                    mutu +
                    '<span style="color:#0079FE">墓神不明：</span>墓神不明，地户逢星，宜遁迹隐形为利。<br>';
                break;
            case '己丙':
                output =
                    output +
                    huofuge +
                    '<span style="color:#0079FE">火悖地户：</span>男人冤冤相害；女人必致淫污。<br>';
                break;
            case '己丁':
                output =
                    output +
                    houjiange +
                    yishige +
                    '<span style="color:#0079FE">朱雀入狱：</span>文书词讼，先曲后直<br>';
                break;
            case '己戊':
                output =
                    output +
                    tuiruge +
                    '<span style="color:#0079FE">犬遇青龙：</span>门吉为谋望遂意，上人见喜。若门凶，枉费心机。<br>';
                break;
            case '己己':
                output =
                    output +
                    fuyinge +
                    '<span style="color:#0079FE">地户逢鬼：</span>病者发凶或必死，百事不遂，暂不谋为，谋为则凶。<br>';
                break;
            case '己庚':
                output =
                    output +
                    jinruge +
                    jiaoyangge +
                    '<span style="color:#0079FE">刑格返名：</span>词讼先动者不利，如临阴星（凶星）则有谋害之情。<br>';
                break;
            case '己辛':
                output =
                    output +
                    qianjiange +
                    duoquange +
                    '<span style="color:#0079FE">游魂入墓：</span>易招阴邪鬼魅作祟。<br>';
                break;
            case '己壬':
                output =
                    output +
                    waihaige +
                    tushui +
                    '<span style="color:#0079FE">地网高张：</span>狡童佚女，奸情伤杀，凡事不吉，谋为不利。<br>';
                break;
            case '己癸':
                output =
                    output +
                    wailuange +
                    tushui +
                    '<span style="color:#0079FE">地刑玄武：</span>男女疾病垂危，有囚狱词讼之灾。<br>';
                break;

            case '庚甲':
                output = output + zhengchongge + waizhige + jinmu;
                break;
            case '庚乙':
                output =
                    output +
                    xiahege +
                    waiqinge +
                    jinmu +
                    '<span style="color:#0079FE">太白逢星：</span>退吉进凶，谋为不利。<br>';
                break;
            case '庚丙':
                output =
                    output +
                    neizhige +
                    huojin +
                    '<span style="color:#0079FE">太白入荧：</span>贼必来，为客进利，为主破财。<br>';
                break;
            case '庚丁':
                output =
                    output +
                    neiqinge +
                    huojin +
                    '<span style="color:#0079FE">亭亭之格：</span>因私匿或男女关系起官司是非，门吉有救；门凶，事必凶。<br>';
                break;
            case '庚戊':
                output =
                    output +
                    houjiange +
                    chengquange +
                    '<span style="color:#0079FE">天乙伏宫：</span>百事不可谋，大凶。<br>';
                break;
            case '庚己':
                output =
                    output +
                    tuiruge +
                    demuge +
                    '<span style="color:#0079FE">官府刑格：</span>主有官司口舌，因官讼被判刑，住牢狱更凶，百事不利。<br>';
                break;
            case '庚庚':
                output =
                    output +
                    fuyinge +
                    '<span style="color:#0079FE">太白同宫：</span>官灾横祸。<br>';
                break;
            case '庚辛':
                output =
                    output +
                    jinruge +
                    '<span style="color:#0079FE">白虎干格：</span>不宜远行，远行车折马伤，求财更为大凶，诸事有灾殃，时间越长越凶。<br>';
                break;
            case '庚壬':
                output =
                    output +
                    qianjiange +
                    haoqige +
                    '<span style="color:#0079FE">太白退位：</span>也为小格，金化水流，主远行迷失道路，男女音信难 通、变动、外出。<br>';
                break;
            case '庚癸':
                output =
                    output +
                    jiaoyinge +
                    zhipoge +
                    '<span style="color:#0079FE">太白冲刑：</span>也为大格，主车祸，行人不至，官事不止，生育母子俱伤，大凶。<br>';
                break;

            case '辛甲':
                output = output + waihaige + jinmu;
                break;
            case '辛乙':
                output =
                    output +
                    zhengchongge +
                    wailuange +
                    jinmu +
                    '<span style="color:#0079FE">白虎猖狂：</span>家败人亡（分家、婚散、破产），出行有惊恐，远行多灾殃，尊长不喜，车船俱伤。<br>';
                break;
            case '辛丙':
                output =
                    output +
                    xiahege +
                    neiqinge +
                    huojin +
                    '<span style="color:#0079FE">干合悖师：</span>荧惑出现，占雨无，占晴旱，占事必因财致讼。<br>';
                break;
            case '辛丁':
                output =
                    output +
                    neiluange +
                    huojin +
                    '<span style="color:#0079FE">狱神得奇：</span>经商求财获利倍增，囚人逢天赦释免，办其他事，也会有意外的收获。<br>';
                break;
            case '辛戊':
                output =
                    output +
                    huofuge +
                    zhipoge +
                    '<span style="color:#0079FE">困龙被伤：</span>主官司破财，屈抑守分尚可，妄动则带来祸殃。<br>';
                break;
            case '辛己':
                output =
                    output +
                    houjiange +
                    yishige +
                    '<span style="color:#0079FE">入狱自刑：</span>故为入狱自刑，主奴仆背主，有苦诉讼难伸。<br>';
                break;
            case '辛庚':
                output =
                    output +
                    tuiruge +
                    '<span style="color:#0079FE">白虎出力：</span>刀刃相交，主客相残，逊让退步则安，强进血溅衣衫。<br>';
                break;
            case '辛辛':
                output =
                    output +
                    fuyinge +
                    '<span style="color:#0079FE">伏吟天庭：</span>公废私就，讼狱自羅罪名。<br>';
                break;
            case '辛壬':
                output =
                    output +
                    jinruge +
                    jiaoyangge +
                    '<span style="color:#0079FE">凶蛇入狱：</span>两男争女，一货售两 家、讼狱不息，先动失理，利主不利客。<br>';
                break;
            case '辛癸':
                output =
                    output +
                    qianjiange +
                    duoquange +
                    '<span style="color:#0079FE">天牢华盖：</span>日月失明，误入天网，动止乖张。<br>';
                break;

            case '壬甲':
                output = output + qianjiange + haoqige;
                break;
            case '壬乙':
                output =
                    output +
                    jiaoyinge +
                    '<span style="color:#0079FE">小蛇得势：</span>女人柔顺，男人通达。<br>';
                break;
            case '壬丙':
                output =
                    output +
                    zhengchongge +
                    waizhige +
                    shuihuo +
                    '<span style="color:#0079FE">水蛇入火：</span>两败俱伤，为客不利。<br>';
                break;
            case '壬丁':
                output =
                    output +
                    xiahege +
                    waiqinge +
                    shuihuo +
                    '<span style="color:#0079FE">干合蛇刑：</span>文书牵连，贵人匆匆，男吉女凶。<br>';
                break;
            case '壬戊':
                output =
                    output +
                    neizhige +
                    tushui +
                    '<span style="color:#0079FE">小蛇化龙：</span>男人发达，女产婴童，做事要防耗散。<br>';
                break;
            case '壬己':
                output =
                    output +
                    zhipoge +
                    neihaige +
                    tushui +
                    '<span style="color:#0079FE">反吟蛇刑：</span>主官司败诉，大祸将至，顺守为吉，妄动必凶。<br>';
                break;
            case '壬庚':
                output =
                    output +
                    houjiange +
                    chengquange +
                    '<span style="color:#0079FE">太白擒蛇：</span>刑狱公平，立判邪正，这是对于词讼之类来讲的。<br>';
                break;
            case '壬辛':
                output =
                    output +
                    tuiruge +
                    demuge +
                    '<span style="color:#0079FE">腾蛇相缠：</span>纵得吉门，亦不能安。<br>';
                break;
            case '壬壬':
                output =
                    output +
                    fuyinge +
                    '<span style="color:#0079FE">天狱自刑/蛇入地罗：</span>求谋无成，祸患起于内部，诸事主破败，外人缠绕，内事索索。<br>';
                break;
            case '壬癸':
                output =
                    output +
                    jinruge +
                    '<span style="color:#0079FE">幼女奸淫：</span>主有家丑外扬之事发生；门吉星凶，反福为祸。<br>';
                break;

            case '癸甲':
                output = output + jinruge + jiaoyangge;
                break;
            case '癸乙':
                output =
                    output +
                    qianjiange +
                    duoquange +
                    '<span style="color:#0079FE">华盖逢星：</span>贵人禄位，常人平安。<br>';
                break;
            case '癸丙':
                output =
                    output +
                    waihaige +
                    shuihuo +
                    '<span style="color:#0079FE">华盖悖师：</span>贵贱逢之皆不利，唯上人见喜。<br>';
                break;
            case '癸丁':
                output =
                    output +
                    zhengchongge +
                    wailuan +
                    shuihuo +
                    '<span style="color:#0079FE">腾蛇夭矫：</span>文书官司，火焚也逃不掉，虚惊不宁。<br>';
                break;
            case '癸戊':
                output =
                    output +
                    xiahege +
                    waiqinge +
                    tushui +
                    '<span style="color:#0079FE">天乙合会：</span>吉门宜求财，婚姻喜美，吉人赞助成合。<br>';
                break;
            case '癸己':
                output =
                    output +
                    neiluange +
                    tushui +
                    '<span style="color:#0079FE">华盖地户：</span>男女测之，音信皆阻，躲灾避难方为吉。<br>';
                break;
            case '癸庚':
                output =
                    output +
                    huofuge +
                    zhipoge +
                    '<span style="color:#0079FE">太白入网：</span>以暴力争讼，自邏罪责。<br>';
                break;
            case '癸辛':
                output =
                    output +
                    houjiange +
                    yishige +
                    '<span style="color:#0079FE">网盖天牢：</span>官司败诉，死罪难逃。<br>';
                break;
            case '癸壬':
                output =
                    output +
                    tuiruge +
                    '<span style="color:#0079FE">复见腾蛇：</span>嫁娶重婚，后嫁无子，不保年华。<br>';
                break;
            case '癸癸':
                output =
                    output +
                    fuyinge +
                    '<span style="color:#0079FE">天网四张：</span>主行人失伴，病讼皆伤。<br>';
                break;
        }
        return output;
    }
    function getFuGe(tiangan, gong) {
        const jiedang = '凡事必须聚伙成群而始能有成，不然则需要等待时机';
        const deli = '凡事必须得他人周济而始能有成，不然也需要等待时机';
        const shili = '凡事必须耗我心力，威服他人而始能有成，不然则有伤害于他人';
        const cuican = '凡事必须伏服于他人之下，卑躬折节而始能有成，不然则会受到他人迫害';
        const pojing = '主凡事必须辅佐他人，保护同伴而始能有成，不然则要破财伤身';
        if (tiangan == '甲' || tiangan == '乙') {
            switch (gong) {
                case '乾':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">摧残格：</span>' +
                        cuican
                    );
                case '兑':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">摧残格：</span>' +
                        cuican
                    );
                case '坎':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">得力格：</span>' +
                        deli
                    );
                case '离':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">破精格：</span>' +
                        pojing
                    );
                case '震':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">结党格：</span>' +
                        jiedang
                    );
                case '巽':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">结党格：</span>' +
                        jiedang
                    );
                case '坤':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">失利格：</span>' +
                        shili
                    );
                case '艮':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">失利格：</span>' +
                        shili
                    );
                case '中':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">失利格：</span>' +
                        shili
                    );
            }
        } else if (tiangan == '丙' || tiangan == '丁') {
            switch (gong) {
                case '乾':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">失利格：</span>' +
                        shili
                    );
                case '兑':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">失利格：</span>' +
                        shili
                    );
                case '坎':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">摧残格：</span>' +
                        cuican
                    );
                case '离':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">结党格：</span>' +
                        jiedang
                    );
                case '震':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">得力格：</span>' +
                        deli
                    );
                case '巽':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">得力格：</span>' +
                        deli
                    );
                case '坤':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">破精格：</span>' +
                        pojing
                    );
                case '艮':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">破精格：</span>' +
                        pojing
                    );
                case '中':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">破精格：</span>' +
                        pojing
                    );
            }
        } else if (tiangan == '戊' || tiangan == '己') {
            switch (gong) {
                case '乾':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">破精格：</span>' +
                        pojing
                    );
                case '兑':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">破精格：</span>' +
                        pojing
                    );
                case '坎':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">失利格：</span>' +
                        shili
                    );
                case '离':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">得力格：</span>' +
                        deli
                    );
                case '震':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">摧残格：</span>' +
                        cuican
                    );
                case '巽':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">摧残格：</span>' +
                        cuican
                    );
                case '坤':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">结党格：</span>' +
                        jiedang
                    );
                case '艮':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">结党格：</span>' +
                        jiedang
                    );
                case '中':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">结党格：</span>' +
                        jiedang
                    );
            }
        } else if (tiangan == '庚' || tiangan == '辛') {
            switch (gong) {
                case '乾':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">结党格：</span>' +
                        jiedang
                    );
                case '兑':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">结党格：</span>' +
                        jiedang
                    );
                case '坎':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">破精格：</span>' +
                        pojing
                    );
                case '离':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">摧残格：</span>' +
                        cuican
                    );
                case '震':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">失利格：</span>' +
                        shili
                    );
                case '巽':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">失利格：</span>' +
                        shili
                    );
                case '坤':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">得力格：</span>' +
                        deli
                    );
                case '艮':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">得力格：</span>' +
                        deli
                    );
                case '中':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">得力格：</span>' +
                        deli
                    );
            }
        } else if (tiangan == '壬' || tiangan == '癸') {
            switch (gong) {
                case '乾':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">得力格：</span>' +
                        deli
                    );
                case '兑':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">得力格：</span>' +
                        deli
                    );
                case '坎':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">结党格：</span>' +
                        jiedang
                    );
                case '离':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">失利格：</span>' +
                        shili
                    );
                case '震':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">破精格：</span>' +
                        pojing
                    );
                case '巽':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">破精格：</span>' +
                        pojing
                    );
                case '坤':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">摧残格：</span>' +
                        cuican
                    );
                case '艮':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">摧残格：</span>' +
                        cuican
                    );
                case '中':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        '<span style="color:#0079FE">摧残格：</span>' +
                        cuican
                    );
            }
        }
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
            case '甲':
                switch (gongwei) {
                    case '乾':
                        result = '甲' + getLiuQin('甲', gongwei) + '：' + yang + '，' + zhangsheng;
                        break;
                    case '坎':
                        result = '甲' + getLiuQin('甲', gongwei) + '：' + muyu;
                        break;
                    case '艮':
                        result = '甲' + getLiuQin('甲', gongwei) + '：' + guandai + '，' + linguan;
                        break;
                    case '震':
                        result = '甲' + getLiuQin('甲', gongwei) + '：' + diwang;
                        break;
                    case '巽':
                        result = '甲' + getLiuQin('甲', gongwei) + '：' + shuai + '，' + bing;
                        break;
                    case '离':
                        result = '甲' + getLiuQin('甲', gongwei) + '：' + si;
                        break;
                    case '坤':
                        result = '甲' + getLiuQin('甲', gongwei) + '：' + mu + '，' + jue;
                        break;
                    case '兑':
                        result = '甲' + getLiuQin('甲', gongwei) + '：' + tai;
                        break;
                }
                break;
            case '乙':
                switch (gongwei) {
                    case '乾':
                        result = '乙' + getLiuQin('乙', gongwei) + '：' + si + '，' + mu;
                        break;
                    case '坎':
                        result = '乙' + getLiuQin('乙', gongwei) + '：' + bing;
                        break;
                    case '艮':
                        result = '乙' + getLiuQin('乙', gongwei) + '：' + diwang + '，' + shuai;
                        break;
                    case '震':
                        result = '乙' + getLiuQin('乙', gongwei) + '：' + linguan;
                        break;
                    case '巽':
                        result = '乙' + getLiuQin('乙', gongwei) + '：' + muyu + '，' + guandai;
                        break;
                    case '离':
                        result = '乙' + getLiuQin('乙', gongwei) + '：' + zhangsheng;
                        break;
                    case '坤':
                        result = '乙' + getLiuQin('乙', gongwei) + '：' + tai + '，' + yang;
                        break;
                    case '兑':
                        result = '乙' + getLiuQin('乙', gongwei) + '：' + jue;
                        break;
                }
                break;
            case '丙':
                switch (gongwei) {
                    case '乾':
                        result = '丙' + getLiuQin('丙', gongwei) + '：' + mu + '，' + jue;
                        break;
                    case '坎':
                        result = '丙' + getLiuQin('丙', gongwei) + '：' + tai;
                        break;
                    case '艮':
                        result = '丙' + getLiuQin('丙', gongwei) + '：' + yang + '，' + zhangsheng;
                        break;
                    case '震':
                        result = '丙' + getLiuQin('丙', gongwei) + '：' + muyu;
                        break;
                    case '巽':
                        result = '丙' + getLiuQin('丙', gongwei) + '：' + guandai + '，' + linguan;
                        break;
                    case '离':
                        result = '丙' + getLiuQin('丙', gongwei) + '：' + diwang;
                        break;
                    case '坤':
                        result = '丙' + getLiuQin('丙', gongwei) + '：' + shuai + '，' + bing;
                        break;
                    case '兑':
                        result = '丙' + getLiuQin('丙', gongwei) + '：' + si;
                        break;
                }
                break;
            case '丁':
                switch (gongwei) {
                    case '乾':
                        result = '丁' + getLiuQin('丁', gongwei) + '：' + tai + '，' + yang;
                        break;
                    case '坎':
                        result = '丁' + getLiuQin('丁', gongwei) + '：' + jue;
                        break;
                    case '艮':
                        result = '丁' + getLiuQin('丁', gongwei) + '：' + si + '，' + mu;
                        break;
                    case '震':
                        result = '丁' + getLiuQin('丁', gongwei) + '：' + bing;
                        break;
                    case '巽':
                        result = '丁' + getLiuQin('丁', gongwei) + '：' + diwang + '，' + shuai;
                        break;
                    case '离':
                        result = '丁' + getLiuQin('丁', gongwei) + '：' + linguan;
                        break;
                    case '坤':
                        result = '丁' + getLiuQin('丁', gongwei) + '：' + muyu + '，' + guandai;
                        break;
                    case '兑':
                        result = '丁' + getLiuQin('丁', gongwei) + '：' + zhangsheng;
                        break;
                }
                break;
            case '戊':
                switch (gongwei) {
                    case '乾':
                        result = '戊' + getLiuQin('戊', gongwei) + '：' + mu + '，' + jue;
                        break;
                    case '坎':
                        result = '戊' + getLiuQin('戊', gongwei) + '：' + tai;
                        break;
                    case '艮':
                        result = '戊' + getLiuQin('戊', gongwei) + '：' + yang + '，' + zhangsheng;
                        break;
                    case '震':
                        result = '戊' + getLiuQin('戊', gongwei) + '：' + muyu;
                        break;
                    case '巽':
                        result = '戊' + getLiuQin('戊', gongwei) + '：' + guandai + '，' + linguan;
                        break;
                    case '离':
                        result = '戊' + getLiuQin('戊', gongwei) + '：' + diwang;
                        break;
                    case '坤':
                        result = '戊' + getLiuQin('戊', gongwei) + '：' + shuai + '，' + bing;
                        break;
                    case '兑':
                        result = '戊' + getLiuQin('戊', gongwei) + '：' + si;
                        break;
                }
                break;
            case '己':
                switch (gongwei) {
                    case '乾':
                        result = '己' + getLiuQin('己', gongwei) + '：' + tai + '，' + yang;
                        break;
                    case '坎':
                        result = '己' + getLiuQin('己', gongwei) + '：' + jue;
                        break;
                    case '艮':
                        result = '己' + getLiuQin('己', gongwei) + '：' + si + '，' + mu;
                        break;
                    case '震':
                        result = '己' + getLiuQin('己', gongwei) + '：' + bing;
                        break;
                    case '巽':
                        result = '己' + getLiuQin('己', gongwei) + '：' + diwang + '，' + shuai;
                        break;
                    case '离':
                        result = '己' + getLiuQin('己', gongwei) + '：' + linguan;
                        break;
                    case '坤':
                        result = '己' + getLiuQin('己', gongwei) + '：' + muyu + '，' + guandai;
                        break;
                    case '兑':
                        result = '己' + getLiuQin('己', gongwei) + '：' + zhangsheng;
                        break;
                }
                break;
            case '庚':
                switch (gongwei) {
                    case '乾':
                        result = '庚' + getLiuQin('庚', gongwei) + '：' + shuai + '，' + bing;
                        break;
                    case '坎':
                        result = '庚' + getLiuQin('庚', gongwei) + '：' + si;
                        break;
                    case '艮':
                        result = '庚' + getLiuQin('庚', gongwei) + '：' + mu + '，' + jue;
                        break;
                    case '震':
                        result = '庚' + getLiuQin('庚', gongwei) + '：' + tai;
                        break;
                    case '巽':
                        result = '庚' + getLiuQin('庚', gongwei) + '：' + yang + '，' + zhangsheng;
                        break;
                    case '离':
                        result = '庚' + getLiuQin('庚', gongwei) + '：' + muyu;
                        break;
                    case '坤':
                        result = '庚' + getLiuQin('庚', gongwei) + '：' + guandai + '，' + linguan;
                        break;
                    case '兑':
                        result = '庚' + getLiuQin('庚', gongwei) + '：' + diwang;
                        break;
                }
                break;
            case '辛':
                switch (gongwei) {
                    case '乾':
                        result = '辛' + getLiuQin('辛', gongwei) + '：' + muyu + '，' + guandai;
                        break;
                    case '坎':
                        result = '辛' + getLiuQin('辛', gongwei) + '：' + zhangsheng;
                        break;
                    case '艮':
                        result = '辛' + getLiuQin('辛', gongwei) + '：' + tai + '，' + yang;
                        break;
                    case '震':
                        result = '辛' + getLiuQin('辛', gongwei) + '：' + jue;
                        break;
                    case '巽':
                        result = '辛' + getLiuQin('辛', gongwei) + '：' + si + '，' + mu;
                        break;
                    case '离':
                        result = '辛' + getLiuQin('辛', gongwei) + '：' + bing;
                        break;
                    case '坤':
                        result = '辛' + getLiuQin('辛', gongwei) + '：' + diwang + '，' + shuai;
                        break;
                    case '兑':
                        result = '辛' + getLiuQin('辛', gongwei) + '：' + linguan;
                        break;
                }
                break;
            case '壬':
                switch (gongwei) {
                    case '乾':
                        result = '壬' + getLiuQin('壬', gongwei) + '：' + guandai + '，' + linguan;
                        break;
                    case '坎':
                        result = '壬' + getLiuQin('壬', gongwei) + '：' + diwang;
                        break;
                    case '艮':
                        result = '壬' + getLiuQin('壬', gongwei) + '：' + shuai + '，' + bing;
                        break;
                    case '震':
                        result = '壬' + getLiuQin('壬', gongwei) + '：' + si;
                        break;
                    case '巽':
                        result = '壬' + getLiuQin('壬', gongwei) + '：' + mu + '，' + jue;
                        break;
                    case '离':
                        result = '壬' + getLiuQin('壬', gongwei) + '：' + tai;
                        break;
                    case '坤':
                        result = '壬' + getLiuQin('壬', gongwei) + '：' + yang + '，' + zhangsheng;
                        break;
                    case '兑':
                        result = '壬' + getLiuQin('壬', gongwei) + '：' + muyu;
                        break;
                }
                break;
            case '癸':
                switch (gongwei) {
                    case '乾':
                        result = '癸' + getLiuQin('癸', gongwei) + '：' + diwang + '，' + shuai;
                        break;
                    case '坎':
                        result = '癸' + getLiuQin('癸', gongwei) + '：' + linguan;
                        break;
                    case '艮':
                        result = '癸' + getLiuQin('癸', gongwei) + '：' + muyu + '，' + guandai;
                        break;
                    case '震':
                        result = '癸' + getLiuQin('癸', gongwei) + '：' + zhangsheng;
                        break;
                    case '巽':
                        result = '癸' + getLiuQin('癸', gongwei) + '：' + tai + '，' + yang;
                        break;
                    case '离':
                        result = '癸' + getLiuQin('癸', gongwei) + '：' + jue;
                        break;
                    case '坤':
                        result = '癸' + getLiuQin('癸', gongwei) + '：' + si + '，' + mu;
                        break;
                    case '兑':
                        result = '癸' + getLiuQin('癸', gongwei) + '：' + bing;
                        break;
                }
                break;
        }
        return result + '<br>';
    }
    function getLiuQin(tiangan, gongwei) {
        const shigan = document.getElementById('shi').innerText.charAt(0);
        const xiongdi = '（兄弟）';
        const guangui = '（官鬼）';
        const fumu = '（父母）';
        const qicai = '（妻财）';
        const zisun = '（子孙）';
        if (shigan == '甲' || shigan == '乙') {
            if (tiangan == '甲' || tiangan == '乙') {
                if (gongwei == '震' || gongwei == '巽') {
                    return '<span style="color: red">' + xiongdi + '</span>';
                }
                return xiongdi;
            } else if (tiangan == '丙' || tiangan == '丁') {
                if (gongwei == '离') {
                    return '<span style="color: red">' + zisun + '</span>';
                }
                return zisun;
            } else if (tiangan == '戊' || tiangan == '己') {
                if (gongwei == '坤' || gongwei == '中' || gongwei == '艮') {
                    return '<span style="color: red">' + qicai + '</span>';
                }
                return qicai;
            } else if (tiangan == '庚' || tiangan == '辛') {
                if (gongwei == '乾' || gongwei == '兑') {
                    return '<span style="color: red">' + guangui + '</span>';
                }
                return guangui;
            } else if (tiangan == '壬' || tiangan == '癸') {
                if (gongwei == '坎') {
                    return '<span style="color: red">' + fumu + '</span>';
                }
                return fumu;
            }
        } else if (shigan == '丙' || shigan == '丁') {
            if (tiangan == '甲' || tiangan == '乙') {
                if (gongwei == '震' || gongwei == '巽') {
                    return '<span style="color: red">' + fumu + '</span>';
                }
                return fumu;
            } else if (tiangan == '丙' || tiangan == '丁') {
                if (gongwei == '离') {
                    return '<span style="color: red">' + xiongdi + '</span>';
                }
                return xiongdi;
            } else if (tiangan == '戊' || tiangan == '己') {
                if (gongwei == '坤' || gongwei == '中' || gongwei == '艮') {
                    return '<span style="color: red">' + zisun + '</span>';
                }
                return zisun;
            } else if (tiangan == '庚' || tiangan == '辛') {
                if (gongwei == '乾' || gongwei == '兑') {
                    return '<span style="color: red">' + qicai + '</span>';
                }
                return qicai;
            } else if (tiangan == '壬' || tiangan == '癸') {
                if (gongwei == '坎') {
                    return '<span style="color: red">' + guangui + '</span>';
                }
                return guangui;
            }
        } else if (shigan == '戊' || shigan == '己') {
            if (tiangan == '甲' || tiangan == '乙') {
                if (gongwei == '震' || gongwei == '巽') {
                    return '<span style="color: red">' + guangui + '</span>';
                }
                return guangui;
            } else if (tiangan == '丙' || tiangan == '丁') {
                if (gongwei == '离') {
                    return '<span style="color: red">' + fumu + '</span>';
                }
                return fumu;
            } else if (tiangan == '戊' || tiangan == '己') {
                if (gongwei == '坤' || gongwei == '中' || gongwei == '艮') {
                    return '<span style="color: red">' + xiongdi + '</span>';
                }
                return xiongdi;
            } else if (tiangan == '庚' || tiangan == '辛') {
                if (gongwei == '乾' || gongwei == '兑') {
                    return '<span style="color: red">' + zisun + '</span>';
                }
                return zisun;
            } else if (tiangan == '壬' || tiangan == '癸') {
                if (gongwei == '坎') {
                    return '<span style="color: red">' + qicai + '</span>';
                }
                return qicai;
            }
        } else if (shigan == '庚' || shigan == '辛') {
            if (tiangan == '甲' || tiangan == '乙') {
                if (gongwei == '震' || gongwei == '巽') {
                    return '<span style="color: red">' + qicai + '</span>';
                }
                return qicai;
            } else if (tiangan == '丙' || tiangan == '丁') {
                if (gongwei == '离') {
                    return '<span style="color: red">' + guangui + '</span>';
                }
                return guangui;
            } else if (tiangan == '戊' || tiangan == '己') {
                if (gongwei == '坤' || gongwei == '中' || gongwei == '艮') {
                    return '<span style="color: red">' + fumu + '</span>';
                }
                return fumu;
            } else if (tiangan == '庚' || tiangan == '辛') {
                if (gongwei == '乾' || gongwei == '兑') {
                    return '<span style="color: red">' + xiongdi + '</span>';
                }
                return xiongdi;
            } else if (tiangan == '壬' || tiangan == '癸') {
                if (gongwei == '坎') {
                    return '<span style="color: red">' + zisun + '</span>';
                }
                return zisun;
            }
        } else if (shigan == '壬' || shigan == '癸') {
            if (tiangan == '甲' || tiangan == '乙') {
                if (gongwei == '震' || gongwei == '巽') {
                    return '<span style="color: red">' + zisun + '</span>';
                }
                return zisun;
            } else if (tiangan == '丙' || tiangan == '丁') {
                if (gongwei == '离') {
                    return '<span style="color: red">' + qicai + '</span>';
                }
                return qicai;
            } else if (tiangan == '戊' || tiangan == '己') {
                if (gongwei == '坤' || gongwei == '中' || gongwei == '艮') {
                    return '<span style="color: red">' + guangui + '</span>';
                }
                return guangui;
            } else if (tiangan == '庚' || tiangan == '辛') {
                if (gongwei == '乾' || gongwei == '兑') {
                    return '<span style="color: red">' + fumu + '</span>';
                }
                return fumu;
            } else if (tiangan == '壬' || tiangan == '癸') {
                if (gongwei == '坎') {
                    return '<span style="color: red">' + xiongdi + '</span>';
                }
                return xiongdi;
            }
        }
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
}
