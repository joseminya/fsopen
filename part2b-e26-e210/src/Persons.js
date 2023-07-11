import React from 'react';
import Person from './Person';

const Persons =({newSearch,persons})=>{
    return(
        <div>
            <table>
                <tbody>
                    {persons.filter(person=>person.name.indexOf(newSearch)>=0).map(person=><Person key={person.id} person={person}/>)}
                </tbody>
            </table>
        </div>
    );
}

export default Persons;