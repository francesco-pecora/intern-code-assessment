import React from 'react';
import './image.css'

const Image = ({ imageURL }) => {

    return (
        <div>
            <img className='imageStyle' alt='img' src={imageURL}/>
        </div>
    )
}

export default Image;
