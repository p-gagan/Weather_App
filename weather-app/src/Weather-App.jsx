import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./Weather-App.css";
import { useState } from "react";

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });  

    let handleUpdate = (updateInfo)=>{
            setWeatherInfo(updateInfo);
    };

    return(
        <div className="WeatherApp">
        <h1>Weather App</h1>
        <SearchBox updateInfo={handleUpdate}/>
        <InfoBox info={weatherInfo}/>
        </div>
    );

}