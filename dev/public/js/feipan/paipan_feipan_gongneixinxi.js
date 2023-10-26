function feipan_info(info) {
    // todo reformat this file for memory management
    let whichGong;
    let storedFeipanListeners = [];
    document.querySelectorAll('[data-gongwei-overlay]').forEach((overlay, index) => {
        const clickHandler = createGongweiOverlayListener(overlay, index);
        overlay.addEventListener('click', clickHandler);
        storedFeipanListeners.push({ element: overlay, handler: clickHandler });
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
                    document.getElementById('paipan-tianpanshen-info').innerText,
                    document.getElementById('paipan-xing-info').innerText,
                    document.getElementById('paipan-men-info').innerText,
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
            case '天沖':
                result = info.xing.天冲;
                break;
            case '天辅':
                result = info.xing.天辅;
                break;
            case '天輔':
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
            case '休門':
                result = info.men.休;
                break;
            case '死門':
                result = info.men.死;
                break;
            case '傷門':
                result = info.men.伤;
                break;
            case '杜門':
                result = info.men.杜;
                break;
            case '中門':
                result = info.men.中;
                break;
            case '開門':
                result = info.men.开;
                break;
            case '驚門':
                result = info.men.惊;
                break;
            case '生門':
                result = info.men.生;
                break;
            case '景門':
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
            case '太陰':
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
            case '勾陳':
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
        if (tianpanjia == true || dipanjia == true) {
            result =
                getZhangSheng(tianpangan, gong) +
                getZhangSheng(dipangan, gong) +
                getZhangSheng('甲', gong) +
                '<br><hr><br>' +
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
                    '<br><hr><br>' +
                    mengong(men, gong) +
                    getFuGe(tianpangan, gong) +
                    '<br><br>' +
                    getFuGe('甲', gong) +
                    '<br><br><hr><br>' +
                    getShenSha(
                        document.querySelectorAll('[data-anganzhi]')[whichGong].innerText,
                        gong,
                    );
            } else if (tianpanjia == true) {
                result =
                    result +
                    getZhengGe('甲', dipangan) +
                    '<br><hr><br>' +
                    mengong(men, gong) +
                    getFuGe(tianpangan, gong) +
                    '<br><br>' +
                    getFuGe(dipangan, gong) +
                    '<br><br>' +
                    getFuGe('甲', gong) +
                    '<br><br><hr><br>' +
                    getShenSha(
                        document.querySelectorAll('[data-anganzhi]')[whichGong].innerText,
                        gong,
                    );
            } else if (dipanjia == true) {
                result =
                    result +
                    getZhengGe(tianpangan, '甲') +
                    '<br><hr><br>' +
                    mengong(men, gong) +
                    getFuGe(tianpangan, gong) +
                    '<br><br>' +
                    getFuGe(dipangan, gong) +
                    '<br><br>' +
                    getFuGe('甲', gong) +
                    '<br><br><hr><br>' +
                    getShenSha(
                        document.querySelectorAll('[data-anganzhi]')[whichGong].innerText,
                        gong,
                    );
            }
        } else {
            result =
                getZhangSheng(tianpangan, gong) +
                getZhangSheng(dipangan, gong) +
                '<br><hr><br>' +
                getZhengGe(tianpangan, dipangan) +
                '<br><hr><br>' +
                mengong(men, gong) +
                getFuGe(tianpangan, gong) +
                '<br><br>' +
                getFuGe(dipangan, gong) +
                '<br><br><hr><br>' +
                getShenSha(document.querySelectorAll('[data-anganzhi]')[whichGong].innerText, gong);
        }
        result = result + getJiGe(tianpangan, dipangan, men, tianpanshen, gong);
        return result;
    }
    function getZhengGe(tianpangan, dipangan) {
        const group = tianpangan + dipangan;
        const fuyinge = '<span style="color:#0079FE">伏吟格：</span>';
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
            '<span style="color:#0079FE">交阴格：</span>利于妇女阴邪之事，并有隐匿隐私之象，有阴谋有害与我<br>';
        const jiaoyangge =
            '<span style="color:#0079FE">交阳格：</span>事虽在进，但未免有伤我经血，有阴谋有害与我<br>';
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
            '<span style="color:#0079FE">夺权格：</span>我之财务不周全。主我帮助他人，而伤了我的骨血，脱耗我的精华，也有财务，权利等被夺之象<br>';
        const yishige =
            '<span style="color:#0079FE">倚势格：</span>主他人尽力帮助于我，而获其资助、增我神气<br>';
        const beichongge =
            '<span style="color:#0079FE">背冲格：</span>背地受损，损伤多从内部来<br>';
        const zhengchongge = '<span style="color:#0079FE">正冲格：</span>正面冲突<br>';
        const zhipoge =
            '<span style="color:#0079FE">支破格：</span>支破无成灾祸息，谋为难就有冲突<br>';
        const waihaige =
            '<span style="color:#0079FE">外害格：</span>主事从外入，需防外人欺凌，外人主动来找我。<br>';
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
        const jinmu = '<span style="color:#0079FE">金木相加：</span>主官事，口舌斗争。<br>';
        const shuihuo = '<span style="color:#0079FE">水火相乘：</span>主惊恐，妇女不安。<br>';
        const tushui = '<span style="color:#0079FE">土水相克：</span>主遗财患病，争竞家园。<br>';
        const mutu = '<span style="color:#0079FE">木土相犯：</span>主牢狱口舌，争财夺利。<br>';
        const huojin = '<span style="color:#0079FE">火金相见：</span>主怪异血光，突发灾难。<br>';

        let output = `${tianpangan} + ${dipangan}：<br>`;
        switch (group) {
            case '甲甲':
                output = output + fuyinge + '木加木主非灾飞祸，争财竞禄，求谋难成。' + '<br>';
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
                output =
                    output +
                    shanghege +
                    waiqinge +
                    mutu +
                    '<span style="color:#0079FE">合土格：</span>格主宜农业田士耕种等事。<br>';
                break;
            case '甲庚':
                output =
                    output +
                    beichongge +
                    neizhige +
                    jinmu +
                    '<span style="color:#0079FE">木冲格：</span>宜用义宣扬，行谦下士，以及从林作伏、滚木作攻之事。<br>';
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
                    '木加木主非灾飞祸，争财竞禄，求谋难成。' +
                    '<br>' +
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
                    wailuange +
                    mutu +
                    '<span style="color:#0079FE">日奇入墓：</span>被土暗昧、门凶事必凶。<br>';
                break;
            case '乙庚':
                output =
                    output +
                    shanghege +
                    neiqinge +
                    jinmu +
                    '<span style="color:#0079FE">合金格：</span>主宜钱财威武等事。<br>' +
                    '<span style="color:#0079FE">日奇被刑：</span>有争讼，各怀私意。<br>';
                break;
            case '乙辛':
                output =
                    output +
                    beichongge +
                    neiluange +
                    jinmu +
                    '<span style="color:#0079FE">木冲格：</span>宜用义宣扬，行谦下士，以及从林作伏、滚木作攻之事。<br>' +
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
                    '火加火口舌飞祸，疾病相畏，凡事有始无终。' +
                    '<br>' +
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
                    '<span style="color:#0079FE">合水格：</span>主宜飘荡淫邪等事。<br>' +
                    '<span style="color:#0079FE">日月相会：</span>谋事成就，病人不凶。<br>';
                break;
            case '丙壬':
                output =
                    output +
                    beichongge +
                    neizhige +
                    shuihuo +
                    '<span style="color:#0079FE">火冲格：</span>宜行文招士，立词安民，运筹谋划，欺诈火攻之事。<br>' +
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
                    '火加火口舌飞祸，疾病相畏，凡事有始无终。' +
                    '<br>' +
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
                    '<span style="color:#0079FE">合木格：</span>主宜经营动作等事。<br>' +
                    '<span style="color:#0079FE">奇仪相合：</span>贵人恩诏，诉狱公平。<br>';
                break;
            case '丁癸':
                output =
                    output +
                    beichongge +
                    neiluange +
                    shuihuo +
                    '<span style="color:#0079FE">火冲格：</span>宜行文招士，立词安民，运筹谋划，欺诈火攻之事。<br>' +
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
                    '土加土住居烦恼，又主行事迟缓，虽成而迟等。' +
                    '<br>' +
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
                    '<span style="color:#0079FE">合火格：</span>主宜文谋筹策消息等事。<br>' +
                    '<span style="color:#0079FE">青龙华盖：</span>逢吉门为吉，可招福临门；逢凶门，事多不利，为凶。<br>';
                break;

            case '己甲':
                output =
                    output +
                    xiahege +
                    neiqinge +
                    '<span style="color:#0079FE">合土格：</span>主宜农业田士耕种等事。<br>';
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
                    '土加土住居烦恼，又主行事迟缓，虽成而迟等。' +
                    '<br>' +
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
                output =
                    output +
                    zhengchongge +
                    waizhige +
                    jinmu +
                    '<span style="color:#0079FE">金冲格：</span>宜扬威振武，演阵将兵，年战斗杀之事。<br>';
                break;
            case '庚乙':
                output =
                    output +
                    xiahege +
                    waiqinge +
                    jinmu +
                    '<span style="color:#0079FE">合金格：</span>主宜钱财威武等事。<br>' +
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
                    '金加金主道途分异，斗伤呻吟，凡事不顺。' +
                    '<br>' +
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
                    '<span style="color:#0079FE">金冲格：</span>宜扬威振武，演阵将兵，年战斗杀之事。<br>' +
                    '<span style="color:#0079FE">白虎猖狂：</span>家败人亡（分家、婚散、破产），出行有惊恐，远行多灾殃，尊长不喜，车船俱伤。<br>';
                break;
            case '辛丙':
                output =
                    output +
                    xiahege +
                    neiqinge +
                    huojin +
                    '<span style="color:#0079FE">合水格：</span>主宜飘荡淫邪等事。<br>' +
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
                    '金加金主道途分异，斗伤呻吟，凡事不顺。' +
                    '<br>' +
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
                    '<span style="color:#0079FE">水冲格：</span>宜用智行诱，酒食宴乐，调河开渠，水战水攻之事。<br>' +
                    '<span style="color:#0079FE">水蛇入火：</span>两败俱伤，为客不利。<br>';
                break;
            case '壬丁':
                output =
                    output +
                    xiahege +
                    waiqinge +
                    shuihuo +
                    '<span style="color:#0079FE">合木格：</span>主宜经营动作等事。<br>' +
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
                    '水加水口舌盗贼，阴私相侵，凡事因窘。' +
                    '<br>' +
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
                    wailuange +
                    shuihuo +
                    '<span style="color:#0079FE">水冲格：</span>宜用智行诱，酒食宴乐，调河开渠，水战水攻之事。<br>' +
                    '<span style="color:#0079FE">腾蛇夭矫：</span>文书官司，火焚也逃不掉，虚惊不宁。<br>';
                break;
            case '癸戊':
                output =
                    output +
                    xiahege +
                    waiqinge +
                    tushui +
                    '<span style="color:#0079FE">合火格：</span>主宜文谋筹策消息等事。<br>' +
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
                    '水加水口舌盗贼，阴私相侵，凡事因窘。' +
                    '<br>' +
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

        // 甲乙
        const quzhi =
            '<span style="color:#0079FE">曲直格：</span>大利军家施号令，探听敌弊合经营。又为仁寿格。';
        const taixi =
            '<span style="color:#0079FE">胎息格：</span>谋为从兹当进步，君子欣扶事有成。又为发生格。';
        const lifa =
            '<span style="color:#0079FE">罹伐格：</span>此格不利出军去，谋作交兵定震惊。主斗争惊恐。';
        const fenlin =
            '<span style="color:#0079FE">焚林格：</span>守日为宜固本美，毋须前进并争锋。宜防火。';
        const xingchuang =
            '<span style="color:#0079FE">兴创格：</span>最佳造作与修筑，主客交锋不称情。宜持衡。';

        // 丙丁
        const yanshang =
            '<span style="color:#0079FE">炎上格：</span>文书献策为最吉，用火乘风可进功。为虚冲，宜文治。';
        const zenghui =
            '<span style="color:#0079FE">增辉格：</span>文章显达功名进，举火出军勃然兴。利于飞黄腾达。';
        const yanmu =
            '<span style="color:#0079FE">掩目格：</span>掩目灭光为其号，溺身死地犯狱刑。主阴暗隐蔽。';
        const shiguang =
            '<span style="color:#0079FE">失光格：</span>前进必然招脱耗，破财破产坏元精。莫登程。';
        const douli =
            '<span style="color:#0079FE">斗力格：</span>口舌兴词概因此，逢之迅速退步停。事难宁。';

        // 戊己
        const jiase =
            '<span style="color:#0079FE">稼穑格：</span>大力守边井下寨，安营乐业与雕薨。宣耕耘造作。';
        const bianxiang =
            '<span style="color:#0079FE">变象格：</span>资生万物而成器，进步元亨万里程，宜窑灶破瓦。';
        const huaiti =
            '<span style="color:#0079FE">坏体格：</span>伤身损命犹劳力，退守为宜毋进兵。主禁锢，利坚贞。';
        const juejing =
            '<span style="color:#0079FE">绝精格：</span>耗散元阳失本面，诸般谋作一场空。事不通。';
        const poshui =
            '<span style="color:#0079FE">迫水格：</span>田园致讼终耗力，交战出军损兵丁。慎官刑。';

        // 庚辛
        const congge =
            '<span style="color:#0079FE">从革格：</span>教军演队宜操矛，劫敌发兵功最优。为肃杀，宜武功。';
        const yangwei =
            '<span style="color:#0079FE">杨威格：</span>兴兵练阵皆其吉，乐道采丹向此修。利建侯称霸。';
        const bikou =
            '<span style="color:#0079FE">闭口格：</span>他人闪赚伤于我，途道绝粮切勿谋。主冤仇血光。';
        const xiejin =
            '<span style="color:#0079FE">泄津格：</span>此象须防人陷我，钱财败损又添忧。怕消沉。';
        const fegnren =
            '<span style="color:#0079FE">逢刃格：</span>伤其体兮败其形，口舌争斗命残朽。有凶咎';

        // 壬癸
        const runxia =
            '<span style="color:#0079FE">润下格：</span>调河治水兼水战，斗智乘船向此游。又为含羞格。';
        const tongguan =
            '<span style="color:#0079FE">通关格：</span>迎锋见阵皆为吉，财利功名任所求。利筹策水利。';
        const jueji =
            '<span style="color:#0079FE">绝迹格：</span>伤其形质坏其身，疾病官灾一时陡。主疾病牵缠。';
        const baiyuan =
            '<span style="color:#0079FE">败源格：</span>诸般谋作皆费力，归去空空似浮舟。有忧愁。';
        const mierun =
            '<span style="color:#0079FE">灭润格：</span>利于淫邪私情事，非灾即祸将身因。乃无荣';

        if (tiangan == '甲' || tiangan == '乙') {
            switch (gong) {
                case '乾':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        lifa +
                        '<br>' +
                        '<span style="color:#0079FE">摧残格：</span>' +
                        cuican +
                        '<br>'
                    );
                case '兑':
                    return (
                        tiangan +
                        '在' +
                        gong +
                        '<br>' +
                        lifa +
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
                        taixi +
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
                        fenlin +
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
                        quzhi +
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
                        quzhi +
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
                        xingchuang +
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
                        xingchuang +
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
                        xingchuang +
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
                        douli +
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
                        douli +
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
                        yanmu +
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
                        yanshang +
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
                        zenghui +
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
                        zenghui +
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
                        shiguang +
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
                        shiguang +
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
                        shiguang +
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
                        juejing +
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
                        juejing +
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
                        poshui +
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
                        bianxiang +
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
                        huaiti +
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
                        huaiti +
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
                        jiase +
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
                        jiase +
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
                        jiase +
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
                        congge +
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
                        congge +
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
                        xiejin +
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
                        bikou +
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
                        fegnren +
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
                        fegnren +
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
                        yangwei +
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
                        yangwei +
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
                        yangwei +
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
                        tongguan +
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
                        tongguan +
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
                        runxia +
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
                        mierun +
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
                        baiyuan +
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
                        baiyuan +
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
                        jueji +
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
                        jueji +
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
                        jueji +
                        '<br>' +
                        '<span style="color:#0079FE">摧残格：</span>' +
                        cuican
                    );
            }
        }
    }
    function getZhangSheng(tiangan, gongwei) {
        const originalGongWei = gongwei;
        if (gongwei == '中') {
            for (let i = 0; i < 9; i++) {
                if (document.querySelectorAll('[data-wangshuai]')[i].innerText == '旺') {
                    switch (i) {
                        case 0:
                            gongwei = '坎';
                            break;
                        case 1:
                            gongwei = '坤';
                            break;
                        case 2:
                            gongwei = '震';
                            break;
                        case 3:
                            gongwei = '巽';
                            break;
                        case 5:
                            gongwei = '乾';
                            break;
                        case 6:
                            gongwei = '兑';
                            break;
                        case 7:
                            gongwei = '艮';
                            break;
                        case 8:
                            gongwei = '离';
                            break;
                    }
                }
            }
        }
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
                        result =
                            '甲' +
                            getLiuQin('甲', originalGongWei) +
                            '：' +
                            yang +
                            '，' +
                            zhangsheng;
                        break;
                    case '坎':
                        result = '甲' + getLiuQin('甲', originalGongWei) + '：' + muyu;
                        break;
                    case '艮':
                        result =
                            '甲' +
                            getLiuQin('甲', originalGongWei) +
                            '：' +
                            guandai +
                            '，' +
                            linguan;
                        break;
                    case '震':
                        result = '甲' + getLiuQin('甲', originalGongWei) + '：' + diwang;
                        break;
                    case '巽':
                        result =
                            '甲' + getLiuQin('甲', originalGongWei) + '：' + shuai + '，' + bing;
                        break;
                    case '离':
                        result = '甲' + getLiuQin('甲', originalGongWei) + '：' + si;
                        break;
                    case '坤':
                        result = '甲' + getLiuQin('甲', originalGongWei) + '：' + mu + '，' + jue;
                        break;
                    case '兑':
                        result = '甲' + getLiuQin('甲', originalGongWei) + '：' + tai;
                        break;
                }
                break;
            case '乙':
                switch (gongwei) {
                    case '乾':
                        result =
                            '乙' +
                            getLiuQin('乙', originalGongWei) +
                            '：' +
                            si +
                            '，' +
                            mu +
                            '  ' +
                            '（仲甲）';
                        break;
                    case '坎':
                        result =
                            '乙' +
                            getLiuQin('乙', originalGongWei) +
                            '仲甲' +
                            '：' +
                            bing +
                            '  ' +
                            '（仲甲）';
                        break;
                    case '艮':
                        result =
                            '乙' +
                            getLiuQin('乙', originalGongWei) +
                            '：' +
                            diwang +
                            '，' +
                            shuai +
                            '  ' +
                            '（仲甲）';
                        break;
                    case '震':
                        result =
                            '乙' +
                            getLiuQin('乙', originalGongWei) +
                            '：' +
                            linguan +
                            '  ' +
                            '（仲甲）';
                        break;
                    case '巽':
                        result =
                            '乙' +
                            getLiuQin('乙', originalGongWei) +
                            '：' +
                            muyu +
                            '，' +
                            guandai +
                            '  ' +
                            '（仲甲）';
                        break;
                    case '离':
                        result =
                            '乙' +
                            getLiuQin('乙', originalGongWei) +
                            '：' +
                            zhangsheng +
                            '  ' +
                            '（仲甲）';
                        break;
                    case '坤':
                        result =
                            '乙' +
                            getLiuQin('乙', originalGongWei) +
                            '：' +
                            tai +
                            '，' +
                            yang +
                            '  ' +
                            '（仲甲）';
                        break;
                    case '兑':
                        result =
                            '乙' +
                            getLiuQin('乙', originalGongWei) +
                            '：' +
                            jue +
                            '  ' +
                            '（仲甲）';
                        break;
                }
                break;
            case '丙':
                switch (gongwei) {
                    case '乾':
                        result =
                            '丙' +
                            getLiuQin('丙', originalGongWei) +
                            '：' +
                            mu +
                            '，' +
                            jue +
                            '  ' +
                            '（孟甲）';
                        break;
                    case '坎':
                        result =
                            '丙' +
                            getLiuQin('丙', originalGongWei) +
                            '：' +
                            tai +
                            '  ' +
                            '（孟甲）';
                        break;
                    case '艮':
                        result =
                            '丙' +
                            getLiuQin('丙', originalGongWei) +
                            '：' +
                            yang +
                            '，' +
                            zhangsheng +
                            '  ' +
                            '（孟甲）';
                        break;
                    case '震':
                        result =
                            '丙' +
                            getLiuQin('丙', originalGongWei) +
                            '：' +
                            muyu +
                            '  ' +
                            '（孟甲）';
                        break;
                    case '巽':
                        result =
                            '丙' +
                            getLiuQin('丙', originalGongWei) +
                            '：' +
                            guandai +
                            '，' +
                            linguan +
                            '  ' +
                            '（孟甲）';
                        break;
                    case '离':
                        result =
                            '丙' +
                            getLiuQin('丙', originalGongWei) +
                            '：' +
                            diwang +
                            '  ' +
                            '（孟甲）';
                        break;
                    case '坤':
                        result =
                            '丙' +
                            getLiuQin('丙', originalGongWei) +
                            '：' +
                            shuai +
                            '，' +
                            bing +
                            '  ' +
                            '（孟甲）';
                        break;
                    case '兑':
                        result =
                            '丙' + getLiuQin('丙', originalGongWei) + '：' + si + '  ' + '（孟甲）';
                        break;
                }
                break;
            case '丁':
                switch (gongwei) {
                    case '乾':
                        result =
                            '丁' +
                            getLiuQin('丁', originalGongWei) +
                            '：' +
                            tai +
                            '，' +
                            yang +
                            '  ' +
                            '（季甲）';
                        break;
                    case '坎':
                        result =
                            '丁' +
                            getLiuQin('丁', originalGongWei) +
                            '：' +
                            jue +
                            '  ' +
                            '（季甲）';
                        break;
                    case '艮':
                        result =
                            '丁' +
                            getLiuQin('丁', originalGongWei) +
                            '：' +
                            si +
                            '，' +
                            mu +
                            '  ' +
                            '（季甲）';
                        break;
                    case '震':
                        result =
                            '丁' +
                            getLiuQin('丁', originalGongWei) +
                            '：' +
                            bing +
                            '  ' +
                            '（季甲）';
                        break;
                    case '巽':
                        result =
                            '丁' +
                            getLiuQin('丁', originalGongWei) +
                            '：' +
                            diwang +
                            '，' +
                            shuai +
                            '  ' +
                            '（季甲）';
                        break;
                    case '离':
                        result =
                            '丁' +
                            getLiuQin('丁', originalGongWei) +
                            '：' +
                            linguan +
                            '  ' +
                            '（季甲）';
                        break;
                    case '坤':
                        result =
                            '丁' +
                            getLiuQin('丁', originalGongWei) +
                            '：' +
                            muyu +
                            '，' +
                            guandai +
                            '  ' +
                            '（季甲）';
                        break;
                    case '兑':
                        result =
                            '丁' +
                            getLiuQin('丁', originalGongWei) +
                            '：' +
                            zhangsheng +
                            '  ' +
                            '（季甲）';
                        break;
                }
                break;
            case '戊':
                switch (gongwei) {
                    case '乾':
                        result =
                            '戊' +
                            getLiuQin('戊', originalGongWei) +
                            '：' +
                            mu +
                            '，' +
                            jue +
                            '  ' +
                            '（仲甲）';
                        break;
                    case '坎':
                        result =
                            '戊' +
                            getLiuQin('戊', originalGongWei) +
                            '：' +
                            tai +
                            '  ' +
                            '（仲甲）';
                        break;
                    case '艮':
                        result =
                            '戊' +
                            getLiuQin('戊', originalGongWei) +
                            '：' +
                            yang +
                            '，' +
                            zhangsheng +
                            '  ' +
                            '（仲甲）';
                        break;
                    case '震':
                        result =
                            '<span style="color:#0079FE">戊</span>' +
                            getLiuQin('戊', originalGongWei) +
                            '：' +
                            muyu +
                            '  ' +
                            '（仲甲）';
                        break;
                    case '巽':
                        result =
                            '戊' +
                            getLiuQin('戊', originalGongWei) +
                            '：' +
                            guandai +
                            '，' +
                            linguan +
                            '  ' +
                            '（仲甲）';
                        break;
                    case '离':
                        result =
                            '戊' +
                            getLiuQin('戊', originalGongWei) +
                            '：' +
                            diwang +
                            '  ' +
                            '（仲甲）';
                        break;
                    case '坤':
                        result =
                            '戊' +
                            getLiuQin('戊', originalGongWei) +
                            '：' +
                            shuai +
                            '，' +
                            bing +
                            '  ' +
                            '（仲甲）';
                        break;
                    case '兑':
                        result =
                            '戊' + getLiuQin('戊', originalGongWei) + '：' + si + '  ' + '（仲甲）';
                        break;
                }
                break;
            case '己':
                switch (gongwei) {
                    case '乾':
                        result =
                            '己' +
                            getLiuQin('己', originalGongWei) +
                            '：' +
                            tai +
                            '，' +
                            yang +
                            '  ' +
                            '（季甲）';
                        break;
                    case '坎':
                        result =
                            '己' +
                            getLiuQin('己', originalGongWei) +
                            '：' +
                            jue +
                            '  ' +
                            '（季甲）';
                        break;
                    case '艮':
                        result =
                            '己' +
                            getLiuQin('己', originalGongWei) +
                            '：' +
                            si +
                            '，' +
                            mu +
                            '  ' +
                            '（季甲）';
                        break;
                    case '震':
                        result =
                            '己' +
                            getLiuQin('己', originalGongWei) +
                            '：' +
                            bing +
                            '  ' +
                            '（季甲）';
                        break;
                    case '巽':
                        result =
                            '己' +
                            getLiuQin('己', originalGongWei) +
                            '：' +
                            diwang +
                            '，' +
                            shuai +
                            '  ' +
                            '（季甲）';
                        break;
                    case '离':
                        result =
                            '己' +
                            getLiuQin('己', originalGongWei) +
                            '：' +
                            linguan +
                            '  ' +
                            '（季甲）';
                        break;
                    case '坤':
                        result =
                            '<span style="color:#0079FE">己</span>' +
                            getLiuQin('己', originalGongWei) +
                            '：' +
                            muyu +
                            '，' +
                            guandai +
                            '  ' +
                            '（季甲）';
                        break;
                    case '兑':
                        result =
                            '己' +
                            getLiuQin('己', originalGongWei) +
                            '：' +
                            zhangsheng +
                            '  ' +
                            '（季甲）';
                        break;
                }
                break;
            case '庚':
                switch (gongwei) {
                    case '乾':
                        result =
                            '庚' +
                            getLiuQin('庚', originalGongWei) +
                            '：' +
                            shuai +
                            '，' +
                            bing +
                            '  ' +
                            '（孟甲）';
                        break;
                    case '坎':
                        result =
                            '庚' + getLiuQin('庚', originalGongWei) + '：' + si + '  ' + '（孟甲）';
                        break;
                    case '艮':
                        result =
                            '<span style="color:#0079FE">庚</span>' +
                            getLiuQin('庚', originalGongWei) +
                            '：' +
                            mu +
                            '，' +
                            jue +
                            '  ' +
                            '（孟甲）';
                        break;
                    case '震':
                        result =
                            '庚' +
                            getLiuQin('庚', originalGongWei) +
                            '：' +
                            tai +
                            '  ' +
                            '（孟甲）';
                        break;
                    case '巽':
                        result =
                            '庚' +
                            getLiuQin('庚', originalGongWei) +
                            '：' +
                            yang +
                            '，' +
                            zhangsheng +
                            '  ' +
                            '（孟甲）';
                        break;
                    case '离':
                        result =
                            '庚' +
                            getLiuQin('庚', originalGongWei) +
                            '：' +
                            muyu +
                            '  ' +
                            '（孟甲）';
                        break;
                    case '坤':
                        result =
                            '庚' +
                            getLiuQin('庚', originalGongWei) +
                            '：' +
                            guandai +
                            '，' +
                            linguan +
                            '  ' +
                            '（孟甲）';
                        break;
                    case '兑':
                        result =
                            '庚' +
                            getLiuQin('庚', originalGongWei) +
                            '：' +
                            diwang +
                            '  ' +
                            '（孟甲）';
                        break;
                }
                break;
            case '辛':
                switch (gongwei) {
                    case '乾':
                        result =
                            '辛' +
                            getLiuQin('辛', originalGongWei) +
                            '：' +
                            muyu +
                            '，' +
                            guandai +
                            '  ' +
                            '（仲甲）';
                        break;
                    case '坎':
                        result =
                            '辛' +
                            getLiuQin('辛', originalGongWei) +
                            '：' +
                            zhangsheng +
                            '  ' +
                            '（仲甲）';
                        break;
                    case '艮':
                        result =
                            '辛' +
                            getLiuQin('辛', originalGongWei) +
                            '：' +
                            tai +
                            '，' +
                            yang +
                            '  ' +
                            '（仲甲）';
                        break;
                    case '震':
                        result =
                            '辛' +
                            getLiuQin('辛', originalGongWei) +
                            '：' +
                            jue +
                            '  ' +
                            '（仲甲）';
                        break;
                    case '巽':
                        result =
                            '辛' +
                            getLiuQin('辛', originalGongWei) +
                            '：' +
                            si +
                            '，' +
                            mu +
                            '  ' +
                            '（仲甲）';
                        break;
                    case '离':
                        result =
                            '<span style="color:#0079FE">辛</span>' +
                            getLiuQin('辛', originalGongWei) +
                            '：' +
                            bing +
                            '  ' +
                            '（仲甲）';
                        break;
                    case '坤':
                        result =
                            '辛' +
                            getLiuQin('辛', originalGongWei) +
                            '：' +
                            diwang +
                            '，' +
                            shuai +
                            '  ' +
                            '（仲甲）';
                        break;
                    case '兑':
                        result =
                            '辛' +
                            getLiuQin('辛', originalGongWei) +
                            '：' +
                            linguan +
                            '  ' +
                            '（仲甲）';
                        break;
                }
                break;
            case '壬':
                switch (gongwei) {
                    case '乾':
                        result =
                            '壬' +
                            getLiuQin('壬', originalGongWei) +
                            '：' +
                            guandai +
                            '，' +
                            linguan +
                            '  ' +
                            '（季甲）';
                        break;
                    case '坎':
                        result =
                            '壬' +
                            getLiuQin('壬', originalGongWei) +
                            '：' +
                            diwang +
                            '  ' +
                            '（季甲）';
                        break;
                    case '艮':
                        result =
                            '壬' +
                            getLiuQin('壬', originalGongWei) +
                            '：' +
                            shuai +
                            '，' +
                            bing +
                            '  ' +
                            '（季甲）';
                        break;
                    case '震':
                        result =
                            '壬' + getLiuQin('壬', originalGongWei) + '：' + si + '  ' + '（季甲）';
                        break;
                    case '巽':
                        result =
                            '<span style="color:#0079FE">壬</span>' +
                            getLiuQin('壬', originalGongWei) +
                            '：' +
                            mu +
                            '，' +
                            jue +
                            '  ' +
                            '（季甲）';
                        break;
                    case '离':
                        result =
                            '壬' +
                            getLiuQin('壬', originalGongWei) +
                            '：' +
                            tai +
                            '  ' +
                            '（季甲）';
                        break;
                    case '坤':
                        result =
                            '壬' +
                            getLiuQin('壬', originalGongWei) +
                            '：' +
                            yang +
                            '，' +
                            zhangsheng +
                            '  ' +
                            '（季甲）';
                        break;
                    case '兑':
                        result =
                            '壬' +
                            getLiuQin('壬', originalGongWei) +
                            '：' +
                            muyu +
                            '  ' +
                            '（季甲）';
                        break;
                }
                break;
            case '癸':
                switch (gongwei) {
                    case '乾':
                        result =
                            '癸' +
                            getLiuQin('癸', originalGongWei) +
                            '：' +
                            diwang +
                            '，' +
                            shuai +
                            '  ' +
                            '（孟甲）';
                        break;
                    case '坎':
                        result =
                            '癸' +
                            getLiuQin('癸', originalGongWei) +
                            '：' +
                            linguan +
                            '  ' +
                            '（孟甲）';
                        break;
                    case '艮':
                        result =
                            '癸' +
                            getLiuQin('癸', originalGongWei) +
                            '：' +
                            muyu +
                            '，' +
                            guandai +
                            '  ' +
                            '（孟甲）';
                        break;
                    case '震':
                        result =
                            '癸' +
                            getLiuQin('癸', originalGongWei) +
                            '：' +
                            zhangsheng +
                            '  ' +
                            '（孟甲）';
                        break;
                    case '巽':
                        result =
                            '<span style="color:#0079FE">癸</span>' +
                            getLiuQin('癸', originalGongWei) +
                            '：' +
                            tai +
                            '，' +
                            yang +
                            '  ' +
                            '（孟甲）';
                        break;
                    case '离':
                        result =
                            '癸' +
                            getLiuQin('癸', originalGongWei) +
                            '：' +
                            jue +
                            '  ' +
                            '（孟甲）';
                        break;
                    case '坤':
                        result =
                            '癸' +
                            getLiuQin('癸', originalGongWei) +
                            '：' +
                            si +
                            '，' +
                            mu +
                            '  ' +
                            '（孟甲）';
                        break;
                    case '兑':
                        result =
                            '癸' +
                            getLiuQin('癸', originalGongWei) +
                            '：' +
                            bing +
                            '  ' +
                            '（孟甲）';
                        break;
                }
                break;
        }
        return result + '<br>';
    }
    function getLiuQin(tiangan, gongwei) {
        const shigan = document.getElementById('shi').innerText.charAt(0);
        switch (shigan) {
            case '甲':
                switch (tiangan) {
                    case '甲':
                        switch (gongwei) {
                            case '震':
                                return '<span style="color: red">（比肩）</span>';
                            case '巽':
                                return '<span style="color: red">（比肩）</span>';
                            default:
                                return '（比肩）';
                        }
                    case '乙':
                        switch (gongwei) {
                            case '震':
                                return '<span style="color: red">（劫财）</span>';
                            case '巽':
                                return '<span style="color: red">（劫财）</span>';
                            default:
                                return '（劫财）';
                        }
                    case '丙':
                        switch (gongwei) {
                            case '离':
                                return '<span style="color: red">（食神）</span>';
                            default:
                                return '（食神）';
                        }
                    case '丁':
                        switch (gongwei) {
                            case '离':
                                return '<span style="color: red">（伤官）</span>';
                            default:
                                return '（伤官）';
                        }
                    case '戊':
                        switch (gongwei) {
                            case '坤':
                                return '<span style="color: red">（偏财）</span>';
                            case '中':
                                return '<span style="color: red">（偏财）</span>';
                            case '艮':
                                return '<span style="color: red">（偏财）</span>';
                            default:
                                return '（偏财）';
                        }
                    case '己':
                        switch (gongwei) {
                            case '坤':
                                return '<span style="color: red">（正财）</span>';
                            case '中':
                                return '<span style="color: red">（正财）</span>';
                            case '艮':
                                return '<span style="color: red">（正财）</span>';
                            default:
                                return '（正财）';
                        }
                    case '庚':
                        switch (gongwei) {
                            case '乾':
                                return '<span style="color: red">（七杀）</span>';
                            case '兑':
                                return '<span style="color: red">（七杀）</span>';
                            default:
                                return '（七杀）';
                        }
                    case '辛':
                        switch (gongwei) {
                            case '乾':
                                return '<span style="color: red">（正官）</span>';
                            case '兑':
                                return '<span style="color: red">（正官）</span>';
                            default:
                                return '（正官）';
                        }
                    case '壬':
                        switch (gongwei) {
                            case '坎':
                                return '<span style="color: red">（偏印）</span>';
                            default:
                                return '（偏印）';
                        }
                    case '癸':
                        switch (gongwei) {
                            case '坎':
                                return '<span style="color: red">（正印）</span>';
                            default:
                                return '（正印）';
                        }
                }
                break;
            case '乙':
                switch (tiangan) {
                    case '甲':
                        switch (gongwei) {
                            case '震':
                                return '<span style="color: red">（劫财）</span>';
                            case '巽':
                                return '<span style="color: red">（劫财）</span>';
                            default:
                                return '（劫财）';
                        }
                    case '乙':
                        switch (gongwei) {
                            case '震':
                                return '<span style="color: red">（比肩）</span>';
                            case '巽':
                                return '<span style="color: red">（比肩）</span>';
                            default:
                                return '（比肩）';
                        }
                    case '丙':
                        switch (gongwei) {
                            case '离':
                                return '<span style="color: red">（伤官）</span>';
                            default:
                                return '（伤官）';
                        }
                    case '丁':
                        switch (gongwei) {
                            case '离':
                                return '<span style="color: red">（食神）</span>';
                            default:
                                return '（食神）';
                        }
                    case '戊':
                        switch (gongwei) {
                            case '坤':
                                return '<span style="color: red">（正财）</span>';
                            case '中':
                                return '<span style="color: red">（正财）</span>';
                            case '艮':
                                return '<span style="color: red">（正财）</span>';
                            default:
                                return '（正财）';
                        }
                    case '己':
                        switch (gongwei) {
                            case '坤':
                                return '<span style="color: red">（偏财）</span>';
                            case '中':
                                return '<span style="color: red">（偏财）</span>';
                            case '艮':
                                return '<span style="color: red">（偏财）</span>';
                            default:
                                return '（偏财）';
                        }
                    case '庚':
                        switch (gongwei) {
                            case '乾':
                                return '<span style="color: red">（正官）</span>';
                            case '兑':
                                return '<span style="color: red">（正官）</span>';
                            default:
                                return '（正官）';
                        }
                    case '辛':
                        switch (gongwei) {
                            case '乾':
                                return '<span style="color: red">（七杀）</span>';
                            case '兑':
                                return '<span style="color: red">（七杀）</span>';
                            default:
                                return '（七杀）';
                        }
                    case '壬':
                        switch (gongwei) {
                            case '坎':
                                return '<span style="color: red">（正印）</span>';
                            default:
                                return '（正印）';
                        }
                    case '癸':
                        switch (gongwei) {
                            case '坎':
                                return '<span style="color: red">（偏印）</span>';
                            default:
                                return '（偏印）';
                        }
                }
                break;
            case '丙':
                switch (tiangan) {
                    case '甲':
                        switch (gongwei) {
                            case '震':
                                return '<span style="color: red">（偏印）</span>';
                            case '巽':
                                return '<span style="color: red">（偏印）</span>';
                            default:
                                return '（偏印）';
                        }
                    case '乙':
                        switch (gongwei) {
                            case '震':
                                return '<span style="color: red">（正印）</span>';
                            case '巽':
                                return '<span style="color: red">（正印）</span>';
                            default:
                                return '（正印）';
                        }
                    case '丙':
                        switch (gongwei) {
                            case '离':
                                return '<span style="color: red">（比肩）</span>';
                            default:
                                return '（比肩）';
                        }
                    case '丁':
                        switch (gongwei) {
                            case '离':
                                return '<span style="color: red">（劫财）</span>';
                            default:
                                return '（劫财）';
                        }
                    case '戊':
                        switch (gongwei) {
                            case '坤':
                                return '<span style="color: red">（食神）</span>';
                            case '中':
                                return '<span style="color: red">（食神）</span>';
                            case '艮':
                                return '<span style="color: red">（食神）</span>';
                            default:
                                return '（食神）';
                        }
                    case '己':
                        switch (gongwei) {
                            case '坤':
                                return '<span style="color: red">（伤官）</span>';
                            case '中':
                                return '<span style="color: red">（伤官）</span>';
                            case '艮':
                                return '<span style="color: red">（伤官）</span>';
                            default:
                                return '（伤官）';
                        }
                    case '庚':
                        switch (gongwei) {
                            case '乾':
                                return '<span style="color: red">（偏财）</span>';
                            case '兑':
                                return '<span style="color: red">（偏财）</span>';
                            default:
                                return '（偏财）';
                        }
                    case '辛':
                        switch (gongwei) {
                            case '乾':
                                return '<span style="color: red">（正财）</span>';
                            case '兑':
                                return '<span style="color: red">（正财）</span>';
                            default:
                                return '（正财）';
                        }
                    case '壬':
                        switch (gongwei) {
                            case '坎':
                                return '<span style="color: red">（七杀）</span>';
                            default:
                                return '（七杀）';
                        }
                    case '癸':
                        switch (gongwei) {
                            case '坎':
                                return '<span style="color: red">（正官）</span>';
                            default:
                                return '（正官）';
                        }
                }
                break;
            case '丁':
                switch (tiangan) {
                    case '甲':
                        switch (gongwei) {
                            case '震':
                                return '<span style="color: red">（正印）</span>';
                            case '巽':
                                return '<span style="color: red">（正印）</span>';
                            default:
                                return '（正印）';
                        }
                    case '乙':
                        switch (gongwei) {
                            case '震':
                                return '<span style="color: red">（偏印）</span>';
                            case '巽':
                                return '<span style="color: red">（偏印）</span>';
                            default:
                                return '（偏印）';
                        }
                    case '丙':
                        switch (gongwei) {
                            case '离':
                                return '<span style="color: red">（劫财）</span>';
                            default:
                                return '（劫财）';
                        }
                    case '丁':
                        switch (gongwei) {
                            case '离':
                                return '<span style="color: red">（比肩）</span>';
                            default:
                                return '（比肩）';
                        }
                    case '戊':
                        switch (gongwei) {
                            case '坤':
                                return '<span style="color: red">（伤官）</span>';
                            case '中':
                                return '<span style="color: red">（伤官）</span>';
                            case '艮':
                                return '<span style="color: red">（伤官）</span>';
                            default:
                                return '（伤官）';
                        }
                    case '己':
                        switch (gongwei) {
                            case '坤':
                                return '<span style="color: red">（食神）</span>';
                            case '中':
                                return '<span style="color: red">（食神）</span>';
                            case '艮':
                                return '<span style="color: red">（食神）</span>';
                            default:
                                return '（食神）';
                        }
                    case '庚':
                        switch (gongwei) {
                            case '乾':
                                return '<span style="color: red">（正财）</span>';
                            case '兑':
                                return '<span style="color: red">（正财）</span>';
                            default:
                                return '（正财）';
                        }
                    case '辛':
                        switch (gongwei) {
                            case '乾':
                                return '<span style="color: red">（偏财）</span>';
                            case '兑':
                                return '<span style="color: red">（偏财）</span>';
                            default:
                                return '（偏财）';
                        }
                    case '壬':
                        switch (gongwei) {
                            case '坎':
                                return '<span style="color: red">（正官）</span>';
                            default:
                                return '（正官）';
                        }
                    case '癸':
                        switch (gongwei) {
                            case '坎':
                                return '<span style="color: red">（七杀）</span>';
                            default:
                                return '（七杀）';
                        }
                }
                break;
            case '戊':
                switch (tiangan) {
                    case '甲':
                        switch (gongwei) {
                            case '震':
                                return '<span style="color: red">（七杀）</span>';
                            case '巽':
                                return '<span style="color: red">（七杀）</span>';
                            default:
                                return '（七杀）';
                        }
                    case '乙':
                        switch (gongwei) {
                            case '震':
                                return '<span style="color: red">（正官）</span>';
                            case '巽':
                                return '<span style="color: red">（正官）</span>';
                            default:
                                return '（正官）';
                        }
                    case '丙':
                        switch (gongwei) {
                            case '离':
                                return '<span style="color: red">（偏印）</span>';
                            default:
                                return '（偏印）';
                        }
                    case '丁':
                        switch (gongwei) {
                            case '离':
                                return '<span style="color: red">（正印）</span>';
                            default:
                                return '（正印）';
                        }
                    case '戊':
                        switch (gongwei) {
                            case '坤':
                                return '<span style="color: red">（比肩）</span>';
                            case '中':
                                return '<span style="color: red">（比肩）</span>';
                            case '艮':
                                return '<span style="color: red">（比肩）</span>';
                            default:
                                return '（比肩）';
                        }
                    case '己':
                        switch (gongwei) {
                            case '坤':
                                return '<span style="color: red">（劫财）</span>';
                            case '中':
                                return '<span style="color: red">（劫财）</span>';
                            case '艮':
                                return '<span style="color: red">（劫财）</span>';
                            default:
                                return '（劫财）';
                        }
                    case '庚':
                        switch (gongwei) {
                            case '乾':
                                return '<span style="color: red">（食神）</span>';
                            case '兑':
                                return '<span style="color: red">（食神）</span>';
                            default:
                                return '（食神）';
                        }
                    case '辛':
                        switch (gongwei) {
                            case '乾':
                                return '<span style="color: red">（伤官）</span>';
                            case '兑':
                                return '<span style="color: red">（伤官）</span>';
                            default:
                                return '（伤官）';
                        }
                    case '壬':
                        switch (gongwei) {
                            case '坎':
                                return '<span style="color: red">（偏财）</span>';
                            default:
                                return '（偏财）';
                        }
                    case '癸':
                        switch (gongwei) {
                            case '坎':
                                return '<span style="color: red">（正财）</span>';
                            default:
                                return '（正财）';
                        }
                }
                break;
            case '己':
                switch (tiangan) {
                    case '甲':
                        switch (gongwei) {
                            case '震':
                                return '<span style="color: red">（正官）</span>';
                            case '巽':
                                return '<span style="color: red">（正官）</span>';
                            default:
                                return '（正官）';
                        }
                    case '乙':
                        switch (gongwei) {
                            case '震':
                                return '<span style="color: red">（七杀）</span>';
                            case '巽':
                                return '<span style="color: red">（七杀）</span>';
                            default:
                                return '（七杀）';
                        }
                    case '丙':
                        switch (gongwei) {
                            case '离':
                                return '<span style="color: red">（正印）</span>';
                            default:
                                return '（正印）';
                        }
                    case '丁':
                        switch (gongwei) {
                            case '离':
                                return '<span style="color: red">（偏印）</span>';
                            default:
                                return '（偏印）';
                        }
                    case '戊':
                        switch (gongwei) {
                            case '坤':
                                return '<span style="color: red">（劫财）</span>';
                            case '中':
                                return '<span style="color: red">（劫财）</span>';
                            case '艮':
                                return '<span style="color: red">（劫财）</span>';
                            default:
                                return '（劫财）';
                        }
                    case '己':
                        switch (gongwei) {
                            case '坤':
                                return '<span style="color: red">（比肩）</span>';
                            case '中':
                                return '<span style="color: red">（比肩）</span>';
                            case '艮':
                                return '<span style="color: red">（比肩）</span>';
                            default:
                                return '（比肩）';
                        }
                    case '庚':
                        switch (gongwei) {
                            case '乾':
                                return '<span style="color: red">（伤官）</span>';
                            case '兑':
                                return '<span style="color: red">（伤官）</span>';
                            default:
                                return '（伤官）';
                        }
                    case '辛':
                        switch (gongwei) {
                            case '乾':
                                return '<span style="color: red">（食神）</span>';
                            case '兑':
                                return '<span style="color: red">（食神）</span>';
                            default:
                                return '（食神）';
                        }
                    case '壬':
                        switch (gongwei) {
                            case '坎':
                                return '<span style="color: red">（正财）</span>';
                            default:
                                return '（正财）';
                        }
                    case '癸':
                        switch (gongwei) {
                            case '坎':
                                return '<span style="color: red">（偏财）</span>';
                            default:
                                return '（偏财）';
                        }
                }
                break;
            case '庚':
                switch (tiangan) {
                    case '甲':
                        switch (gongwei) {
                            case '震':
                                return '<span style="color: red">（偏财）</span>';
                            case '巽':
                                return '<span style="color: red">（偏财）</span>';
                            default:
                                return '（偏财）';
                        }
                    case '乙':
                        switch (gongwei) {
                            case '震':
                                return '<span style="color: red">（正财）</span>';
                            case '巽':
                                return '<span style="color: red">（正财）</span>';
                            default:
                                return '（正财）';
                        }
                    case '丙':
                        switch (gongwei) {
                            case '离':
                                return '<span style="color: red">（七杀）</span>';
                            default:
                                return '（七杀）';
                        }
                    case '丁':
                        switch (gongwei) {
                            case '离':
                                return '<span style="color: red">（正官）</span>';
                            default:
                                return '（正官）';
                        }
                    case '戊':
                        switch (gongwei) {
                            case '坤':
                                return '<span style="color: red">（偏印）</span>';
                            case '中':
                                return '<span style="color: red">（偏印）</span>';
                            case '艮':
                                return '<span style="color: red">（偏印）</span>';
                            default:
                                return '（偏印）';
                        }
                    case '己':
                        switch (gongwei) {
                            case '坤':
                                return '<span style="color: red">（正印）</span>';
                            case '中':
                                return '<span style="color: red">（正印）</span>';
                            case '艮':
                                return '<span style="color: red">（正印）</span>';
                            default:
                                return '（正印）';
                        }
                    case '庚':
                        switch (gongwei) {
                            case '乾':
                                return '<span style="color: red">（比肩）</span>';
                            case '兑':
                                return '<span style="color: red">（比肩）</span>';
                            default:
                                return '（比肩）';
                        }
                    case '辛':
                        switch (gongwei) {
                            case '乾':
                                return '<span style="color: red">（劫财）</span>';
                            case '兑':
                                return '<span style="color: red">（劫财）</span>';
                            default:
                                return '（劫财）';
                        }
                    case '壬':
                        switch (gongwei) {
                            case '坎':
                                return '<span style="color: red">（劫财）</span>';
                            default:
                                return '（劫财）';
                        }
                    case '癸':
                        switch (gongwei) {
                            case '坎':
                                return '<span style="color: red">（伤官）</span>';
                            default:
                                return '（伤官）';
                        }
                }
                break;
            case '辛':
                switch (tiangan) {
                    case '甲':
                        switch (gongwei) {
                            case '震':
                                return '<span style="color: red">（正财）</span>';
                            case '巽':
                                return '<span style="color: red">（正财）</span>';
                            default:
                                return '（正财）';
                        }
                    case '乙':
                        switch (gongwei) {
                            case '震':
                                return '<span style="color: red">（偏财）</span>';
                            case '巽':
                                return '<span style="color: red">（偏财）</span>';
                            default:
                                return '（偏财）';
                        }
                    case '丙':
                        switch (gongwei) {
                            case '离':
                                return '<span style="color: red">（正官）</span>';
                            default:
                                return '（正官）';
                        }
                    case '丁':
                        switch (gongwei) {
                            case '离':
                                return '<span style="color: red">（七杀）</span>';
                            default:
                                return '（七杀）';
                        }
                    case '戊':
                        switch (gongwei) {
                            case '坤':
                                return '<span style="color: red">（正印）</span>';
                            case '中':
                                return '<span style="color: red">（正印）</span>';
                            case '艮':
                                return '<span style="color: red">（正印）</span>';
                            default:
                                return '（正印）';
                        }
                    case '己':
                        switch (gongwei) {
                            case '坤':
                                return '<span style="color: red">（偏印）</span>';
                            case '中':
                                return '<span style="color: red">（偏印）</span>';
                            case '艮':
                                return '<span style="color: red">（偏印）</span>';
                            default:
                                return '（偏印）';
                        }
                    case '庚':
                        switch (gongwei) {
                            case '乾':
                                return '<span style="color: red">（劫财）</span>';
                            case '兑':
                                return '<span style="color: red">（劫财）</span>';
                            default:
                                return '（劫财）';
                        }
                    case '辛':
                        switch (gongwei) {
                            case '乾':
                                return '<span style="color: red">（比肩）</span>';
                            case '兑':
                                return '<span style="color: red">（比肩）</span>';
                            default:
                                return '（比肩）';
                        }
                    case '壬':
                        switch (gongwei) {
                            case '坎':
                                return '<span style="color: red">（伤官）</span>';
                            default:
                                return '（伤官）';
                        }
                    case '癸':
                        switch (gongwei) {
                            case '坎':
                                return '<span style="color: red">（食神）</span>';
                            default:
                                return '（食神）';
                        }
                }
                break;
            case '壬':
                switch (tiangan) {
                    case '甲':
                        switch (gongwei) {
                            case '震':
                                return '<span style="color: red">（食神）</span>';
                            case '巽':
                                return '<span style="color: red">（食神）</span>';
                            default:
                                return '（食神）';
                        }
                    case '乙':
                        switch (gongwei) {
                            case '震':
                                return '<span style="color: red">（伤官）</span>';
                            case '巽':
                                return '<span style="color: red">（伤官）</span>';
                            default:
                                return '（伤官）';
                        }
                    case '丙':
                        switch (gongwei) {
                            case '离':
                                return '<span style="color: red">（偏财）</span>';
                            default:
                                return '（偏财）';
                        }
                    case '丁':
                        switch (gongwei) {
                            case '离':
                                return '<span style="color: red">（正财）</span>';
                            default:
                                return '（正财）';
                        }
                    case '戊':
                        switch (gongwei) {
                            case '坤':
                                return '<span style="color: red">（七杀）</span>';
                            case '中':
                                return '<span style="color: red">（七杀）</span>';
                            case '艮':
                                return '<span style="color: red">（七杀）</span>';
                            default:
                                return '（七杀）';
                        }
                    case '己':
                        switch (gongwei) {
                            case '坤':
                                return '<span style="color: red">（正官）</span>';
                            case '中':
                                return '<span style="color: red">（正官）</span>';
                            case '艮':
                                return '<span style="color: red">（正官）</span>';
                            default:
                                return '（正官）';
                        }
                    case '庚':
                        switch (gongwei) {
                            case '乾':
                                return '<span style="color: red">（偏印）</span>';
                            case '兑':
                                return '<span style="color: red">（偏印）</span>';
                            default:
                                return '（偏印）';
                        }
                    case '辛':
                        switch (gongwei) {
                            case '乾':
                                return '<span style="color: red">（正印）</span>';
                            case '兑':
                                return '<span style="color: red">（正印）</span>';
                            default:
                                return '（正印）';
                        }
                    case '壬':
                        switch (gongwei) {
                            case '坎':
                                return '<span style="color: red">（比肩）</span>';
                            default:
                                return '（比肩）';
                        }
                    case '癸':
                        switch (gongwei) {
                            case '坎':
                                return '<span style="color: red">（劫财）</span>';
                            default:
                                return '（劫财）';
                        }
                }
                break;
            case '癸':
                switch (tiangan) {
                    case '甲':
                        switch (gongwei) {
                            case '震':
                                return '<span style="color: red">（伤官）</span>';
                            case '巽':
                                return '<span style="color: red">（伤官）</span>';
                            default:
                                return '（伤官）';
                        }
                    case '乙':
                        switch (gongwei) {
                            case '震':
                                return '<span style="color: red">（食神）</span>';
                            case '巽':
                                return '<span style="color: red">（食神）</span>';
                            default:
                                return '（食神）';
                        }
                    case '丙':
                        switch (gongwei) {
                            case '离':
                                return '<span style="color: red">（正财）</span>';
                            default:
                                return '（正财）';
                        }
                    case '丁':
                        switch (gongwei) {
                            case '离':
                                return '<span style="color: red">（偏财）</span>';
                            default:
                                return '（偏财）';
                        }
                    case '戊':
                        switch (gongwei) {
                            case '坤':
                                return '<span style="color: red">（正官）</span>';
                            case '中':
                                return '<span style="color: red">（正官）</span>';
                            case '艮':
                                return '<span style="color: red">（正官）</span>';
                            default:
                                return '（正官）';
                        }
                    case '己':
                        switch (gongwei) {
                            case '坤':
                                return '<span style="color: red">（七杀）</span>';
                            case '中':
                                return '<span style="color: red">（七杀）</span>';
                            case '艮':
                                return '<span style="color: red">（七杀）</span>';
                            default:
                                return '（七杀）';
                        }
                    case '庚':
                        switch (gongwei) {
                            case '乾':
                                return '<span style="color: red">（正印）</span>';
                            case '兑':
                                return '<span style="color: red">（正印）</span>';
                            default:
                                return '（正印）';
                        }
                    case '辛':
                        switch (gongwei) {
                            case '乾':
                                return '<span style="color: red">（偏印）</span>';
                            case '兑':
                                return '<span style="color: red">（偏印）</span>';
                            default:
                                return '（偏印）';
                        }
                    case '壬':
                        switch (gongwei) {
                            case '坎':
                                return '<span style="color: red">（劫财）</span>';
                            default:
                                return '（劫财）';
                        }
                    case '癸':
                        switch (gongwei) {
                            case '坎':
                                return '<span style="color: red">（比肩）</span>';
                            default:
                                return '（比肩）';
                        }
                }
                break;
        }
    }
    function menDongYing(men) {
        if (men == '中门' || men == '中門') {
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
                case '休門':
                    return '休门三十阴贵人，衣着蓝黄及碧青。<br>出此门三十里，见阴贵人，或五十里，见蛇、鼠、水物，吉。宜和集万事，可以休心宁志，人宅营家。';
                case '死門':
                    return '死门二十逢疾病，黄皂衣人见遭迪。<br>出此门二十里，逢有疾病。或五十里、五里内，见血光。远行不还家，嫁娶伤家长，新妇凶。宜刑吊事。';
                case '傷門':
                    return '伤门三十争讼起，凶人着皂血光腥。<br>出此门三十里，有争讼出血之人。若造葬、上官、出行，主遭贼。只宜捕盗、渔猎。';
                case '杜門':
                    return '杜门二十男女辈，绢皂褐碧相从行。<br>出此门二十里，见男女同行。或六十里，见恶人。日奇临，二女人身着青衫；月奇临，主烽火；星奇临，弓驾应。宜掩捕、兴土疆、绝鬼营、修仙隐逸、冲举炼药，吉。';
                case '開門':
                    return '开门二十阴人至，贵人乘马紫衣襟。<br>出此门二十里，见贵人着紫骑马，吉。四十里内，见猪马，逢酒食，万事吉。锣鼓鎗刀，妇人担伞至。手执物，抱孩儿。';
                case '驚門':
                    return '惊门三十鸦鸣噪，官状相逢六畜椁。<br>出此门三十里，见鸦鹊官状，六畜牴触之事。十里内有损物，四十里二人争打，返吉。如无康惊，凶。';
                case '生門':
                    return '生门十五逢公吏，官人着紫皂衣巾。<br>出此门十五里，有紫衣公吏官人。或六十里，见贵人车马，百事吉。可以造仙佛殿。拜将出师，大胜。';
                case '景門':
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
                case '太陰':
                    return '女人或阴险小人。为密谋文书，又谈方术事。人从南方来引，可依托。';
                case '六合':
                    return '遇人必喜笑相迎，一见如故。更有美女少妇，身着新衣，相将酒食，和颜悦色，殷勤相接';
                case '白虎':
                    return '必遇新丧孝子，或白衣人，或居夫、猎户，闻啼哭之声，或残疾老人，或争斗带伤之客，或骑马而过。';
                case '玄武':
                    return '必遇盗贼，或奸人刺客，或儿童小子，或讲元门课卜之士，或逃亡走审窘迫之人。';
                case '勾陈':
                    return '必遇新丧孝子，或白衣人，或居夫、猎户，闻啼哭之声，或残疾老人，或争斗带伤之客，或骑马而过。';
                case '勾陳':
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
            case '天沖':
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
            case '天輔':
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
    function getJiGe(tianpangan, dipangan, men, shen, gongwei) {
        switch (men) {
            case '休門':
                men = '休门';
                break;
            case '生門':
                men = '生门';
                break;
            case '傷門':
                men = '伤门';
                break;
            case '杜門':
                men = '杜门';
                break;
            case '景門':
                men = '景门';
                break;
            case '死門':
                men = '死门';
                break;
            case '驚門':
                men = '惊门';
                break;
            case '開門':
                men = '开门';
                break;
            case '中門':
                men = '中门';
                break;
        }
        switch (shen) {
            case '太陰':
                shen = '太阴';
                break;
            case '勾陳':
                shen = '勾陈';
                break;
        }
        let result = '<br><hr><br>';
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
        if (result == '<br><hr><br>') {
            return '';
        } else {
            return result;
        }
    }
    function mengong(men, gong) {
        const menpo =
            '门+宫：<br><span style="color:red">门迫：</span>主祸从外来。我居宫室之内，并不欲招非于他，他突然来克我，不知有何关碍，迫来之事最为迅速，要多堤防。<br>';
        const shouzhi =
            '门+宫：<br><span style="color:red">门受制：</span>主内祸重重。因为我安居无事，他却过来惹我，我以郑重克服于他，他也甘受我制，主我侵犯于他。<br>';
        const he =
            '门+宫：<br><span style="color:#0079FE">交和：</span>主喜庆重重。我居穷困之际，并无意去求他，他不辞劳苦，主动来帮助我，我也愿意接受他的帮助。主因外人相助而有喜庆。<br>';
        const yi =
            '门+宫：<br><span style="color:#0079FE">结义：</span>主喜中有脱。他人不远千里而来投奔于我，我也念其诚意，接之以礼，子之以仪，故谓之义。主乐善好施，他人受益。<br>';
        const fuyin =
            '门+宫：<br><span style="color:red">门伏吟：</span>主有灾难，祸不单行，伏地痛苦呻吟之象。宜静不宜动，宜缓不宜速。只宜收敛钱财，讨债等。<br>';
        const fanyin =
            '门+宫：<br><span style="color:red">门反吟：</span>主反复不宁，进后复退，聚而复散，徘徊不定，犹豫不决，半途而废，凡是多重复。宜快刀斩乱麻，速战速决。<br>';

        switch (men) {
            case '休门':
                switch (gong) {
                    case '乾':
                        return (
                            yi +
                            '<span style="color:#0079FE">休加开：</span>主开张店铺及见贵，求财等事大吉。<br><br><hr><br>'
                        );
                    case '坎':
                        return (
                            fuyin +
                            '<span style="color:#0079FE">休加休：</span>求才进人口，谒贵吉，朝见上官，修造大利。<br><br><hr><br>'
                        );
                    case '艮':
                        return (
                            shouzhi +
                            '<span style="color:#0079FE">休加生：</span>得阴人财物；于贵谋望，虽迟应吉。<br><br><hr><br>'
                        );
                    case '震':
                        return (
                            he +
                            '<span style="color:#0079FE">休加伤：</span>上官主喜庆；求财则不易得；其它分产、变动等事亦不吉。<br><br><hr><br>'
                        );
                    case '巽':
                        return (
                            he +
                            '<span style="color:#0079FE">休加杜：</span>主破财、失物难寻。<br><br><hr><br>'
                        );
                    case '离':
                        return (
                            fanyin +
                            '<span style="color:#0079FE">休加景：</span>主谋望文书印信等事不成，反招口舌。<br><br><hr><br>'
                        );
                    case '坤':
                        return (
                            shouzhi +
                            '<span style="color:#0079FE">休加死：</span>主文印官事不吉，远行，僧道事不吉，占病凶。<br><br><hr><br>'
                        );
                    case '兑':
                        return (
                            he +
                            '<span style="color:#0079FE">休加惊：</span>主损财、招非并疾病惊恐事。<br><br><hr><br>'
                        );
                    case '中':
                        return shouzhi + '<br><hr><br>';
                }
            case '生门':
                switch (gong) {
                    case '乾':
                        return (
                            he +
                            '<span style="color:#0079FE">生加开：</span>主见贵人，求财大发。<br><br><hr><br>'
                        );
                    case '坎':
                        return (
                            menpo +
                            '<span style="color:#0079FE">生加休：</span>主阴人处，谋财利。<br><br><hr><br>'
                        );
                    case '艮':
                        return (
                            fuyin +
                            '<span style="color:#0079FE">生加生：</span>主远行，求财，吉。<br><br><hr><br>'
                        );
                    case '震':
                        return (
                            shouzhi +
                            '<span style="color:#0079FE">生加伤：</span>主亲友变动，道路不吉。<br><br><hr><br>'
                        );
                    case '巽':
                        return (
                            shouzhi +
                            '<span style="color:#0079FE">生加杜：</span>主阴谋、阴人损财，不利。<br><br><hr><br>'
                        );
                    case '离':
                        return (
                            yi +
                            '<span style="color:#0079FE">生加景：</span>主阴人、小口不宁及文书事。<br><br><hr><br>'
                        );
                    case '坤':
                        return (
                            fanyin +
                            '<span style="color:#0079FE">生加死：</span>主田宅官司，病则主难救。<br><br><hr><br>'
                        );
                    case '兑':
                        return (
                            he +
                            '<span style="color:#0079FE">生加惊：</span>主尊长财产、词讼，病迟愈，吉。<br><br><hr><br>'
                        );
                    case '中':
                        return fanyin + '<br><hr><br>';
                }
            case '伤门':
                switch (gong) {
                    case '乾':
                        return (
                            shouzhi +
                            '<span style="color:#0079FE">伤加开：</span>主见贵人、开张、走失、变动等事不利。<br><br><hr><br>'
                        );
                    case '坎':
                        return (
                            yi +
                            '<span style="color:#0079FE">伤加休：</span>主男人变动或托人谋事，财名不利。<br><br><hr><br>'
                        );
                    case '艮':
                        return (
                            menpo +
                            '<span style="color:#0079FE">伤加生：</span>主房产、种植业等变动。<br><br><hr><br>'
                        );
                    case '震':
                        return (
                            fuyin +
                            '<span style="color:#0079FE">伤加伤：</span>主变动、远行皆主折伤。<br><br><hr><br>'
                        );
                    case '巽':
                        return '<span style="color:#0079FE">伤加杜：</span>主变动、失聪、官司、刑狱、百事凶。<br><br><hr><br>';
                    case '离':
                        return (
                            he +
                            '<span style="color:#0079FE">伤加景：</span>主文书、印信、口舌、惹是生非。<br><br><hr><br>'
                        );
                    case '坤':
                        return (
                            menpo +
                            '<span style="color:#0079FE">伤加死：</span>主官司、印信凶，出行大忌，占病凶。<br><br><hr><br>'
                        );
                    case '兑':
                        return (
                            fanyin +
                            '<span style="color:#0079FE">伤加惊：</span>主亲人疾病、惊忧，谋为不利，凶。<br><br><hr><br>'
                        );
                    case '中':
                        return menpo + '<br><hr><br>';
                }
            case '杜门':
                switch (gong) {
                    case '乾':
                        return (
                            fanyin +
                            '<span style="color:#0079FE">杜加开：</span>主见贵人、官长谋事，先破财后吉。<br><br><hr><br>'
                        );
                    case '坎':
                        return (
                            yi +
                            '<span style="color:#0079FE">杜加休：</span>主求财小益。<br><br><hr><br>'
                        );
                    case '艮':
                        return (
                            menpo +
                            '<span style="color:#0079FE">杜加生：</span>主阳人小口破财，田宅求财不利。<br><br><hr><br>'
                        );
                    case '震':
                        return '<span style="color:#0079FE">杜加伤：</span>主兄弟田产破财。<br><br><hr><br>';
                    case '巽':
                        return (
                            fuyin +
                            '<span style="color:#0079FE">杜加杜：</span>主因父母疾病、田宅出脱事，凶。<br><br><hr><br>'
                        );
                    case '离':
                        return (
                            he +
                            '<span style="color:#0079FE">杜加景：</span>主文书、印信阻隔，阳人小口疾病。<br><br><hr><br>'
                        );
                    case '坤':
                        return (
                            menpo +
                            '<span style="color:#0079FE">杜加死：</span>主田宅、文书失落，官司破财小凶。<br><br><hr><br>'
                        );
                    case '兑':
                        return (
                            shouzhi +
                            '<span style="color:#0079FE">杜加惊：</span>主门户内忧疑、惊恐、词讼事。<br><br><hr><br>'
                        );
                    case '中':
                        return menpo + '<br><hr><br>';
                }
            case '景门':
                switch (gong) {
                    case '乾':
                        return (
                            menpo +
                            '<span style="color:#0079FE">景加开：</span>官人升迁，求文印事皆吉。<br><br><hr><br>'
                        );
                    case '坎':
                        return (
                            fanyin +
                            '<span style="color:#0079FE">景加休：</span>主文书遗失，争讼不休。<br><br><hr><br>'
                        );
                    case '艮':
                        return (
                            he +
                            '<span style="color:#0079FE">景加生：</span>主阴人生产大喜，更主求财旺利，行人大吉。<br><br><hr><br>'
                        );
                    case '震':
                        return (
                            yi +
                            '<span style="color:#0079FE">景加伤：</span>主亲眷口舌，败财后平。<br><br><hr><br>'
                        );
                    case '巽':
                        return (
                            yi +
                            '<span style="color:#0079FE">景加杜：</span>主失脱文书，败财后平。<br><br><hr><br>'
                        );
                    case '离':
                        return (
                            fuyin +
                            '<span style="color:#0079FE">景加景：</span>主文状未动，有预先见之意，内有阳人、小口忧患。<br><br><hr><br>'
                        );
                    case '坤':
                        return (
                            he +
                            '<span style="color:#0079FE">景加死：</span>主官讼，争田宅事，多啾唧。<br><br><hr><br>'
                        );
                    case '兑':
                        return (
                            menpo +
                            '<span style="color:#0079FE">景加惊：</span>主官讼，女人小口疾病，凶。<br><br><hr><br>'
                        );
                    case '中':
                        return he + '<br><hr><br>';
                }
            case '死门':
                switch (gong) {
                    case '乾':
                        return (
                            he +
                            '<span style="color:#0079FE">死加开：</span>见贵人求文书、印信事利。<br><br><hr><br>'
                        );
                    case '坎':
                        return (
                            menpo +
                            '<span style="color:#0079FE">死加休：</span>主求财物事不吉，向僧道求方吉。<br><br><hr><br>'
                        );
                    case '艮':
                        return (
                            fanyin +
                            '<span style="color:#0079FE">死加生：</span>主丧事，求财则得，占病死者复生。<br><br><hr><br>'
                        );
                    case '震':
                        return (
                            shouzhi +
                            '<span style="color:#0079FE">死加伤：</span>官司变动遭刑杖凶。<br><br><hr><br>'
                        );
                    case '巽':
                        return (
                            shouzhi +
                            '<span style="color:#0079FE">死加杜：</span>破财，妇人风疾，腹肿。<br><br><hr><br>'
                        );
                    case '离':
                        return (
                            yi +
                            '<span style="color:#0079FE">死加景：</span>因文信、书契、财产事见官，先怒后喜不凶。<br><br><hr><br>'
                        );
                    case '坤':
                        return (
                            fuyin +
                            '<span style="color:#0079FE">死加死：</span>主官事，无气、凶。<br><br><hr><br>'
                        );
                    case '兑':
                        return (
                            he +
                            '<span style="color:#0079FE">死加惊：</span>因官司事不结，忧疑患病凶。<br><br><hr><br>'
                        );
                    case '中':
                        return fanyin + '<br><hr><br>';
                }
            case '惊门':
                switch (gong) {
                    case '乾':
                        return '<span style="color:#0079FE">惊加开：</span>主忧疑，官事惊恐，见喜贵则不凶。<br><br><hr><br>';
                    case '坎':
                        return (
                            he +
                            '<span style="color:#0079FE">惊加休：</span>求财事或口舌事，迟吉。<br><br><hr><br>'
                        );
                    case '艮':
                        return (
                            yi +
                            '<span style="color:#0079FE">惊加生：</span>主因妇人生产或求财而生惊忧，皆吉。<br><br><hr><br>'
                        );
                    case '震':
                        return (
                            fanyin +
                            '<span style="color:#0079FE">惊加伤：</span>主因商议同谋害人事泄，惹讼凶。<br><br><hr><br>'
                        );
                    case '巽':
                        return (
                            menpo +
                            '<span style="color:#0079FE">惊加杜：</span>失脱破财事，惊恐，不凶。<br><br><hr><br>'
                        );
                    case '离':
                        return (
                            shouzhi +
                            '<span style="color:#0079FE">惊加景：</span>主讼词不息，小口疾病，凶。<br><br><hr><br>'
                        );
                    case '坤':
                        return (
                            yi +
                            '<span style="color:#0079FE">惊加死：</span>因田宅中怪异而生是非，凶。<br><br><hr><br>'
                        );
                    case '兑':
                        return (
                            fuyin +
                            '<span style="color:#0079FE">惊加惊：</span>主疾病、忧虑、惊疑、惊恐。<br><br><hr><br>'
                        );
                    case '中':
                        return yi + '<br><hr><br>';
                }
            case '开门':
                switch (gong) {
                    case '乾':
                        return (
                            fuyin +
                            '<span style="color:#0079FE">开加开：</span>主贵人、宝物、财喜、官运、事业皆吉。<br><br><hr><br>'
                        );
                    case '坎':
                        return (
                            he +
                            '<span style="color:#0079FE">开加休：</span>主见贵人、财喜、开张店铺、贸易大利。<br><br><hr><br>'
                        );
                    case '艮':
                        return (
                            yi +
                            '<span style="color:#0079FE">开加生；</span>见贵人，谋望所求遂意。<br><br><hr><br>'
                        );
                    case '震':
                        return (
                            menpo +
                            '<span style="color:#0079FE">开加伤：</span>主变动、更改、移徙等事，皆不吉。<br><br><hr><br>'
                        );
                    case '巽':
                        return (
                            fanyin +
                            '<span style="color:#0079FE">开加杜：</span>主失脱文印、书契等，小凶。<br><br><hr><br>'
                        );
                    case '离':
                        return (
                            shouzhi +
                            '<span style="color:#0079FE">开加景：</span>见贵人，因文书事不利。<br><br><hr><br>'
                        );
                    case '坤':
                        return (
                            yi +
                            '<span style="color:#0079FE">开加死：</span>官司、惊忧、恶事，先忧后喜。<br><br><hr><br>'
                        );
                    case '兑':
                        return '<span style="color:#0079FE">开加惊：</span>词讼、惊疑之事。<br><br><hr><br>';
                    case '中':
                        return yi + '<br><hr><br>';
                }
            case '中门':
                return '';

            case '休門':
                switch (gong) {
                    case '乾':
                        return (
                            yi +
                            '<span style="color:#0079FE">休加开：</span>主开张店铺及见贵，求财等事大吉。<br><br><hr><br>'
                        );
                    case '坎':
                        return (
                            fuyin +
                            '<span style="color:#0079FE">休加休：</span>求才进人口，谒贵吉，朝见上官，修造大利。<br><br><hr><br>'
                        );
                    case '艮':
                        return (
                            shouzhi +
                            '<span style="color:#0079FE">休加生：</span>得阴人财物；于贵谋望，虽迟应吉。<br><br><hr><br>'
                        );
                    case '震':
                        return (
                            he +
                            '<span style="color:#0079FE">休加伤：</span>上官主喜庆；求财则不易得；其它分产、变动等事亦不吉。<br><br><hr><br>'
                        );
                    case '巽':
                        return (
                            he +
                            '<span style="color:#0079FE">休加杜：</span>主破财、失物难寻。<br><br><hr><br>'
                        );
                    case '离':
                        return (
                            fanyin +
                            '<span style="color:#0079FE">休加景：</span>主谋望文书印信等事不成，反招口舌。<br><br><hr><br>'
                        );
                    case '坤':
                        return (
                            shouzhi +
                            '<span style="color:#0079FE">休加死：</span>主文印官事不吉，远行，僧道事不吉，占病凶。<br><br><hr><br>'
                        );
                    case '兑':
                        return (
                            he +
                            '<span style="color:#0079FE">休加惊：</span>主损财、招非并疾病惊恐事。<br><br><hr><br>'
                        );
                    case '中':
                        return shouzhi + '<br><hr><br>';
                }
            case '生門':
                switch (gong) {
                    case '乾':
                        return (
                            he +
                            '<span style="color:#0079FE">生加开：</span>主见贵人，求财大发。<br><br><hr><br>'
                        );
                    case '坎':
                        return (
                            menpo +
                            '<span style="color:#0079FE">生加休：</span>主阴人处，谋财利。<br><br><hr><br>'
                        );
                    case '艮':
                        return (
                            fuyin +
                            '<span style="color:#0079FE">生加生：</span>主远行，求财，吉。<br><br><hr><br>'
                        );
                    case '震':
                        return (
                            shouzhi +
                            '<span style="color:#0079FE">生加伤：</span>主亲友变动，道路不吉。<br><br><hr><br>'
                        );
                    case '巽':
                        return (
                            shouzhi +
                            '<span style="color:#0079FE">生加杜：</span>主阴谋、阴人损财，不利。<br><br><hr><br>'
                        );
                    case '离':
                        return (
                            yi +
                            '<span style="color:#0079FE">生加景：</span>主阴人、小口不宁及文书事。<br><br><hr><br>'
                        );
                    case '坤':
                        return (
                            fanyin +
                            '<span style="color:#0079FE">生加死：</span>主田宅官司，病则主难救。<br><br><hr><br>'
                        );
                    case '兑':
                        return (
                            he +
                            '<span style="color:#0079FE">生加惊：</span>主尊长财产、词讼，病迟愈，吉。<br><br><hr><br>'
                        );
                    case '中':
                        return fanyin + '<br><hr><br>';
                }
            case '傷門':
                switch (gong) {
                    case '乾':
                        return (
                            shouzhi +
                            '<span style="color:#0079FE">伤加开：</span>主见贵人、开张、走失、变动等事不利。<br><br><hr><br>'
                        );
                    case '坎':
                        return (
                            yi +
                            '<span style="color:#0079FE">伤加休：</span>主男人变动或托人谋事，财名不利。<br><br><hr><br>'
                        );
                    case '艮':
                        return (
                            menpo +
                            '<span style="color:#0079FE">伤加生：</span>主房产、种植业等变动。<br><br><hr><br>'
                        );
                    case '震':
                        return (
                            fuyin +
                            '<span style="color:#0079FE">伤加伤：</span>主变动、远行皆主折伤。<br><br><hr><br>'
                        );
                    case '巽':
                        return '<span style="color:#0079FE">伤加杜：</span>主变动、失聪、官司、刑狱、百事凶。<br><br><hr><br>';
                    case '离':
                        return (
                            he +
                            '<span style="color:#0079FE">伤加景：</span>主文书、印信、口舌、惹是生非。<br><br><hr><br>'
                        );
                    case '坤':
                        return (
                            menpo +
                            '<span style="color:#0079FE">伤加死：</span>主官司、印信凶，出行大忌，占病凶。<br><br><hr><br>'
                        );
                    case '兑':
                        return (
                            fanyin +
                            '<span style="color:#0079FE">伤加惊：</span>主亲人疾病、惊忧，谋为不利，凶。<br><br><hr><br>'
                        );
                    case '中':
                        return menpo + '<br><hr><br>';
                }
            case '杜門':
                switch (gong) {
                    case '乾':
                        return (
                            fanyin +
                            '<span style="color:#0079FE">杜加开：</span>主见贵人、官长谋事，先破财后吉。<br><br><hr><br>'
                        );
                    case '坎':
                        return (
                            yi +
                            '<span style="color:#0079FE">杜加休：</span>主求财小益。<br><br><hr><br>'
                        );
                    case '艮':
                        return (
                            menpo +
                            '<span style="color:#0079FE">杜加生：</span>主阳人小口破财，田宅求财不利。<br><br><hr><br>'
                        );
                    case '震':
                        return '<span style="color:#0079FE">杜加伤：</span>主兄弟田产破财。<br><br><hr><br>';
                    case '巽':
                        return (
                            fuyin +
                            '<span style="color:#0079FE">杜加杜：</span>主因父母疾病、田宅出脱事，凶。<br><br><hr><br>'
                        );
                    case '离':
                        return (
                            he +
                            '<span style="color:#0079FE">杜加景：</span>主文书、印信阻隔，阳人小口疾病。<br><br><hr><br>'
                        );
                    case '坤':
                        return (
                            menpo +
                            '<span style="color:#0079FE">杜加死：</span>主田宅、文书失落，官司破财小凶。<br><br><hr><br>'
                        );
                    case '兑':
                        return (
                            shouzhi +
                            '<span style="color:#0079FE">杜加惊：</span>主门户内忧疑、惊恐、词讼事。<br><br><hr><br>'
                        );
                    case '中':
                        return menpo + '<br><hr><br>';
                }
            case '景門':
                switch (gong) {
                    case '乾':
                        return (
                            menpo +
                            '<span style="color:#0079FE">景加开：</span>官人升迁，求文印事皆吉。<br><br><hr><br>'
                        );
                    case '坎':
                        return (
                            fanyin +
                            '<span style="color:#0079FE">景加休：</span>主文书遗失，争讼不休。<br><br><hr><br>'
                        );
                    case '艮':
                        return (
                            he +
                            '<span style="color:#0079FE">景加生：</span>主阴人生产大喜，更主求财旺利，行人大吉。<br><br><hr><br>'
                        );
                    case '震':
                        return (
                            yi +
                            '<span style="color:#0079FE">景加伤：</span>主亲眷口舌，败财后平。<br><br><hr><br>'
                        );
                    case '巽':
                        return (
                            yi +
                            '<span style="color:#0079FE">景加杜：</span>主失脱文书，败财后平。<br><br><hr><br>'
                        );
                    case '离':
                        return (
                            fuyin +
                            '<span style="color:#0079FE">景加景：</span>主文状未动，有预先见之意，内有阳人、小口忧患。<br><br><hr><br>'
                        );
                    case '坤':
                        return (
                            he +
                            '<span style="color:#0079FE">景加死：</span>主官讼，争田宅事，多啾唧。<br><br><hr><br>'
                        );
                    case '兑':
                        return (
                            menpo +
                            '<span style="color:#0079FE">景加惊：</span>主官讼，女人小口疾病，凶。<br><br><hr><br>'
                        );
                    case '中':
                        return he + '<br><hr><br>';
                }
            case '死門':
                switch (gong) {
                    case '乾':
                        return (
                            he +
                            '<span style="color:#0079FE">死加开：</span>见贵人求文书、印信事利。<br><br><hr><br>'
                        );
                    case '坎':
                        return (
                            menpo +
                            '<span style="color:#0079FE">死加休：</span>主求财物事不吉，向僧道求方吉。<br><br><hr><br>'
                        );
                    case '艮':
                        return (
                            fanyin +
                            '<span style="color:#0079FE">死加生：</span>主丧事，求财则得，占病死者复生。<br><br><hr><br>'
                        );
                    case '震':
                        return (
                            shouzhi +
                            '<span style="color:#0079FE">死加伤：</span>官司变动遭刑杖凶。<br><br><hr><br>'
                        );
                    case '巽':
                        return (
                            shouzhi +
                            '<span style="color:#0079FE">死加杜：</span>破财，妇人风疾，腹肿。<br><br><hr><br>'
                        );
                    case '离':
                        return (
                            yi +
                            '<span style="color:#0079FE">死加景：</span>因文信、书契、财产事见官，先怒后喜不凶。<br><br><hr><br>'
                        );
                    case '坤':
                        return (
                            fuyin +
                            '<span style="color:#0079FE">死加死：</span>主官事，无气、凶。<br><br><hr><br>'
                        );
                    case '兑':
                        return (
                            he +
                            '<span style="color:#0079FE">死加惊：</span>因官司事不结，忧疑患病凶。<br><br><hr><br>'
                        );
                    case '中':
                        return fanyin + '<br><hr><br>';
                }
            case '驚門':
                switch (gong) {
                    case '乾':
                        return '<span style="color:#0079FE">惊加开：</span>主忧疑，官事惊恐，见喜贵则不凶。<br><br><hr><br>';
                    case '坎':
                        return (
                            he +
                            '<span style="color:#0079FE">惊加休：</span>求财事或口舌事，迟吉。<br><br><hr><br>'
                        );
                    case '艮':
                        return (
                            yi +
                            '<span style="color:#0079FE">惊加生：</span>主因妇人生产或求财而生惊忧，皆吉。<br><br><hr><br>'
                        );
                    case '震':
                        return (
                            fanyin +
                            '<span style="color:#0079FE">惊加伤：</span>主因商议同谋害人事泄，惹讼凶。<br><br><hr><br>'
                        );
                    case '巽':
                        return (
                            menpo +
                            '<span style="color:#0079FE">惊加杜：</span>失脱破财事，惊恐，不凶。<br><br><hr><br>'
                        );
                    case '离':
                        return (
                            shouzhi +
                            '<span style="color:#0079FE">惊加景：</span>主讼词不息，小口疾病，凶。<br><br><hr><br>'
                        );
                    case '坤':
                        return (
                            yi +
                            '<span style="color:#0079FE">惊加死：</span>因田宅中怪异而生是非，凶。<br><br><hr><br>'
                        );
                    case '兑':
                        return (
                            fuyin +
                            '<span style="color:#0079FE">惊加惊：</span>主疾病、忧虑、惊疑、惊恐。<br><br><hr><br>'
                        );
                    case '中':
                        return yi + '<br><hr><br>';
                }
            case '開門':
                switch (gong) {
                    case '乾':
                        return (
                            fuyin +
                            '<span style="color:#0079FE">开加开：</span>主贵人、宝物、财喜、官运、事业皆吉。<br><br><hr><br>'
                        );
                    case '坎':
                        return (
                            he +
                            '<span style="color:#0079FE">开加休：</span>主见贵人、财喜、开张店铺、贸易大利。<br><br><hr><br>'
                        );
                    case '艮':
                        return (
                            yi +
                            '<span style="color:#0079FE">开加生；</span>见贵人，谋望所求遂意。<br><br><hr><br>'
                        );
                    case '震':
                        return (
                            menpo +
                            '<span style="color:#0079FE">开加伤：</span>主变动、更改、移徙等事，皆不吉。<br><br><hr><br>'
                        );
                    case '巽':
                        return (
                            fanyin +
                            '<span style="color:#0079FE">开加杜：</span>主失脱文印、书契等，小凶。<br><br><hr><br>'
                        );
                    case '离':
                        return (
                            shouzhi +
                            '<span style="color:#0079FE">开加景：</span>见贵人，因文书事不利。<br><br><hr><br>'
                        );
                    case '坤':
                        return (
                            yi +
                            '<span style="color:#0079FE">开加死：</span>官司、惊忧、恶事，先忧后喜。<br><br><hr><br>'
                        );
                    case '兑':
                        return '<span style="color:#0079FE">开加惊：</span>词讼、惊疑之事。<br><br><hr><br>';
                    case '中':
                        return yi + '<br><hr><br>';
                }
            case '中門':
                return '';
        }
    }
    function getShenSha(anganzhi, gongwei) {
        const anzhi = anganzhi.charAt(1);
        let result = '神煞：<br>';
        const ri = document.getElementById('ri').innerText;
        shichen = document.getElementById('shi').innerText.charAt(1);
        const guiren = '<span style="color:#0079FE">贵人：</span>主逢凶化吉，有贵人帮扶<br>';
        const deshen = '<span style="color:#0079FE">德神：</span>主财利福德，助吉抑凶<br>';
        const lushen = '<span style="color:#0079FE">禄神：</span>主钱财，福禄，工作，饮食等<br>';
        const waitaohua = '<span style="color:red">外桃花：</span>主明目张胆，在外风流<br>';
        const yima = '<span style="color:#0079FE">驿马：</span>为动迁之神，主出行、变动<br>';
        const huima = '<span style="color:#0079FE">回马：</span>主动身回家，返回原地<br>';
        const posui = '<span style="color:red">破碎：</span>主物破，财损、血光一方分之伤等<br>';
        const jiesha = '<span style="color:red">劫煞：</span>主劫盗伤杀之事也主快速之意。<br>';
        const neitaohua = '<span style="color:red">内桃花：</span>也为暗桃花，主暗地里偷偷摸摸<br>';
        const huagai = '<span style="color:#0079FE">华盖：</span>主人暗昧不明，有屈难伸<br>';
        // 日干神煞
        if (
            shichen == '子' ||
            shichen == '丑' ||
            shichen == '寅' ||
            shichen == '卯' ||
            shichen == '辰' ||
            shichen == '巳'
        ) {
            switch (ri.charAt(0)) {
                case '甲':
                    if (anzhi == '未') {
                        result = result + guiren;
                    }
                    if (anzhi == '寅') {
                        result = result + deshen + lushen;
                    }
                    if (anzhi == '子') {
                        result = result + waitaohua;
                    }
                    break;
                case '乙':
                    if (anzhi == '申') {
                        result = result + guiren;
                    }
                    if (anzhi == '申') {
                        result = result + deshen;
                    }
                    if (anzhi == '卯') {
                        result = result + lushen;
                    }
                    if (anzhi == '子') {
                        result = result + waitaohua;
                    }
                    break;
                case '丙':
                    if (anzhi == '酉') {
                        result = result + guiren;
                    }
                    if (anzhi == '巳') {
                        result = result + deshen + lushen;
                    }
                    if (anzhi == '卯') {
                        result = result + waitaohua;
                    }
                    break;
                case '丁':
                    if (anzhi == '亥') {
                        result = result + guiren;
                    }
                    if (anzhi == '亥') {
                        result = result + deshen;
                    }
                    if (anzhi == '午') {
                        result = result + lushen;
                    }
                    if (anzhi == '卯') {
                        result = result + waitaohua;
                    }
                    break;
                case '戊':
                    if (anzhi == '丑') {
                        result = result + guiren;
                    }
                    if (anzhi == '巳') {
                        result = result + deshen + lushen;
                    }
                    if (anzhi == '卯') {
                        result = result + waitaohua;
                    }
                    break;
                case '己':
                    if (anzhi == '子') {
                        result = result + guiren;
                    }
                    if (anzhi == '寅') {
                        result = result + deshen;
                    }
                    if (anzhi == '午') {
                        result = result + lushen;
                    }
                    if (anzhi == '卯') {
                        result = result + waitaohua;
                    }
                    break;
                case '庚':
                    if (anzhi == '丑') {
                        result = result + guiren;
                    }
                    if (anzhi == '申') {
                        result = result + deshen + lushen;
                    }
                    if (anzhi == '午') {
                        result = result + waitaohua;
                    }
                    break;
                case '辛':
                    if (anzhi == '寅') {
                        result = result + guiren;
                    }
                    if (anzhi == '巳') {
                        result = result + deshen;
                    }
                    if (anzhi == '酉') {
                        result = result + lushen;
                    }
                    if (anzhi == '午') {
                        result = result + waitaohua;
                    }
                    break;
                case '壬':
                    if (anzhi == '卯') {
                        result = result + guiren;
                    }
                    if (anzhi == '亥') {
                        result = result + deshen + lushen;
                    }
                    if (anzhi == '酉') {
                        result = result + waitaohua;
                    }
                    break;
                case '癸':
                    if (anzhi == '巳') {
                        result = result + guiren;
                    }
                    if (anzhi == '巳') {
                        result = result + deshen;
                    }
                    if (anzhi == '子') {
                        result = result + lushen;
                    }
                    if (anzhi == '酉') {
                        result = result + waitaohua;
                    }
                    break;
            }
        } else {
            switch (ri.charAt(0)) {
                case '甲':
                    if (anzhi == '丑') {
                        result = result + guiren;
                    }
                    if (anzhi == '寅') {
                        result = result + deshen + lushen;
                    }
                    if (anzhi == '子') {
                        result = result + waitaohua;
                    }
                    break;
                case '乙':
                    if (anzhi == '子') {
                        result = result + guiren;
                    }
                    if (anzhi == '申') {
                        result = result + deshen;
                    }
                    if (anzhi == '卯') {
                        result = result + lushen;
                    }
                    if (anzhi == '子') {
                        result = result + waitaohua;
                    }
                    break;
                case '丙':
                    if (anzhi == '亥') {
                        result = result + guiren;
                    }
                    if (anzhi == '巳') {
                        result = result + deshen + lushen;
                    }
                    if (anzhi == '卯') {
                        result = result + waitaohua;
                    }
                    break;
                case '丁':
                    if (anzhi == '酉') {
                        result = result + guiren;
                    }
                    if (anzhi == '亥') {
                        result = result + deshen;
                    }
                    if (anzhi == '午') {
                        result = result + lushen;
                    }
                    if (anzhi == '卯') {
                        result = result + waitaohua;
                    }
                    break;
                case '戊':
                    if (anzhi == '丑') {
                        result = result + guiren;
                    }
                    if (anzhi == '巳') {
                        result = result + deshen + lushen;
                    }
                    if (anzhi == '卯') {
                        result = result + waitaohua;
                    }
                    break;
                case '己':
                    if (anzhi == '子') {
                        result = result + guiren;
                    }
                    if (anzhi == '寅') {
                        result = result + deshen;
                    }
                    if (anzhi == '午') {
                        result = result + lushen;
                    }
                    if (anzhi == '卯') {
                        result = result + waitaohua;
                    }
                    break;
                case '庚':
                    if (anzhi == '丑') {
                        result = result + guiren;
                    }
                    if (anzhi == '申') {
                        result = result + deshen + lushen;
                    }
                    if (anzhi == '午') {
                        result = result + waitaohua;
                    }
                    break;
                case '辛':
                    if (anzhi == '寅') {
                        result = result + guiren;
                    }
                    if (anzhi == '巳') {
                        result = result + deshen;
                    }
                    if (anzhi == '酉') {
                        result = result + lushen;
                    }
                    if (anzhi == '午') {
                        result = result + waitaohua;
                    }
                    break;
                case '壬':
                    if (anzhi == '卯') {
                        result = result + guiren;
                    }
                    if (anzhi == '亥') {
                        result = result + deshen + lushen;
                    }
                    if (anzhi == '酉') {
                        result = result + waitaohua;
                    }
                    break;
                case '癸':
                    if (anzhi == '巳') {
                        result = result + guiren;
                    }
                    if (anzhi == '巳') {
                        result = result + deshen;
                    }
                    if (anzhi == '子') {
                        result = result + lushen;
                    }
                    if (anzhi == '酉') {
                        result = result + waitaohua;
                    }
                    break;
            }
        }
        // 日支神煞
        switch (ri.charAt(1)) {
            case '子':
                if (anzhi == '寅') {
                    result = result + yima;
                }
                if (anzhi == '申') {
                    result = result + huima;
                }
                if (anzhi == '巳') {
                    result = result + posui + jiesha;
                }
                if (anzhi == '酉') {
                    result = result + neitaohua;
                }
                if (anzhi == '辰') {
                    result = result + huagai;
                }
                break;
            case '丑':
                if (anzhi == '亥') {
                    result = result + yima;
                }
                if (anzhi == '巳') {
                    result = result + huima;
                }
                if (anzhi == '丑') {
                    result = result + posui;
                }
                if (anzhi == '寅') {
                    result = result + jiesha;
                }
                if (anzhi == '午') {
                    result = result + neitaohua;
                }
                if (anzhi == '丑') {
                    result = result + huagai;
                }
                break;
            case '寅':
                if (anzhi == '申') {
                    result = result + yima;
                }
                if (anzhi == '寅') {
                    result = result + huima;
                }
                if (anzhi == '酉') {
                    result = result + posui;
                }
                if (anzhi == '亥') {
                    result = result + jiesha;
                }
                if (anzhi == '卯') {
                    result = result + neitaohua;
                }
                if (anzhi == '戌') {
                    result = result + huagai;
                }
                break;
            case '卯':
                if (anzhi == '巳') {
                    result = result + yima;
                }
                if (anzhi == '亥') {
                    result = result + huima;
                }
                if (anzhi == '巳') {
                    result = result + posui;
                }
                if (anzhi == '申') {
                    result = result + jiesha;
                }
                if (anzhi == '子') {
                    result = result + neitaohua;
                }
                if (anzhi == '未') {
                    result = result + huagai;
                }
                break;
            case '辰':
                if (anzhi == '寅') {
                    result = result + yima;
                }
                if (anzhi == '申') {
                    result = result + huima;
                }
                if (anzhi == '丑') {
                    result = result + posui;
                }
                if (anzhi == '巳') {
                    result = result + jiesha;
                }
                if (anzhi == '酉') {
                    result = result + neitaohua;
                }
                if (anzhi == '辰') {
                    result = result + huagai;
                }
                break;
            case '巳':
                if (anzhi == '亥') {
                    result = result + yima;
                }
                if (anzhi == '巳') {
                    result = result + huima;
                }
                if (anzhi == '酉') {
                    result = result + posui;
                }
                if (anzhi == '寅') {
                    result = result + jiesha;
                }
                if (anzhi == '午') {
                    result = result + neitaohua;
                }
                if (anzhi == '丑') {
                    result = result + huagai;
                }
                break;
            case '午':
                if (anzhi == '申') {
                    result = result + yima;
                }
                if (anzhi == '寅') {
                    result = result + huima;
                }
                if (anzhi == '巳') {
                    result = result + posui;
                }
                if (anzhi == '亥') {
                    result = result + jiesha;
                }
                if (anzhi == '卯') {
                    result = result + neitaohua;
                }
                if (anzhi == '戌') {
                    result = result + huagai;
                }
                break;
            case '未':
                if (anzhi == '巳') {
                    result = result + yima;
                }
                if (anzhi == '亥') {
                    result = result + huima;
                }
                if (anzhi == '丑') {
                    result = result + posui;
                }
                if (anzhi == '申') {
                    result = result + jiesha;
                }
                if (anzhi == '子') {
                    result = result + neitaohua;
                }
                if (anzhi == '未') {
                    result = result + huagai;
                }
                break;
            case '申':
                if (anzhi == '寅') {
                    result = result + yima;
                }
                if (anzhi == '申') {
                    result = result + huima;
                }
                if (anzhi == '酉') {
                    result = result + posui;
                }
                if (anzhi == '巳') {
                    result = result + jiesha;
                }
                if (anzhi == '酉') {
                    result = result + neitaohua;
                }
                if (anzhi == '辰') {
                    result = result + huagai;
                }
                break;
            case '酉':
                if (anzhi == '亥') {
                    result = result + yima;
                }
                if (anzhi == '巳') {
                    result = result + huima + posui;
                }
                if (anzhi == '寅') {
                    result = result + jiesha;
                }
                if (anzhi == '午') {
                    result = result + neitaohua;
                }
                if (anzhi == '丑') {
                    result = result + huagai;
                }
                break;
            case '戌':
                if (anzhi == '申') {
                    result = result + yima;
                }
                if (anzhi == '寅') {
                    result = result + huima;
                }
                if (anzhi == '丑') {
                    result = result + posui;
                }
                if (anzhi == '亥') {
                    result = result + jiesha;
                }
                if (anzhi == '卯') {
                    result = result + neitaohua;
                }
                if (anzhi == '戌') {
                    result = result + huagai;
                }
                break;
            case '亥':
                if (anzhi == '巳') {
                    result = result + yima;
                }
                if (anzhi == '亥') {
                    result = result + huima;
                }
                if (anzhi == '酉') {
                    result = result + posui;
                }
                if (anzhi == '申') {
                    result = result + jiesha;
                }
                if (anzhi == '子') {
                    result = result + neitaohua;
                }
                if (anzhi == '未') {
                    result = result + huagai;
                }
                break;
        }
        // 月建神煞
        const yuede = '<span style="color:#0079FE">月德：</span>主消除忧祸，逢凶化吉，化险为夷<br>';
        const tianma =
            '<span style="color:#0079FE">天马：</span>主迁动、出行之事。廷求事迅速，游行皆利，逃避远去，走失难寻，其余皆利<br>';
        const tianyi = '<span style="color:#0079FE">天医：</span>主与医药有关，利求医<br>';
        const yueyan = '<span style="color:red">月厌：</span>主鬼神相扰，被人诅咒，不利婚姻<br>';
        const shengqi =
            '<span style="color:#0079FE">生气：</span>主难中有救，绝处逢生，所为皆美<br>';
        const siqi = '<span style="color:red">死气：</span>主死表之事，病讼、孕产皆忌<br>';
        const sishen = '<span style="color:red">死神：</span>主死丧疾病，占病凶<br>';
        const tiangui = '<span style="color:red">天鬼：</span>主流行性疾病，家有怪异<br>';
        const xuezhi = '<span style="color:red">血支：</span>主血光血病，产孕疾病忌见<br>';
        const chengshen = '<span style="color:#0079FE">成神：</span>主成合事体。所课得遂<br>';
        const xinshen = '<span style="color:#0079FE">信神：</span>主文书、信息<br>';
        switch (document.getElementById('yue').innerText.charAt(1)) {
            case '子':
                if (gongwei == '巽') {
                    result =
                        result +
                        '<span style="color:#0079FE">天德：</span>主消除忧祸，逢凶化吉，化险为夷<br>';
                }
                if (anzhi == '亥') {
                    result = result + yuede;
                }
                if (anzhi == '寅') {
                    result = result + tianma;
                }
                if (anzhi == '寅') {
                    result = result + tianyi;
                }
                if (anzhi == '子') {
                    result = result + yueyan;
                }
                if (anzhi == '戌') {
                    result = result + shengqi;
                }
                if (anzhi == '辰') {
                    result = result + siqi;
                }
                if (anzhi == '卯') {
                    result = result + sishen;
                }
                if (anzhi == '卯') {
                    result = result + tiangui;
                }
                if (anzhi == '亥') {
                    result = result + xuezhi;
                }
                if (anzhi == '亥') {
                    result = result + chengshen;
                }
                if (anzhi == '申') {
                    result = result + xinshen;
                }
                break;
            case '丑':
                if (gongwei == '兑') {
                    result =
                        result +
                        '<span style="color:#0079FE">天德：</span>主消除忧祸，逢凶化吉，化险为夷<br>';
                }
                if (anzhi == '申') {
                    result = result + yuede;
                }
                if (anzhi == '辰') {
                    result = result + tianma;
                }
                if (anzhi == '卯') {
                    result = result + tianyi;
                }
                if (anzhi == '亥') {
                    result = result + yueyan;
                }
                if (anzhi == '亥') {
                    result = result + shengqi;
                }
                if (anzhi == '巳') {
                    result = result + siqi;
                }
                if (anzhi == '辰') {
                    result = result + sishen;
                }
                if (anzhi == '子') {
                    result = result + tiangui;
                }
                if (anzhi == '子') {
                    result = result + xuezhi;
                }
                if (anzhi == '寅') {
                    result = result + chengshen;
                }
                if (anzhi == '酉') {
                    result = result + xinshen;
                }
                break;
            case '寅':
                if (gongwei == '离') {
                    result =
                        result +
                        '<span style="color:#0079FE">天德：</span>主消除忧祸，逢凶化吉，化险为夷<br>';
                }
                if (anzhi == '巳') {
                    result = result + yuede;
                }
                if (anzhi == '午') {
                    result = result + tianma;
                }
                if (anzhi == '辰') {
                    result = result + tianyi;
                }
                if (anzhi == '戌') {
                    result = result + yueyan;
                }
                if (anzhi == '子') {
                    result = result + shengqi;
                }
                if (anzhi == '午') {
                    result = result + siqi;
                }
                if (anzhi == '巳') {
                    result = result + sishen;
                }
                if (anzhi == '酉') {
                    result = result + tiangui;
                }
                if (anzhi == '丑') {
                    result = result + xuezhi;
                }
                if (anzhi == '巳') {
                    result = result + chengshen;
                }
                if (anzhi == '戌') {
                    result = result + xinshen;
                }
                break;
            case '卯':
                if (gongwei == '坤') {
                    result =
                        result +
                        '<span style="color:#0079FE">天德：</span>主消除忧祸，逢凶化吉，化险为夷<br>';
                }
                if (anzhi == '寅') {
                    result = result + yuede;
                }
                if (anzhi == '申') {
                    result = result + tianma;
                }
                if (anzhi == '巳') {
                    result = result + tianyi;
                }
                if (anzhi == '酉') {
                    result = result + yueyan;
                }
                if (anzhi == '丑') {
                    result = result + shengqi;
                }
                if (anzhi == '未') {
                    result = result + siqi;
                }
                if (anzhi == '午') {
                    result = result + sishen;
                }
                if (anzhi == '午') {
                    result = result + tiangui;
                }
                if (anzhi == '寅') {
                    result = result + xuezhi;
                }
                if (anzhi == '申') {
                    result = result + chengshen;
                }
                if (anzhi == '亥') {
                    result = result + xinshen;
                }
                break;
            case '辰':
                if (gongwei == '坎') {
                    result =
                        result +
                        '<span style="color:#0079FE">天德：</span>主消除忧祸，逢凶化吉，化险为夷<br>';
                }
                if (anzhi == '亥') {
                    result = result + yuede;
                }
                if (anzhi == '戌') {
                    result = result + tianma;
                }
                if (anzhi == '午') {
                    result = result + tianyi;
                }
                if (anzhi == '申') {
                    result = result + yueyan;
                }
                if (anzhi == '寅') {
                    result = result + shengqi;
                }
                if (anzhi == '申') {
                    result = result + siqi;
                }
                if (anzhi == '未') {
                    result = result + sishen;
                }
                if (anzhi == '卯') {
                    result = result + tiangui;
                }
                if (anzhi == '卯') {
                    result = result + xuezhi;
                }
                if (anzhi == '亥') {
                    result = result + chengshen;
                }
                if (anzhi == '子') {
                    result = result + xinshen;
                }
                break;
            case '巳':
                if (gongwei == '兑') {
                    result =
                        result +
                        '<span style="color:#0079FE">天德：</span>主消除忧祸，逢凶化吉，化险为夷<br>';
                }
                if (anzhi == '申') {
                    result = result + yuede;
                }
                if (anzhi == '子') {
                    result = result + tianma;
                }
                if (anzhi == '未') {
                    result = result + tianyi;
                }
                if (anzhi == '未') {
                    result = result + yueyan;
                }
                if (anzhi == '卯') {
                    result = result + shengqi;
                }
                if (anzhi == '酉') {
                    result = result + siqi;
                }
                if (anzhi == '申') {
                    result = result + sishen;
                }
                if (anzhi == '子') {
                    result = result + tiangui;
                }
                if (anzhi == '辰') {
                    result = result + xuezhi;
                }
                if (anzhi == '寅') {
                    result = result + chengshen;
                }
                if (anzhi == '丑') {
                    result = result + xinshen;
                }
                break;
            case '午':
                if (gongwei == '乾') {
                    result =
                        result +
                        '<span style="color:#0079FE">天德：</span>主消除忧祸，逢凶化吉，化险为夷<br>';
                }
                if (anzhi == '巳') {
                    result = result + yuede;
                }
                if (anzhi == '寅') {
                    result = result + tianma;
                }
                if (anzhi == '申') {
                    result = result + tianyi;
                }
                if (anzhi == '午') {
                    result = result + yueyan;
                }
                if (anzhi == '辰') {
                    result = result + shengqi;
                }
                if (anzhi == '戌') {
                    result = result + siqi;
                }
                if (anzhi == '酉') {
                    result = result + sishen;
                }
                if (anzhi == '酉') {
                    result = result + tiangui;
                }
                if (anzhi == '巳') {
                    result = result + xuezhi;
                }
                if (anzhi == '巳') {
                    result = result + chengshen;
                }
                if (anzhi == '寅') {
                    result = result + xinshen;
                }
                break;
            case '未':
                if (gongwei == '震') {
                    result =
                        result +
                        '<span style="color:#0079FE">天德：</span>主消除忧祸，逢凶化吉，化险为夷<br>';
                }
                if (anzhi == '寅') {
                    result = result + yuede;
                }
                if (anzhi == '辰') {
                    result = result + tianma;
                }
                if (anzhi == '酉') {
                    result = result + tianyi;
                }
                if (anzhi == '巳') {
                    result = result + yueyan;
                }
                if (anzhi == '巳') {
                    result = result + shengqi;
                }
                if (anzhi == '亥') {
                    result = result + siqi;
                }
                if (anzhi == '戌') {
                    result = result + sishen;
                }
                if (anzhi == '午') {
                    result = result + tiangui;
                }
                if (anzhi == '午') {
                    result = result + xuezhi;
                }
                if (anzhi == '申') {
                    result = result + chengshen;
                }
                if (anzhi == '卯') {
                    result = result + xinshen;
                }
                break;
            case '申':
                if (gongwei == '坎') {
                    result =
                        result +
                        '<span style="color:#0079FE">天德：</span>主消除忧祸，逢凶化吉，化险为夷<br>';
                }
                if (anzhi == '亥') {
                    result = result + yuede;
                }
                if (anzhi == '午') {
                    result = result + tianma;
                }
                if (anzhi == '戌') {
                    result = result + tianyi;
                }
                if (anzhi == '辰') {
                    result = result + yueyan;
                }
                if (anzhi == '午') {
                    result = result + shengqi;
                }
                if (anzhi == '子') {
                    result = result + siqi;
                }
                if (anzhi == '亥') {
                    result = result + sishen;
                }
                if (anzhi == '卯') {
                    result = result + tiangui;
                }
                if (anzhi == '未') {
                    result = result + xuezhi;
                }
                if (anzhi == '亥') {
                    result = result + chengshen;
                }
                if (anzhi == '辰') {
                    result = result + xinshen;
                }
                break;
            case '酉':
                if (gongwei == '艮') {
                    result =
                        result +
                        '<span style="color:#0079FE">天德：</span>主消除忧祸，逢凶化吉，化险为夷<br>';
                }
                if (anzhi == '申') {
                    result = result + yuede;
                }
                if (anzhi == '申') {
                    result = result + tianma;
                }
                if (anzhi == '亥') {
                    result = result + tianyi;
                }
                if (anzhi == '卯') {
                    result = result + yueyan;
                }
                if (anzhi == '未') {
                    result = result + shengqi;
                }
                if (anzhi == '丑') {
                    result = result + siqi;
                }
                if (anzhi == '子') {
                    result = result + sishen;
                }
                if (anzhi == '子') {
                    result = result + tiangui;
                }
                if (anzhi == '申') {
                    result = result + xuezhi;
                }
                if (anzhi == '寅') {
                    result = result + chengshen;
                }
                if (anzhi == '巳') {
                    result = result + xinshen;
                }
                break;
            case '戌':
                if (gongwei == '离') {
                    result =
                        result +
                        '<span style="color:#0079FE">天德：</span>主消除忧祸，逢凶化吉，化险为夷<br>';
                }
                if (anzhi == '巳') {
                    result = result + yuede;
                }
                if (anzhi == '戌') {
                    result = result + tianma;
                }
                if (anzhi == '子') {
                    result = result + tianyi;
                }
                if (anzhi == '寅') {
                    result = result + yueyan;
                }
                if (anzhi == '申') {
                    result = result + shengqi;
                }
                if (anzhi == '寅') {
                    result = result + siqi;
                }
                if (anzhi == '丑') {
                    result = result + sishen;
                }
                if (anzhi == '酉') {
                    result = result + tiangui;
                }
                if (anzhi == '酉') {
                    result = result + xuezhi;
                }
                if (anzhi == '巳') {
                    result = result + chengshen;
                }
                if (anzhi == '午') {
                    result = result + xinshen;
                }
                break;
            case '亥':
                if (gongwei == '震') {
                    result =
                        result +
                        '<span style="color:#0079FE">天德：</span>主消除忧祸，逢凶化吉，化险为夷<br>';
                }
                if (anzhi == '寅') {
                    result = result + yuede;
                }
                if (anzhi == '子') {
                    result = result + tianma;
                }
                if (anzhi == '丑') {
                    result = result + tianyi;
                }
                if (anzhi == '丑') {
                    result = result + yueyan;
                }
                if (anzhi == '酉') {
                    result = result + shengqi;
                }
                if (anzhi == '卯') {
                    result = result + siqi;
                }
                if (anzhi == '寅') {
                    result = result + sishen;
                }
                if (anzhi == '午') {
                    result = result + tiangui;
                }
                if (anzhi == '戌') {
                    result = result + xuezhi;
                }
                if (anzhi == '申') {
                    result = result + chengshen;
                }
                if (anzhi == '未') {
                    result = result + xinshen;
                }
                break;
        }
        // 驾前神煞
        const taiyang = '<span style="color:#0079FE">太阳：</span>主光明、希望，往好处发展<br>';
        const sangmen = '<span style="color:red">丧门：</span>主死丧、孝服、哭泣<br>';
        const taiyin = '<span style="color:#0079FE">太阴：</span>主和合、隐私、感情事<br>';
        const guanfu = '<span style="color:red">官符：</span>主口舌官讼，小人陷害<br>';
        const sifu = '<span style="color:red">死符：</span>主灾病、死亡、破耗<br>';
        const suipo = '<span style="color:red">岁破：</span>主大的破损、消耗，不利母亲<br>';
        const longde = '<span style="color:#0079FE">龙德：</span>主恩庆，散病讼<br>';
        const baihu = '<span style="color:red">白虎：</span>主哭泣、血光、死亡之事，不利小儿，<br>';
        const fude = '<span style="color:#0079FE">福德：</span>主福气财利，有阴神庇佑<br>';
        const diaoke = '<span style="color:red">吊客：</span>主惊忧、阴私、灾思之事，占病凶<br>';
        const bingfu = '<span style="color:red">病符：</span>主疾病、衰弱，也主陈年日事<br>';
        switch (document.getElementById('nian').innerText.charAt(1)) {
            case '子':
                if (anzhi == '丑') {
                    result = result + taiyang;
                }
                if (anzhi == '寅') {
                    result = result + sangmen;
                }
                if (anzhi == '卯') {
                    result = result + taiyin;
                }
                if (anzhi == '辰') {
                    result = result + guanfu;
                }
                if (anzhi == '巳') {
                    result = result + sifu;
                }
                if (anzhi == '午') {
                    result = result + suipo;
                }
                if (anzhi == '未') {
                    result = result + longde;
                }
                if (anzhi == '申') {
                    result = result + baihu;
                }
                if (anzhi == '酉') {
                    result = result + fude;
                }
                if (anzhi == '戌') {
                    result = result + diaoke;
                }
                if (anzhi == '亥') {
                    result = result + bingfu;
                }
                break;
            case '丑':
                if (anzhi == '寅') {
                    result = result + taiyang;
                }
                if (anzhi == '卯') {
                    result = result + sangmen;
                }
                if (anzhi == '辰') {
                    result = result + taiyin;
                }
                if (anzhi == '巳') {
                    result = result + guanfu;
                }
                if (anzhi == '午') {
                    result = result + sifu;
                }
                if (anzhi == '未') {
                    result = result + suipo;
                }
                if (anzhi == '申') {
                    result = result + longde;
                }
                if (anzhi == '酉') {
                    result = result + baihu;
                }
                if (anzhi == '戌') {
                    result = result + fude;
                }
                if (anzhi == '亥') {
                    result = result + diaoke;
                }
                if (anzhi == '子') {
                    result = result + bingfu;
                }
                break;
            case '寅':
                if (anzhi == '卯') {
                    result = result + taiyang;
                }
                if (anzhi == '辰') {
                    result = result + sangmen;
                }
                if (anzhi == '巳') {
                    result = result + taiyin;
                }
                if (anzhi == '午') {
                    result = result + guanfu;
                }
                if (anzhi == '未') {
                    result = result + sifu;
                }
                if (anzhi == '申') {
                    result = result + suipo;
                }
                if (anzhi == '酉') {
                    result = result + longde;
                }
                if (anzhi == '戌') {
                    result = result + baihu;
                }
                if (anzhi == '亥') {
                    result = result + fude;
                }
                if (anzhi == '子') {
                    result = result + diaoke;
                }
                if (anzhi == '丑') {
                    result = result + bingfu;
                }
                break;
            case '卯':
                if (anzhi == '辰') {
                    result = result + taiyang;
                }
                if (anzhi == '巳') {
                    result = result + sangmen;
                }
                if (anzhi == '午') {
                    result = result + taiyin;
                }
                if (anzhi == '未') {
                    result = result + guanfu;
                }
                if (anzhi == '申') {
                    result = result + sifu;
                }
                if (anzhi == '酉') {
                    result = result + suipo;
                }
                if (anzhi == '戌') {
                    result = result + longde;
                }
                if (anzhi == '亥') {
                    result = result + baihu;
                }
                if (anzhi == '子') {
                    result = result + fude;
                }
                if (anzhi == '丑') {
                    result = result + diaoke;
                }
                if (anzhi == '寅') {
                    result = result + bingfu;
                }
                break;
            case '辰':
                if (anzhi == '巳') {
                    result = result + taiyang;
                }
                if (anzhi == '午') {
                    result = result + sangmen;
                }
                if (anzhi == '未') {
                    result = result + taiyin;
                }
                if (anzhi == '申') {
                    result = result + guanfu;
                }
                if (anzhi == '酉') {
                    result = result + sifu;
                }
                if (anzhi == '戌') {
                    result = result + suipo;
                }
                if (anzhi == '亥') {
                    result = result + longde;
                }
                if (anzhi == '子') {
                    result = result + baihu;
                }
                if (anzhi == '丑') {
                    result = result + fude;
                }
                if (anzhi == '寅') {
                    result = result + diaoke;
                }
                if (anzhi == '卯') {
                    result = result + bingfu;
                }
                break;
            case '巳':
                if (anzhi == '午') {
                    result = result + taiyang;
                }
                if (anzhi == '未') {
                    result = result + sangmen;
                }
                if (anzhi == '申') {
                    result = result + taiyin;
                }
                if (anzhi == '酉') {
                    result = result + guanfu;
                }
                if (anzhi == '戌') {
                    result = result + sifu;
                }
                if (anzhi == '亥') {
                    result = result + suipo;
                }
                if (anzhi == '子') {
                    result = result + longde;
                }
                if (anzhi == '丑') {
                    result = result + baihu;
                }
                if (anzhi == '寅') {
                    result = result + fude;
                }
                if (anzhi == '卯') {
                    result = result + diaoke;
                }
                if (anzhi == '辰') {
                    result = result + bingfu;
                }
                break;
            case '午':
                if (anzhi == '未') {
                    result = result + taiyang;
                }
                if (anzhi == '申') {
                    result = result + sangmen;
                }
                if (anzhi == '酉') {
                    result = result + taiyin;
                }
                if (anzhi == '戌') {
                    result = result + guanfu;
                }
                if (anzhi == '亥') {
                    result = result + sifu;
                }
                if (anzhi == '子') {
                    result = result + suipo;
                }
                if (anzhi == '丑') {
                    result = result + longde;
                }
                if (anzhi == '寅') {
                    result = result + baihu;
                }
                if (anzhi == '卯') {
                    result = result + fude;
                }
                if (anzhi == '辰') {
                    result = result + diaoke;
                }
                if (anzhi == '巳') {
                    result = result + bingfu;
                }
                break;
            case '未':
                if (anzhi == '申') {
                    result = result + taiyang;
                }
                if (anzhi == '酉') {
                    result = result + sangmen;
                }
                if (anzhi == '戌') {
                    result = result + taiyin;
                }
                if (anzhi == '亥') {
                    result = result + guanfu;
                }
                if (anzhi == '子') {
                    result = result + sifu;
                }
                if (anzhi == '丑') {
                    result = result + suipo;
                }
                if (anzhi == '寅') {
                    result = result + longde;
                }
                if (anzhi == '卯') {
                    result = result + baihu;
                }
                if (anzhi == '辰') {
                    result = result + fude;
                }
                if (anzhi == '巳') {
                    result = result + diaoke;
                }
                if (anzhi == '午') {
                    result = result + bingfu;
                }
                break;
            case '申':
                if (anzhi == '酉') {
                    result = result + taiyang;
                }
                if (anzhi == '戌') {
                    result = result + sangmen;
                }
                if (anzhi == '亥') {
                    result = result + taiyin;
                }
                if (anzhi == '子') {
                    result = result + guanfu;
                }
                if (anzhi == '丑') {
                    result = result + sifu;
                }
                if (anzhi == '寅') {
                    result = result + suipo;
                }
                if (anzhi == '卯') {
                    result = result + longde;
                }
                if (anzhi == '辰') {
                    result = result + baihu;
                }
                if (anzhi == '巳') {
                    result = result + fude;
                }
                if (anzhi == '午') {
                    result = result + diaoke;
                }
                if (anzhi == '未') {
                    result = result + bingfu;
                }
                break;
            case '酉':
                if (anzhi == '戌') {
                    result = result + taiyang;
                }
                if (anzhi == '亥') {
                    result = result + sangmen;
                }
                if (anzhi == '子') {
                    result = result + taiyin;
                }
                if (anzhi == '丑') {
                    result = result + guanfu;
                }
                if (anzhi == '寅') {
                    result = result + sifu;
                }
                if (anzhi == '卯') {
                    result = result + suipo;
                }
                if (anzhi == '辰') {
                    result = result + longde;
                }
                if (anzhi == '巳') {
                    result = result + baihu;
                }
                if (anzhi == '午') {
                    result = result + fude;
                }
                if (anzhi == '未') {
                    result = result + diaoke;
                }
                if (anzhi == '申') {
                    result = result + bingfu;
                }
                break;
            case '戌':
                if (anzhi == '亥') {
                    result = result + taiyang;
                }
                if (anzhi == '子') {
                    result = result + sangmen;
                }
                if (anzhi == '丑') {
                    result = result + taiyin;
                }
                if (anzhi == '寅') {
                    result = result + guanfu;
                }
                if (anzhi == '卯') {
                    result = result + sifu;
                }
                if (anzhi == '辰') {
                    result = result + suipo;
                }
                if (anzhi == '巳') {
                    result = result + longde;
                }
                if (anzhi == '巳') {
                    result = result + baihu;
                }
                if (anzhi == '未') {
                    result = result + fude;
                }
                if (anzhi == '申') {
                    result = result + diaoke;
                }
                if (anzhi == '酉') {
                    result = result + bingfu;
                }
                break;
            case '亥':
                if (anzhi == '子') {
                    result = result + taiyang;
                }
                if (anzhi == '丑') {
                    result = result + sangmen;
                }
                if (anzhi == '寅') {
                    result = result + taiyin;
                }
                if (anzhi == '卯') {
                    result = result + guanfu;
                }
                if (anzhi == '辰') {
                    result = result + sifu;
                }
                if (anzhi == '巳') {
                    result = result + suipo;
                }
                if (anzhi == '午') {
                    result = result + longde;
                }
                if (anzhi == '未') {
                    result = result + baihu;
                }
                if (anzhi == '申') {
                    result = result + fude;
                }
                if (anzhi == '酉') {
                    result = result + diaoke;
                }
                if (anzhi == '戌') {
                    result = result + bingfu;
                }
                break;
        }
        // 季煞
        const tianxi = '<span style="color:#0079FE">天喜：</span>主喜庆，恩泽，迁官，财喜等<br>';
        const tianshe = '<span style="color:#0079FE">天赦：</span>主消灾解难，可以逢凶化吉<br>';
        if (
            document.getElementById('yue').innerText.charAt(1) == '寅' ||
            document.getElementById('yue').innerText.charAt(1) == '卯' ||
            document.getElementById('yue').innerText.charAt(1) == '辰'
        ) {
            if (anzhi == '戌') {
                result = result + tianxi;
            }
            if (anganzhi == '戊寅') {
                result = result + tianshe;
            }
        } else if (
            document.getElementById('yue').innerText.charAt(1) == '巳' ||
            document.getElementById('yue').innerText.charAt(1) == '午' ||
            document.getElementById('yue').innerText.charAt(1) == '未'
        ) {
            if (anzhi == '丑') {
                result = result + tianxi;
            }
            if (anganzhi == '甲午') {
                result = result + tianshe;
            }
        } else if (
            document.getElementById('yue').innerText.charAt(1) == '申' ||
            document.getElementById('yue').innerText.charAt(1) == '酉' ||
            document.getElementById('yue').innerText.charAt(1) == '戌'
        ) {
            if (anzhi == '辰') {
                result = result + tianxi;
            }
            if (anganzhi == '戊申') {
                result = result + tianshe;
            }
        } else if (
            document.getElementById('yue').innerText.charAt(1) == '亥' ||
            document.getElementById('yue').innerText.charAt(1) == '子' ||
            document.getElementById('yue').innerText.charAt(1) == '丑'
        ) {
            if (anzhi == '未') {
                result = result + tianxi;
            }
            if (anganzhi == '甲子') {
                result = result + tianshe;
            }
        }
        if (result == '神煞：<br>') {
            return '';
        } else {
            return result;
        }
    }

    // overlay listener function
    function createGongweiOverlayListener(overlay, index) {
        return function handleClick() {
            document.getElementById('paipan-jigong-info').classList.add('hidden');
            whichGong = index;

            const tianpanshenValue =
                document.querySelectorAll('[data-tianpanshen]')[index].innerText;
            const dipanshenValue = document.querySelectorAll('[data-dipanshen]')[index].innerText;

            if (tianpanshenValue === '值符' && dipanshenValue === '值符') {
                handleCommonCase(true, true, index);
            } else if (tianpanshenValue === '值符') {
                handleCommonCase(true, false, index);
            } else if (dipanshenValue === '值符') {
                handleCommonCase(false, true, index);
            } else {
                handleCommonCase(false, false, index);
            }
        };

        function handleCommonCase(hasTianpanshen, hasDipanshen, index) {
            const jiamuInfoElement = document.getElementById('paipan-jiamu-info');
            const gongweiInfoElement = document.getElementById('paipan-gongwei-info');

            jiamuInfoElement.classList.remove('hidden');
            gongweiInfoElement.classList.remove('rounded-bl-[15px]');
            gongweiInfoElement.classList.add('gongwei-info-on-bottom');

            getCurrentGongweiInfo(index);
            changeFocusItem(
                'geju',
                hasTianpanshen,
                hasDipanshen,
                document.querySelectorAll('[data-tianpanshen]')[index].innerText,
                document.querySelectorAll('[data-xing]')[index].innerText,
                document.querySelectorAll('[data-men]')[index].innerText,
            );

            openInfoWindow();
        }
    }
    return storedFeipanListeners;
}
