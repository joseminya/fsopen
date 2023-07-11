import React from 'react'
import Part from './Part'

const Content = (props) => {
    const parts=props.parts;
    const total = parts.reduce((s, p) => s+p.exercises,0 );
    //console.log("total",total);
    return(
        <div>
            {parts.map(part=>(<Part key={part.id} part={part} />))}
            <h3>Total of {total} exercises</h3>
        </div>
    )
}

export default Content;
