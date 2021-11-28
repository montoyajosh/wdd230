const weatherapiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=c3affef608fbd43350f108a8f72cddac';

fetch(weatherapiURL).then((response) => response.json()).then((jsonObject) => {
    
    const temperature = document.querySelector('.temperature');
    t = jsonObject.main.temp;
    temperature.textContent = t;

    const currently = document.querySelector('.currently');
    currently.textContent = jsonObject.weather[0].description;

    const windspeed = document.querySelector('.windspeed');
    w = jsonObject.wind.speed;
    windspeed.textContent = w;

    const humidity = document.querySelector('.humidity');
    humidity.textContent = jsonObject.main.humidity;

    let windchill_factor = 'N/A';

    if ((t <= 50) && (w > 3)) {
        windchill_factor = `${Math.round(35.74 + (0.6215 * t) - (35.75 * Math.pow(w, 0.16)) + ((0.4275 * t) * Math.pow(w, 0.16)))}&#176;F`;
    } 
    
    document.querySelector('.windchill').innerHTML = windchill_factor;
  });

const forecastapiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=c3affef608fbd43350f108a8f72cddac';

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
            data_span.innerHTML = `${Math.round(forecast[i].main.temp)}&#176;F`;
            weather_info_div.appendChild(data_span);            
    
            document.querySelector('div.flex').appendChild(flexcol);
        }
    }
  });
