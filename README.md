# 🌤️ WeatherWave – Real-Time Weather Dashboard

A responsive and interactive **Weather Dashboard** developed as part of **Thiranex Task 4 – Asynchronous JavaScript & RESTful APIs**.

WeatherWave allows users to search for a city and view real-time weather information using a public REST API. The project demonstrates asynchronous JavaScript, API integration, JSON data processing, DOM manipulation, and error handling.

## 🌐 Live Demo

🔗 https://sripriyamallari.github.io/thiranex-weatherwave-dashboard/

---

## 📌 Project Overview

**WeatherWave** is a web-based weather application that retrieves weather information based on the city entered by the user.

The application uses JavaScript's `fetch()` API with `async/await` to communicate with a weather REST API and dynamically displays the received data on the webpage.

---

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Display current temperature
- 💧 Display humidity
- 💨 Display wind speed
- 🌤️ Display weather conditions
- ⚡ Fetch data asynchronously using `fetch()`
- 📦 Process JSON API responses
- ❌ Error handling for invalid cities and failed requests
- ⌨️ Search using the Enter key
- 🔄 Dynamic DOM updates
- 📱 Responsive design
- 💻 Works on desktop and mobile devices

---

## 🛠️ Technologies Used

- **HTML5** – Website structure
- **CSS3** – Styling and responsive design
- **JavaScript** – Application logic
- **Fetch API** – API requests
- **Async/Await** – Asynchronous programming
- **REST API** – Weather data retrieval
- **JSON** – Data processing
- **DOM Manipulation** – Dynamic content rendering
- **GitHub Pages** – Website deployment

---

## ⚙️ How It Works

1. User enters a city name in the search box.
2. JavaScript sends a request to the geocoding API.
3. The city name is converted into geographical coordinates.
4. The coordinates are sent to the weather REST API.
5. The API returns weather information in JSON format.
6. JavaScript processes the JSON response.
7. The weather information is dynamically displayed on the dashboard.
8. If the city is invalid or the API request fails, an error message is displayed.

---

## 🌦️ Weather Information

WeatherWave displays the following information:

| Information | Description |
|---|---|
| 🌡️ Temperature | Current temperature in °C |
| 💧 Humidity | Current relative humidity |
| 💨 Wind Speed | Current wind speed in km/h |
| 🌤️ Weather Condition | Current weather condition |
| 📍 Location | Selected city and country |

---

## 📱 Responsive Design

WeatherWave is designed to work across different screen sizes.

### Supported Devices

- 📱 Mobile phones
- 💻 Laptops
- 🖥️ Desktop computers
- 📲 Tablets

The layout automatically adapts to smaller screens using CSS media queries.

---

## 📂 Project Structure

```text
thiranex-weatherwave-dashboard/
│
├── index.html
├── style.css
├── script.js
└── README.md
