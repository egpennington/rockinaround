function playSong(videoId) {
    console.log("song playing")
    const player = document.getElementById('player')
    player.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1'
}
