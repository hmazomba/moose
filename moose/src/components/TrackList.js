import React,{useContext} from "react"
import {MusicPlayerContext} from "./MusicPlayerContext";

const TrackList = () => {
    const [state, setState] = useContext(MusicPlayerContext);
    return(
        <>
        {state.tracks.map(track => (
            <div className="box">
                <div className="song-title">
                    {track.name}
                </div>
            </div>
        ))}
        </>
    )
}


export default TrackList;