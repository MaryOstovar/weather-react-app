import React from "react";

export default function WeatherIcon (props) {
    let iconUrlL = `https://openweathermap.org/img/wn/${props.icon}@2x.png`
    return <span><img className="icon"
                src={iconUrlL}
                alt="weather-icon"/>
    </span>
}