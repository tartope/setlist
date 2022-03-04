import React from 'react'

function Song({ track, onTrackClicked, onTrackDelete }) {

    return(
        <div className="song" onClick={()=> onTrackClicked(track)}>
            <img src={track.image} alt='album art' />
            <div className="song-info">
                <h3>{track.song}</h3>
                <h4>{track.artist}</h4>
            </div>
            <button onClick={()=> onTrackDelete(track)}>X</button>
        </div>
    );
}

export default Song;