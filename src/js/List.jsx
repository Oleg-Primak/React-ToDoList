import React, {useState} from 'react';

import ToDoItem from './ToDoItem';
import Input from './Input';

const main = {
    background: '#f7f7f7',
    margin: '50px auto 0',
    width: '40%',
    textAlign: 'center',
    boxShadow: '1px 1px 2px 0px rgb(0 0 0 / 50%)',
    padding: '10px 0'
};

const list ={
    width:'40%',
    margin: '20px auto'
}


const TODOS =[];

export default function List () {
    const [toDos, setToDos] = useState(TODOS);

    const deleteToDoItem = (id) => {
        setToDos((prev) => prev.filter((item) => item.id != id))
    }

    return(
    <div>
        <main style={main}>
            <h1>ToDo List</h1> 
            <Input handleCreate={ (todo) => setToDos((prev) => [...prev,todo ]) } />
        </main>
        <ul style={list}> 
            {toDos.map(( {id, text}, index ) => (
            <ToDoItem handleDelete={() => deleteToDoItem(id)} key={id} id={index + 1} text={text} />
            ))}
        </ul>  
            {/* <Button style={{margin: '0 66%'}} text='clear' />   */}
    </div>
    )
}