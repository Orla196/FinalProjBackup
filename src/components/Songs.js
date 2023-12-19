import React from 'react';
import SongItem from "./SongItem";

function Songs(props) {
    return props.mySongs.map(
        (song) => {
            return <SongItem mySong={song} key={song._id} Reload={()=>{props.ReloadData();}}></SongItem>
        }
    );
}

export default Songs;
