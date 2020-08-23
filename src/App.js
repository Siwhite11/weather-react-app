import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

export default function Container() {
  return (
    <div class="container">
      <h1>New York</h1>

      <div className="row">
        <div className="col">
          <h2>
            <span id="tempNow" />
            <a href="#" id="f-link" className="active">
              75 °F{" "}
            </a>{" "}
            |{" "}
            <a href="#" id="c-link">
              {" "}
              °C{" "}
            </a>
          </h2>
          <h2>
            {" "}
            <span id="description" />
          </h2>
          <img id="icon" className="now" src="" alt="" />
          <div class="col">
            <span class="info" />

            <form>
              <input
                className="search2"
                id="location"
                type="submit"
                value="Current Location"
              />
            </form>
            <h4>Mon August 3st 2020</h4>
            <br />
            <ul>
              <Weather />
            </ul>
            <br />

            <div class="col">
              <small class="me">
                {" "}
                Open Source code by{" "}
                <a
                  href="https://github.com/Siwhite11/weather-app"
                  target="_blank"
                >
                  Stephanie White{" "}
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
