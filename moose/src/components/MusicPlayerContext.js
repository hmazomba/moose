import React, {useState} from 'react';

const MusicPlayerContext = React.createContext([{}, ()=>{}]);

const MusicPlayerContext = (props) => {
    const [state, setState] = useState({
        tracks: [
            {
                name: 'Track1',
            },
            {
                name: 'Track2',
            },
            {
                name: 'Track3',
            },
        ],
    });
    return (
        <MusicPlayerContext.Provider value={[state, setState]}>
            {props.children}
        </MusicPlayerContext.Provider>
    );
};

export {MusicPlayerContext, MusicPlayerProvider};