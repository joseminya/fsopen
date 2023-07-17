import React from 'react';
import Person from './Person';

const Persons =({newSearch,persons,handlePersonRemove})=>{
    console.log("personas",persons);
    return(
        <div>
            <table>
                <tbody>
                    {persons.filter(person=>person.name.includes(newSearch)).map(person=><Person key={person.id} person={person} handlePersonRemove={handlePersonRemove}/>)}
                </tbody>
            </table>
        </div>
    );
}

export default Persons;