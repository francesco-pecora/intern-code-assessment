import React from 'react';
import './Slide.css';
import BuyNow from './slideButtons/BuyButton';
import Watchtrailer from './slideButtons/WatchTrailer';

const Slide = ({ infoImage, infoTitle, infoDescription, infoColor, videoLink }) => {

    return (
        <div className='containerSlide wrap'>

            {/* Image of the slide */}
            <div className='leftSide'><img alt='img' src = {infoImage}/></div>

            <div className='spaceBetween'/>

            {/* Right side of slide with title, description, and buttons */}
            <div className='rightSide'>
                <h2 className='h2Class'>{infoTitle}</h2>
                <p className='pClass'>{infoDescription}</p>

                <div className='buttons'>
                    <BuyNow infoColor = {infoColor}/>
                    <div className='space'/>
                    <Watchtrailer videoLink = {videoLink}/>
                </div>
            </div>
            
        </div>
    )
}

export default Slide;