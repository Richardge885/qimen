const data = require('../../assets/wnl.json');

// 提取当下时间
export function getCurrentDate(): string {
    const date = new Date();
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return year + '/' + month + '/' + day; // 可以调整年月日格式
}

export function char8(time: string): string | undefined {
    const now = new Date();
    let hour = now.getHours().toString();
    let i = 19248;
    while (true) {
        if (time == data[i].公历日期) {
            if (hour == '23') {
                hour = '0';
                i++;
                let year: string = data[i].年干支;
                let month: string = data[i].月干支;
                let date: string = data[i].日干支;
                let time = getTime(date, hour.toString());
                return year + ' ' + month + ' ' + date + ' ' + time;
            } else {
                let year: string = data[i].年干支;
                let month: string = data[i].月干支;
                let date: string = data[i].日干支;
                let time = getTime(date, hour.toString());
                return year + ' ' + month + ' ' + date + ' ' + time;
            }
        }
        i++;
    }
}

//
// 甲己还加甲,乙庚丙作初,丙辛从戊起,丁壬庚子居,若问戊癸和所发,壬子是真途
function getTime(date: string, hour: string) {
    switch (date.charAt(0)) {
        case '甲':
            switch (hour) {
                case '0':
                    return '甲子';
                case '01':
                    return '乙丑';
                case '02':
                    return '乙丑';
                case '03':
                    return '丙寅';
                case '04':
                    return '丙寅';
                case '05':
                    return '丁卯';
                case '06':
                    return '丁卯';
                case '07':
                    return '戊辰';
                case '08':
                    return '戊辰';
                case '09':
                    return '己巳';
                case '10':
                    return '己巳';
                case '11':
                    return '庚午';
                case '12':
                    return '庚午';
                case '13':
                    return '辛未';
                case '14':
                    return '辛未';
                case '15':
                    return '壬申';
                case '16':
                    return '壬申';
                case '17':
                    return '癸酉';
                case '18':
                    return '癸酉';
                case '19':
                    return '甲戌';
                case '20':
                    return '甲戌';
                case '21':
                    return '乙亥';
                case '22':
                    return '乙亥';
            }
        case '乙':
            switch (hour) {
                case '0':
                    return '丙子';
                case '01':
                    return '丁丑';
                case '02':
                    return '丁丑';
                case '03':
                    return '戊寅';
                case '04':
                    return '戊寅';
                case '05':
                    return '己卯';
                case '06':
                    return '己卯';
                case '07':
                    return '庚辰';
                case '08':
                    return '庚辰';
                case '09':
                    return '辛巳';
                case '10':
                    return '辛巳';
                case '11':
                    return '壬午';
                case '12':
                    return '壬午';
                case '13':
                    return '癸未';
                case '14':
                    return '癸未';
                case '15':
                    return '甲申';
                case '16':
                    return '甲申';
                case '17':
                    return '乙酉';
                case '18':
                    return '乙酉';
                case '19':
                    return '丙戌';
                case '20':
                    return '丙戌';
                case '21':
                    return '丁亥';
                case '22':
                    return '丁亥';
            }
        case '丙':
            switch (hour) {
                case '0':
                    return '戊子';
                case '01':
                    return '己丑';
                case '02':
                    return '己丑';
                case '03':
                    return '庚寅';
                case '04':
                    return '庚寅';
                case '05':
                    return '辛卯';
                case '06':
                    return '辛卯';
                case '07':
                    return '壬辰';
                case '08':
                    return '壬辰';
                case '09':
                    return '癸巳';
                case '10':
                    return '癸巳';
                case '11':
                    return '甲午';
                case '12':
                    return '甲午';
                case '13':
                    return '乙未';
                case '14':
                    return '乙未';
                case '15':
                    return '丙申';
                case '16':
                    return '丙申';
                case '17':
                    return '丁酉';
                case '18':
                    return '丁酉';
                case '19':
                    return '戊戌';
                case '20':
                    return '戊戌';
                case '21':
                    return '己亥';
                case '22':
                    return '己亥';
            }
        case '丁':
            switch (hour) {
                case '0':
                    return '庚子';
                case '01':
                    return '辛丑';
                case '02':
                    return '辛丑';
                case '03':
                    return '壬寅';
                case '04':
                    return '壬寅';
                case '05':
                    return '癸卯';
                case '06':
                    return '癸卯';
                case '07':
                    return '甲辰';
                case '08':
                    return '甲辰';
                case '09':
                    return '乙巳';
                case '10':
                    return '乙巳';
                case '11':
                    return '丙午';
                case '12':
                    return '丙午';
                case '13':
                    return '丁未';
                case '14':
                    return '丁未';
                case '15':
                    return '戊申';
                case '16':
                    return '戊申';
                case '17':
                    return '己酉';
                case '18':
                    return '己酉';
                case '19':
                    return '庚戌';
                case '20':
                    return '庚戌';
                case '21':
                    return '辛亥';
                case '22':
                    return '辛亥';
            }
        case '戊':
            switch (hour) {
                case '0':
                    return '壬子';
                case '01':
                    return '癸丑';
                case '02':
                    return '癸丑';
                case '03':
                    return '甲寅';
                case '04':
                    return '甲寅';
                case '05':
                    return '乙卯';
                case '06':
                    return '乙卯';
                case '07':
                    return '丙辰';
                case '08':
                    return '丙辰';
                case '09':
                    return '丁巳';
                case '10':
                    return '丁巳';
                case '11':
                    return '戊午';
                case '12':
                    return '戊午';
                case '13':
                    return '己未';
                case '14':
                    return '己未';
                case '15':
                    return '庚申';
                case '16':
                    return '庚申';
                case '17':
                    return '辛酉';
                case '18':
                    return '辛酉';
                case '19':
                    return '壬戌';
                case '20':
                    return '壬戌';
                case '21':
                    return '癸亥';
                case '22':
                    return '癸亥';
            }
        case '己':
            switch (hour) {
                case '0':
                    return '甲子';
                case '01':
                    return '乙丑';
                case '02':
                    return '乙丑';
                case '03':
                    return '丙寅';
                case '04':
                    return '丙寅';
                case '05':
                    return '丁卯';
                case '06':
                    return '丁卯';
                case '07':
                    return '戊辰';
                case '08':
                    return '戊辰';
                case '09':
                    return '己巳';
                case '10':
                    return '己巳';
                case '11':
                    return '庚午';
                case '12':
                    return '庚午';
                case '13':
                    return '辛未';
                case '14':
                    return '辛未';
                case '15':
                    return '壬申';
                case '16':
                    return '壬申';
                case '17':
                    return '癸酉';
                case '18':
                    return '癸酉';
                case '19':
                    return '甲戌';
                case '20':
                    return '甲戌';
                case '21':
                    return '乙亥';
                case '22':
                    return '乙亥';
            }
        case '庚':
            switch (hour) {
                case '0':
                    return '丙子';
                case '01':
                    return '丁丑';
                case '02':
                    return '丁丑';
                case '03':
                    return '戊寅';
                case '04':
                    return '戊寅';
                case '05':
                    return '己卯';
                case '06':
                    return '己卯';
                case '07':
                    return '庚辰';
                case '08':
                    return '庚辰';
                case '09':
                    return '辛巳';
                case '10':
                    return '辛巳';
                case '11':
                    return '壬午';
                case '12':
                    return '壬午';
                case '13':
                    return '癸未';
                case '14':
                    return '癸未';
                case '15':
                    return '甲申';
                case '16':
                    return '甲申';
                case '17':
                    return '乙酉';
                case '18':
                    return '乙酉';
                case '19':
                    return '丙戌';
                case '20':
                    return '丙戌';
                case '21':
                    return '丁亥';
                case '22':
                    return '丁亥';
            }
        case '辛':
            switch (hour) {
                case '0':
                    return '戊子';
                case '01':
                    return '己丑';
                case '02':
                    return '己丑';
                case '03':
                    return '庚寅';
                case '04':
                    return '庚寅';
                case '05':
                    return '辛卯';
                case '06':
                    return '辛卯';
                case '07':
                    return '壬辰';
                case '08':
                    return '壬辰';
                case '09':
                    return '癸巳';
                case '10':
                    return '癸巳';
                case '11':
                    return '甲午';
                case '12':
                    return '甲午';
                case '13':
                    return '乙未';
                case '14':
                    return '乙未';
                case '15':
                    return '丙申';
                case '16':
                    return '丙申';
                case '17':
                    return '丁酉';
                case '18':
                    return '丁酉';
                case '19':
                    return '戊戌';
                case '20':
                    return '戊戌';
                case '21':
                    return '己亥';
                case '22':
                    return '己亥';
            }
        case '壬':
            switch (hour) {
                case '0':
                    return '庚子';
                case '01':
                    return '辛丑';
                case '02':
                    return '辛丑';
                case '03':
                    return '壬寅';
                case '04':
                    return '壬寅';
                case '05':
                    return '癸卯';
                case '06':
                    return '癸卯';
                case '07':
                    return '甲辰';
                case '08':
                    return '甲辰';
                case '09':
                    return '乙巳';
                case '10':
                    return '乙巳';
                case '11':
                    return '丙午';
                case '12':
                    return '丙午';
                case '13':
                    return '丁未';
                case '14':
                    return '丁未';
                case '15':
                    return '戊申';
                case '16':
                    return '戊申';
                case '17':
                    return '己酉';
                case '18':
                    return '己酉';
                case '19':
                    return '庚戌';
                case '20':
                    return '庚戌';
                case '21':
                    return '辛亥';
                case '22':
                    return '辛亥';
            }
        case '癸':
            switch (hour) {
                case '0':
                    return '壬子';
                case '01':
                    return '癸丑';
                case '02':
                    return '癸丑';
                case '03':
                    return '甲寅';
                case '04':
                    return '甲寅';
                case '05':
                    return '乙卯';
                case '06':
                    return '乙卯';
                case '07':
                    return '丙辰';
                case '08':
                    return '丙辰';
                case '09':
                    return '丁巳';
                case '10':
                    return '丁巳';
                case '11':
                    return '戊午';
                case '12':
                    return '戊午';
                case '13':
                    return '己未';
                case '14':
                    return '己未';
                case '15':
                    return '庚申';
                case '16':
                    return '庚申';
                case '17':
                    return '辛酉';
                case '18':
                    return '辛酉';
                case '19':
                    return '壬戌';
                case '20':
                    return '壬戌';
                case '21':
                    return '癸亥';
                case '22':
                    return '癸亥';
            }
    }
}
