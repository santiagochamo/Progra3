import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Screens/Home/Home'
import AllMovies from './Screens/AllMovies/AllMovies'
import AllSeries from './Screens/AllSeries/AllSeries'
import DetailMovies from './components/DetailMovies/DetailMovies'
import DetailSeries from './components/DetailSeries/DetailSeries'
import NotFound from './Screens/NotFound/NotFound'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import FavoritesSeries from './Screens/FavoritesSeries/FavoritesSeries'
import FavoritesMovies from './Screens/FavoritesMovies/FavoritesMovies'

function App() {
  return (
    <React.Fragment>
      
      <Header />
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path= "/AllMovies" component={AllMovies}/>
        <Route path= "/AllSeries" component={AllSeries}/>
        <Route path= "/DetailMovies/:id" component={DetailMovies}/>
        <Route path= "/DetailSeries/:id" component={DetailSeries}/>
        <Route path="/peliculasFavoritas" component={FavoritesMovies}/>
        <Route path="/seriesFavoritas" component={FavoritesSeries}/>
        <Route path= "" component={NotFound} />

      </Switch> 
     
     <Footer/>
    </React.Fragment>
  );
}

export default App;
