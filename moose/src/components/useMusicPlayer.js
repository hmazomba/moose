import {useContext} from 'react';
import {MusicPlayerContext} from './MusicPlayerContext';

const useMusicPlayer =() => {
    const [state, setState] = useContext(MusicPlayerContext);

    function playTrack(index)
    {
        if(index === state.currentTrackIndex)
        {
            togglePlay();
        }else{
            setState(state => ({...state, currentTrackIndex:index, isPlaying:true}));
        }
    }

    function togglePlay() {
        setState(state => ({...state, isPlaying: !state.isPlaying}));
    }

    return{
        togglePlay,
    }
};

export default useMusicPlayer;