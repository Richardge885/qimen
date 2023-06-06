const defaultPaipanMethod = require('./js/default.json');

document.getElementById('home-paipanfangshi').value =
    defaultPaipanMethod.paipanMethod;
document.getElementById('theme').value = defaultPaipanMethod.theme;

function changeBaoshuRadioInput() {
    if (document.getElementById('home-paipanfangshi').value == '飞盘') {
        document.getElementById('jushu').setAttribute('checked', '');
    } else if (
        document.getElementById('home-paipanfangshi').value == '传统转盘' ||
        document.getElementById('home-paipanfangshi').value == '符使转盘'
    ) {
        document.getElementById('shichen').setAttribute('checked', '');
    }
}

changeBaoshuRadioInput();
