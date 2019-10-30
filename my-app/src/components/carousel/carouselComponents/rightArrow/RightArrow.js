import React from 'react';
import './RightArrow.css';

const RightArrow = ({ currentSlide, moveToRight, requestVimeoVideo }) => {

    // function that updates which video object from Vimeo we are looking at
    const whenClickRight = (currentSlide) => {
        moveToRight();

        // avoiding error when looping around the list
        if(currentSlide === 4){
            requestVimeoVideo(0);
        } else {
            requestVimeoVideo(currentSlide + 1);
        }
    }

    return (
        <div className='rightArrowDiv'>
            <span onClick = {() => whenClickRight(currentSlide)}><img className="next" alt = 'rightArrow' src='https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/ChevronRight-512.png'/></span> 
        </div>
    )
}

export default RightArrow;