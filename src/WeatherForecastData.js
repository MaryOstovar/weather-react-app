import React, {useState, useEffect} from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastData(props) {
    const [forecastData, setForecastData] = useState({
        day: '',
        maxTemp: 0,
        minTemp: 0,
        icon: ''
    });



    useEffect(() => {
        function calculateTime(time) {
            let days = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ];

            let today = new Date(time * 1000);
            today = days[today.getDay()];

            return today;
        }

        let dayData = calculateTime(props.data.dt);
        let maxTempData = Math.round(props.data.main.temp_max);
        let minTempData = Math.round(props.data.main.temp_min);
        let iconId = props.data.weather[0].icon;

        setForecastData({
            day: dayData,
            maxTemp: maxTempData,
            minTemp: minTempData,
            icon: iconId
        });
    }, [props.data]); // Re-run the effect if props.data changes

    return (
        <div className="col">
            <div className="forecast-date opacity-75">{forecastData.day}</div>
            <div className="forecast-icon"><WeatherIcon icon={forecastData.icon} size={76} /></div>
            <div className="forecast-temps">
                <span className="forecast-max-temp">{forecastData.maxTemp}°</span>
                <span className="forecast-min-temp opacity-50">{forecastData.minTemp}°</span>
            </div>
        </div>
    );

}

