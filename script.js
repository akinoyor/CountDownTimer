const $setButton = document.getElementById('setTime');
const $clearButton = document.getElementById('clear');
const $inputTime = document.getElementById('inputTime');
const $timer = document.getElementById('timer');
let time;//総秒数
let hour;
let min;
let sec;

//setボタンクリックで　Timer表示変更
$setButton.addEventListener('click', () => {
  console.log('Set button clicked');
  time = $inputTime.value;
  conversion(time);
  $inputTime.value = "";
});

//sec to hh:mm:ss and View
const conversion = (time) => {
  hour = Math.floor(time / 3600);
  min = Math.floor(time % 3600 / 60);
  sec = time % 60;
  let timerView = String(hour).padStart(2, '0') + ':' + String(min).padStart(2, '0') + ':' + String(sec).padStart(2, '0');
  $timer.innerText = timerView
};

//clear
$clearButton.addEventListener('click', () => {
  console.log('clearButton clicked');
  $inputTime.value = "";
  $timer.innerText = '00:00:00';
});