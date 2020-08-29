import React from "react";
//import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>

      <h4>
        <FormattedDate date={props.data.date} />
      </h4>
      <h2>
        <span id="tempNow" />
        {Math.round(props.data.temperature)}°F | °C
      </h2>
      <div className="row">
        <div className="col">
          <ul>
            <li>
              <img src={props.data.iconUrl} alt="weather icons" />
            </li>
            <li>{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>

          <br />
        </div>

        <br />
      </div>
    </div>
  );
}
