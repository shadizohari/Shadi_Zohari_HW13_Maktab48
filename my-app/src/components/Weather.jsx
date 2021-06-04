import '../css/Weather.css';
import React, { useContext } from "react";
import { WeatherContext } from './WeatherContext';

{/* <img src={`http://openweathermap.org/img/w/" + iconcode + .png`}/> */ }
const Weather = ({ ...props }) => {
    const value = useContext(WeatherContext);
    return (
        <div className="container-weather">
            <div className="flex justycontent-center">
                {value ? <h1>{value.weather[0].description}</h1> : false}
            </div>
            <div className="flex justycontent-center">
                {value ? <img style={{ width: "30%" }} src={`http://openweathermap.org/img/w/${value.weather[0].icon}.png`} />
                    : false}
            </div>
            <div>
                <div className="flex font-size">
                    <p>Wind Speed :</p>
                    {value ? <p>{value.wind.speed}<span className="unit">m/s</span></p>
                        : false}
                </div>
                <div className="flex font-size">
                    <p>Temperature :</p>
                    {value ? <p>{value.main.temp}<span className="unit">k</span></p>
                        : false}
                </div>
                <div className="flex font-size">
                    <p>Humidity : </p>
                    {value ? <p> {value.main.humidity}<span className="unit">%</span></p>
                        : false}
                </div>
                <div className="flex font-size">
                    <p>Visibility :</p>
                    {value ? <p>{value.visibility}<span className="unit">m</span></p>
                        : false}
                </div>
            </div>
        </div>
    )
}

export default Weather;