import React,{useEffect,useState} from "react";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Search = () => {
    
    const [allMovies,setAllMovies] = useState([]);
    const [selectWord,setSelectWord] = useState("");
    const  history = useHistory();
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&query=${selectWord}`).then((res) => setAllMovies(res.data.results));

    },[selectWord]);
    
    return (
        <div className="search" >
        <Logo />
            <div className="keywork">
                <input 
                type="text"
                placeholder="Keyword"
                value={selectWord}
                onChange={(e) => setSelectWord(e.target.value)}
                />
            </div>
            <div className="container">
            {(selectWord) ? allMovies.slice(0,20).map((pm) => (
                <div className="card-movies" onClick={() => history.push("/details-movies", { information : pm.id })}>
                <img src={`https://image.tmdb.org/t/p/original${pm.poster_path}`} />
            </div>
           )) : <h1 className="transform">Nothing to show,enter a keywork</h1>}
                
            </div>
            <Footer />
        </div>
    )
}

export default Search;