import React from "react";

const NowPlayingMovies = (props) => {

    const { nowPlaying ,onClickMovies} = props;
    
    return (
        <div className="card-movies" onClick={onClickMovies} >
            <img src={`https://image.tmdb.org/t/p/original${nowPlaying.poster_path}`} />
        </div>
    )
}

export default NowPlayingMovies;