import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";


export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "a84251ecb3613916ef686d6a004c2e34";

    let getWeatherInfo = async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let data =await  response.json();
    
        let result = {
            city: city,
            temp: data.main.temp,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            humidity: data.main.humidity,
            feelsLike: data.main.feels_like,
            weather: data.weather[0].description,
        
        };
        return result;
        }catch(err){
                throw err;
        }

        

    }

    let handleChange = (event)=>{
            setCity(event.target.value);
    };

    let handleSubmit =async (event)=>{
        try{
            event.preventDefault();
        setCity("");
        let result = await getWeatherInfo();
        updateInfo(result);
        }catch(err){
            setErr(true);
        }
        
    
    };

    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required/>
            <br /><br />
            <Button variant="contained" type='submit'> Search
      </Button>
            </form>
<br />
            {err && <p style={{color:"red"}}>No Such City Found!</p>}
        </div>
    );
}