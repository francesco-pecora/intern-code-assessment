import React from 'react';
import './WatchTrailer.css';

const Watchtrailer = ({ videoLink }) => {

    return (
        <div>
            <button className='boxClass zoom-in w3-button'><a href={videoLink} target="_blank" rel="noopener noreferrer"><p className='textClass'>Watch Trailer</p></a></button>
        </div>
    );
}

export default Watchtrailer;