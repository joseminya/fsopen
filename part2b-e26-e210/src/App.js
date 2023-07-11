import React, { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { id: 0, name: 'Arto Hellas', tlf: '040-123456' },
    { id: 1, name: 'Ada Lovelace', tlf: '39-44-5323523' },
    { id: 2, name: 'Dan Abramov', tlf: '12-43-234345' },
    { id: 3, name: 'Mary Poppendieck', tlf: '39-23-6423122' }
  ]) 

  const [ newSearch, setNewSearch ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newTlf, setNewTlf] = useState('')

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
            id: persons.length,
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