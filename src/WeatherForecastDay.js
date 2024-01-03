import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    date.setDate(date.getDate() + 1);
    let day = date.getDay();
  
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    return days[day];
  }

  return (
    <div>
      <div className="daily">{day()}</div>
      <img src={props.data.condition.icon_url} alt="sunny day" width="73" />
      <div className="forecast-temp">
        <span className="temp-max">{maxTemperature()}</span>
        <span className="temp-min"> | {minTemperature()}</span>
      </div>
    </div>
  );
}