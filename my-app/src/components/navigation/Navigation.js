import React from 'react';
import './Navigation.css';

// Element to navigate between layout and carousel
const Navigation = ({ goToLayout, goToCarousel }) => {
    return (
        <div className='buttonContainer'>
            <button onClick = {() => goToLayout()} className='buttonStyle zoom-in'>Layout</button>
            <div className='space'/>
            <button onClick = {() => goToCarousel()} className='buttonStyle zoom-in'>Carousel</button>
        </div>
    );
}

export default Navigation;