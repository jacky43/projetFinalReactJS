import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PageEnregistrement from "./pages/PageEnregistrement";
import DetailsMovies from "./pages/DetailsMovies";
import Search from "./pages/Search";
import AccountDetails from "./pages/AccountsDetails";
import DetailsActors from "./pages/DetailsActors";
import Categories from "./pages/Categories";
import Wishlist from "./pages/Wishlist";
import PageAffichageCategorieMovies from "./pages/PageAffichageCategoriesMovies";


const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Acceuil}/>
        <Route path="/page-enregistrement" exact component={PageEnregistrement}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/search" exact component={Search}/>
        <Route path="/details-movies" exact component={DetailsMovies}/>
        <Route path="/account-details" exact component={AccountDetails}/>
        <Route path="/details-actors" exact component={DetailsActors}/>
        <Route path="/categories" exact component={Categories}/>
        <Route path="/page-affichage-categorie" exact component={PageAffichageCategorieMovies}/>
        <Route path="/wish-list" exact component={Wishlist}/>
        <Route exact component={NotFound}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
