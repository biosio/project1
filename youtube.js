// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '1200',
        width: '1850',
        videoId: 'kWGlR4uPo8Q',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for a little more than 10 seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 10099);
        done = true;
    }
    

    //        document.getElementById("player").onclick = function() { 

    //  document.getElementById("player").style.display = "none";
    // }
}
function stopVideo() {
    player.stopVideo();
    document.getElementById("player").style.display = "none"
}


// function hideVideo(event) {
//     if (event.data == YT.PlayerState.ended) {
//         player.style.display = "none";
//     }
// }