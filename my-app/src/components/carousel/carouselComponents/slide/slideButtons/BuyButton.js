import React from 'react';
import './BuyButton.css';

const BuyNow = ({ infoColor }) => {

    const background = {
        backgroundColor : infoColor,
    }

    return (
        <div>
            <button className='boxStyle zoom-in' style = {background}> <img alt = 'play' className='imgClass' src='https://icon-library.net/images/play-icon-png-transparent/play-icon-png-transparent-4.jpg'/><p className='textClass'>Buy Now</p></button>
        </div>
    );
}

export default BuyNow;