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
                changeFocusItem('geju', true, true);
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
                changeFocusItem('geju', true, false);
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
                changeFocusItem('geju', false, true);
                openInfoWindow();
            } else {
                document.getElementById('paipan-jiamu-info').classList.add('hidden');
                document.getElementById('paipan-gongwei-info').classList.add('rounded-bl-[15px]');
                document
                    .getElementById('paipan-gongwei-info')
                    .classList.remove('gongwei-info-on-bottom');
                getCurrentGongweiInfo(index); // 提取被点击的宫位信息并且把宫内信息加载到侧边栏中
                changeFocusItem('geju', false, false);
                openInfoWindow();
            }
        });
    });

    document.getElementById('paipan-geju-info').addEventListener('click', () => {
        if (
            document.querySelectorAll('[data-tianpanshen]')[whichGong].innerHTML == '值符' &&
            document.querySelectorAll('[data-dipanshen]')[whichGong].innerHTML == '值符'
        ) {
            changeFocusItem('geju', true, true);
        } else if (document.querySelectorAll('[data-tianpanshen]')[whichGong].innerHTML == '值符') {
            changeFocusItem('geju', true, false);
        } else if (document.querySelectorAll('[data-dipanshen]')[whichGong].innerHTML == '值符') {
            changeFocusItem('geju', false, true);
        } else {
            changeFocusItem('geju', false, false);
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
        // return {
        //     tianpanshen: tianpanshen,
        //     xing: xing,
        //     men: men,
        //     tianpangan: tianpangan,
        //     dipangan: dipangan,
        //     bagua: bagua,
        // };
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
                updateMenInfo(document.getElementById('paipan-men-info').innerText);
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
    function updateGejuInfo(tianpangan, dipangan, gong, tianpanjia = false, dipanjia = false) {
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
        // todo 重构代码，把所有的格局全部变成单独的 const 从而更加方便后期修改
        const group = tianpangan + dipangan;
        const jinruge =
            '<span style="color:#0079FE">进茹格：</span>凡谋为等事，不论吉凶，以进步为吉。欲穷千里目，要更上一层楼。但如测病反而不利<br>';
        let output = `${tianpangan} + ${dipangan}：<br>`;
        switch (group) {
            case '甲甲':
                output = output + '<span style="color:#0079FE">伏吟格</span><br>';
                break;
            case '甲乙':
                output = output + jinruge;
                break;
            case '甲丙':
                output =
                    output +
                    '<span style="color:#0079FE">前间格：</span>主我欲前进，而中途有人阳隔，欲进不能之象。阻隔之人事，可以看中间所间隔之干及其落宫，察其具体状态及原因<br><span style="color:#0079FE">耗气格：</span>我之财务不周全。主我帮助他人，而伤了我的骨血，脱耗我的精华<br>';
                break;
            case '甲丁':
                output =
                    output +
                    '<span style="color:#0079FE">交阴格：</span>事情存在阴谋，与不为人知的信息或事情<br>';
                break;
            case '甲戊':
                output =
                    output +
                    '<span style="color:#0079FE">外制格：</span>主事从外入，需防外人欺凌，外人主动来找我。木土相犯，牢狱口舌，争财夺利<br>';
                break;
            case '甲己':
                output =
                    output +
                    '<span style="color:#0079FE">上合格：</span>上亲下之象，领导，长辈关心下属，晚辈<br><span style="color:#0079FE">外侵格：</span>主事从外入，需防外人欺凌，外人主动来找我<br>';
                break;
            case '甲庚':
                output =
                    output +
                    '<span style="color:#0079FE">背冲格：</span>背地受损，损伤多从内部来<br><span style="color:#0079FE">内制格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
                break;
            case '甲辛':
                output =
                    output +
                    '<span style="color:#0079FE">内害格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
                break;
            case '甲壬':
                output =
                    output +
                    '<span style="color:#0079FE">后间格：</span>主我欲后退，而当中有人催促于我，欲退不能之象。阻隔之人事也可看中间所间隔之千及它的落宫，察其具体状态及原因<br><span style="color:#0079FE">乘权格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
                break;
            case '甲癸':
                output =
                    output +
                    '<span style="color:#0079FE">退茹格：</span>凡谋为等事，无论吉凶，以退步为美。退一步海阔天空，不宜争先斗狠。但也有例外，比如进茹但是逢空，为进空，所以不宜前进，反而应该抽身退守：同理如果退茹遇到空亡，为退空，则应该积极进取为好<br><span style="color:#0079FE">得母格：</span>有椿萱并茂之象，主有长上之人恩重于我<br>';
                break;

            case '乙甲':
                output =
                    output +
                    '<span style="color:#0079FE">退茹格：</span>凡谋为等事，无论吉凶，以退步为美。退一步海阔天空，不宜争先斗狠。但也有例外，比如进茹但是逢空，为进空，所以不宜前进，反而应该抽身退守：同理如果退茹遇到空亡，为退空，则应该积极进取为好<br>';
                break;
            case '乙乙':
                output = output + '<span style="color:#0079FE">伏吟格</span><br>';
                break;
            case '乙丙':
                output =
                    output +
                    '<span style="color:#0079FE">进茹格：</span>凡谋为等事，不论吉凶，以进步为吉。欲穷千里目，要更上一层楼。但如测病反而不利<br><span style="color:#0079FE">交阳格：</span>事情存在阴谋，与不为人知的信息或事情<br>';
                break;
            case '乙丁':
                output =
                    output +
                    '<span style="color:#0079FE">前间格：</span>主我欲前进，而中途有人阳隔，欲进不能之象。阻隔之人事，可以看中间所间隔之干及其落宫，察其具体状态及原因<br><span style="color:#0079FE">夺权格：</span>我之财务不周全。主我帮助他人，而伤了我的骨血，脱耗我的精华<br>';
                break;
            case '乙戊':
                output =
                    output +
                    '<span style="color:#0079FE">外害格：</span>主事从外入，需防外人欺凌，外人主动来找我。木土相犯，牢狱口舌，争财夺利<br>';
                break;
            case '乙己':
                output =
                    output +
                    '<span style="color:#0079FE">外乱格：</span>主事从外入，需防外人欺凌，外人主动来找我。木土相犯，牢狱口舌，争财夺利<br>';
                break;
            case '乙庚':
                output =
                    output +
                    '<span style="color:#0079FE">上合格：</span>上亲下之象，领导，长辈关心下属，晚辈<br><span style="color:#0079FE">内侵格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
                break;
            case '乙辛':
                output =
                    output +
                    '<span style="color:#0079FE">背冲格：</span>背地受损，损伤多从内部来<br><span style="color:#0079FE">内乱格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
                break;
            case '乙壬':
                output =
                    output +
                    '<span style="color:#0079FE">获父格：</span>有椿萱并茂之象，主有长上之人恩重于我<br>';
                break;
            case '乙癸':
                output =
                    output +
                    '<span style="color:#0079FE">后间格：</span>主我欲后退，而当中有人催促于我，欲退不能之象。阻隔之人事也可看中间所间隔之千及它的落宫，察其具体状态及原因<br><span style="color:#0079FE">倚势格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
                break;

            case '丙甲':
                output =
                    output +
                    '<span style="color:#0079FE">后间格：</span>主我欲后退，而当中有人催促于我，欲退不能之象。阻隔之人事也可看中间所间隔之千及它的落宫，察其具体状态及原因<br><span style="color:#0079FE">乘权格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
                break;
            case '丙乙':
                output =
                    output +
                    '<span style="color:#0079FE">退茹格：</span>凡谋为等事，无论吉凶，以退步为美。退一步海阔天空，不宜争先斗狠。但也有例外，比如进茹但是逢空，为进空，所以不宜前进，反而应该抽身退守：同理如果退茹遇到空亡，为退空，则应该积极进取为好<br><span style="color:#0079FE">得母格：</span>有椿萱并茂之象，主有长上之人恩重于我<br>';
                break;
            case '丙丙':
                output = output + '<span style="color:#0079FE">伏吟格</span><br>';
                break;
            case '丙丁':
                output = output + jinruge;
                break;
            case '丙戊':
                output =
                    output +
                    '<span style="color:#0079FE">前间格：</span>主我欲前进，而中途有人阳隔，欲进不能之象。阻隔之人事，可以看中间所间隔之干及其落宫，察其具体状态及原因<br><span style="color:#0079FE">耗气格：</span>我之财务不周全。主我帮助他人，而伤了我的骨血，脱耗我的精华<br>';
                break;
            case '丙己':
                output =
                    output +
                    '<span style="color:#0079FE">交阴格：</span>事情存在阴谋，与不为人知的信息或事情<br>';
                break;
            case '丙庚':
                output =
                    output +
                    '<span style="color:#0079FE">外制格：</span>主事从外入，需防外人欺凌，外人主动来找我。火金相见，怪异血光，突发灾难<br>';
                break;
            case '丙辛':
                output =
                    output +
                    '<span style="color:#0079FE">上合格：</span>上亲下之象，领导，长辈关心下属，晚辈<br><span style="color:#0079FE">外侵格：</span>主事从外入，需防外人欺凌，外人主动来找我<br>';
                break;
            case '丙壬':
                output =
                    output +
                    '<span style="color:#0079FE">背冲格：</span>背地受损，损伤多从内部来<br><span style="color:#0079FE">内制格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
                break;
            case '丙癸':
                output =
                    output +
                    '<span style="color:#0079FE">内害格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
                break;

            case '丁甲':
                output =
                    output +
                    '<span style="color:#0079FE">获父格：</span>有椿萱并茂之象，主有长上之人恩重于我<br>';
                break;
            case '丁乙':
                output =
                    output +
                    '<span style="color:#0079FE">后间格：</span>主我欲后退，而当中有人催促于我，欲退不能之象。阻隔之人事也可看中间所间隔之千及它的落宫，察其具体状态及原因<br><span style="color:#0079FE">倚势格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
                break;
            case '丁丙':
                output =
                    output +
                    '<span style="color:#0079FE">退茹格：</span>凡谋为等事，无论吉凶，以退步为美。退一步海阔天空，不宜争先斗狠。但也有例外，比如进茹但是逢空，为进空，所以不宜前进，反而应该抽身退守：同理如果退茹遇到空亡，为退空，则应该积极进取为好<br>';
                break;
            case '丁丁':
                output = output + '<span style="color:#0079FE">伏吟格</span><br>';
                break;
            case '丁戊':
                output =
                    output +
                    '<span style="color:#0079FE">进茹格：</span>凡谋为等事，不论吉凶，以进步为吉。欲穷千里目，要更上一层楼。但如测病反而不利<br><span style="color:#0079FE">交阳格：</span>事情存在阴谋，与不为人知的信息或事情<br>';
                break;
            case '丁己':
                output =
                    output +
                    '<span style="color:#0079FE">前间格：</span>主我欲前进，而中途有人阳隔，欲进不能之象。阻隔之人事，可以看中间所间隔之干及其落宫，察其具体状态及原因<br><span style="color:#0079FE">夺权格：</span>我之财务不周全。主我帮助他人，而伤了我的骨血，脱耗我的精华<br>';
                break;
            case '丁庚':
                output =
                    output +
                    '<span style="color:#0079FE">外害格：</span>主事从外入，需防外人欺凌，外人主动来找我。火金相见，怪异血光，突发灾难<br>';
                break;
            case '丁辛':
                output =
                    output +
                    '<span style="color:#0079FE">外乱格：</span>主事从外入，需防外人欺凌，外人主动来找我。火金相见，怪异血光，突发灾难<br>';
                break;
            case '丁壬':
                output =
                    output +
                    '<span style="color:#0079FE">上合格：</span>上亲下之象，领导，长辈关心下属，晚辈<br><span style="color:#0079FE">内侵格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
                break;
            case '丁癸':
                output =
                    output +
                    '<span style="color:#0079FE">背冲格：</span>背地受损，损伤多从内部来<br><span style="color:#0079FE">内乱格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
                break;

            case '戊甲':
                output =
                    output +
                    '<span style="color:#0079FE">内制格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
                break;
            case '戊乙':
                output =
                    output +
                    '<span style="color:#0079FE">内害格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
                break;
            case '戊丙':
                output =
                    output +
                    '<span style="color:#0079FE">后间格：</span>主我欲后退，而当中有人催促于我，欲退不能之象。阻隔之人事也可看中间所间隔之千及它的落宫，察其具体状态及原因<br><span style="color:#0079FE">乘权格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
                break;
            case '戊丁':
                output =
                    output +
                    '<span style="color:#0079FE">退茹格：</span>凡谋为等事，无论吉凶，以退步为美。退一步海阔天空，不宜争先斗狠。但也有例外，比如进茹但是逢空，为进空，所以不宜前进，反而应该抽身退守：同理如果退茹遇到空亡，为退空，则应该积极进取为好<br><span style="color:#0079FE">得母格：</span>有椿萱并茂之象，主有长上之人恩重于我<br>';
                break;
            case '戊戊':
                output = output + '<span style="color:#0079FE">伏吟格</span><br>';
                break;
            case '戊己':
                output =
                    output +
                    '<span style="color:#0079FE">进茹格：凡谋为等事，不论吉凶，以进步为吉。欲穷千里目，要更上一层楼。但如测病反而不利</span><br>';
                break;
            case '戊庚':
                output =
                    output +
                    '<span style="color:#0079FE">前间格：</span>主我欲前进，而中途有人阳隔，欲进不能之象。阻隔之人事，可以看中间所间隔之干及其落宫，察其具体状态及原因<br><span style="color:#0079FE">耗气格：</span>我之财务不周全。主我帮助他人，而伤了我的骨血，脱耗我的精华<br>';
                break;
            case '戊辛':
                output =
                    output +
                    '<span style="color:#0079FE">交阴格：</span>事情存在阴谋，与不为人知的信息或事情<br><span style="color:#0079FE">支破格：</span>支破无成灾祸息，谋为难就有冲突<br>';
                break;
            case '戊壬':
                output =
                    output +
                    '<span style="color:#0079FE">外制格：</span>主事从外入，需防外人欺凌，外人主动来找我。土水相克，遗财患病，争竞家园<br>';
                break;
            case '戊癸':
                output =
                    output +
                    '<span style="color:#0079FE">上合格：</span>上亲下之象，领导，长辈关心下属，晚辈<br><span style="color:#0079FE">外侵格：</span>主事从外入，需防外人欺凌，外人主动来找我<br>';
                break;

            case '己甲':
                output =
                    output +
                    '<span style="color:#0079FE">下合格：</span>下敬上之象，下属，晚辈主动向在上者表示恭敬<br><span style="color:#0079FE">内侵格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
                break;
            case '己乙':
                output =
                    output +
                    '<span style="color:#0079FE">内乱格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
                break;
            case '己丙':
                output =
                    output +
                    '<span style="color:#0079FE">获父格：</span>有椿萱并茂之象，主有长上之人恩重于我<br>';
                break;
            case '己丁':
                output =
                    output +
                    '<span style="color:#0079FE">后间格：</span>主我欲后退，而当中有人催促于我，欲退不能之象。阻隔之人事也可看中间所间隔之千及它的落宫，察其具体状态及原因<br><span style="color:#0079FE">倚势格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
                break;
            case '己戊':
                output =
                    output +
                    '<span style="color:#0079FE">退茹格：</span>凡谋为等事，无论吉凶，以退步为美。退一步海阔天空，不宜争先斗狠。但也有例外，比如进茹但是逢空，为进空，所以不宜前进，反而应该抽身退守：同理如果退茹遇到空亡，为退空，则应该积极进取为好<br>';
                break;
            case '己己':
                output = output + '<span style="color:#0079FE">伏吟格</span><br>';
                break;
            case '己庚':
                output =
                    output +
                    '<span style="color:#0079FE">进茹格：</span>凡谋为等事，不论吉凶，以进步为吉。欲穷千里目，要更上一层楼。但如测病反而不利<br><span style="color:#0079FE">交阳格：</span>事情存在阴谋，与不为人知的信息或事情<br>';
                break;
            case '己辛':
                output =
                    output +
                    '<span style="color:#0079FE">前间格：</span>主我欲前进，而中途有人阳隔，欲进不能之象。阻隔之人事，可以看中间所间隔之干及其落宫，察其具体状态及原因<br><span style="color:#0079FE">夺权格：</span>我之财务不周全。主我帮助他人，而伤了我的骨血，脱耗我的精华<br>';
                break;
            case '己壬':
                output =
                    output +
                    '<span style="color:#0079FE">外害格：</span>主事从外入，需防外人欺凌，外人主动来找我。土水相克，遗财患病，争竞家园<br>';
                break;
            case '己癸':
                output =
                    output +
                    '<span style="color:#0079FE">外乱格：</span>主事从外入，需防外人欺凌，外人主动来找我。土水相克，遗财患病，争竞家园<br>';
                break;

            case '庚甲':
                output =
                    output +
                    '<span style="color:#0079FE">外制格：</span>主事从外入，需防外人欺凌，外人主动来找我。金木相加，官事，口舌争斗<br><span style="color:#0079FE">正冲格：</span>正面冲突<br>';
                break;
            case '庚乙':
                output =
                    output +
                    '<span style="color:#0079FE">下合格：</span>下敬上之象，下属，晚辈主动向在上者表示恭敬<br><span style="color:#0079FE">外侵格：</span>主事从外入，需防外人欺凌，外人主动来找我。<br>';
                break;
            case '庚丙':
                output =
                    output +
                    '<span style="color:#0079FE">内制格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
                break;
            case '庚丁':
                output =
                    output +
                    '<span style="color:#0079FE">内害格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
                break;
            case '庚戊':
                output =
                    output +
                    '<span style="color:#0079FE">后间格：</span>主我欲后退，而当中有人催促于我，欲退不能之象。阻隔之人事也可看中间所间隔之千及它的落宫，察其具体状态及原因<br><span style="color:#0079FE">乘权格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
                break;
            case '庚己':
                output =
                    output +
                    '<span style="color:#0079FE">退茹格：</span>凡谋为等事，无论吉凶，以退步为美。退一步海阔天空，不宜争先斗狠。但也有例外，比如进茹但是逢空，为进空，所以不宜前进，反而应该抽身退守：同理如果退茹遇到空亡，为退空，则应该积极进取为好<br><span style="color:#0079FE">得母格：</span>有椿萱并茂之象，主有长上之人恩重于我<br>';
                break;
            case '庚庚':
                output = output + '<span style="color:#0079FE">伏吟格</span><br>';
                break;
            case '庚辛':
                output = output + jinruge;
                break;
            case '庚壬':
                output =
                    output +
                    '<span style="color:#0079FE">前间格：</span>主我欲前进，而中途有人阳隔，欲进不能之象。阻隔之人事，可以看中间所间隔之干及其落宫，察其具体状态及原因<br><span style="color:#0079FE">耗气格：</span>我之财务不周全。主我帮助他人，而伤了我的骨血，脱耗我的精华<br>';
                break;
            case '庚癸':
                output =
                    output +
                    '<span style="color:#0079FE">交阴格：</span>事情存在阴谋，与不为人知的信息或事情<br><span style="color:#0079FE">支破格：</span>支破无成灾祸息，谋为难就有冲突<br>';
                break;

            case '辛甲':
                output =
                    output +
                    '<span style="color:#0079FE">外害格：</span>主事从外入，需防外人欺凌，外人主动来找我。金木相加，官事，口舌争斗<br>';
                break;
            case '辛乙':
                output =
                    output +
                    '<span style="color:#0079FE">外乱格：</span>主事从外入，需防外人欺凌，外人主动来找我。金木相加，官事，口舌争斗<br><span style="color:#0079FE">正冲格：</span>正面冲突<br>';
                break;
            case '辛丙':
                output =
                    output +
                    '<span style="color:#0079FE">下合格：</span>下敬上之象，下属，晚辈主动向在上者表示恭敬<br><span style="color:#0079FE">内侵格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
                break;
            case '辛丁':
                output =
                    output +
                    '<span style="color:#0079FE">内乱格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
                break;
            case '辛戊':
                output =
                    output +
                    '<span style="color:#0079FE">获父格：</span>有椿萱并茂之象，主有长上之人恩重于我<br><span style="color:#0079FE">支破格：</span>支破无成灾祸息，谋为难就有冲突<br>';
                break;
            case '辛己':
                output =
                    output +
                    '<span style="color:#0079FE">后间格：</span>主我欲后退，而当中有人催促于我，欲退不能之象。阻隔之人事也可看中间所间隔之千及它的落宫，察其具体状态及原因<br><span style="color:#0079FE">倚势格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
                break;
            case '辛庚':
                output =
                    output +
                    '<span style="color:#0079FE">退茹格：</span>凡谋为等事，无论吉凶，以退步为美。退一步海阔天空，不宜争先斗狠。但也有例外，比如进茹但是逢空，为进空，所以不宜前进，反而应该抽身退守：同理如果退茹遇到空亡，为退空，则应该积极进取为好<br>';
                break;
            case '辛辛':
                output = output + '<span style="color:#0079FE">伏吟格</span><br>';
                break;
            case '辛壬':
                output =
                    output +
                    '<span style="color:#0079FE">进茹格：</span>凡谋为等事，不论吉凶，以进步为吉。欲穷千里目，要更上一层楼。但如测病反而不利<br><span style="color:#0079FE">交阳格：</span>事情存在阴谋，与不为人知的信息或事情<br>';
                break;
            case '辛癸':
                output =
                    output +
                    '<span style="color:#0079FE">前间格：</span>主我欲前进，而中途有人阳隔，欲进不能之象。阻隔之人事，可以看中间所间隔之干及其落宫，察其具体状态及原因<br><span style="color:#0079FE">夺权格：</span>我之财务不周全。主我帮助他人，而伤了我的骨血，脱耗我的精华<br>';
                break;

            case '壬甲':
                output =
                    output +
                    '<span style="color:#0079FE">前间格：</span>主我欲前进，而中途有人阳隔，欲进不能之象。阻隔之人事，可以看中间所间隔之干及其落宫，察其具体状态及原因<br><span style="color:#0079FE">耗气格：</span>我之财务不周全。主我帮助他人，而伤了我的骨血，脱耗我的精华<br>';
                break;
            case '壬乙':
                output =
                    output +
                    '<span style="color:#0079FE">内害格：</span>主事从内起，需防内人刑害，为我主动去找人<br><span style="color:#0079FE">支破格：</span>支破无成灾祸息，谋为难就有冲突<br>';
                break;
            case '壬丙':
                output =
                    output +
                    '<span style="color:#0079FE">外制格：</span>主事从外入，需防外人欺凌，外人主动来找我。水火相乘，惊恐，妇女不安<br><span style="color:#0079FE">正冲格：</span>正面冲突<br>';
                break;
            case '壬丁':
                output =
                    output +
                    '<span style="color:#0079FE">下合格：</span>下敬上之象，下属，晚辈主动向在上者表示恭敬<br><span style="color:#0079FE">外侵格：</span>主事从外入，需防外人欺凌，外人主动来找我。<br>';
                break;
            case '壬戊':
                output =
                    output +
                    '<span style="color:#0079FE">内制格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
                break;
            case '壬己':
                output =
                    output +
                    '<span style="color:#0079FE">内害格：</span>主事从内起，需防内人刑害，为我主动去找人<br><span style="color:#0079FE">支破格：</span>支破无成灾祸息，谋为难就有冲突<br>';
                break;
            case '壬庚':
                output =
                    output +
                    '<span style="color:#0079FE">后间格：</span>主我欲后退，而当中有人催促于我，欲退不能之象。阻隔之人事也可看中间所间隔之千及它的落宫，察其具体状态及原因<br><span style="color:#0079FE">乘权格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
                break;
            case '壬辛':
                output =
                    output +
                    '<span style="color:#0079FE">退茹格：</span>凡谋为等事，无论吉凶，以退步为美。退一步海阔天空，不宜争先斗狠。但也有例外，比如进茹但是逢空，为进空，所以不宜前进，反而应该抽身退守：同理如果退茹遇到空亡，为退空，则应该积极进取为好<br><span style="color:#0079FE">得母格：</span>有椿萱并茂之象，主有长上之人恩重于我<br>';
                break;
            case '壬壬':
                output = output + '<span style="color:#0079FE">伏吟格</span><br>';
                break;
            case '壬癸':
                output = output + jinruge;
                break;

            case '癸甲':
                output =
                    output +
                    '<span style="color:#0079FE">进茹格：</span>凡谋为等事，不论吉凶，以进步为吉。欲穷千里目，要更上一层楼。但如测病反而不利<br><span style="color:#0079FE">交阳格：</span>事情存在阴谋，与不为人知的信息或事情<br>';
                break;
            case '癸乙':
                output =
                    output +
                    '<span style="color:#0079FE">前间格：</span>主我欲前进，而中途有人阳隔，欲进不能之象。阻隔之人事，可以看中间所间隔之干及其落宫，察其具体状态及原因<br><span style="color:#0079FE">夺权格：</span>我之财务不周全。主我帮助他人，而伤了我的骨血，脱耗我的精华<br>';
                break;
            case '癸丙':
                output =
                    output +
                    '<span style="color:#0079FE">外害格：</span>主事从外入，需防外人欺凌，外人主动来找我。水火相乘，惊恐，妇女不安<br>';
                break;
            case '癸丁':
                output =
                    output +
                    '<span style="color:#0079FE">外乱格：</span>主事从外入，需防外人欺凌，外人主动来找我。水火相乘，惊恐，妇女不安<br><span style="color:#0079FE">正冲格：</span>正面冲突<br>';
                break;
            case '癸戊':
                output =
                    output +
                    '<span style="color:#0079FE">下合格：</span>下敬上之象，下属，晚辈主动向在上者表示恭敬<br><span style="color:#0079FE">内侵格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
                break;
            case '癸己':
                output =
                    output +
                    '<span style="color:#0079FE">内乱格：</span>主事从内起，需防内人刑害，为我主动去找人<br>';
                break;
            case '癸庚':
                output =
                    output +
                    '<span style="color:#0079FE">获父格：</span>有椿萱并茂之象，主有长上之人恩重于我<br><span style="color:#0079FE">支破格：</span>支破无成灾祸息，谋为难就有冲突<br>';
                break;
            case '癸辛':
                output =
                    output +
                    '<span style="color:#0079FE">后间格：</span>主我欲后退，而当中有人催促于我，欲退不能之象。阻隔之人事也可看中间所间隔之千及它的落宫，察其具体状态及原因<br><span style="color:#0079FE">倚势格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
                break;
            case '癸壬':
                output =
                    output +
                    '<span style="color:#0079FE">退茹格：</span>凡谋为等事，无论吉凶，以退步为美。退一步海阔天空，不宜争先斗狠。但也有例外，比如进茹但是逢空，为进空，所以不宜前进，反而应该抽身退守：同理如果退茹遇到空亡，为退空，则应该积极进取为好<br>';
                break;
            case '癸癸':
                output = output + '<span style="color:#0079FE">伏吟格</span><br>';
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
                        result = '甲：' + yang + '，' + zhangsheng;
                        break;
                    case '坎':
                        result = '甲：' + muyu;
                        break;
                    case '艮':
                        result = '甲：' + guandai + '，' + linguan;
                        break;
                    case '震':
                        result = '甲：' + diwang;
                        break;
                    case '巽':
                        result = '甲：' + shuai + '，' + bing;
                        break;
                    case '离':
                        result = '甲：' + si;
                        break;
                    case '坤':
                        result = '甲：' + mu + '，' + jue;
                        break;
                    case '兑':
                        result = '甲：' + tai;
                        break;
                }
                break;
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
