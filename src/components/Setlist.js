import React from 'react'
import Song from './Song'

function Setlist({ setList, onRemoveFromSetList, onTrackDelete }) {

    const songCard = setList.map(track =>{
        return <Song key={track.id} track={track} onTrackClicked={onRemoveFromSetList} onTrackDelete={onTrackDelete} />
    })

    return(
        <>
        <h2>Setlist</h2>
        <div className="setlist">
            {songCard}
        </div>
        </>
    );
}

export default Setlist;