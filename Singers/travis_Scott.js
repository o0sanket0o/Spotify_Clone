const data = {
    "name":"travis scor=t",
    "image": "url"
}
const my_eyes=new Audio('My_eyes.mp3');
const yosemite=new Audio('Yosemite.mp3');
const fein=new Audio('Fein.mp3');
let songs=[fein,yosemite,my_eyes];
const pause=document.getElementById("pause");
let cond=0;
const progressbar=document.getElementById("progressbar");
const mybar=document.getElementById("mybar");
let index=0;
let curr_song=songs[index];
pause.addEventListener("click",function(){
    if(cond==0){
        curr_song.play();
        cond=1;
        pause.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16">
        <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5"/>
      </svg>`;
      let time=songs[index].duration;
      let increase=100/time;
      mybar.style.width="0%";
      managebar(increase,increase);
    }else{
        cond=0;
        curr_song.pause();
        pause.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
      </svg>`;
    }
})
let curr_id=-1;
function managebar(increase,actual){
    curr_id=setTimeout(() => {
        if(increase<100){
            mybar.style.width=`${increase}%`;
            increase=increase+actual;
            managebar(increase,actual);
        }
    }, 1000);
}
const next=document.getElementById("next");
next.addEventListener("click",function(){
    if(index<songs.length-1){
        curr_song.pause();
        curr_song.currentTime=0;
        index=index+1;
        curr_song=songs[index];
        mybar.style.width="0%";
        let time=songs[index].duration;
        let increase=100/time;
        clearTimeout(curr_id);
        managebar(increase,increase);
        curr_song.play();
    }else{
        alert("You have reached the end.");
    }
})
const prev=document.getElementById("prev");
prev.addEventListener("click",function(){
    if(index>0){
        curr_song.pause();
        curr_song.currentTime=0;
        index=index-1;
        curr_song=songs[index];
        let time=songs[index].duration;
        mybar.style.width="0%";
        let increase=100/time;
        clearTimeout(curr_id);
        managebar(increase,increase);
        curr_song.play();
    }else{
        alert("This is the first song itself");
    }
})
const set_volume=document.getElementById("spotify-volume");
set_volume.addEventListener("mouseup",function(){
    let temp=set_volume.value;
    songs[index].volume=`${temp/100}`;
})