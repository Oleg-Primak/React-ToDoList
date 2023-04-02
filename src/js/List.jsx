import List from 'react';

const list ={
    width:'40%',
    margin: '20px auto'
}

const item ={
    display: 'flex',
    marginTop: '20px',
    background: '#fff',
    padding: '10px',
    fontSize: '20px',
    justifyContent: 'center'
}
export default function List () {
    return<ul style={list}> 
                <li style={item}>learn HTML</li>
                <li style={item}>learn CSS</li>
                <li style={item}>learn JS</li>
                <li style={item}>learn REACT</li> 
            </ul> 
}