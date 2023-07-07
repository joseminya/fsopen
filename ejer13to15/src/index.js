import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

const Header = (props) => {
  return (
    <>
    <h1>
      {props.course}
    </h1>
    </>
  )
}
const Content = (props) => {
  return (
    <>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]}  />
    <Part part={props.parts[2]}  />
    </>
  )
}

const Part = (props) => {
  return (
    <>
     <p>
      {props.name} {props.exercises}
    </p>
    </>
  )
}

const Total = (props) => {
  let count = 0;
  props.parts.forEach(element => {
    count+= element.exercises
  });
  return (
    <>
    <p>Number of exercises {count}</p>
    </>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
