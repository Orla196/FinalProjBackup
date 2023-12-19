import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Edit() {
    let {id} = useParams();

    const [artist, setArtist] = useState('');
    const [songTitle, setSongTitle] = useState('');
    const [albumCover, setAlbumCover] = useState('');
    const [duration, setDuration] = useState('');
    const [youtubeLink, setYoutubeLink] = useState('');

    const navigate = useNavigate();

    useEffect(
        ()=>{

            axios.get('http://localhost:4000/api/song/'+id)
            .then((response)=>{
                setArtist(response.data.artist);
                setSongTitle(response.data.songTitle);
                setAlbumCover(response.data.albumCover);
                setDuration(response.data.duration);
                setYoutubeLink(response.data.youtubeLink);
            })
            .catch(
                (error)=>{
                    console.log(error);
                }
            );
        },[]
    );

    const handleSubmit = (e)=>{
        e.preventDefault();

        const song = {
            artist:artist,
            songTitle:songTitle,
            albumCover:albumCover,
            duration:duration,
            youtubeLink:youtubeLink
        }

        axios.put('http://localhost:4000/api/song/'+id, song)
        .then((res)=>{
            navigate('/read');
        })
        .catch(
            (error)=>{
                console.log(error)
            });
    }
    return (
        <div>
            <h2>Hello from Edit component!</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                    <label>Edit Artist: </label>
                    <input type="text"
                        className="form-control"
                        value={artist}
                        onChange={(e) => { setArtist(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Song Title: </label>
                    <input type="text"
                        className="form-control"
                        value={songTitle}
                        onChange={(e) => { setSongTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Album Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={albumCover}
                        onChange={(e) => { setAlbumCover(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Song Duration: </label>
                    <input type="text"
                        className="form-control"
                        value={duration}
                        onChange={(e) => { setDuration(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit YouTube Link: </label>
                    <input type="text"
                        className="form-control"
                        value={youtubeLink}
                        onChange={(e) => { setYoutubeLink(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit"
                    value="Edit Song">
                        </input>
                </div>
            </form>

        </div>
    );
}