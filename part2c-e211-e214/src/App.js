import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([]) 

  const [ newSearch, setNewSearch ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newTlf, setNewTlf] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }  
  useEffect(hook, [])


  const addPerson = (event)=>{
    event.preventDefault();
    if(newName===''){ 
      alert('No puedes tener nombres de personas vacíos');
     }else{
      if(newTlf===''){
        alert('No puedes tener télefonos vacíos de personas');
        return;
      }else{
        if(persons.some(p=>p.name === newName)){
          alert('No puedes tener dos personas con el nombre \''+newName+'\'');
        }else{
          const personObject = {
            id: persons.length+1,
            name: newName,
            tlf: newTlf,
          }
          setPersons(persons.concat(personObject));
          setNewName('');
          setNewTlf('');
        }
      }
    }
  }
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleTlfChange = (event) => {
    setNewTlf(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={newSearch} handleSearchChange={handleSearchChange} />
      <h2>Add a new</h2>
      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newTlf={newTlf}
        handleTlfChange={handleTlfChange}
      />
      <h2>Numbers</h2>
      <Persons newSearch={newSearch} persons={persons} />
    </div>
  )
}

export default App