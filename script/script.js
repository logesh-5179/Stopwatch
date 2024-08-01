
let seconds=0;
let minutes=0;
let hours=0;
let lap=0;
let interval;

const st=document.getElementById('start');
const sp=document.getElementById('stop');
const rt=document.getElementById('reset');
const lt=document.getElementById('lap');
const hour=document.getElementById('hour');
const minute=document.getElementById('minute');
const second=document.getElementById('second');
const lapList=document.getElementById('lapList'); 

function time() {
    seconds++;
    if(seconds>=60){
        seconds=0;
        minutes++;
        if(minutes>=60){
            minutes=0;
            hours++;
        }
    }

    hour.innerHTML=hours.toString().padStart(2, '0');
    minute.innerHTML=minutes.toString().padStart(2, '0');
    second.innerHTML=seconds.toString().padStart(2, '0');
}

function starttime() {
    interval = setInterval(time, 1000);
}
function stoptime() {
    clearInterval(interval);
}
function rsttime() {
    clearInterval(interval);
    seconds=0;
    minutes=0;
    hours=0;
    lap=0;
    hour.innerHTML='00';
    minute.innerHTML='00';
    second.innerHTML='00';
    lapList.innerHTML=''; 
}
function LAP() {
    lap++;
    const laptime=`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const ele=document.createElement('li');
    ele.innerHTML=`Lap${lap}: ${laptime}`;
    lapList.appendChild(ele);
}
st.addEventListener('click', starttime);
sp.addEventListener('click', stoptime);
rt.addEventListener('click', rsttime);
lt.addEventListener('click', LAP);
