// get latitude & longitute
navigator.geolocation.getCurrentPosition((position) => {
    doSomething(position.coords.latitude, position.coords.longitude);
  });

function doSomething(lat, long) {
    // send API to get weather data
    const xhttpr = new XMLHttpRequest();
    xhttpr.open('GET', 'https://api.openweathermap.org/data/2.5/forecast/daily?lat=' + lat + '&lon=' + long + '&appid=e9fa625bcfcb48ae39d979f291c6553b', true);
    
    xhttpr.send();
    
    xhttpr.onload = ()=> {
    if (xhttpr.status === 200) {
        const response = JSON.parse(xhttpr.response);
        console.log(response);
    } else {
        // Handle error
    }
    };
}