import React,{useEffect,useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";




const DetailsActors = (props) => {
    const informationImg = props.location.state.informationImg;
    const URL = `https://api.themoviedb.org/3/person/${informationImg}?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US`;
    const [detail, setDetail] = useState({});
    const history = useHistory();

    useEffect(() => {
        axios.get(URL).then((res) => {
        setDetail(res.data);
    });
    }, [URL]);

    const logOut = () => {
        localStorage.removeItem('id');
        history.push("/") ;
   }
    return (
        <div className="details-actors" >
           <div className="container-logo">
                <div className="left">
                    <img src="logoCollege.jpg" alt="logo" />
                    <button onClick={() => history.goBack()}className="btn btn-secondary">Back</button>
                </div>
                <div className="title">
                    <h3>{detail.name}</h3>
                </div>
                <div className="right">
                    <button onClick={() => history.push("/home")}  className="btn btn-primary">Home</button>
                    <button onClick={logOut} className="btn btn-danger">Log out</button>
                </div>
           </div>
            <div className="information">
                <div className="row1">
                    <img src={`https://image.tmdb.org/t/p/original${detail.profile_path}`} />
                    <p className="time">{detail.birthday}</p>
                    <br/>
                </div> 
                <div className="overview">
                    <p>{detail.biography}</p>
                </div>
            </div>
       </div>
    )
}

export default DetailsActors;