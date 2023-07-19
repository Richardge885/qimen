function paiZhuanPan(jieqi, rizhu, shizhu, number = 0, method = 'none') {
    const liushijiazi = [
        '甲子',
        '乙丑',
        '丙寅',
        '丁卯',
        '戊辰',
        '己巳',
        '庚午',
        '辛未',
        '壬申',
        '癸酉',
        '甲戌',
        '乙亥',
        '丙子',
        '丁丑',
        '戊寅',
        '己卯',
        '庚辰',
        '辛巳',
        '壬午',
        '癸未',
        '甲申',
        '乙酉',
        '丙戌',
        '丁亥',
        '戊子',
        '己丑',
        '庚寅',
        '辛卯',
        '壬辰',
        '癸巳',
        '甲午',
        '乙未',
        '丙申',
        '丁酉',
        '戊戌',
        '己亥',
        '庚子',
        '辛丑',
        '壬寅',
        '癸卯',
        '甲辰',
        '乙巳',
        '丙午',
        '丁未',
        '戊申',
        '己酉',
        '庚戌',
        '辛亥',
        '壬子',
        '癸丑',
        '甲寅',
        '乙卯',
        '丙辰',
        '丁巳',
        '戊午',
        '己未',
        '庚申',
        '辛酉',
        '壬戌',
        '癸亥',
    ];
    const jieqiYuanShu = {
        立春: { 上: 8, 中: 5, 下: 2 },
        雨水: { 上: 9, 中: 6, 下: 3 },
        惊蛰: { 上: 1, 中: 7, 下: 4 },
        春分: { 上: 3, 中: 9, 下: 6 },
        清明: { 上: 4, 中: 1, 下: 7 },
        谷雨: { 上: 5, 中: 2, 下: 8 },
        立夏: { 上: 4, 中: 1, 下: 7 },
        小满: { 上: 5, 中: 2, 下: 8 },
        芒种: { 上: 6, 中: 3, 下: 9 },
        夏至: { 上: 9, 中: 3, 下: 6 },
        小暑: { 上: 8, 中: 2, 下: 5 },
        大暑: { 上: 7, 中: 1, 下: 4 },
        立秋: { 上: 2, 中: 5, 下: 8 },
        处暑: { 上: 1, 中: 4, 下: 7 },
        白露: { 上: 9, 中: 3, 下: 6 },
        秋分: { 上: 7, 中: 1, 下: 4 },
        寒露: { 上: 6, 中: 9, 下: 3 },
        霜降: { 上: 5, 中: 8, 下: 2 },
        立冬: { 上: 6, 中: 9, 下: 3 },
        小雪: { 上: 5, 中: 8, 下: 2 },
        大雪: { 上: 4, 中: 1, 下: 7 },
        冬至: { 上: 1, 中: 7, 下: 4 },
        小寒: { 上: 2, 中: 8, 下: 5 },
        大寒: { 上: 3, 中: 9, 下: 6 },
    };

    if (method == 'none' || method != 'jushu') {
        const dun = dingYinYangDun(jieqi);
        const jushu = dingJuShu(jieqi, rizhu, liushijiazi, jieqiYuanShu);
        const dipangan = paiDiPanGan(dun, jushu);
        const xunshou = zhaoXunShou(shizhu, liushijiazi);
        const fushi = dingfushi(dipangan, xunshou);
        const anganzhi = paiAnGanZhi(xunshou);
        const jiuxing = paiJiuXing(fushi.zhifu);
        // const tianpangan = paiTianPanGan(xunshou);
        const bamen = paiBaMen(fushi.zhishi);
        const kongwang = dingKongWang(xunshou);
        const maxing = dingMaXing(shizhu);
        // const wangshuai = dingWangShuai(jieqi);
        return {
            dun: dun,
            jushu: jushu,
            dipangan: dipangan,
            xunshou: xunshou,
            fushi: fushi,
            anganzhi: anganzhi,
            jiuxing: jiuxing,
            // tianpangan: tianpangan,
            bamen: bamen,
            kongwang: kongwang,
            maxing: maxing,
            // wangshuai: wangshuai,
            liushijiazi: liushijiazi,
        };
    } else {
        const dun = dingYinYangDun(jieqi);
        let jushu;
        if (number == 9) {
            jushu = 9;
        } else if (number == 0) {
            jushu = dingJuShu(jieqi, rizhu, liushijiazi, jieqiYuanShu);
        } else {
            if (number % 9 == 0) {
                jushu = 9;
            } else {
                jushu = number % 9;
            }
        }
        const dipangan = paiDiPanGan(dun, jushu);
        const xunshou = zhaoXunShou(shizhu, liushijiazi);
        const fushi = dingfushi(dipangan, xunshou);
        const anganzhi = paiAnGanZhi(xunshou);
        const jiuxing = paiJiuXing(fushi.zhifu);
        // const tianpangan = paiTianPanGan(xunshou);
        const bamen = paiBaMen(fushi.zhishi);
        const kongwang = dingKongWang(xunshou);
        const maxing = dingMaXing(shizhu);
        // const wangshuai = dingWangShuai(jieqi);
        return {
            dun: dun,
            jushu: jushu,
            dipangan: dipangan,
            xunshou: xunshou,
            fushi: fushi,
            anganzhi: anganzhi,
            jiuxing: jiuxing,
            // tianpangan: tianpangan,
            bamen: bamen,
            kongwang: kongwang,
            maxing: maxing,
            // wangshuai: wangshuai,
            liushijiazi: liushijiazi,
        };
    }
}

/**
 * 定阴阳遁
 */
function dingYinYangDun(jieqi) {
    switch (jieqi) {
        case '立春':
            return '阳';
        case '雨水':
            return '阳';
        case '惊蛰':
            return '阳';
        case '春分':
            return '阳';
        case '清明':
            return '阳';
        case '谷雨':
            return '阳';
        case '立夏':
            return '阳';
        case '小满':
            return '阳';
        case '芒种':
            return '阳';
        case '夏至':
            return '阴';
        case '小暑':
            return '阴';
        case '大暑':
            return '阴';
        case '立秋':
            return '阴';
        case '处暑':
            return '阴';
        case '白露':
            return '阴';
        case '秋分':
            return '阴';
        case '寒露':
            return '阴';
        case '霜降':
            return '阴';
        case '立冬':
            return '阴';
        case '小雪':
            return '阴';
        case '大雪':
            return '阴';
        case '冬至':
            return '阳';
        case '小寒':
            return '阳';
        case '大寒':
            return '阳';
    }
}

/**
 * 定局数
 */
function dingJuShu(jieqi, rizhu, liushijiazi, jieqiYuanShu) {
    switch (jieqi) {
        case '立春':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.立春.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.立春.中;
                            } else {
                                return jieqiYuanShu.立春.下;
                            }
                        }
                    }
                }
            }
        case '雨水':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.雨水.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.雨水.中;
                            } else {
                                return jieqiYuanShu.雨水.下;
                            }
                        }
                    }
                }
            }
        case '惊蛰':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.惊蛰.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.惊蛰.中;
                            } else {
                                return jieqiYuanShu.惊蛰.下;
                            }
                        }
                    }
                }
            }
        case '春分':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.春分.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.春分.中;
                            } else {
                                return jieqiYuanShu.春分.下;
                            }
                        }
                    }
                }
            }
        case '清明':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.清明.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.清明.中;
                            } else {
                                return jieqiYuanShu.清明.下;
                            }
                        }
                    }
                }
            }
        case '谷雨':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.谷雨.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.谷雨.中;
                            } else {
                                return jieqiYuanShu.谷雨.下;
                            }
                        }
                    }
                }
            }
        case '立夏':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.立夏.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.立夏.中;
                            } else {
                                return jieqiYuanShu.立夏.下;
                            }
                        }
                    }
                }
            }
        case '小满':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.小满.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.小满.中;
                            } else {
                                return jieqiYuanShu.小满.下;
                            }
                        }
                    }
                }
            }
        case '芒种':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.芒种.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.芒种.中;
                            } else {
                                return jieqiYuanShu.芒种.下;
                            }
                        }
                    }
                }
            }
        case '夏至':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.夏至.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.夏至.中;
                            } else {
                                return jieqiYuanShu.夏至.下;
                            }
                        }
                    }
                }
            }
        case '小暑':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.小暑.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.小暑.中;
                            } else {
                                return jieqiYuanShu.小暑.下;
                            }
                        }
                    }
                }
            }
        case '大暑':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.大暑.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.大暑.中;
                            } else {
                                return jieqiYuanShu.大暑.下;
                            }
                        }
                    }
                }
            }
        case '立秋':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.立秋.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.立秋.中;
                            } else {
                                return jieqiYuanShu.立秋.下;
                            }
                        }
                    }
                }
            }
        case '处暑':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.处暑.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.处暑.中;
                            } else {
                                return jieqiYuanShu.处暑.下;
                            }
                        }
                    }
                }
            }
        case '白露':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.白露.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.白露.中;
                            } else {
                                return jieqiYuanShu.白露.下;
                            }
                        }
                    }
                }
            }
        case '秋分':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.秋分.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.秋分.中;
                            } else {
                                return jieqiYuanShu.秋分.下;
                            }
                        }
                    }
                }
            }
        case '寒露':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.寒露.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.寒露.中;
                            } else {
                                return jieqiYuanShu.寒露.下;
                            }
                        }
                    }
                }
            }
        case '霜降':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.霜降.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.霜降.中;
                            } else {
                                return jieqiYuanShu.霜降.下;
                            }
                        }
                    }
                }
            }
        case '立冬':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.立冬.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.立冬.中;
                            } else {
                                return jieqiYuanShu.立冬.下;
                            }
                        }
                    }
                }
            }
        case '小雪':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.小雪.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.小雪.中;
                            } else {
                                return jieqiYuanShu.小雪.下;
                            }
                        }
                    }
                }
            }
        case '大雪':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.大雪.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.大雪.中;
                            } else {
                                return jieqiYuanShu.大雪.下;
                            }
                        }
                    }
                }
            }
        case '冬至':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.冬至.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.冬至.中;
                            } else {
                                return jieqiYuanShu.冬至.下;
                            }
                        }
                    }
                }
            }
        case '小寒':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.小寒.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.小寒.中;
                            } else {
                                return jieqiYuanShu.小寒.下;
                            }
                        }
                    }
                }
            }
        case '大寒':
            for (let i = 0; i < 60; i++) {
                if (rizhu == liushijiazi[i]) {
                    for (let j = i; j >= 0; j--) {
                        if (liushijiazi[j].charAt(0) == '甲' || liushijiazi[j].charAt(0) == '己') {
                            if (
                                liushijiazi[j].charAt(1) == '子' ||
                                liushijiazi[j].charAt(1) == '午' ||
                                liushijiazi[j].charAt(1) == '卯' ||
                                liushijiazi[j].charAt(1) == '酉'
                            ) {
                                return jieqiYuanShu.大寒.上;
                            } else if (
                                liushijiazi[j].charAt(1) == '寅' ||
                                liushijiazi[j].charAt(1) == '申' ||
                                liushijiazi[j].charAt(1) == '巳' ||
                                liushijiazi[j].charAt(1) == '亥'
                            ) {
                                return jieqiYuanShu.大寒.中;
                            } else {
                                return jieqiYuanShu.大寒.下;
                            }
                        }
                    }
                }
            }
    }
}

/**
 * 排地盘天干
 */
function paiDiPanGan(dun, jushu) {
    if (dun == '阳') {
        switch (jushu) {
            case 1:
                return ['戊', '己', '庚', '辛', '壬', '癸', '丁', '丙', '乙'];
            case 2:
                return ['乙', '戊', '己', '庚', '辛', '壬', '癸', '丁', '丙'];
            case 3:
                return ['丙', '乙', '戊', '己', '庚', '辛', '壬', '癸', '丁'];
            case 4:
                return ['丁', '丙', '乙', '戊', '己', '庚', '辛', '壬', '癸'];
            case 5:
                return ['癸', '丁', '丙', '乙', '戊', '己', '庚', '辛', '壬'];
            case 6:
                return ['壬', '癸', '丁', '丙', '乙', '戊', '己', '庚', '辛'];
            case 7:
                return ['辛', '壬', '癸', '丁', '丙', '乙', '戊', '己', '庚'];
            case 8:
                return ['庚', '辛', '壬', '癸', '丁', '丙', '乙', '戊', '己'];
            case 9:
                return ['己', '庚', '辛', '壬', '癸', '丁', '丙', '乙', '戊'];
        }
    } else {
        switch (jushu) {
            case 1:
                return ['戊', '乙', '丙', '丁', '癸', '壬', '辛', '庚', '己'];
            case 2:
                return ['己', '戊', '乙', '丙', '丁', '癸', '壬', '辛', '庚'];
            case 3:
                return ['庚', '己', '戊', '乙', '丙', '丁', '癸', '壬', '辛'];
            case 4:
                return ['辛', '庚', '己', '戊', '乙', '丙', '丁', '癸', '壬'];
            case 5:
                return ['壬', '辛', '庚', '己', '戊', '乙', '丙', '丁', '癸'];
            case 6:
                return ['癸', '壬', '辛', '庚', '己', '戊', '乙', '丙', '丁'];
            case 7:
                return ['丁', '癸', '壬', '辛', '庚', '己', '戊', '乙', '丙'];
            case 8:
                return ['丙', '丁', '癸', '壬', '辛', '庚', '己', '戊', '乙'];
            case 9:
                return ['乙', '丙', '丁', '癸', '壬', '辛', '庚', '己', '戊'];
        }
    }
}

/**
 * 找时柱旬首
 */
function zhaoXunShou(shizhu, liushijiazi) {
    for (let i = 0; i < 60; i++) {
        if (liushijiazi[i] == shizhu) {
            for (let j = i; j >= 0; j--) {
                if (
                    liushijiazi[j] == '甲子' ||
                    liushijiazi[j] == '甲戌' ||
                    liushijiazi[j] == '甲申' ||
                    liushijiazi[j] == '甲午' ||
                    liushijiazi[j] == '甲辰' ||
                    liushijiazi[j] == '甲寅'
                ) {
                    return liushijiazi[j];
                }
            }
        }
    }
}

/**
 * 定符使
 */
function dingfushi(dipangan, xunshou) {
    if (xunshou == '甲子') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '戊') {
                switch (i) {
                    case 0:
                        return { zhifu: '天蓬', zhishi: '休门' };
                    case 1:
                        return { zhifu: '天芮', zhishi: '死门' };
                    case 2:
                        return { zhifu: '天冲', zhishi: '伤门' };
                    case 3:
                        return { zhifu: '天辅', zhishi: '杜门' };
                    case 4:
                        return { zhifu: '天芮', zhishi: '死门' };
                    case 5:
                        return { zhifu: '天心', zhishi: '开门' };
                    case 6:
                        return { zhifu: '天柱', zhishi: '惊门' };
                    case 7:
                        return { zhifu: '天任', zhishi: '生门' };
                    case 8:
                        return { zhifu: '天英', zhishi: '景门' };
                }
            }
        }
    } else if (xunshou == '甲戌') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '己') {
                switch (i) {
                    case 0:
                        return { zhifu: '天蓬', zhishi: '休门' };
                    case 1:
                        return { zhifu: '天芮', zhishi: '死门' };
                    case 2:
                        return { zhifu: '天冲', zhishi: '伤门' };
                    case 3:
                        return { zhifu: '天辅', zhishi: '杜门' };
                    case 4:
                        return { zhifu: '天芮', zhishi: '死门' };
                    case 5:
                        return { zhifu: '天心', zhishi: '开门' };
                    case 6:
                        return { zhifu: '天柱', zhishi: '惊门' };
                    case 7:
                        return { zhifu: '天任', zhishi: '生门' };
                    case 8:
                        return { zhifu: '天英', zhishi: '景门' };
                }
            }
        }
    } else if (xunshou == '甲申') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '庚') {
                switch (i) {
                    case 0:
                        return { zhifu: '天蓬', zhishi: '休门' };
                    case 1:
                        return { zhifu: '天芮', zhishi: '死门' };
                    case 2:
                        return { zhifu: '天冲', zhishi: '伤门' };
                    case 3:
                        return { zhifu: '天辅', zhishi: '杜门' };
                    case 4:
                        return { zhifu: '天芮', zhishi: '死门' };
                    case 5:
                        return { zhifu: '天心', zhishi: '开门' };
                    case 6:
                        return { zhifu: '天柱', zhishi: '惊门' };
                    case 7:
                        return { zhifu: '天任', zhishi: '生门' };
                    case 8:
                        return { zhifu: '天英', zhishi: '景门' };
                }
            }
        }
    } else if (xunshou == '甲午') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '辛') {
                switch (i) {
                    case 0:
                        return { zhifu: '天蓬', zhishi: '休门' };
                    case 1:
                        return { zhifu: '天芮', zhishi: '死门' };
                    case 2:
                        return { zhifu: '天冲', zhishi: '伤门' };
                    case 3:
                        return { zhifu: '天辅', zhishi: '杜门' };
                    case 4:
                        return { zhifu: '天芮', zhishi: '死门' };
                    case 5:
                        return { zhifu: '天心', zhishi: '开门' };
                    case 6:
                        return { zhifu: '天柱', zhishi: '惊门' };
                    case 7:
                        return { zhifu: '天任', zhishi: '生门' };
                    case 8:
                        return { zhifu: '天英', zhishi: '景门' };
                }
            }
        }
    } else if (xunshou == '甲辰') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '壬') {
                switch (i) {
                    case 0:
                        return { zhifu: '天蓬', zhishi: '休门' };
                    case 1:
                        return { zhifu: '天芮', zhishi: '死门' };
                    case 2:
                        return { zhifu: '天冲', zhishi: '伤门' };
                    case 3:
                        return { zhifu: '天辅', zhishi: '杜门' };
                    case 4:
                        return { zhifu: '天芮', zhishi: '死门' };
                    case 5:
                        return { zhifu: '天心', zhishi: '开门' };
                    case 6:
                        return { zhifu: '天柱', zhishi: '惊门' };
                    case 7:
                        return { zhifu: '天任', zhishi: '生门' };
                    case 8:
                        return { zhifu: '天英', zhishi: '景门' };
                }
            }
        }
    } else if (xunshou == '甲寅') {
        for (let i = 0; i < 9; i++) {
            if (dipangan[i] == '癸') {
                switch (i) {
                    case 0:
                        return { zhifu: '天蓬', zhishi: '休门' };
                    case 1:
                        return { zhifu: '天芮', zhishi: '死门' };
                    case 2:
                        return { zhifu: '天冲', zhishi: '伤门' };
                    case 3:
                        return { zhifu: '天辅', zhishi: '杜门' };
                    case 4:
                        return { zhifu: '天芮', zhishi: '死门' };
                    case 5:
                        return { zhifu: '天心', zhishi: '开门' };
                    case 6:
                        return { zhifu: '天柱', zhishi: '惊门' };
                    case 7:
                        return { zhifu: '天任', zhishi: '生门' };
                    case 8:
                        return { zhifu: '天英', zhishi: '景门' };
                }
            }
        }
    }
}

/**
 * 排暗干支
 */
function paiAnGanZhi(xunshou) {
    if (xunshou == '甲子') {
        return ['癸酉', '乙丑', '丙寅', '丁卯', '戊辰', '己巳', '庚午', '辛未', '壬申'];
    } else if (xunshou == '甲戌') {
        return ['癸未', '乙亥', '丙子', '丁丑', '戊寅', '己卯', '庚辰', '辛巳', '壬午'];
    } else if (xunshou == '甲申') {
        return ['癸巳', '乙酉', '丙戌', '丁亥', '戊子', '己丑', '庚寅', '辛卯', '壬辰'];
    } else if (xunshou == '甲午') {
        return ['癸卯', '乙未', '丙申', '丁酉', '戊戌', '己亥', '庚子', '辛丑', '壬寅'];
    } else if (xunshou == '甲辰') {
        return ['癸丑', '乙巳', '丙午', '丁未', '戊申', '己酉', '庚戌', '辛亥', '壬子'];
    } else if (xunshou == '甲寅') {
        return ['癸亥', '乙卯', '丙辰', '丁巳', '戊午', '己未', '庚申', '辛酉', '壬戌'];
    }
}

function dingKongWang(xunshou) {
    switch (xunshou) {
        case '甲子':
            return [5];
        case '甲戌':
            return [1, 6];
        case '甲申':
            return [1, 8];
        case '甲午':
            return [3];
        case '甲辰':
            return [2, 7];
        case '甲寅':
            return [0, 7];
    }
}
function dingMaXing(shizhu) {
    if (shizhu.charAt(1) == '申' || shizhu.charAt(1) == '子' || shizhu.charAt(1) == '辰') {
        return 7;
    } else if (shizhu.charAt(1) == '寅' || shizhu.charAt(1) == '午' || shizhu.charAt(1) == '戌') {
        return 1;
    } else if (shizhu.charAt(1) == '巳' || shizhu.charAt(1) == '酉' || shizhu.charAt(1) == '丑') {
        return 5;
    } else {
        return 3;
    }
}

function paiBaMen(zhishi) {
    switch (zhishi) {
        case '休门':
            return ['休门', '生门', '伤门', '杜门', '景门', '死门', '惊门', '开门'];
        case '生门':
            return ['生门', '伤门', '杜门', '景门', '死门', '惊门', '开门', '休门'];
        case '伤门':
            return ['伤门', '杜门', '景门', '死门', '惊门', '开门', '休门', '生门'];
        case '杜门':
            return ['杜门', '景门', '死门', '惊门', '开门', '休门', '生门', '伤门'];
        case '景门':
            return ['景门', '死门', '惊门', '开门', '休门', '生门', '伤门', '杜门'];
        case '死门':
            return ['死门', '惊门', '开门', '休门', '生门', '伤门', '杜门', '景门'];
        case '惊门':
            return ['惊门', '开门', '休门', '生门', '伤门', '杜门', '景门', '死门'];
        case '开门':
            return ['开门', '休门', '生门', '伤门', '杜门', '景门', '死门', '惊门'];
    }
}

function paiJiuXing(zhifu) {
    switch (zhifu) {
        case '天蓬':
            return ['天蓬', '天任', '天冲', '天辅', '天英', '天芮', '天柱', '天心'];
        case '天任':
            return ['天任', '天冲', '天辅', '天英', '天芮', '天柱', '天心', '天蓬'];
        case '天冲':
            return ['天冲', '天辅', '天英', '天芮', '天柱', '天心', '天蓬', '天任'];
        case '天辅':
            return ['天辅', '天英', '天芮', '天柱', '天心', '天蓬', '天任', '天冲'];
        case '天英':
            return ['天英', '天芮', '天柱', '天心', '天蓬', '天任', '天冲', '天辅'];
        case '天芮':
            return ['天芮', '天柱', '天心', '天蓬', '天任', '天冲', '天辅', '天英'];
        case '天禽':
            return ['天芮', '天柱', '天心', '天蓬', '天任', '天冲', '天辅', '天英'];
        case '天柱':
            return ['天柱', '天心', '天蓬', '天任', '天冲', '天辅', '天英', '天芮'];
        case '天心':
            return ['天心', '天蓬', '天任', '天冲', '天辅', '天英', '天芮', '天柱'];
    }
}

module.exports = { paiZhuanPan };
