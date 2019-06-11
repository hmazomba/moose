import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faPause, faPlay, faStepBackward, faStepForward} from "@fortawesome/free-solid-svg-icons";

import useMusicPlayer from './useMusicPlayer';

const Controls = () => {
    const {isPlaying, currentTrackName, togglePlay, playPreviousTrack, playNextTrack, duration} = useMusicPlayer();
    return (
        <>
        <div className="box controls has-background-grey-darks">
            <div className="current-track has-text-light">
                <h3>{currentTrackName}</h3>
            </div>
            <div>
                <button className="button has-text-light has-background-grey-dark" onClick={playPreviousTrack} disabled={!currentTrackName}>
                    <FontAwesomeIcon icon={faStepBackward}/>
                </button>
                <button className="button has-text-light has-background-grey-dark" onClick={togglePlay} disabled={!currentTrackName}>
                    {isPlaying? <FontAwesomeIcon icon={faPause}/>: <FontAwesomeIcon icon={faPlay}/>}
                </button>
                <button className="button has-text-light has-background-grey-dark" onClick={playNextTrack} disabled={!currentTrackName}>
                    <FontAwesomeIcon icon={faStepForward}/>
                </button>
                <div className="song-duration">
                    {duration}
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Controls;