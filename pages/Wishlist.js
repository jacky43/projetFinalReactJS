import React, { useState,useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import AffichageMovie from "../components/AffichageMovie";


const Wishlist = () => {

    const id = JSON.parse(localStorage.getItem("id"));
    console.log(id);
    const [allWishMovies,setAllWishMovies] = useState([]);
    const history = useHistory();
     useEffect(() => {
        axios.get(`http://localhost:3005/movies/?userId=${id}`).then((res) => setAllWishMovies(res.data));
    },[id]);
    console.log(allWishMovies);
   
    const logOut = () => {
        localStorage.removeItem('id');
        history.push("/") ;
    }

    return (
        <div className="wish-list">
              <div className="container-logo">
                <div className="left">
                    <img src="logoCollege.jpg" alt="logo" />
                    <button onClick={() => history.goBack()}className="btn btn-secondary">Back</button>
                </div>
                <div className="title">
                    <h3>Wishlist</h3>
                </div>
                <div className="right">
                    <button onClick={() => history.push("/home")}  className="btn btn-primary">Home</button>
                    <button onClick={logOut} className="btn btn-danger">Log out</button>
                </div>
           </div>
           <ul className="movies-list">
               
               {allWishMovies.map((w) => (
                   <AffichageMovie 
                       wishMovies = {w} key ={w.id}
                       />
               ))}
           </ul>
        </div>
    )
}

export default Wishlist;