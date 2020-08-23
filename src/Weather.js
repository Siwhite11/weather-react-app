import React, { useState } from "react";
import axios from "axios";

export default function Search(response) {
  let [city, setCity] = useState(null);
  let [message, setMessage] = useState(null);

  function changeCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "b1b919a86239e80b1ad3fa4e4880db02";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    axios.get(apiUrl).then(showWeatherDescription);
  }

  function showWeatherDescription(response) {
    setMessage(
      <ul>
        <li>Temperature: {Math.round(response.data.main.temp)} °F</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {Math.round(response.data.wind.speed)} km/h</li>
        <li>
          <img
            src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt="weather icons"
          ></img>
        </li>
      </ul>
    );
  }

  return (
    <div className="SearchBar">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          onChange={changeCity}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
      <h2>{message}</h2>
    </div>
  );
}
