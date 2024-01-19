navigator.geolocation.getCurrentPosition((position) => {
    doSomething(position.coords.latitude, position.coords.longitude);
  });

function doSomething(x, y) {
    console.log(x, y);
}