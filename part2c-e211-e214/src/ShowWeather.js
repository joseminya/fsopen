import React, {useState, useEffect} from 'react'
import axios from 'axios'


const ShowWeather=({country})=>{
    const capital = country.capital[0];
    const api_key = process.env.REACT_APP_API_KEY;
    const [temperatura,setTemperatura]=useState('');
    const [viento,setViento]=useState('');
    const [dirviento,setDirviento]=useState('');
    const [icono,setIcono]=useState('');
    const [descripcion,setDescripcion]=useState('');

    const params = {
        access_key: api_key,
        query: capital
    }

    const hook = () => {
        axios.get('http://api.weatherstack.com/current', {params})
            .then(response => {
                const apiResponse = response.data;
                setTemperatura(apiResponse.current.temperature);
                setViento(apiResponse.current.wind_speed);
                setDirviento(apiResponse.current.wind_dir);
                setIcono(apiResponse.current.weather_icons[0]);
                setDescripcion(apiResponse.current.weather_descriptions[0]);
            }).catch(error => {
                console.log(error);
            });
      }  
      useEffect(hook, [params])


    return(
        <>
            <h3>El tiempo en {capital}</h3>
            <p>Temperatura: {temperatura} Celsius</p>
            <p><img src={icono} alt={descripcion}/></p>
            <p>Viento: {viento} direction {dirviento}</p>
        </>
    );
}

export default ShowWeather;