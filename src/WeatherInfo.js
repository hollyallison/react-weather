import React from "react";
import  FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTesmperature";


export default function WeatherInfo(props) {
return (
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
<ul>
<li>
<FormattedDate date={props.data.date} />
</li>
<li className="text-capitalize">{props.data.description}</li>
</ul>
<div className="row mt-3">
  <div className="col-6">
    <img
      src={props.data.icon}
      alt="{props.data.description}" className="float-left" />
   <div className="float-left">
    <weatherTemperature celsius={props.data.temperature} />
      </div> 
  </div>
  <div className="col-6">
    <ul>
      <li>Humidity: {props.data.humidity}</li>
      <li>Wind: {props.data.wind}</li>
    </ul>
  </div>
</div>
</div>
); }


           
