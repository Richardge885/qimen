const dateTime = document.getElementById('date-time')! as HTMLInputElement; // 用户输入的时间
// 为时间输入填写默认当下时间
const dateTimeInput = document.getElementById('date-time') as HTMLInputElement;
const now = new Date();
const timezoneOffset = now.getTimezoneOffset() * -1;
const nowWithOffset = new Date(now.getTime() + (timezoneOffset * 60 * 1000));
const formattedDate = nowWithOffset.toISOString().slice(0, 16);
dateTimeInput.value = formattedDate;

const zhengshi = document.getElementById('zhengshi')! as HTMLButtonElement;
zhengshi.addEventListener('click', () => {
    window.location.href = 'default_paipan.html';
});

// 弹窗功能
const baoshu = document.getElementById('baoshu')! as HTMLButtonElement;
const modal = document.getElementById('modal')! as HTMLDivElement;
const overlay = document.getElementById('overlay')! as HTMLDivElement;
const baoshuSubmit = document.getElementById('modal-btn')! as HTMLButtonElement;

baoshu.addEventListener('click', () => {
    overlay.classList.toggle('opacity-10');
    overlay.classList.toggle('pointer-events-auto');
    overlay.classList.remove('pointer-events-none');
    modal.classList.toggle('scale-100');
    modal.classList.toggle('scale-0');
});

overlay.addEventListener('click', closeModal);

function closeModal() {
    overlay.classList.toggle('opacity-10');
    overlay.classList.remove('pointer-events-auto');
    overlay.classList.add('pointer-events-none');
    modal.classList.toggle('scale-100');
    modal.classList.toggle('scale-0');
}


// 取数且转换到排盘页面
baoshuSubmit.addEventListener('click', () => {
    const choosenTime = dateTime.value;
    // const typeOfBaoShu =

    window.location.href = 'default_paipan.html';
});
