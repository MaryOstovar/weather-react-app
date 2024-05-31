import React, {useState, useEffect} from "react";
import axios from "axios";
import WeatherForecastData from "./WeatherForecastData";

import "./weatherForecast.css"

export default function WeatherForecast(props){
    let [forecast, setForecast] = useState(false)
    let [forecastData, setForecastData] = useState(null)

    useEffect(() => {
        function handleForecastApi(response) {
            console.log(response)
            setForecastData(response.data.list);
            setForecast(true);
        }

        function forecastSearch() {
            const urlKey = "af3472f5afc4044f5f13946b750e85f7";
            let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${props.coords.lat}&lon=${props.coords.lon}&appid=${urlKey}&units=metric`;


            axios.get(url).then(handleForecastApi);
        }

        forecastSearch();
    }, [props.coords.lat, props.coords.lon, props.city]); // Re-run the effect if the city prop changes

    if (!forecast) {
        return <div>Loading...</div>;
    }

    return (
        <div className="weatherForecast mt-5">
            <div className="row">
                {forecastData.filter((_, index) => index % 8 === 0).map((dailyForecast, index) => (


                    <div className="col" key={index}>
                        <WeatherForecastData data={dailyForecast} />
                    </div>
                ))}
            </div>
        </div>
    );
}

