import React, { useState, useEffect } from 'react'
import Note from './Note'
import axios from 'axios'

function App() {
  const [notes, setNotes] = useState([]);
  //const [newNote, setNewNote] = useState('');
  //const [showAll, setShowAll] = useState(true);

  const hook = () => {
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        setNotes(response.data)
      })
  }
  
  useEffect(hook, [])



  return (
    <div>
      {notes.map(note=><Note key={note.id} note={note}/>)}     
    </div>
  );
}

export default App;
