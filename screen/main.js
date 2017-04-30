
$(document).ready(function(){
    $('#info').text('ready');
});

$(document).on('click', '#getCurrentlyPlaying', getCurrentlyPlaying);

function getCurrentlyPlaying(){
    var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then((tabs) => {
        browser.tabs
            .sendMessage(tabs[0].id, {'eventType':'getCurrentlyPlaying'})
            .then(response => gotNewTrack(response));
    });
}

function gotNewTrack(trackInfo){
    if(trackInfo.Identified){
        $('#info').text(trackInfo.Title + " by " + trackInfo.Artist);
    } else {
        $('#info').text('could not identify');
    }
}
