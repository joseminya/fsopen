import React, { useState } from 'react'
import Person from './Person'


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
      <form onSubmit={addPerson}>
        <div>
          filter shown with 
          <input 
            value={newSearch}
            onChange={handleSearchChange}
          />
        </div>
        <div>
          <h2>Add a new</h2>
          <table>
            <tbody>
            <tr>
              <td>
          name: 
          </td>
          <td>
          <input 
            value={newName}
            onChange={handleNameChange}
          />
          </td>
          </tr>
          <tr>
            <td>
          tlf: 
          </td>
          <td>
          <input 
            value={newTlf}
            onChange={handleTlfChange}
          />
          </td>
          </tr>
          </tbody>
          </table>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <table>
        <thead></thead>
        <tbody>
          {persons.filter(person=>person.name.indexOf(newSearch)>=0).map(person=><Person key={person.id} person={person}/>)}
        </tbody>
      </table>
    </div>
  )
}

export default App