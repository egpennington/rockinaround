const btn = document.getElementById("btn")

btn.addEventListener("click", ()=> {
    console.log("play this song")
})

function playSong(videoId) {
    console.log("song playing")
    const player = document.getElementById("player")
    player.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1"
}
