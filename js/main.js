function playSong(id) {
    console.log("song playing")
    const player = document.getElementById("player")
    player.src = "https://www.youtube.com/embed/" + id + "?autoplay=1"
}
