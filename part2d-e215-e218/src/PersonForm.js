import React from 'react';


const PersonForm =({addPerson,newName,handleNameChange,newTlf,handleTlfChange})=>{
    return(
        <div>
            <form onSubmit={addPerson}>
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
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    );
}

export default PersonForm;