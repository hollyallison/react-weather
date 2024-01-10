import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo mt-5">
      <div className="left-container">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
          <li className="mt-5">Humidity: {props.data.humidity}%</li>
          <li className="mb-5">Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
      <div className="center-container">
        <img src={props.data.icon} alt={props.data.description} />
      </div>
      <div className="right-container">
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
    </div>
  );
}

