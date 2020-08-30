import React, { useState } from "react";

export default function DisplayConversion(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div>
        <span>
          {Math.round(props.fahrenheit)}°F|
          <button className="unit" onClick={showCelsius}>
            °C
          </button>
        </span>
      </div>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div>
        <span>
          {Math.round(celsius)}°C|
          <button className="unit" onClick={showFahrenheit}>
            °F
          </button>
        </span>
      </div>
    );
  }
}
