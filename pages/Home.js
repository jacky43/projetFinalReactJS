import React, { useState,useEffect } from "react";
import Logo from "../components/Logo";
import axios from "axios";
import PopularMovies from "../components/PopularMovies";
import NowPlayingMovies from "../components/NowPlayingMovies";
import TopRatedMovies from "../components/TopRatedMovies";
import UpComingMovies from "../components/UpcomingMovies";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";


const Home = () => {

const [popularMovies,setPopularMovies] = useState([]);
const [nowPlayingMovies,setNowPlayingMovies] = useState([]);
const [ratedMovies,setRatedMovies] = useState([]);
const [upComingMovies,setUpComingMovies] = useState([]);
const history = useHistory();


useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&page=1").then((res) => setPopularMovies(res.data.results));
},[]);
useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&page=1").then((res) => setNowPlayingMovies(res.data.results));
},[]);
useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&page=1").then((res) => setRatedMovies(res.data.results));
},[]);
useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&page=1").then((res) => setUpComingMovies(res.data.results));
},[]);


    return (
        <div className="home">
         <Logo/> 
         <br/>
         <br/>
        <h1>Popular</h1>
            <ul className="movies-list">
               
                {popularMovies.slice(0,12).map((pm) => (
                    <PopularMovies 
                        popularM = {pm} key ={pm.id}
                        onClickMovies={() => history.push("/details-movies", { information : pm.id })} />
                ))}
            </ul>
            <br></br>
        <h1>Now playing</h1>
            <ul className="movies-list">
                
                {nowPlayingMovies.slice(0,12).map((nowPlay) => (
                    <NowPlayingMovies
                     nowPlaying = {nowPlay} key ={nowPlay.id}
                     onClickMovies={() => history.push("/details-movies", { information : nowPlay.id })} />
                ))}
            </ul>
            <br></br>
        <h1>Top rated</h1>
            <ul className="movies-list">
                {ratedMovies.slice(0,12).map((rate) => (
                    <TopRatedMovies 
                    topRated = {rate} key ={rate.id} 
                    onClickMovies={() => history.push("/details-movies", { information : rate.id })}/>
                ))}
            </ul>
            <br></br>
        <h1>Upcoming</h1>
            <ul className="movies-list">
                
                {upComingMovies.slice(0,12).map((comeM) => (
                    <UpComingMovies 
                    upCome = {comeM} key ={comeM.id}
                    onClickMovies={() => history.push("/details-movies", { information : comeM.id })} />
                ))}
            </ul>
            <br></br>
            <Footer />
        </div>
    )
}

export default Home;