import React, { useState } from "react";
import axios from "axios";
import "./App.css";

import WeatherInfo from "./WeatherInfo";

export default function Container(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    let apiKey = "619faf68e45e8f55d57c0c3b00b02041";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();

    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            autoFocus="on"
            onChange={handleCityChange}
          ></input>
          <input className="searchCity" type="submit" value="Search"></input>
        </form>
        <WeatherInfo data={weatherData} />
        <br />

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
    search();
    return "Loading...";
  }
}
