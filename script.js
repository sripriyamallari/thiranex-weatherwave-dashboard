const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const countryName = document.getElementById("countryName");

const temperature = document.getElementById("temperature");
const weatherDescription = document.getElementById("weatherDescription");

const tempValue = document.getElementById("tempValue");
const humidityValue = document.getElementById("humidityValue");
const windValue = document.getElementById("windValue");

const weatherIcon = document.getElementById("weatherIcon");

const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");


// Weather code descriptions
function getWeatherInfo(code) {

    const weatherCodes = {
        0: ["Clear Sky", "☀️"],
        1: ["Mainly Clear", "🌤️"],
        2: ["Partly Cloudy", "⛅"],
        3: ["Overcast", "☁️"],
        45: ["Foggy", "🌫️"],
        48: ["Foggy", "🌫️"],
        51: ["Light Drizzle", "🌦️"],
        53: ["Drizzle", "🌦️"],
        55: ["Heavy Drizzle", "🌧️"],
        61: ["Light Rain", "🌧️"],
        63: ["Rain", "🌧️"],
        65: ["Heavy Rain", "🌧️"],
        71: ["Light Snow", "🌨️"],
        73: ["Snow", "❄️"],
        75: ["Heavy Snow", "❄️"],
        80: ["Rain Showers", "🌦️"],
        81: ["Rain Showers", "🌧️"],
        82: ["Heavy Rain Showers", "⛈️"],
        95: ["Thunderstorm", "⛈️"],
        96: ["Thunderstorm with Hail", "⛈️"],
        99: ["Heavy Thunderstorm", "⛈️"]
    };

    return weatherCodes[code] || ["Unknown", "🌤️"];
}


// Show error message
function showError(message) {

    errorMessage.textContent = message;
    errorMessage.style.display = "block";
}


// Hide error
function hideError() {

    errorMessage.textContent = "";
    errorMessage.style.display = "none";
}


// Search city coordinates
async function getCityCoordinates(city) {

    const url =
        "https://geocoding-api.open-meteo.com/v1/search" +
        "?name=" + encodeURIComponent(city) +
        "&count=1&language=en&format=json";

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Unable to find city.");
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
        throw new Error("City not found. Please enter a valid city name.");
    }

    return data.results[0];
}


// Get weather data
async function getWeather(latitude, longitude) {

    const url =
        "https://api.open-meteo.com/v1/forecast" +
        "?latitude=" + latitude +
        "&longitude=" + longitude +
        "&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code" +
        "&temperature_unit=celsius" +
        "&wind_speed_unit=kmh";

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Weather service is unavailable.");
    }

    return await response.json();
}


// Display weather
function displayWeather(location, weatherData) {

    const current = weatherData.current;

    const info = getWeatherInfo(current.weather_code);

    cityName.textContent = location.name;

    countryName.textContent =
        `${location.admin1 || ""}, ${location.country || ""}`;

    temperature.textContent =
        `${Math.round(current.temperature_2m)}°C`;

    weatherDescription.textContent = info[0];

    weatherIcon.textContent = info[1];

    tempValue.textContent =
        `${Math.round(current.temperature_2m)} °C`;

    humidityValue.textContent =
        `${current.relative_humidity_2m} %`;

    windValue.textContent =
        `${current.wind_speed_10m} km/h`;
}


// Main weather function
async function searchWeather() {

    const city = cityInput.value.trim();

    hideError();

    if (!city) {
        showError("Please enter a city name.");
        return;
    }

    loading.style.display = "block";

    try {

        const location = await getCityCoordinates(city);

        const weatherData =
            await getWeather(
                location.latitude,
                location.longitude
            );

        displayWeather(location, weatherData);

    } catch (error) {

        showError(error.message);

    } finally {

        loading.style.display = "none";
    }
}


// Button click
searchBtn.addEventListener("click", searchWeather);


// Enter key
cityInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        searchWeather();
    }

});


// Load default city
cityInput.value = "Hyderabad";
searchWeather();
