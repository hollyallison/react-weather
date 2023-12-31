import React, { useState } from "react";
import  FormattedDate from "./FormattedDate";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
    const[weatherData, setWeatherdata] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data);
        setWeatherdata({
          ready: true,
          city: response.data.city,
          description: response.data.condition.description,
          date: new Date (response.data.time * 1000),
          temperature: response.data.temperature.current,
          humidity: response.data.temperature.humidity,
          wind: response.data.wind.speed,
          icon: response.data.condition.icon_url,
        });
      }
    

if (weatherData.ready) {
 return (
    <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/></div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100"/></div>
       </div> </form>
      <h1>{weatherData.city}</h1>
      <ul>
  <li>
    <FormattedDate date={weatherData.date} />
  </li>
  <li className="text-capitalize">{weatherData.description}</li>
</ul>
      <div className="row">
        <div className="col-6">
          <img
            src={weatherData.icon}
            alt="{weatherData.description}" className="float-left" />
         <div className="float-left">
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="unit"> ℃</span>
            </div> 
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}</li>
            <li>Wind: {weatherData.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );   
} else { 
const apiKey = "2c40a31a9bebb30oc02aftf7a42a8b2e";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;    
axios.get(apiUrl).then(handleResponse);

return "loading...";
}
}
