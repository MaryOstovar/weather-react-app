import React from "react";

export default function WeatherIcon (props) {
    let iconUrl = `https://openweathermap.org/img/wn/${props.icon}@2x.png`

    return <span>
        <img className="icon"
                src={iconUrl}
                alt="weather-icon"
                width={props.size} />
    </span>
}