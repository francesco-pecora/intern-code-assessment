import React from 'react';
import './text.css';

const Text = ({ title, description }) => {

    return (
        <div className='textStyle'>
        <h2>{title}</h2>
        <p>{description}</p>
        </div>
    )
}

export default Text;