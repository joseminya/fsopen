import React, { useState } from 'react'
import ShowCountry from './ShowCountry'


const Country=({country})=>{
    const [showCountry, setShowCountry] = useState(false) 
    return(
        <div>
            {country.name.common} 
            <button onClick={() => setShowCountry(!showCountry)}>
                {showCountry ? ' Unshow ' : ' Show ' }
            </button>
            {showCountry ? <ShowCountry key={country.name.common} country={country}/>:''}            
        </div>
    );
}

export default Country;