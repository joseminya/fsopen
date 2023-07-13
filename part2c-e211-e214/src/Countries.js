import React from 'react';
import ShowCountry from './ShowCountry';
import Country from './Country'

const Countries =({newSearch,countries})=>{
    const nCountries = countries.filter(country=>country.name.common.includes(newSearch)).length;
    if(nCountries > 10){
        return(
            <div>
                <p>Demasiados resultados, especifica otro filtro</p>
            </div>
        );
    }
    if(nCountries === 1){
        return(
            <div>
                {countries.filter(country=>country.name.common.includes(newSearch)).map(country=><ShowCountry key={country.name.common} country={country}/>)}
            </div>
        );
    }
    if(nCountries === 0){
        return(
            <div>
                <p>No hay resultados, especifica otro filtro</p>
            </div>
        );
    }
    return(
        <div>
            {countries.filter(country=>country.name.common.includes(newSearch)).map(country=><Country key={country.name.common} country={country}/>)}
        </div>
    );
}

export default Countries;