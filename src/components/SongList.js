import React from 'react'
import Song from './Song'

function SongList({ tracks, onAddToSetList, onTrackDelete }) {
    
    const songCard = tracks.map(track =>{
        return <Song key={track.id} track={track} onTrackClicked={onAddToSetList} onTrackDelete={onTrackDelete}/>
    })

    return(
        <>
        <h2>Song List</h2>
        <div className="song-list">
            {songCard}
        </div>
        </>
    );
}

export default SongList;