import React from "react";
import { useHistory } from "react-router-dom";
import Navigation from "./Navigation";

const Logo = () => {

    const history = useHistory();
    
    const logOut = () => {
        localStorage.removeItem('id');
        history.push("/") ;
   }

    return (
        <div className="logo">
            <div className="image">
                <img src="logoCollege.jpg" alt="logo" />
            </div>
            <div className="navigation-logo">
                <Navigation />
            </div>  
            <div className="button-logOut">
                <button onClick={logOut} className="btn btn-danger">Log out</button>
            </div>

        </div>
    )
}

export default Logo;