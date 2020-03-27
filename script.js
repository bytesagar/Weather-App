const form = $('.input-control form');
form.addEventListener('submit', (e) =>{
        e.preventDefault();
        const inputVal = input.value;
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const {main, name, sys, weather} = data;
        const icon = weather[0].icon;
        
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
                <img src="icons/${icon}.png" alt="${weather[0]['main']}" class="current-icon"/>
                <span>${weather[0]['description'].toUpperCase()}</span>
                </div>
                </div>
        `;
        console.log(markup);
        
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

//set users position
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
}

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}


