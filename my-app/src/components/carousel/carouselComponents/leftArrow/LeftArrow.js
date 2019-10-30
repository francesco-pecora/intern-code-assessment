import React from 'react';
import './LeftArrow.css';

const LeftArrow = ({ currentSlide, moveToLeft, requestVimeoVideo }) => {

    // function that updates which video object from Vimeo we are looking at
    const whenClickLeft = (currentSlide) => {
        moveToLeft();

        // avoiding error when looping around the list
        if(currentSlide === 0){
            requestVimeoVideo(4);
        } else {
            requestVimeoVideo(currentSlide - 1); 
        } 
    }

    return (
        <div className='leftArrowDiv'>
            <span onClick = {() => whenClickLeft(currentSlide)}><img className="previous" alt = 'leftArrow' src='https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ChevronRight-512.png'/></span>
        </div>
    )
}

export default LeftArrow;