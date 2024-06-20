const $setButton = document.getElementById('setTime');
const $clearButton = document.getElementById('clear');
const $inputTime = document.getElementById('inputTime');
const $timer = document.getElementById('timer');
const $startButton = document.getElementById('start');
const $stopButton = document.getElementById('stop');
let interval_id = null;
let time;//総秒数
let hour;
let min;
let sec;

//setボタンクリックで　Timer表示変更
$setButton.addEventListener('click', () => {
  if($setButton.classList.contains('btn-secondary')){
    console.log('set false');
  }else{
    console.log('Set button clicked');
    time = $inputTime.value;
    if(time > 0){
    conversion(time);
    $inputTime.value = "";
    $startButton.classList.add('btn-info');
    }else{
      window.alert('秒数を入力してください');
    };
  };
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
  if($clearButton.classList.contains('btn-secondary')){
    console.log('clear false');
  }else{
    console.log('clearButton clicked');
    time = 0;
    conversion(time);
    $startButton.classList.remove('btn-info');
    $inputTime.value = "";
  };
});

//start

  $startButton.addEventListener('click', () => {
  console.log('start button clicked')
  if(time){
    $startButton.classList.add('none');
    $stopButton.classList.remove('none');
    $setButton.classList.add('btn-secondary');
    $setButton.classList.remove('btn-primary');
    $clearButton.classList.add('btn-secondary');
    $clearButton.classList.remove('btn-warning');
    interval_id = setInterval(() => {
      time--;
      conversion(time);
      if(time == 0){
        timerStop();
        $startButton.classList.remove('btn-info');
        window.alert('時間になりました');
      };
    }, 1000);
  }else{
  window.alert('秒数をセットしてください');
  };
});


//stop
$stopButton.addEventListener('click', () => {
  console.log('stop button clicked');
  timerStop();
});

const timerStop = () => {
  clearInterval(interval_id);
  $stopButton.classList.add('none');
  $startButton.classList.remove('none');
  $setButton.classList.remove('btn-secondary');
  $setButton.classList.add('btn-primary');
  $clearButton.classList.remove('btn-secondary');
  $clearButton.classList.add('btn-warning');
};