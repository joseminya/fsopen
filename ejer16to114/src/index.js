//import React from 'react';
//import ReactDOM from 'react-dom/client';
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

const Button = ({handleClick,text})=>{
  return <button onClick={handleClick}>{text}</button>;
}

const StatisticsLine = ({name,value})=>{
  return <tr><td>{name}</td><td>{value}</td></tr>;
}


const Statistics =({good,neutral,bad})=>{
  const all = good+neutral+bad;
  const average = (good-bad)/all;
  const positive = good/all;

  if(all!=0){
    return(
      <table>
        <StatisticsLine name="good" value={good} />
        <StatisticsLine name="neutral" value={neutral} />
        <StatisticsLine name="bad" value={bad} />
        <StatisticsLine name="all" value={all} />
        <StatisticsLine name="average" value={average} />
        <StatisticsLine name="positive" value={positive} />
      </table>
      );
    }else{
      return(<div><p>No feedback given</p></div>);
    }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMaxValue(a) {
  let max = 0;
  for (let i = 0; i < a.length; i++) {
    if(a[max]<a[i]){
      max = i;
    } 
  }
  return max;
}


const Display = ({votes,anecdotes}) => {
  const max = getMaxValue(votes);  
  return(
    <div>
      <p>{anecdotes[max]}</p>
      <p>has {votes[max]} votes</p>
    </div>
  );
}


const App = (props) => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [selected, setSelected] = useState(0);
  const a = Array(props.anecdotes.length).fill(0);
  const [allVotes,setVotes] = useState(a);


 
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=>setGood(good+1)} text="good" />
      <Button handleClick={()=>setNeutral(neutral+1)} text="neutral" />
      <Button handleClick={()=>setBad(bad+1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
      <Button handleClick={()=>{
        setGood(0);
        setNeutral(0);
        setBad(0);
      }} text="reset" />
      <p>{props.anecdotes[selected]}</p>
      <p>has {allVotes[selected]} votes</p>
      <Button handleClick={()=>{
        const i = getRandomInt(0,props.anecdotes.length-1);
        setSelected(i);
        }} text="next" />
      <Button handleClick={()=>{
        const copy = [...allVotes];
        copy[selected]+=1;
        setVotes(copy);
      }
      } text="vote" />
      <Display votes={allVotes} anecdotes={props.anecdotes} />
    </div>
  )
}
/*
ReactDOM.render(<App />, 
  document.getElementById('root')
)*/




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
