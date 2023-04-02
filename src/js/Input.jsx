import React from 'react';

const input = {
    flex: '1',
    padding: '10px',
    fontsize: '20px',
    border: 'none',
    outline: 'none'

};

export default function Input() {
    return <input style={input} type="text" />
}