import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Extras from "./Extras";

export default function Container(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: response.data.weather[0].icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <h1>{weatherData.city}</h1>
        <h4>Mon August 3rd 2020</h4>
        <h2>
          <span id="tempNow" />
          {Math.round(weatherData.temperature)}°F | °C
        </h2>
        <br />

        <div className="row">
          <div class="col-6">
            <ul>
              <li>{weatherData.iconUrl}</li>
              <li>Description: {weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)}km/h</li>
            </ul>

            <br />
          </div>
          <div class="col">
            <Extras />
          </div>

          <br />
        </div>
        <div class="col">
          <small className="me">
            {" "}
            Open Source code by{" "}
            <a
              href="https://github.com/Siwhite11/weather-react-app" // eslint-disable-next-line
              target="_blank"
            >
              Stephanie White{" "}
            </a>
          </small>
        </div>
      </div>
    );
  } else {
    let apiKey = "619faf68e45e8f55d57c0c3b00b02041";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=imperial&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
