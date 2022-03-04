import React, { useEffect, useState } from 'react'
import SongList from './SongList';
import Setlist from './Setlist';

const tracksAPI = 'http://localhost:3110/tracks'

function SetlistBuilder() {

    const [tracks, setTracks] = useState([])
    const [setList, setSetList] = useState([])

    useEffect(()=>{
        fetch(tracksAPI)
        .then(response => response.json())
        .then(tracksData =>{
            // console.log(tracksData)
            setTracks(tracksData)
        })
    }, [])

    function handleAddToSetList(track) {
        if(!setList.includes(track)){
            setSetList([...setList, track])
        }
    }

    function handleRemoveFromSetList(track) {
        const updatedSetList = setList.filter(item => item.id !== track.id)
        setSetList(updatedSetList)
    }

    function handleTrackDelete(track){
        fetch(`${tracksAPI}/${track.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        
       console.log("Deleting id " + track.id + "!");
    }


    return(
        <div className="builder">
            <SongList tracks={tracks} onAddToSetList={handleAddToSetList} onTrackDelete={handleTrackDelete} />
            <div className="vl"></div>
            <Setlist setList={setList} onRemoveFromSetList={handleRemoveFromSetList} onTrackDelete={handleTrackDelete} />
        </div>
    );
}

export default SetlistBuilder;