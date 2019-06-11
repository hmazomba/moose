import React, {useState} from 'react';
import EmpireAnts from '../media/audio/Gorillaz - Empire Ants.MP3';
import BoxClever from '../media/audio/Huxley - Box Clever.MP3';
import IllBeRound from '../media/audio/Marlins Dreaming - Ill Be Round.MP3';

const MusicPlayerContext = React.createContext([{}, ()=>{}]);

const MusicPlayerProvider = (props) => {
    const [state, setState] = useState({
        audioPlayer : new Audio(),
        tracks: [
            {
                name: 'Empire Ants - Gorillaz',
                file: EmpireAnts,
            },
            {
                name: 'Box Clever- Huxley',
                file: BoxClever,
            },
            {
                name: 'I\'ll Be Round - Marlin\'s Dreaming',
                file: IllBeRound,
            },
        ],
        currentTrackIndex:null,
        isPlaying: false,
    });
    return (
        <MusicPlayerContext.Provider value={[state, setState]}>
            {props.children}
        </MusicPlayerContext.Provider>
    );
};

export {MusicPlayerContext, MusicPlayerProvider};