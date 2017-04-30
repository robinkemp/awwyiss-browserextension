//console.log('awwyiss');

function currentlyPlaying(request, sender, sendResponse) {
    var trackId = {
        "Title" : "",
        "Artist" : "",
        "Identified" : false,
        "eventType" : "TrackId"
    };
    var players = document.getElementsByClassName('player-current-audio');
    if(players && players[0].childNodes){
        for(var nItr = 0; nItr < players[0].childNodes.length; nItr++){
            var className = players[0].childNodes[nItr].className;
            var innerText = players[0].childNodes[nItr].innerText;
            if(className.indexOf('current-track') > -1){
                trackId.Title = innerText;
            } 
            else if(className.indexOf('current-artist') > -1){
                trackId.Artist = innerText;
                if(trackId.Artist.substr(0,3) == 'by '){
                    trackId.Artist = trackId.Artist.substr(3 ,trackId.Artist.length - 3);
                }
            }
        }
        trackId.Identified = trackId.Title != '';
    }
    
    console.log('id', trackId);
    return Promise.resolve(trackId);
}

browser.runtime.onMessage.addListener(currentlyPlaying);