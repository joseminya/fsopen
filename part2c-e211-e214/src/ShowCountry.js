import React from 'react'
import ShowWeather from './ShowWeather'

const ShowCountry=({country})=>{
    const name = country.name.common;
    const capital = country.capital[0];
    const langs = Object.values(country.languages);
    const flags = Object.assign(country.flags);
    
    return(
        <>
        <h2>{name}</h2>
        <p>
            Capital: {capital}
        </p>
        <p>
            Population: {country.population}
        </p>
        <h3>Languages</h3>
        <p>
            {langs.forEach(lang =>lang)}
        </p>
        <p>
            <img src={flags.svg} alt={flags.alt}/>
        </p>
        <ShowWeather key={name} country={country}/>
        </>
    );
}

export default ShowCountry;