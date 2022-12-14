import React,{useEffect,useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const PageAffichageCategorieMovies = (props) => {
   
    
    const [allMovies,setAllMovies] = useState([]);
    const  history = useHistory();
    
    const categoriesMovies = props.location.state?.categoriesMovies;
   
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&query=${categoriesMovies}`).then((res) => setAllMovies(res.data.results));

    },[categoriesMovies]);
  
    const logOut = () => {
        localStorage.removeItem('id');
        history.push("/") ;
   }
    return (
        <div className="affiche-categorie" >
            <div className="container">
            <div className="container-logo">
                <div className="left">
                    <img src="logoCollege.jpg" alt="logo" />
                    <button onClick={() => history.goBack()} className="btn btn-secondary">Back</button>
                </div>
                <div className="title">
                    <h3>{categoriesMovies}</h3>
                </div>
                <div className="right">
                    <button onClick={() => history.push("/home")} className="btn btn-primary">Home</button>
                    <button onClick={logOut} className="btn btn-danger">Log out</button>
                </div>
           </div>
                {allMovies.slice(0,20).map((pm) => (
                    <div className="card-movies" onClick={() => history.push("/details-movies", { information : pm.id })}>
                        <img src={`https://image.tmdb.org/t/p/original${pm.poster_path}`} />
                    </div>
                )) }
            </div>
        </div>
    )
}

export default PageAffichageCategorieMovies;