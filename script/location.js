// url: https://api.ipgeolocation.io/ipgeo?apiKey=e88203af81524391a7641693aa2d7430&ip=<ADD IP HERE>

// find ip of the user
src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"

$(document).ready(()=>{
    $.getJSON("https://api.ipify.org?format=json",
    function (data) {

        // Displayin IP address on screen
        $("#gfg").html(data.ip);
    })
});