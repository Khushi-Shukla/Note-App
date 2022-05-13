import React, { useState, useEffect } from 'react'
import './Note.css'
import { Button, Divider, Typography, Input, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

// import { Card, Descriptions } from 'antd';

const Note = ({ 
    id, 
    title, 
    desc, 
    handleDeleteNote, 
  
}) => {
   
    const [edit, setEdit]= useState(false)
	const [titleName, setTitleName]=useState(title)
    const [text, setText]=useState(desc);
    const [warning, setWarning]=useState('');


    const handleTitleChange=(event)=>{
        setTitleName(event.target.value)
    }
    const handleDescChange=(event)=>{
        setText(event.target.value)
        setWarning('');
    }

    const handleSaveClick=()=>{
        if(text.length>0 && titleName.length>0){
            setEdit(false);
            setWarning('');
        }
        else{
            setWarning('Cannot be empty!');
        }
    }

    useEffect(() => {
        setTitleName(title);
		setText(desc);
	}, [desc, title]);

    const { TextArea } = Input;
    
    if(edit!==true ) 
        return (
            <div className='card'>    
                <Typography.Title level={4} style={{margin:0}}>{titleName}</Typography.Title>
                <Divider />
                <Typography.Paragraph rows={5}>{text}</Typography.Paragraph >
                <div>
                    <Tooltip title="Delete">
                        <Button type='primary' danger
                            onClick={() => handleDeleteNote(id)}
                        >        
                            <DeleteOutlined />
                            
                        </Button>
                    </Tooltip>
                   
                    <Tooltip title="Edit">
                        <Button 
                            onClick={() => setEdit(true)}
                        >                 
                            
                            <EditOutlined />
                            
                        </Button>
                    </Tooltip>
                </div>
            
        </div>
        );
    else return (
        <div className='card' style={{padding:0, background:"white"}}>
            <Input 
                style={{marginBottom: '0.2rem'}}
                value={titleName} 
                onChange={handleTitleChange}
                 />
            <TextArea 
                rows={5}
                value={text} 
                onChange={handleDescChange}
                 />
            <Button type="primary"
                onClick={handleSaveClick}
            >
                Save
            </Button>
            <center><Typography.Text type='danger'>{warning}</Typography.Text></center>
        </div>
    );
};

export default Note;