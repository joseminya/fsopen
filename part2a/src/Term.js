import React from 'react'
import Course from './Course'

const Term=(props)=>{
    const course = props.course;

    return (<Course course={course} />);
}

export default Term;