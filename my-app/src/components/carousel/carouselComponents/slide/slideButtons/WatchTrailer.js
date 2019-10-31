import React from 'react';
import './WatchTrailer.css';

const Watchtrailer = ({ videoHTML }) => {

    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>

            <button onClick={() => document.getElementById('id01').style.display='block'} className="boxClass zoom-in">Watch Trailer</button>

            {/* This is a w3 modal */}
            <div id="id01" className="w3-modal w3-animate-opacity">
                <div className="w3-modal-content">
                    <div className="modalContainer setBackground">

                        {/* Button to exit from the modal */}
                        <span onClick={() => document.getElementById('id01').style.display='none'} className="w3-button w3-display-topright"><p className='exitButton'>&times;</p></span>

                        {/* Content of the modal */}
                        <div className='videoModal' dangerouslySetInnerHTML={{ __html: videoHTML }} />
                        
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Watchtrailer;