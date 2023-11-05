/**
 * 清空盘内信息
 */
export function clearPanJu() {
    const jiuxing = document.querySelectorAll('[data-xing]');
    const bamen = document.querySelectorAll('[data-men]');
    const tianpanshen = document.querySelectorAll('[data-tianpanshen]');
    const dipanshen = document.querySelectorAll('[data-dipanshen]');
    const tianpangan = document.querySelectorAll('[data-tianpangan]');
    const dipangan = document.querySelectorAll('[data-dipangan]');
    const wangshuai = document.querySelectorAll('[data-wangshuai]');
    const kongwang = document.querySelectorAll('[data-kongwang]');
    const maxing = document.querySelectorAll('[data-maxing]');
    const anganzhi = document.querySelectorAll('[data-anganzhi]');
    const tianpanyikong = document.querySelectorAll('[data-tianpanyikong]');
    const dipanyikong = document.querySelectorAll('[data-dipanyikong]');
    const textarea = document.getElementById('paipan-pizhu');
    const wubuyushi = document.getElementById('paipan-wubuyushi');
    const tianpanliuqin = document.querySelectorAll('[data-tianpanliuqin]');
    const dipanliuqin = document.querySelectorAll('[data-dipanliuqin]');
    wubuyushi.innerHTML = '';
    textarea.value = '';
    jiuxing.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
        element.classList.remove('highlight');
        element.classList.remove('jin');
        element.classList.remove('mu');
        element.classList.remove('shui');
        element.classList.remove('huo');
        element.classList.remove('tu');
    });
    bamen.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
        element.classList.remove('highlight');
        element.classList.remove('jin');
        element.classList.remove('mu');
        element.classList.remove('shui');
        element.classList.remove('huo');
        element.classList.remove('tu');
    });
    tianpanshen.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
        element.classList.remove('highlight');
        element.classList.remove('jin');
        element.classList.remove('mu');
        element.classList.remove('shui');
        element.classList.remove('huo');
        element.classList.remove('tu');
    });
    dipanshen.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
        element.classList.remove('highlight');
        element.classList.remove('jin');
        element.classList.remove('mu');
        element.classList.remove('shui');
        element.classList.remove('huo');
        element.classList.remove('tu');
    });
    tianpangan.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
        element.classList.remove('rigan');
        element.classList.remove('highlight');
        element.classList.remove('highlight-rigan');
        element.classList.remove('jin');
        element.classList.remove('mu');
        element.classList.remove('shui');
        element.classList.remove('huo');
        element.classList.remove('tu');
    });
    dipangan.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
        element.classList.remove('rigan');
        element.classList.remove('highlight');
        element.classList.remove('highlight-rigan');
        element.classList.remove('jin');
        element.classList.remove('mu');
        element.classList.remove('shui');
        element.classList.remove('huo');
        element.classList.remove('tu');
    });
    wangshuai.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
    });
    kongwang.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
    });
    maxing.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
    });
    anganzhi.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
        element.classList.remove('anganzhi-color');
    });
    tianpanyikong.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
        element.classList.remove('rigan');
        element.classList.remove('highlight');
        element.classList.remove('highlight-rigan');
        element.classList.remove('jin');
        element.classList.remove('mu');
        element.classList.remove('shui');
        element.classList.remove('huo');
        element.classList.remove('tu');
    });
    dipanyikong.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('important');
        element.classList.remove('rigan');
        element.classList.remove('highlight');
        element.classList.remove('highlight-rigan');
        element.classList.remove('jin');
        element.classList.remove('mu');
        element.classList.remove('shui');
        element.classList.remove('huo');
        element.classList.remove('tu');
    });
    tianpanliuqin.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('simplified-liuqin');
    });
    dipanliuqin.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('simplified-liuqin');
    });
    document.getElementById('nian').innerHTML = '';
    document.getElementById('yue').innerHTML = '';
    document.getElementById('ri').innerHTML = '';
    document.getElementById('shi').innerHTML = '';
}
