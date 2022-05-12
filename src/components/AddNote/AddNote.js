import React, { useState } from 'react'
import { Button, Input } from 'antd';
import './AddNote.css'

export const AddNote = ({handleAddNote, handleWarning}) => {
  
   const [noteTitle, setNoteTitle]=useState('Untitled')
   const [descp, setDescp]=useState("")


  const handleClick=()=>{
      handleAddNote(noteTitle, descp);
      setNoteTitle('Untitled');
      setDescp('');
      if(descp.length>0) 
        handleWarning(true);
      else
        handleWarning(false);
  }
  

 const handleChange=(event)=>{
    setDescp(event.target.value)
    handleWarning(true)
 }

  const { TextArea } = Input;
  return (
    <div>
        <div className="my-form">
            <Input 
                className='form-div'
                placeholder='Title' 
                value={noteTitle}
                onChange={
                    (event)=>
                    setNoteTitle(event.target.value)}
            />
            <TextArea
                className='form-div'
                style={{width:{md:"20rem"}}}
                rows={5} 
                placeholder='Description' 
                value={descp} 
                onChange={handleChange}
            />
            <Button 
                className='btn'
                type="primary" block
                onClick={handleClick}
                
            >
                Add Note
            </Button>

        </div>
    </div>
  )
}




