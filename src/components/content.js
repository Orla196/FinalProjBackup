import React from 'react';
import musicNoteImage from '../images/music.png';

function Content() {
    return (
        <div>
            <h1>Welcome to our Music App!</h1>
            <p>LOG ALL YOUR FAVOURITE MUSIC HERE</p>
            <div style={{ textAlign: 'center' }}>
                <img src={musicNoteImage} alt="Music Note" style={{ width: '400px', height: '400px' }} />
            <p><br></br>A place where you can strore all your favourite music</p>
            </div>
        </div>
    );
}

export default Content;
