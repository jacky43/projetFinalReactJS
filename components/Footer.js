import React from "react";
import { useHistory } from "react-router-dom";


const Footer = () => {
   
    
    const history = useHistory();
   
   

    const handleClick = () => {
        history.push("/account-details" )
    }
    return (
        <div className="footer" >
           <button onClick={handleClick} class="btn btn-warning">View my account</button>
           <p>© 2022 Collège O'Sullivan de Québec | Tous droits réservés</p>
        </div>
    )
}

export default Footer;