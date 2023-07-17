import React from 'react'


const Person=({person,handlePersonRemove})=>{
    console.log("persona ",person);
    
    return(
        <tr>
            <td>{person.name}</td>
            <td>{person.tlf}</td>
            <td>
                <button onClick={() => handlePersonRemove(person.id)}>
                    Remove
                </button>
            </td>
        </tr>
    );
}

export default Person;