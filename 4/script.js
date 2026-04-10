let time =0;
let timer = null;

function StartTimer() {
    if(timer !==null)   return;

    timer = setInterval(() =>{
        time++;
        document.getElementById('display').innerText = time;
    }, 1000);
}
function StopTimer() {
    clearInterval(timer);
    timer = null;
}

function ResetTimer() {
    StopTimer();
    time =0;
    document.getElementById('display').innerText =time;
}
