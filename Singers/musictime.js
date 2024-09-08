var isplaying=0;
const play=document.getElementById("play_button");
let song=new Audio('Travis_Scott_-_MY_EYES_Official_Au_.mp3');
const time=document.getElementById("time");
let seconds=0,minutes=0;
play.addEventListener("click",function(){
    load();
    if(isplaying==0){
        song.play();
        isplaying=1;
        }else{
            song.pause();
            isplaying=0;
        }
})
let song2=new Audio('ringtone.mp3');
const mybar=document.getElementById("mybar");
let initial=0;
function load(){
    setInterval(() => {
        if(seconds>59){
            minutes=minutes+1;
            seconds=0;
        }
        if(seconds<10){
            time.innerText=`${minutes}:0${seconds}`;
            seconds=seconds+1;
        }else{
            time.innerText=`${minutes}:${seconds}`;
            seconds=seconds+1;
        }
    }, 1000);
    setInterval(() => {
        if(initial<=100){
            mybar.style.width=`${initial}%`;
            console.log(mybar.style.width);
            initial=initial+0.39;
        }
    }, 1000);
}
