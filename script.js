const $ = selector =>  document.querySelector(selector);
const weatherContainer = $('.weather-container');
const form = $('.input-control form');
const notificationElement = $('.notification');
const input = $('.input-control input')
const inputVal = 'China';

form.addEventListener('submit', (e) =>{
        e.preventDefault();
        const inputVal = input.value;
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

        fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const {main, name, sys, weather} = data;
        const icon = `https://openweathermap.org/img/wn/${
        weather[0]["icon"]}.png`;
        const markup = `
            <div class="country">
                <h2>${name} <sup class="short">${sys.country}</sup></h2>
                <div class="add-info">
                <span>Pressure: ${main.pressure}</span>
                <span>Humidity: ${main.humidity}</span>
                </div>
            </div>
                <div class="temp-con">
                <h1 class="temp">${Math.round(main.temp)}<sup>°C</sup></h1>
                <div class="temp-desc">
                <img src=${icon} alt=${weather[0]['main']} />
                <span>${weather[0]['description'].toUpperCase()}</span>
                </div>
                </div>
        `
       weatherContainer.innerHTML= markup;
       console.log(weather[0]['icon'])
       
    })

})
//check if browser supports geolocation
if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser Doesn't support Geolocation";
}


//set user position
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude,longitude);
}

//show error
function showError(error){
    notificationElement.style.display ="block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`
}

function getWeather(latitude,longitude){
   
}
    
    // fetch(url)
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     const {main, name, sys, weather} = data;
    //     const icon = `https://openweathermap.org/img/wn/${
    //     weather[0]["icon"]}.png`;
    //     const markup = `
    //         <div class="country">
    //             <h2>${name} <sup class="short">${sys.country}</sup></h2>
    //             <div class="add-info">
    //             <span>Pressure: ${main.pressure}</span>
    //             <span>Humidity: ${main.humidity}</span>
    //             </div>
    //         </div>
    //             <div class="temp-con">
    //             <h1 class="temp">${Math.round(main.temp)}<sup>°C</sup></h1>
    //             <div class="temp-desc">
    //             <img src=${icon} alt=${weather[0]['main']} />
    //             <span>${weather[0]['description'].toUpperCase()}</span>
    //             </div>
    //             </div>
    //     `
    //    weatherContainer.innerHTML= markup;
    //    console.log(weather[0]['icon'])
       
    // })
    // .catch(() => {
    //          console.log('Enter valid address');
    // })

