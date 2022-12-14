import React,{useEffect,useState} from "react";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Categories = () => {

    
    const [allMovies,setAllMovies] = useState([]);
    const [selectCategories,setSelectCategories] = useState("");
    const [categories,setCategories] = useState([]);
    const  history = useHistory();
    
 

    const URL = "https://api.themoviedb.org/3/genre/movie/list?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US";
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&query=${selectCategories}`).then((res) => setAllMovies(res.data.results));

    },[selectCategories]);
    useEffect(() => {
        axios.get(URL).then((res) => setCategories(res.data.genres));

    },[]);
    console.log(categories);
    console.log(selectCategories);
    return (
        <div className="categories" >
        <Logo/>
            <div className="keywork">
                <select  onChange={(e) => setSelectCategories(e.target.value)}>
                  <option>Select a category</option>
                    {categories.map((c) => (
                        
                    <option value={c.name} key={c.id}>{c.name}</option>
                ))}
                </select>
            </div> 
            <div className="container">
                {(selectCategories) ? allMovies.slice(0,20).map((pm) => (
                    <div className="card-movies" onClick={() => history.push("/details-movies", { information : pm.id })}>
                        <img src={`https://image.tmdb.org/t/p/original${pm.poster_path}`} />
                    </div>
                )) : <h1 className="transform">Nothing to show,select a category</h1>}
            </div>
            <Footer />
        </div>
    )
}

export default Categories;