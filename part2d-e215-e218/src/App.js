import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import personService from './services/persons'


const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newSearch, setNewSearch ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newTlf, setNewTlf] = useState('')

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])



  const addPerson = (event)=>{
    event.preventDefault();
    if(newName===''){ 
      alert('No puedes tener nombres de personas vacíos');
     }else{
      if(newTlf===''){
        alert('No puedes tener télefonos vacíos de personas');
        return;
      }else{
        const personObject = {
          name: newName,
          tlf: newTlf,
        }
          
        if(persons.some(person=>person.name===newName)){
          if(window.confirm(`La persona '${newName}' ya está en la agenda. ¿Quiéres actualizar su número de teléfono?`)){
            const person = persons.filter(person=>person.name===newName)[0];
            const id = person.id;
            personObject.id = id;
            
            personService
              .update(id,personObject)
              .then(returnedPerson=>{
                setPersons(persons.map(p => p.id !== id ? p : returnedPerson))
                setNewName('');
                setNewTlf('');
              })
              .catch(
                error=>{alert(`the person '${person.name}' was already deleted from server`)
                setPersons(persons.filter(n => n.name !== newName))
              })
          }
        }else{
          personService
            .create(personObject)
            .then(returnedPerson => {
              setPersons(persons.concat(returnedPerson))
              setNewName('');
              setNewTlf('');
            })
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

  const handlePersonRemove = (id) =>{
    const p = persons.filter(person=>person.id===id)[0];
    if(window.confirm(`¿Quieres borrar a '${p.name}' de la agenda?`)){
      personService.undo(id)
      setPersons(persons.filter(person=>person.id!==id))
    }
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
      <Persons newSearch={newSearch} persons={persons} handlePersonRemove={handlePersonRemove} />
    </div>
  )
}

export default App