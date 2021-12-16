const weatherapiURL = "https://api.openweathermap.org/data/2.5/weather?q=Antipolo&units=metric&appid=c3affef608fbd43350f108a8f72cddac";

fetch(weatherapiURL).then((response) => response.json()).then((jsonObject) => {
    let temperature = document.createElement('h3');
    t = jsonObject.main.temp;
    temperature.textContent = "Temperature: " + t + " °C";
    document.querySelector('.weather-forecast').appendChild(temperature);
    
    let currently = document.createElement('h3');
    weather = jsonObject.weather[0].description;
    currently.textContent = "Currently: " + weather;
    document.querySelector('.weather-forecast').appendChild(currently);

    let humidity = document.createElement('h3');
    wind = jsonObject.main.humidity;
    humidity.textContent = "Humidity: " + wind + "%";
    document.querySelector('.weather-forecast').appendChild(humidity);
});

const forecastapiURL = 'https://api.openweathermap.org/data/2.5/forecast?q=Antipolo&units=metric&appid=c3affef608fbd43350f108a8f72cddac';

fetch(forecastapiURL).then((response) => response.json()).then((jsonObject) => {
    
    let forecast = jsonObject.list;

    for (let i = 0; i < forecast.length; i++) {
        
        let forecastdate_string = forecast[i].dt_txt;
        let dt = forecastdate_string.substring(11, 24);
        let forecastdate = new Date(forecastdate_string);
        
        if (dt === '18:00:00') {

            let flexcol = document.createElement('div');
            flexcol.classList.add('flex-col');

            let col_head_span = document.createElement('span');
            col_head_span.classList.add('col-head');
            col_head_span.textContent = forecastdate.toLocaleString("default", {weekday: "long"});
            flexcol.appendChild(col_head_span);

            let weather_info_div = document.createElement('div');
            weather_info_div.classList.add('weather-info');
            flexcol.appendChild(weather_info_div);

            let img = document.createElement('img');
            img.setAttribute("src", `http://openweathermap.org/img/wn/${forecast[i].weather["0"].icon}@2x.png`);
            img.setAttribute("alt", `Icon depicting ${forecast[i].weather["0"].description} in ${jsonObject.city.name}, Idaho`);
            weather_info_div.appendChild(img);

            let data_span = document.createElement('span');
            data_span.classList.add('data');
            data_span.innerHTML = `${Math.round(forecast[i].main.temp)}°C`;
            weather_info_div.appendChild(data_span);            
    
            document.querySelector('div.flex').appendChild(flexcol);
        }
    }
});
