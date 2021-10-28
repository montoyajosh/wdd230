let temp = document.querySelector(".temp").textContent;
let speed = document.querySelector(".windspeed").textContent;
let windchill = '';
let fahrenheit = ' °F';
let mph = ' mph';

if ((temp <= 50) && (speed > 3)) {
    windchill_formula = Math.round(35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + ((0.4275 * temp) * Math.pow(speed, 0.16)));
    document.querySelector(".windchill").textContent = windchill_formula + fahrenheit;
    document.querySelector(".temp").textContent = temp + fahrenheit;
    document.querySelector(".windspeed").textContent = speed + mph;
} else {
    document.querySelector(".windchill").textContent = 'N/A';
    document.querySelector(".temp").textContent = temp + fahrenheit;
    document.querySelector(".windspeed").textContent = speed + mph;
}

