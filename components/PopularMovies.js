import React from "react";

const PopularMovies = (props) => {

    const { popularM,onClickMovies } = props;
    return (
        <div className="card-movies" onClick={onClickMovies}>
            <img src={`https://image.tmdb.org/t/p/original${popularM.poster_path}`} />
        </div>
    )
}

export default PopularMovies;