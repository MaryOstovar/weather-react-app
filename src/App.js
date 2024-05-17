import React, {useState} from "react";
import './App.css';
import WeatherIcon from "./WeatherIcon";
import WeatherDate from "./WeatherDate";
import axios from 'axios';


export default function App(props) {
    let [weatherObject, setWeatherObject] = useState({ready: false});
    let [city, setCity] = useState(props.defaultCity);
    let [unit, setUnit] = useState("metric")

    function getResponse(response) {
        console.log(response.data)
        setWeatherObject({
            ready: true,
            city: response.data.name,
            description: response.data.weather[0].description,
            precipitation: response.data.cod,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            temperature: response.data.main.temp,
            icon: response.data.weather[0].icon,
            date: response.data.dt
        })
    }
    function handleForm(event) {
        event.preventDefault();
        search();
    }
    function handleCityName(event) {
        console.log(city)
        setCity(event.target.value)
    }

    function search() {
        const apiKey = "af3472f5afc4044f5f13946b750e85f7";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
        axios.get(url).then(getResponse);
    }
    function handleFahrenheitTemp(event){
        event.preventDefault();
        setUnit("imperial")
        search();

    }
    function handleCelsiusTemp(event){
        event.preventDefault();
        setUnit("metric")
        search();
    }


    if (weatherObject.ready) {
        return (
            <div className="App">
                <div className="container  p-4">
                    <form className="input-group d-flex" onSubmit={handleForm}>
                        <input className="form-control me-2" type="search" onChange={handleCityName} placeholder="type a city"/>
                        <input className=" btn btn-light " type="submit" value="search" />
                    </form>

                    <div className="row mt-5">
                        <div className="col-8">
                            <div className="row">
                                <div className="col-6  ">
                                  < WeatherIcon icon={weatherObject.icon}/>

                                    <div className="temperature  ">{Math.round(weatherObject.temperature)}</div>
                                    <span className="units"><a className="temp-unit"  href="/" onClick={handleCelsiusTemp}>°C</a>|<a className="temp-unit" href="/" onClick={handleFahrenheitTemp}>°F</a></span>
                                </div>
                                <div className="col-6 weather-details ">
                                    <ul>
                                        <li> Precipitation: {weatherObject.precipitation}%</li>
                                        <li>Humidity: {weatherObject.humidity}%</li>
                                        <li>Wind: {weatherObject.wind} km/h</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 header">

                            <h1> {weatherObject.city}</h1>
                            <ul className="description">
                                <li>
                                    <WeatherDate date={weatherObject.date}/>
                                </li>
                                <li>
                                    {weatherObject.description}

                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        );
    } else {

        search()
        return <h1> Loading ..</h1>
    }


}


