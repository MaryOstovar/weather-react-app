import React from "react";

export default function WeatherDate(props) {

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const today = new Date(props.date * 1000);
    let day = days[today.getDay()]
    let hour = today.getHours()
    let minute = today.getMinutes()
    if (hour < 10) {
        hour = `0${hour}`
    }
    if (minute < 10) {
        minute = `0${minute}`
    }


    return (<div>{day} {hour}:{minute}</div>)
}