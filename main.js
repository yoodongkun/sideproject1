let hour=0;
let min=0;
let sec=0;

const startBtn = document.getElementById("startBtn");

function start(){
    if(sec==60){
        min++;
        sec=0;
    }
    else if(min==60){
        hour++;
        min=0;
    }

    setInterval(() => {
       sec=sec+1 ;
    }, 1000);

}

startBtn.addEventListener("click", start);

console.log(sec);

