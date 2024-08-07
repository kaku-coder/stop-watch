let timer = document.getElementById("timer")
let startbtn=document.querySelector(".start")
let stoptbtn=document.querySelector(".stop")
let resetbtn=document.querySelector(".reset")
let interval;
let timeleft =10


function updatetimer() {
    // Calculate minutes and seconds from the remaining time
    let minutes = Math.floor(timeleft / 60); // Corrected spelling from 'minite' to 'minutes'
    let seconds = timeleft % 60; // Corrected spelling from 'secand' to 'seconds'
    
    // Update the timer display with formatted time
    timer.innerHTML = `${minutes.toString().padStart(2,"0")} : ${seconds.toString().padStart(2,"0")}`;
}



function starttimer(){
    interval=setInterval(()=>{
        timeleft--;
        updatetimer()
        
        // Stop the timer when timeleft reaches 0
        if (timeleft <= 0) {
            clearInterval(interval); // Stop the interval
            alert("Time's up!"); // Alert the user
        }
    },1000)
    
}


function stoptimer(){
    clearInterval(interval)
}

function resettimer(){
    clearInterval(interval)
    timeleft=1500
    updatetimer()
    
}


startbtn.addEventListener("click",starttimer)
stoptbtn.addEventListener("click",stoptimer)
resetbtn.addEventListener("click",resettimer)