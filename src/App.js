import { useState } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import { AddNote } from './components/AddNote/AddNote';
import { NoteList } from './components/NoteList/NoteList';
import { Typography } from 'antd';

function App() {
  const [notes, setNotes]= useState([]);
  const [warning, setWarning]=useState('');

//Add new note
  const addNote=(noteTitle, descp)=>{
    if(descp.length>=1){
      setWarning('');
      const newNote={
        id: nanoid(),
        title: noteTitle,
        desc: descp,
      };
   
      const newNotes=[...notes, newNote];
      setNotes(newNotes); 
    }
    else{
      handleWarning(false);
    }
    // console.log(notes);
  }

  //handle warning
  const handleWarning=(value)=>{
    if(value===false)
        setWarning('Description cannot be empty');
    else
        setWarning('')
  }

  //Delete a note
  const deleteNote=(id)=>{
    const newNotes=notes.filter((note)=> note.id!==id)
    setNotes(newNotes);
  }


  return (
    <div >
      <center className="heading"><Typography.Title level={2}>Note App</Typography.Title></center>
      <AddNote 
        handleAddNote={addNote}
        handleWarning={handleWarning}
       />
       <center><Typography.Text type='danger'>{warning}</Typography.Text></center>
      <NoteList 
        notes={notes} 
        handleDeleteNote={deleteNote} />
      
    </div>
  );
}

export default App;
