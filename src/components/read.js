import React, { useEffect, useState } from "react";
import axios from "axios";
import Songs from "./Songs";

function Read() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/songs')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const Reload = (e)=>{
        axios.get('http://localhost:4000/api/songs')
            .then(
                (response)=>{
                    setData(response.data)
                }
            )
            .catch(
                (error)=>{
                    console.log(error);
                }
            )
      }
    return (
        <div>
            <h2>Hello from ReadSongs Component!</h2>
            <Songs mySongs={data} ReloadData={Reload}></Songs>
        </div>
    );
}

export default Read;
