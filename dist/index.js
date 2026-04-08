//TEAMS ELEMENTS 
let homeScoreEl = document.getElementById("home-score-el");
let guestScoreEl = document.getElementById("guest-score-el");
let homeFoulEl = document.getElementById("home-foul-value");
let guestFoulEl = document.getElementById("guest-foul-value");
let timerEl = document.getElementById("timer-el")
let periodEl = document.getElementById("period-value")



//BOARD VALUES
let countScoreHome = 0;
let countScoreGuest = 0;
let countFoulsHome = 0;
let countFoulsGuest = 0;


//TIMER
let timerInterval = null;
let minutes = 12;
let seconds = 0;
let countPeriod = 0;
let isTimerRunning = false;
const maxPeriods = 4;


function sum1Points(team){

    if(team == "home"){
        countScoreHome += 1;
        homeScoreEl.textContent = countScoreHome;
        
    }
    else if(team=="guest"){
        countScoreGuest += 1;
        guestScoreEl.textContent = countScoreGuest;
    } 
    else if(team=="home-foul"){
        countFoulsHome += 1;
        homeFoulEl.textContent = countFoulsHome;
        
    }
    else if(team=="guest-foul"){
        countFoulsGuest +=1;
        guestFoulEl.textContent = countFoulsGuest;
    }   
}
function sum2Points(team){
    
     if(team == "home"){
        countScoreHome +=2;
        homeScoreEl.textContent= countScoreHome;
        
    }
    else if(team=="guest"){
        countScoreGuest += 2;
        guestScoreEl.textContent = countScoreGuest;
    }
    
}
function sum3Points(team){
    
     if(team == "home"){
        countScoreHome +=3;
        homeScoreEl.textContent = countScoreHome;
        
    }
    else if(team=="guest"){
        countScoreGuest +=3;
        guestScoreEl.textContent= countScoreGuest;
    }
    
}

function newGame(){
    countFoulsGuest = 0;
    countScoreGuest = 0;
    countFoulsHome = 0;
    countScoreHome = 0;
    countPeriod =0;
    
    minutes=12;
    seconds=0;
    
    
    guestFoulEl.textContent = countFoulsGuest;
    guestScoreEl.textContent =countScoreGuest;
    homeFoulEl.textContent = countFoulsHome;
    homeScoreEl.textContent = countScoreHome;
    periodEl.textContent = countPeriod;
    timerEl.textContent = "00:00"
    stopTimer();
}

function formatTime(number){
    if(number<10){
        return "0" + number;
    }else{
        return number;
    }
}

function stopTimer(){
    clearInterval(timerInterval);
    isTimerRunning= false;
}
function tickTimer()
{
    if (seconds ===0)
    {
        seconds = 59;
        minutes -=1;
    }
    else
    {
        seconds-=1;
    }
    
    if(seconds ===0 && minutes ===0)
    {
        countPeriod +=1;
        
        if(countPeriod > 4)
        {
            timerEl.textContent = "00:00";
            stopTimer();
            return
        }
        seconds = 0;
        minutes = 12;
    } 
    timerEl.textContent = formatTime(minutes) + ":" + formatTime(seconds)
    periodEl.textContent = countPeriod;
  
}

function startTimer(){
    if (isTimerRunning === true) {return};
    
    isTimerRunning = true;
    timerInterval = setInterval(tickTimer, 1000)
}

