const { ipcRenderer } = require('electron');

const savedInfoSection = document.getElementById('saved-info-section');
const gotoSavedInfoSectionBtn = document.getElementById('home-show-saved-data');
const fromInfosectionToHomeBtm = document.getElementById('info-return-btn');

// 初始运行设置空白数据库
if (localStorage.getItem('savedData') == null) {
    let sample = [];
    localStorage.setItem('savedData', JSON.stringify(sample));
}

let localData = JSON.parse(localStorage.getItem('savedData')); // 每次运行提取数据库信息
let dataList = document.getElementById('saved-data-list'); // 可视数据列表
let currentPanju;
let panjuIndex;

// menu navigation
gotoSavedInfoSectionBtn.addEventListener('click', () => {
    renderData(localData);
    home.classList.add('hidden');
    savedInfoSection.classList.remove('hidden');
    document.getElementById('overlay').classList.remove('active');
    closeSideMenu();
    menuState = false;
    document.getElementById('search-data').value = '';
});

fromInfosectionToHomeBtm.addEventListener('click', () => {
    savedInfoSection.classList.add('hidden');
    home.classList.remove('hidden');
    menuState = false;
});

// 提取当下盘局数据
ipcRenderer.on('current panju data', (e, data) => {
    currentPanju = data;
});

// 清空搜索筛选
document.getElementById('remove-search').addEventListener('click', () => {
    document.getElementById('search-data').value = '';
    renderData(localData);
});

// 回车搜索
document.getElementById('search-data').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = document.getElementById('search-data').value;
        let newList = [];
        for (let i = localData.length - 1; i >= 0; i--) {
            if (localData[i].info.includes(searchTerm)) {
                newList.unshift(localData[i]);
            }
        }
        renderData(newList);
    }
});

// 搜索
document.getElementById('begin-search').addEventListener('click', () => {
    const searchTerm = document.getElementById('search-data').value;
    let newList = [];
    for (let i = localData.length - 1; i >= 0; i--) {
        if (localData[i].info.includes(searchTerm)) {
            newList.unshift(localData[i]);
        }
    }
    renderData(newList);
});

// 保存盘局
document.getElementById('save-data-btn').addEventListener('click', saveData);
ipcRenderer.on('save current panju from shortcut', saveData);
function saveData() {
    if (document.getElementById('paipan-pizhu').value != '') {
        if (isFromData) {
            localData[panjuIndex] = currentPanju;
            localData[panjuIndex].info = document.getElementById('paipan-pizhu').value;
        } else {
            currentPanju.info = document.getElementById('paipan-pizhu').value;
            localData.unshift(currentPanju);
            localStorage.setItem('savedData', JSON.stringify(localData));
        }
    }
}

// 导出数据
document.getElementById('export-saved-data-btn').addEventListener('click', () => {
    ipcRenderer.send('export saved data', localData);
});

// 导入数据
document.getElementById('import-saved-data-btn').addEventListener('click', () => {
    ipcRenderer.send('import data', localData);
});

async function renderData(data) {
    clearRenderList();
    let list = '';
    for (let i = data.length - 1; i >= 0; i--) {
        const lineBreakPosition = getReturnPosition(data[i].info);
        let question;
        if (lineBreakPosition != 0) {
            question = data[i].info.slice(0, lineBreakPosition);
        } else {
            question = data[i].info;
        }
        if (data[i].choosenTime) {
            list =
                `<div data-saved-panju class="data-card default-shadow"><div class="data-card-info-section"><div>排盘方式：${data[i].paipanMethod}</div><div>创建时间：${data[i].choosenTime.date} - ${data[i].choosenTime.hour}点 </div><div>求测问题：${question}</div></div><button data-dataPaipan-btn class="data-paipan-btn default-shadow">排盘</button><button data-delete-btn class="delete-btn default-shadow">删除</button></div>` +
                list;
        } else {
            list =
                `<div data-saved-panju class="data-card default-shadow"><div class="data-card-info-section"><div>排盘方式：${data[i].paipanMethod}</div><div>创建时间：${data[i].timeInfo.date} - ${data[i].timeInfo.hour}点 </div><div>求测问题：${question}</div></div><button data-dataPaipan-btn class="data-paipan-btn default-shadow">排盘</button><button data-delete-btn class="delete-btn default-shadow">删除</button></div>` +
                list;
        }
    }
    dataList.innerHTML = list;

    // 点击卡片排盘按键
    document.querySelectorAll('[data-dataPaipan-btn]').forEach((item, index) => {
        item.addEventListener('click', () => {
            isFromData = true;
            panjuIndex = index;
            for (let i = localData.length - 1; i >= 0; i--) {
                if (
                    data[index].info == localData[i].info &&
                    data[index].timeInfo.date == localData[i].timeInfo.date &&
                    data[index].choosenMethod == localData[i].choosenMethod &&
                    data[index].choosenNumber == localData[i].choosenNumber
                ) {
                    panjuIndex = i;
                }
            }
            sendDataToBackEnd(localData[panjuIndex]);
            document.getElementById('paipan-pizhu').value = data[index].info;
        });
    });

    // 卡片删除案件
    document.querySelectorAll('[data-delete-btn]').forEach((item, index) => {
        item.addEventListener('click', () => {
            deleteItem(data, index);
            if (document.getElementById('search-data').value != '') {
                const searchTerm = document.getElementById('search-data').value;
                let newList = [];
                for (let i = localData.length - 1; i >= 0; i--) {
                    if (localData[i].info.includes(searchTerm)) {
                        newList.unshift(localData[i]);
                    }
                }
                renderData(newList);
            } else {
                renderData(localData);
            }
        });
    });
}

function clearRenderList() {
    // 清空已存在的列表
    document.querySelectorAll('[data-dataPaipan-btn]').forEach((item, index) => {
        item.removeEventListener('click', () => {
            isFromData = true;
            panjuIndex = index;
            sendDataToBackEnd(localData[index]);
            document.getElementById('paipan-pizhu').value = localData[index].info;
        });
    });
    document.querySelectorAll('[data-delete-btn]').forEach((item, index) => {
        item.removeEventListener('click', () => {
            deleteItem(index).then(renderData(data));
        });
    });
    dataList.innerHTML = '';
}

function sendDataToBackEnd(data) {
    let currentData = data;
    if (currentData.choosenMethod == undefined) {
        if (currentData.paipanMethod == '飞盘') {
            clearPanJu();
            ipcRenderer.send('正时起局', currentData);
            useFeipanStyle();
            fromDataPageToPaipanPage();
        } else if (currentData.paipanMethod == '转盘') {
            clearPanJu();
            ipcRenderer.send('正时起局', currentData);
            useZhuanpanStyle();
            fromDataPageToPaipanPage();
        }
    } else {
        if (currentData.paipanMethod == '飞盘') {
            clearPanJu();
            ipcRenderer.send('报数起局', currentData);
            useFeipanStyle();
            fromDataPageToPaipanPage();
        } else if (currentData.paipanMethod == '转盘') {
            clearPanJu();
            ipcRenderer.send('报数起局', currentData);
            useZhuanpanStyle();
            fromDataPageToPaipanPage();
        }
    }
}

function deleteItem(data, index) {
    let deleteItemIndex;
    for (let i = localData.length - 1; i >= 0; i--) {
        if (
            data[index].info == localData[i].info &&
            data[index].timeInfo.date == localData[i].timeInfo.date &&
            data[index].choosenMethod == localData[i].choosenMethod &&
            data[index].choosenNumber == localData[i].choosenNumber
        ) {
            deleteItemIndex = i;
        }
    }
    localData.splice(deleteItemIndex, 1);
    localStorage.setItem('savedData', JSON.stringify(localData));
    localData = JSON.parse(localStorage.getItem('savedData'));
}

function fromDataPageToPaipanPage() {
    document.getElementById('saved-info-section').classList.add('hidden');
    document.getElementById('paipan').classList.remove('hidden');
}

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

function clearPanJu() {
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
    document.getElementById('nian').innerHTML = '';
    document.getElementById('yue').innerHTML = '';
    document.getElementById('ri').innerHTML = '';
    document.getElementById('shi').innerHTML = '';
}

function getReturnPosition(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] == '\n') {
            return i;
        }
    }
    return 0;
}

function closeSideMenu() {
    document.getElementById('home-hamburger-menu').classList.remove('active');
    document.getElementById('menu').classList.remove('active');
    document.getElementById('overlay').classList.remove('active'); // 主页: 包数弹窗背景
    menuState = false;
}

ipcRenderer.on('import data to render process', (e, data) => {
    for (let i = data.length - 1; i >= 0; i--) {
        localData.unshift(data[i]);
    }
    localStorage.setItem('savedData', JSON.stringify(localData));
    localData = JSON.parse(localStorage.getItem('savedData'));
    renderData(localData);
});
