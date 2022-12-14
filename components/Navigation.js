import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

//Création du composant
const Navigation = () => {
    //Backend
    const history = useHistory();
    const handlePush = () => {
        history.push("/wish-list");
    }
    return(
        //Front-end
        <div className='navigation'>
            <NavLink exact to='/home' activeClassName='nav-active'>
                Home
            </NavLink>
            <NavLink exact to='/search' activeClassName='nav-active'>
                Search
            </NavLink>
            <NavLink exact to='/categories' activeClassName='nav-active'>
                Categories
            </NavLink>
            <button onClick={handlePush} >Wishlist</button>
        </div>
    )
}

export default Navigation;