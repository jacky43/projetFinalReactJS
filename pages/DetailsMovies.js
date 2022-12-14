import React,{useEffect,useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const DetailsMovies = (props) => {

    const information = props.location.state.information;
    const URL = `https://api.themoviedb.org/3/movie/${information}?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US`;
    const [detail, setDetail] = useState({});
    const [genre,setGenre] = useState([]);
    const [actorImg,setActorImg] = useState([]);
    const history = useHistory();
    const id = JSON.parse(localStorage.getItem("id"));
    
    const handleSubmit = () =>{
        axios.post("http://localhost:3005/movies",{
            title : detail.title,
            lasposter_path: detail.poster_path,
            release_date : detail.release_date,
            userId : id,
            
        }).then(() => {
           
            window.alert("votre film a été ajouté avec success");
        })
    }

    useEffect(() => {
        axios.get(URL).then((res) => {
        setDetail(res.data);
        setGenre(res.data.genres);
    });
    }, [URL]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${information}/credits?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US`).then((res) => {
        setActorImg(res.data.cast);
    });
    }, [URL]);

    const logOut = () => {
        localStorage.removeItem('id');
        history.push("/") ;
    }

    return (
        <div className="details-movies" >
           <div className="container-logo">
                <div className="left">
                    <img src="logoCollege.jpg" alt="logo" />
                    <button onClick={() =>  history.goBack()} className="btn btn-secondary">Back</button>
                </div>
                <div className="title">
                    <h3>{detail.title}</h3>
                </div>
                <div className="right">
                    <button onClick={() => history.push("/home")}  className="btn btn-primary">Home</button>
                    <button onClick={logOut} className="btn btn-danger">Log out</button>
                </div>
           </div>
            <div className="information">
                <div className="row1">
                    <img src={`https://image.tmdb.org/t/p/original${detail.poster_path}`} />
                    <p className="time">{detail.release_date}</p>
                    <br/>
                    <div className="tb">
                        <ul>
                            <li>{detail.runtime} min</li><br/>
                            {genre.map((g) => (<li className="btnClick"  onClick={() => history.push('/page-affichage-categorie', {categoriesMovies: g.name})}>{g.name}</li>))} 
                        </ul>
                    
                    </div>
                </div> 
                <div className="overview">
                    <p>{detail.overview}</p>
                </div>
                <div className="ti">
                    <p>Actor who played in this film</p>
                </div>
                <div className="bt">
                    <button onClick={handleSubmit} className="btn btn-success">Add my wishlist 🤍</button>
                </div>
                <div className="image-actor">
                    <div className="image" >
                        {actorImg.slice(0,6).map((img) => (<img onClick={() => history.push("/details-actors", { informationImg : img.id })} src={`https://image.tmdb.org/t/p/original${img.profile_path}`} />))}   
                    </div>
                </div>   
            </div>
       </div>
    )
}

export default DetailsMovies;