import React from 'react';
import { createRoot } from 'react-dom/client';
import Input from './Input';
import Button from './Button';
import List from './List';

const root = createRoot(document.getElementById('app'));

const main = {
    background: '#f7f7f7',
    margin: '50px auto 0',
    width: '40%',
    textAlign: 'center',
    boxShadow: '1px 1px 2px 0px rgb(0 0 0 / 50%)',
    padding: '10px 0'
};

const form = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px',
    margin: '0 10px',
    boxShadow: '0px 5px 10px 0px rgb(0 0 0 / 50%)',
    overflow: 'hidden'
}

const TASKS = {
    h1: 'To Do List'
}

function Tasks({tasks}) {
    return (
    <div>
        <main style={main}>
            <h1>{tasks.h1}</h1> 
            <form style={form}>
                <Input />
                <Button text="add" />  
            </form>
        </main>
            <List />  
            {/* <Button style={{margin: '0 66%'}} text='clear' />   */}
    </div>
    )
}

root.render(<Tasks tasks={TASKS} />);
