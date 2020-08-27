import React from "react";

import "./App.css";
import Extras from "./Extras";

export default function Container() {
  return (
    <div className="App">
      <h1>New York</h1>
      <h4>Mon August 3st 2020</h4>
      <h2>
        <span id="tempNow" />
        75°F | °C
      </h2>
      <br />

      <div className="row">
        <div class="col-6">
          <span class="info" />

          <form>
            <input
              className="search2"
              id="location"
              type="submit"
              value="Current Location"
            />
          </form>

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
}
