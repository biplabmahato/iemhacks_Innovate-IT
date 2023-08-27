let weather_conditions = [
    {
        "code": 1000,
        "day": "Sunny",
        "night": "Clear",
        "icon": 113
    },
    {
        "code": 1003,
        "day": "Partly cloudy",
        "night": "Partly cloudy",
        "icon": 116
    },
    {
        "code": 1006,
        "day": "Cloudy",
        "night": "Cloudy",
        "icon": 119
    },
    {
        "code": 1009,
        "day": "Overcast",
        "night": "Overcast",
        "icon": 122
    },
    {
        "code": 1030,
        "day": "Mist",
        "night": "Mist",
        "icon": 143
    },
    {
        "code": 1063,
        "day": "Patchy rain possible",
        "night": "Patchy rain possible",
        "icon": 176
    },
    {
        "code": 1066,
        "day": "Patchy snow possible",
        "night": "Patchy snow possible",
        "icon": 179
    },
    {
        "code": 1069,
        "day": "Patchy sleet possible",
        "night": "Patchy sleet possible",
        "icon": 182
    },
    {
        "code": 1072,
        "day": "Patchy freezing drizzle possible",
        "night": "Patchy freezing drizzle possible",
        "icon": 185
    },
    {
        "code": 1087,
        "day": "Thundery outbreaks possible",
        "night": "Thundery outbreaks possible",
        "icon": 200
    },
    {
        "code": 1114,
        "day": "Blowing snow",
        "night": "Blowing snow",
        "icon": 227
    },
    {
        "code": 1117,
        "day": "Blizzard",
        "night": "Blizzard",
        "icon": 230
    },
    {
        "code": 1135,
        "day": "Fog",
        "night": "Fog",
        "icon": 248
    },
    {
        "code": 1147,
        "day": "Freezing fog",
        "night": "Freezing fog",
        "icon": 260
    },
    {
        "code": 1150,
        "day": "Patchy light drizzle",
        "night": "Patchy light drizzle",
        "icon": 263
    },
    {
        "code": 1153,
        "day": "Light drizzle",
        "night": "Light drizzle",
        "icon": 266
    },
    {
        "code": 1168,
        "day": "Freezing drizzle",
        "night": "Freezing drizzle",
        "icon": 281
    },
    {
        "code": 1171,
        "day": "Heavy freezing drizzle",
        "night": "Heavy freezing drizzle",
        "icon": 284
    },
    {
        "code": 1180,
        "day": "Patchy light rain",
        "night": "Patchy light rain",
        "icon": 293
    },
    {
        "code": 1183,
        "day": "Light rain",
        "night": "Light rain",
        "icon": 296
    },
    {
        "code": 1186,
        "day": "Moderate rain at times",
        "night": "Moderate rain at times",
        "icon": 299
    },
    {
        "code": 1189,
        "day": "Moderate rain",
        "night": "Moderate rain",
        "icon": 302
    },
    {
        "code": 1192,
        "day": "Heavy rain at times",
        "night": "Heavy rain at times",
        "icon": 305
    },
    {
        "code": 1195,
        "day": "Heavy rain",
        "night": "Heavy rain",
        "icon": 308
    },
    {
        "code": 1198,
        "day": "Light freezing rain",
        "night": "Light freezing rain",
        "icon": 311
    },
    {
        "code": 1201,
        "day": "Moderate or heavy freezing rain",
        "night": "Moderate or heavy freezing rain",
        "icon": 314
    },
    {
        "code": 1204,
        "day": "Light sleet",
        "night": "Light sleet",
        "icon": 317
    },
    {
        "code": 1207,
        "day": "Moderate or heavy sleet",
        "night": "Moderate or heavy sleet",
        "icon": 320
    },
    {
        "code": 1210,
        "day": "Patchy light snow",
        "night": "Patchy light snow",
        "icon": 323
    },
    {
        "code": 1213,
        "day": "Light snow",
        "night": "Light snow",
        "icon": 326
    },
    {
        "code": 1216,
        "day": "Patchy moderate snow",
        "night": "Patchy moderate snow",
        "icon": 329
    },
    {
        "code": 1219,
        "day": "Moderate snow",
        "night": "Moderate snow",
        "icon": 332
    },
    {
        "code": 1222,
        "day": "Patchy heavy snow",
        "night": "Patchy heavy snow",
        "icon": 335
    },
    {
        "code": 1225,
        "day": "Heavy snow",
        "night": "Heavy snow",
        "icon": 338
    },
    {
        "code": 1237,
        "day": "Ice pellets",
        "night": "Ice pellets",
        "icon": 350
    },
    {
        "code": 1240,
        "day": "Light rain shower",
        "night": "Light rain shower",
        "icon": 353
    },
    {
        "code": 1243,
        "day": "Moderate or heavy rain shower",
        "night": "Moderate or heavy rain shower",
        "icon": 356
    },
    {
        "code": 1246,
        "day": "Torrential rain shower",
        "night": "Torrential rain shower",
        "icon": 359
    },
    {
        "code": 1249,
        "day": "Light sleet showers",
        "night": "Light sleet showers",
        "icon": 362
    },
    {
        "code": 1252,
        "day": "Moderate or heavy sleet showers",
        "night": "Moderate or heavy sleet showers",
        "icon": 365
    },
    {
        "code": 1255,
        "day": "Light snow showers",
        "night": "Light snow showers",
        "icon": 368
    },
    {
        "code": 1258,
        "day": "Moderate or heavy snow showers",
        "night": "Moderate or heavy snow showers",
        "icon": 371
    },
    {
        "code": 1261,
        "day": "Light showers of ice pellets",
        "night": "Light showers of ice pellets",
        "icon": 374
    },
    {
        "code": 1264,
        "day": "Moderate or heavy showers of ice pellets",
        "night": "Moderate or heavy showers of ice pellets",
        "icon": 377
    },
    {
        "code": 1273,
        "day": "Patchy light rain with thunder",
        "night": "Patchy light rain with thunder",
        "icon": 386
    },
    {
        "code": 1276,
        "day": "Moderate or heavy rain with thunder",
        "night": "Moderate or heavy rain with thunder",
        "icon": 389
    },
    {
        "code": 1279,
        "day": "Patchy light snow with thunder",
        "night": "Patchy light snow with thunder",
        "icon": 392
    },
    {
        "code": 1282,
        "day": "Moderate or heavy snow with thunder",
        "night": "Moderate or heavy snow with thunder",
        "icon": 395
    }
]



async function fetchData() {
    let city = document.getElementById("city").value
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=14`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '723c402b0dmsh6e611e5035d518ep107644jsn4a80a57e8f2e',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    await fetch(url, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            let weather1 = response.current.condition.text;
            let weather2 = response.forecast.forecastday[1].day.condition.text;
            let weather3 = response.forecast.forecastday[2].day.condition.text;
            let dates = response.forecast.forecastday;
            let location1 = dates[0].date;
            let location2 = dates[1].date;
            let location3 = dates[2].date;
            let temperature1 = response.current.temp_c;
            let temperature2 = response.forecast.forecastday[1].day.avgtemp_c;
            let temperature3 = response.forecast.forecastday[2].day.avgtemp_c;
            let humidity1 = response.current.humidity;
            let humidity2 = response.forecast.forecastday[1].day.avghumidity;
            let humidity3 = response.forecast.forecastday[2].day.avghumidity;
            let windspeed1 = response.current.wind_mph
            let windspeed2 = response.forecast.forecastday[1].day.maxwind_mph;
            let windspeed3 = response.forecast.forecastday[2].day.maxwind_mph;
            let rain1 = response.forecast.forecastday[0].day.daily_chance_of_rain;
            let rain2 = response.forecast.forecastday[1].day.daily_chance_of_rain;
            let rain3 = response.forecast.forecastday[2].day.daily_chance_of_rain;
            console.log(location1)
            console.log(weather1);
            // console.log(location1);
            weather_conditions.forEach(codes => {
                if (weather1 === codes.day || weather1 === codes.night) {
                    const icon = `day/${codes.icon}.png`;
                    console.log(icon);
                    let image = document.getElementById("icon1");
                    image.src = icon;
                }
            })

            weather_conditions.forEach(codes => {
                if (weather2 === codes.day || weather2 === codes.night) {
                    const icon = `day/${codes.icon}.png`;
                    console.log(icon);
                    let image = document.getElementById("icon2");
                    image.src = icon;
                }
            })

            weather_conditions.forEach(codes => {
                if (weather3 === codes.day || weather3 === codes.night) {
                    const icon = `day/${codes.icon}.png`;
                    console.log(icon);
                    let image = document.getElementById("icon3");
                    image.src = icon;
                }
            })

            let image_icon1 = document.getElementById("icon-capt1");
            let loc1 = document.getElementById("loc1")
            let temp1 = document.getElementById("temp1")
            let wind1 = document.getElementById("wind1")
            let hum1 = document.getElementById("hum1")
            let prec1 = document.getElementById("prec1")
            image_icon1.innerHTML = weather1;
            loc1.innerHTML = `${city} <br>(${location1})`;
            temp1.innerHTML = `Temperature: ${temperature1}°C`
            hum1.innerHTML = `Humidity: ${humidity1} %`
            wind1.innerHTML = `Wind: ${windspeed1} M/S`
            prec1.innerHTML = `Precipitation: ${rain1} %`

            let image_icon2 = document.getElementById("icon-capt2");
            let loc2 = document.getElementById("loc2")
            let temp2 = document.getElementById("temp2")
            let wind2 = document.getElementById("wind2")
            let hum2 = document.getElementById("hum2")
            let prec2 = document.getElementById("prec2")
            image_icon2.innerHTML = weather2;
            loc2.innerHTML = `${city} <br>(${location2})`;
            temp2.innerHTML = `Temperature: ${temperature2}°C`
            hum2.innerHTML = `Humidity: ${humidity2} %`
            wind2.innerHTML = `Wind: ${windspeed2} M/S`
            prec2.innerHTML = `Precipitation: ${rain2} %`

            let image_icon3 = document.getElementById("icon-capt3");
            let loc3 = document.getElementById("loc3")
            let temp3 = document.getElementById("temp3")
            let wind3 = document.getElementById("wind3")
            let hum3 = document.getElementById("hum3")
            let prec3 = document.getElementById("prec3")
            image_icon3.innerHTML = weather3;
            loc3.innerHTML = `${city} <br>(${location3})`;
            temp3.innerHTML = `Temperature: ${temperature3}°C`
            hum3.innerHTML = `Humidity: ${humidity3} %`
            wind3.innerHTML = `Wind: ${windspeed3} M/S`
            prec3.innerHTML = `Precipitation: ${rain3} %`

            let percenttemp = document.getElementById("percent2");
            let percentprec = document.getElementById("percent1");
            let percenthum = document.getElementById("percent3");
            let percentrisk = document.getElementById("percent4");

            let precfact = (50 / 2500) * ((((response.forecast.forecastday[0].day.totalprecip_mm) + (response.forecast.forecastday[1].day.totalprecip_mm) + (response.forecast.forecastday[2].day.totalprecip_mm)) / 3) * 365);
            let tempfact = ((100 / 55) * ((((response.forecast.forecastday[0].day.avgtemp_c) + (response.forecast.forecastday[1].day.avgtemp_c) + (response.forecast.forecastday[2].day.avgtemp_c)) / 3)));
            let humidfact = (50 / 65) * (((response.forecast.forecastday[0].day.avghumidity) + (response.forecast.forecastday[1].day.avghumidity) + (response.forecast.forecastday[2].day.avghumidity)) / 3)
            console.log(tempfact);
            console.log(precfact);
            console.log(humidfact);
            let riskfact = ((((Math.abs(50 - precfact)) + (Math.abs(50 - tempfact)) + (Math.abs(50 - humidfact))) * 2) / 3)

            let precstat;
            let tempstat;
            let humidstat;
            if (precfact <= 20) {
                precstat = "Too Dry"
            }
            else if (20 < precfact && precfact <= 30) {
                precstat = "Dry"
            }
            else if (30 < precfact && precfact <= 40) {
                precstat = " Slightly Dry"
            }
            else if (40 < precfact && precfact <= 60) {
                precstat = "Optimal"
            }
            else if (60 < precfact && precfact <= 70) {
                precstat = "Slightly Wet"
            }
            else if (70 < precfact && precfact <= 80) {
                precstat = "Wet"
            }
            else if (80 < precfact) {
                precstat = "Too Wet"
            }


            if (tempfact <= 20) {
                tempstat = "Too Cold"
            }
            else if (20 < tempfact && tempfact <= 30) {
                tempstat = "Cold"
            }
            else if (30 < tempfact && tempfact <= 40) {
                tempstat = " Slightly Cold"
            }
            else if (40 < tempfact && tempfact <= 60) {
                tempstat = "Optimal"
            }
            else if (60 < tempfact && tempfact <= 70) {
                tempstat = "Slightly Warm"
            }
            else if (70 < tempfact && tempfact <= 80) {
                tempstat = "Hot"
            }
            else if (80 < tempfact) {
                tempstat = "Too Hot"
            }


            if (humidfact <= 20) {
                humidstat = "Too Dry"
            }
            else if (20 < humidfact && humidfact <= 30) {
                humidstat = "Dry"
            }
            else if (30 < humidfact && humidfact <= 40) {
                humidstat = " Slightly Dry"
            }
            else if (40 < humidfact && humidfact <= 60) {
                humidstat = "Optimal"
            }
            else if (60 < humidfact && humidfact <= 70) {
                humidstat = "Slightly Humid"
            }
            else if (70 < humidfact && humidfact <= 80) {
                humidstat = "Humid"
            }
            else if (80 < humidfact) {
                humidstat = "Too Humid"
            }

            if (tempfact > 100) {
                percenttemp.style.width = `100%`
            }
            else {
                percenttemp.style.width = `${tempfact}%`
            }
            if (precfact > 100) {
                percentprec.style.width = `100%`
            }
            else {
                percentprec.style.width = `${precfact}%`
            }
            if (humidfact > 100) {
                percenthum.style.width = `100%`
            }
            else {
                percenthum.style.width = `${humidfact}%`
            }
            if (riskfact > 100) {
                percentrisk.style.width = `100%`
            }
            else {
                percentrisk.style.width = `${riskfact}%`
            }
            // percentprec.style.width = 
            // percenthum.style.width = `${humidfact}%`
            // percentrisk.style.width = `${riskfact}%`


            percenttemp.innerHTML = `${tempstat}<br>${tempfact}%`;
            percentprec.innerHTML = `${precstat}<br>${precfact}%`;
            percenthum.innerHTML = `${humidstat}<br>${humidfact}%`;
            percentrisk.innerHTML = `Risk = ${riskfact}%`;

        })
        .catch(err => console.error(err));
    // let weather = response.current.condition.text
    // console.log(weather)
}
let button = document.getElementById("btn")
button.addEventListener('click', fetchData)


//2000mm precipitation
//25 temperature
//65% humidity