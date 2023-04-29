"use strict";
const dateTime = document.getElementById('date-time');
const dateTimeInput = document.getElementById('date-time');
const now = new Date();
const timezoneOffset = now.getTimezoneOffset() * -1;
const nowWithOffset = new Date(now.getTime() + (timezoneOffset * 60 * 1000));
const formattedDate = nowWithOffset.toISOString().slice(0, 16);
dateTimeInput.value = formattedDate;
const zhengshi = document.getElementById('zhengshi');
zhengshi.addEventListener('click', () => {
    window.location.href = 'default_paipan.html';
});
const baoshu = document.getElementById('baoshu');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const baoshuSubmit = document.getElementById('modal-btn');
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
baoshuSubmit.addEventListener('click', () => {
    const choosenTime = dateTime.value;
    window.location.href = 'default_paipan.html';
});
