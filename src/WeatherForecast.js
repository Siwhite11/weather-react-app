import React, { useState } from "react";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        10:00
        {forecast.list[0].weather[0].icon}
        {Math.round(forecast.list[0].main.temp)}
      </div>
    );
  } else {
    let apiKey = "619faf68e45e8f55d57c0c3b00b02041";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
