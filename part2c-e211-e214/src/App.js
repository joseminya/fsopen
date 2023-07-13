import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import Countries from './Countries'
import axios from 'axios'

const App = () => {
  const [ countries, setCountries ] = useState([]) 

  const [ newSearch, setNewSearch ] = useState('')
  
  const hook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }  
  useEffect(hook, [])
 
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  }

  return (
    <div>
      <h2>Search country</h2>
      <Filter search={newSearch} handleSearchChange={handleSearchChange} />
      <h2>Countries</h2>
      <Countries newSearch={newSearch} countries={countries} />
    </div>
  )
}

export default App