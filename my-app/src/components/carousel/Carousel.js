import React from 'react';
import './Carousel.css';
import SlideList from './carouselComponents/slide/SlideList';
import LeftArrow from './carouselComponents/leftArrow/LeftArrow';
import RightArrow from './carouselComponents/rightArrow/RightArrow';

const Carousel = ({ currentSlide, moveToRight, moveToLeft, requestVimeoVideo, slideObject, thumbnailURL }) => {

    return (
        <div className='carouselSlide'>
            <div className='slideList'><SlideList   currentSlide = {currentSlide} 
                                                    slideObject = {slideObject} 
                                                    thumbnailURL = {thumbnailURL}/></div>

            <div className='arrowLeft'><LeftArrow   currentSlide = {currentSlide} 
                                                    moveToLeft = {moveToLeft} 
                                                    requestVimeoVideo = {requestVimeoVideo}/></div>

            <div className='arrowRight'><RightArrow currentSlide = {currentSlide} 
                                                    moveToRight = {moveToRight} 
                                                    requestVimeoVideo = {requestVimeoVideo}/></div>
        </div>
    )

}

export default Carousel;