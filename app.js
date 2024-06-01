let progress = document.getElementById("progress");
let song = document.getElementById("song");
let control = document.getElementById("cticon");

song.onloadedmetadata = function(){
progress.max = song.duration;
progress.value = song.currentTime;

}

control.addEventListener('click',(e)=>{
  playpause();
})



function playpause(){

  if(control.classList.contains("fa-pause")){
song.pause();
control.classList.remove("fa-pause");
control.classList.add("fa-play");
control.src = "https://cdn-icons-png.flaticon.com/128/8029/8029490.png"
  }
  else{
    song.play();
    control.classList.add("fa-pause");
control.classList.remove("fa-play");
control.src ="https://cdn-icons-png.flaticon.com/128/2088/2088562.png";

  }

}

if(song.play()){
setInterval(()=>{
  progress.value = song.currentTime;
},500)
}
// song.play();


progress.onchange = function(){
  song.play()
  song.currentTime = progress.value;
  control.classList.add("fa-pause");
  control.classList.remove("fa-play");
}




