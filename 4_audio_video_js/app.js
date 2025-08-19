let video  = document.querySelector("#video");
let playVideo = document.querySelector("#play-video");
let stopVideo = document.querySelector("#stop-video");
let playStopImg1 = document.querySelector("#play-stop-img1");
let playStopImg2 = document.querySelector("#play-stop-img2");
const audio1 = document.querySelector("#audio-1");
const audio2 = document.querySelector("#audio-2");

/* console.log(video , playVideo , stopVideo , playStopImg1 , playStopImg2); */

// funcion para reproducir el video
function reproducirVideo() {
    video.play();
}
playVideo.addEventListener("click", reproducirVideo);

// Evento de click con "addEventListener" que ejecuta reproducirVideo

function pausarVideo() {
    video.pause();

}
// Evento de click con "addEventListener" que ejecuta pausarVideo
stopVideo.addEventListener("click", pausarVideo);



function toggleAudiouno() {
    if (audio1.paused) {
        audio1.play();
        playStopImg1.textContent = "Stop";
    } else {
        audio1.pause();
        playStopImg1.textContent = "Play";
    }
}

playStopImg1.addEventListener("click", toggleAudiouno);




function toggleAudiodos() {
    if (audio2.paused) {
        audio2.play();
        playStopImg2.textContent = "Stop";
    } else {
        audio2.pause();
        playStopImg2.textContent = "Play";
    }
}

playStopImg2.addEventListener("click", toggleAudiodos);



