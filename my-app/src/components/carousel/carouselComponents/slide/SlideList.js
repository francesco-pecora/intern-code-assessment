import React from 'react';
import Slide from './Slide';

const colorOfButton = [
    {
        color : "#4AB3E8"
    },
    {
        color : "#6DC5F1"
    },
    {
        color : "#ACB457",
    },
    {
        color : "#3383A4"
    },
    {
        color : "#9D9D9D"
    },
]

const SlideList = ({ currentSlide, slideObject, thumbnailURL }) => {

    let videoHTML = [];
    
    if(slideObject.length !== 0){
        videoHTML = slideObject.embed.html;
    }
    

    const backgroundStyle = {
        position : "absolute",
        zIndex : "-2",
        backgroundImage : `url(${thumbnailURL})`,
        backgroundSize : "cover",
        opacity : "0.4",
        height : "1000px",
        width : "100%",
        filter: "blur(15px)",
        overflow : "hidden",
    };

    const contentStyle = {
        postion : "relative",
        zIndex : "1",
    }

    // style that makes the background image darker
    const filterStyle1 = {
        position : "absolute",
        zIndex : "-1",
        height : "1000px",
        width : "100%",
        backgroundColor : colorOfButton[currentSlide].color,
        opacity : "0.5",
    }

    const filterStyle2 = {
        position : "absolute",
        zIndex : "-1",
        height : "1000px",
        width : "100%",
        backgroundColor : 'black',
        opacity : "0.5",
    }

    return (
        <div style={contentStyle}>
            <div style={backgroundStyle}></div>
            <div style={filterStyle1}></div>
            <div style={filterStyle2}></div>
            <Slide 
                infoImage = {thumbnailURL}
                infoTitle = {slideObject.name}
                infoDescription = {slideObject.description}
                infoColor = {colorOfButton[currentSlide].color}
                videoHTML = {videoHTML}
            />
        </div>
    )
}

export default SlideList;