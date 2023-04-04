import React, { useEffect, useState } from 'react';

const input = {
    flex: '1',
    padding: '10px',
    fontsize: '20px',
    border: 'none',
    outline: 'none'
};

const button = {
    padding: '12px 20px',
    border: 'none',
    background: '#3c3cab',
    color: '#fff',
    cursor: 'pointer'    
};

const form = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px',
    margin: '0 10px',
    boxShadow: '0px 5px 10px 0px rgb(0 0 0 / 50%)',
    overflow: 'hidden'
};

export default function Input( {handleCreate} ) {

    const [text, setText] = useState('');

    const handleClick = (e) => {
        e.preventDefault()
        if(!text){
            return
        }
        const todo = { text, id: Date.now() };
        console.log(todo);
        handleCreate(todo);
        setText('')
    }

    return (
    <form style={form}>
        <input 
           style={input} 
           type="text"
           value={text}
           onChange={(e) => setText(e.target.value)} 
        />
        <button onClick={handleClick} style={button}>Add</button>
    </form>
    )
}

