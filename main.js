const hourHand = document.querySelector('.hand-hour');
const minuteHand = document.querySelector('.hand-minute');
const secondHand = document.querySelector('.hand-seconds');
let hoursValue = document.getElementById('hrs-value');
let minuteValue = document.getElementById('min-value');
let secondValue = document.getElementById('sec-value');

function getTime(){
    const now = new Date();

    const hours = now.getHours();
    const hoursDegree = (((hours / 12) * 360) + 90);
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
    document.querySelector('.hrs').style.animationPlayState = 'running';
    document.getElementById('hrs-value').style.animationPlayState = 'running';
    hoursValue.style.transform = `rotate(${-hoursDegree}deg)`;
    hoursValue.innerHTML = hours;

    const minutes = now.getMinutes();
    const minutesDegree = (((minutes / 60) * 360) + 90);
    document.querySelector('.min').style.animationPlayState = 'running';
    document.getElementById('min-value').style.animationPlayState = 'running';
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
    minuteValue.style.transform = `rotate(${-minutesDegree}deg)`;
    minuteValue.innerHTML = minutes;
    
    const seconds = now.getSeconds();
    const secondsDegree = (((seconds / 60) * 360) + 90);
    document.querySelector('.sec').style.animationPlayState = 'running';
    document.getElementById('sec-value').style.animationPlayState = 'running';
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    //secondHand.style.transition = 'all 1s ease';
    secondValue.style.transform = `rotate(${-secondsDegree}deg)`;
    secondValue.innerHTML = seconds;
    

    //console.log(now);
}

setInterval(getTime, 1000);