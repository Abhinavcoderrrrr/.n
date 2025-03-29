function getstarted(){
    window.location.href = "main.html"
}

function naruto(){
    window.location.href = "Naruto.html"
}

function shippuden(){
    window.location.href = "NarutoShippuden.html"
}  

function boruto(){
    window.location.href = "Boruto.html"
}

function playEpisode(seriesName, episodeNumber) {
    // No need for file ID parameter as we'll retrieve it from localStorage
    
    // Simple redirect to player with parameters
    window.location.href = `player.html?series=${seriesName}&episode=${episodeNumber}`;
}

