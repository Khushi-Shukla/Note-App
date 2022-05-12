import React from 'react'
import Note from '../Note/Note'
import './NoteList.css'

export const NoteList = ({notes, handleDeleteNote,  handleEditNote}) => {
  return (
    <div className='note-list'>
        {notes.map((note)=>(
            <Note 
                 key={note.id}
                 id={note.id} 
                 title={note.title} 
                 desc={note.desc} 
                 handleDeleteNote={handleDeleteNote}
                 handleEditNote={handleEditNote}
            />
            
        ))
        }
       
    </div>
  )
}


