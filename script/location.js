// get latitude & longitute
navigator.geolocation.getCurrentPosition((position) => {
    doSomething(position.coords.latitude, position.coords.longitude);
  });

function doSomething(lat, long) {
    // send API to get weather data
    const xhttpr = new XMLHttpRequest();
    xhttpr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + long + '&appid=8426cd40d49e2f654dd794fb602201e0', true);
    
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