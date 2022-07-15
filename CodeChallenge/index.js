//API Key
const APP_ID = 'fd79c2f6feaf83c48398f8a9cba15e13';

//Get Data by geoloaction
const fetchData = position => {
    const {latitude, longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${APP_ID}`).then(response => response.json())
    .then(data => setWeatherData(data));
}

// Save the data in an array 
const setWeatherData = data => {
    console.log(data);

    const weatherData={
        location: data.name,
        description: data.weather[0].main,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: data.main.temp,
        date: getDate(),
        hour: getTime()
    }

    //Assign data to the ID elements
    Object.keys(weatherData).forEach(key => {
        document.getElementById(key).textContent= weatherData[key];
        localStorage.setItem(key, weatherData[key]);

    });

    cleanUp();

}

const cleanUp= () =>{
    let container = document.getElementById('container');
    let loader = document.getElementById('loader');
    let prev = document.getElementById('prev');
    let show = document.getElementById('show');

    prev.style.display = 'none';
    show.style.display = 'none';
    loader.style.display = 'none';
    container.style.display = 'flex';
}

//Get date
const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${('0' + (date.getMonth() + 1)).slice (- 2)}-${date.getFullYear()}`;

}
const getTime =()=>{
    var hoy = new Date();
    var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    return hora;
}

//get current position
const onload = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}

function refreshPage(){
    window.location.reload();
} 

