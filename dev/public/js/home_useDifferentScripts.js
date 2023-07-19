document.getElementById('home-paipanfangshi').addEventListener('change', () => {
    choosePaiPanScript();
});
function choosePaiPanScript() {
    const paipanIpc = document.createElement('script');
    paipanIpc.type = 'module';
    if (document.getElementById('home-paipanfangshi').value == '飞盘') {
        document.getElementById('jushu').checked = true;
        document.getElementById('shichen').checked = false;
        useFeipanStyle();
    } else if (document.getElementById('home-paipanfangshi').value == '转盘') {
        document.getElementById('jushu').checked = false;
        document.getElementById('shichen').checked = true;
        useZhuanpanStyle();
    }
}
choosePaiPanScript();

function useFeipanStyle() {
    document.querySelectorAll('[data-tianpanshen]').forEach((element, index) => {
        element.classList.remove('zhuanpan-tianpanshen');
        element.classList.add('tianpanshen');
    });
    document.querySelectorAll('[data-xing]').forEach((element, index) => {
        element.classList.remove('zhuanpan-xing');
        element.classList.add('xing');
    });
    document.querySelectorAll('[data-men]').forEach((element, index) => {
        element.classList.remove('zhuanpan-men');
        element.classList.add('men');
    });
    document.querySelectorAll('[data-dipanshen]').forEach((element, index) => {
        element.classList.remove('zhuanpan-dipanshen');
        element.classList.add('dipanshen');
    });
    document.querySelectorAll('[data-tianpangan]').forEach((element, index) => {
        element.classList.remove('zhuanpan-tianpangan');
        element.classList.add('tianpangan');
    });
    document.querySelectorAll('[data-dipangan]').forEach((element, index) => {
        element.classList.remove('zhuanpan-dipangan');
        element.classList.add('dipangan');
    });
    document.querySelectorAll('[data-anganzhi]').forEach((element, index) => {
        element.classList.remove('zhuanpan-anganzhi');
        element.classList.add('anganzhi');
    });
    document.querySelectorAll('[data-tianpanyikong]').forEach((element, index) => {
        element.classList.remove('zhuanpan-tianpanyikong');
        element.classList.add('tianpanyikong');
    });
    document.querySelectorAll('[data-dipanyikong]').forEach((element, index) => {
        element.classList.remove('zhuanpan-dipanyikong');
        element.classList.add('dipanyikong');
    });
    document.querySelectorAll('[data-maxing]').forEach((element, index) => {
        element.classList.remove('zhuanpan-maxing');
        element.classList.add('maxing');
    });
    document.querySelectorAll('[data-kongwang]').forEach((element, index) => {
        element.classList.remove('zhuanpan-kongwang');
        element.classList.add('kongwang');
    });
    document.querySelectorAll('[data-wangshuai]').forEach((element, index) => {
        element.classList.remove('zhuanpan-wangshuai');
        element.classList.add('wangshuai');
    });
}
function useZhuanpanStyle() {
    document.querySelectorAll('[data-maxing]').forEach((element, index) => {
        element.classList.remove('maxing');
        element.classList.add('zhuanpan-maxing');
    });
    document.querySelectorAll('[data-tianpanshen]').forEach((element, index) => {
        element.classList.remove('tianpanshen');
        element.classList.add('zhuanpan-tianpanshen');
    });
    document.querySelectorAll('[data-xing]').forEach((element, index) => {
        element.classList.remove('xing');
        element.classList.add('zhuanpan-xing');
    });
    document.querySelectorAll('[data-men]').forEach((element, index) => {
        element.classList.remove('men');
        element.classList.add('zhuanpan-men');
    });
    document.querySelectorAll('[data-dipanshen]').forEach((element, index) => {
        element.classList.remove('dipanshen');
        element.classList.add('zhuanpan-dipanshen');
    });
    document.querySelectorAll('[data-tianpangan]').forEach((element, index) => {
        element.classList.remove('tianpangan');
        element.classList.add('zhuanpan-tianpangan');
    });
    document.querySelectorAll('[data-dipangan]').forEach((element, index) => {
        element.classList.remove('dipangan');
        element.classList.add('zhuanpan-dipangan');
    });
    document.querySelectorAll('[data-anganzhi]').forEach((element, index) => {
        element.classList.remove('anganzhi');
        element.classList.add('zhuanpan-anganzhi');
    });
    document.querySelectorAll('[data-tianpanyikong]').forEach((element, index) => {
        element.classList.remove('tianpanyikong');
        element.classList.add('zhuanpan-tianpanyikong');
    });
    document.querySelectorAll('[data-dipanyikong]').forEach((element, index) => {
        element.classList.remove('dipanyikong');
        element.classList.add('zhuanpan-dipanyikong');
    });
    document.querySelectorAll('[data-kongwang]').forEach((element, index) => {
        element.classList.remove('kongwang');
        element.classList.add('zhuanpan-kongwang');
    });
    document.querySelectorAll('[data-wangshuai]').forEach((element, index) => {
        element.classList.remove('wangshuai');
        element.classList.add('zhuanpan-wangshuai');
    });
}
