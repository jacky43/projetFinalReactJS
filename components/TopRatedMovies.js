import React from "react";

const TopRatedMovies = (props) => {

    const { topRated,onClickMovies } = props;
    return (
        <div className="card-movies"  onClick={onClickMovies}>
            <img src={`https://image.tmdb.org/t/p/original${topRated.poster_path}`} />
        </div>
    )
}

export default TopRatedMovies;