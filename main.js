let hour=0;
let min=0;
let sec=0;

const startBtn = document.getElementById("startBtn");
const watchValue = document.getElementById("watch");

function render() {
    watchValue.innerText = `${hour} : ${min} : ${sec}`;
}

function start(){
    const startDate = new Date().getTime();
    
   
    setInterval(() => {
        const CurrentDate = new Date().getTime();
        sec = Math.floor((CurrentDate - startDate)/1000);
        if(sec >= 60){
            min++;
            sec=sec-60;
        }
        else if(min >= 60){
            hour++;
            min=min-60;
        }
    
       
       render();

    }, 1);
}

startBtn.addEventListener("click", start);

console.log(sec);