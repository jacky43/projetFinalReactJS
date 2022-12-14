import React from "react";
import axios from "axios";

const AffichageMovie = (props) => {

    const id = JSON.parse(localStorage.getItem("id"));
    const { wishMovies} = props;

    const handleDelete = () => {
        axios.delete(`http://localhost:3005/movies?userId=${id}&id=${wishMovies.id}`); 
    }
    console.log(wishMovies.id);
    console.log(id);
    return (
        <div className="card-movies-wish-movies">
              <div className="picture">
                    <img src={`https://image.tmdb.org/t/p/original${wishMovies.lasposter_path}`} />
              </div>
              <div className="boutton">
                <button onClick={() => {
                    if(window.confirm("voulez vous vraiment supprimer votre compte")){
                            handleDelete();
                        }
                }} className="btn btn-danger">Delete Movies</button>
              </div>
        </div>
    )
}

export default AffichageMovie;