import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import Display from './Display';


function App() {
  const [notes,setNotes]=useState(
    localStorage.notes?JSON.parse(localStorage.notes):[]
  );
  const[activeNote,setActiveNote]=useState(false);

  useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(notes));

  },[notes]);

  const CreateNotes=()=>{
    const newNote={
      id:"",
      title:"",
      body:"",

    }
    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
    
  }

  return (
    <>
      <Display/>

    </>
  )
}

export default App;
