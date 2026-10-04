import React, { useState, useEffect } from 'react'
import axios from"../../Utils/Axios"
import request from "../../Utils/Request"
import "./Banner.css"  

const Banner = () => {
    const [movie, setMovie] = useState({});
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(request.fetchNetflixOriginals);
                setMovie(response.data.results[
                    Math.floor(Math.random() * response.data.results.length)
                ]);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        })()
    }, []);
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    return (
        <header className="banner"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
               
            }}>;
            
            <div className="banner_content">
                <h1 className="banner_title">
                    {movie.title || movie.name || movie.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">{truncate(movie.overview, 150)}</h1>
            </div>
            <div className="banner_fadeBottom"></div>
        
        </header>
     
    )
};

export default Banner
