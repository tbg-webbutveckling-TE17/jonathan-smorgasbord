var videoplay = document.getElementById("videoplayer");
var videoplayer = document.getElementById("videoplayer-video");
var playPause = document.getElementById("playPause")
var playPauseButton = document.getElementById("playPauseButton")
var volumeInput = document.getElementById("volumerange")
var progressBar = document.getElementById("progressfill")
var fullscreen = document.getElementById("fullscreen")

videoplayer.addEventListener("timeupdate", update)
videoplayer.addEventListener("click", updateButton)
playPauseButton.addEventListener("click", updateButton)
fullscreen.addEventListener("click", fullscreenVideo)
volumeInput.addEventListener("input", changeVolume)

// Simplified version of Script: http://thenewcode.com/792/Create-A-Simple-HTML5-Video-Playlist
var playlist = document.getElementById("playlist"),
links = playlist.getElementsByTagName('a');
for (var i=0; i<links.length; i++) {
    links[i].onclick = handler;
}
function handler(e) {
e.preventDefault();
videotarget = this.getAttribute("href");
videoplayer.src = videotarget;
playVideo();  
}


function update() {
    const percent = (videoplayer.currentTime / videoplayer.duration) * 100;
    console.log(percent)
    progressBar.style.width = `${percent}%`;
}

function updateButton() {
    if(videoplayer.paused) {
        videoplayer.play();
        playPause.className = "fas fa-pause";
    } else {
        videoplayer.pause(); 
        playPause.className = "fas fa-play";  
    }
}

function changeVolume() {
    var volumeValue = volumeInput.value;
    videoplayer.volume = volumeValue;
    console.log(volumeValue);
}

function fullscreenVideo() {
    if (!document.fullscreenElement) {
        videoplay.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
        }
    }
}