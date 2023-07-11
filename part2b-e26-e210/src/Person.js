import React from 'react'


const Person=(props)=>{
    const person=props.person;
    return(
        <tr>
            <td>{person.name}</td>
            <td>{person.tlf}</td>
        </tr>
    );
}

export default Person;