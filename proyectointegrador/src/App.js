import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Screens/Home/Home'
import AllMovies from './Screens/AllMovies/AllMovies'
import AllSeries from './Screens/AllSeries/AllSeries'
import DetailMovies from './Screens/DetailMovies/DetailMovies'
import DetailSeries from './Screens/DetailSeries/DetailSeries'
import NotFound from './Screens/NotFound/NotFound'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import Favorites from './Screens/Favorites/Favorites'


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
        <Route path= "/Favorites" component={Favorites} />
        <Route path= "" component={NotFound} />

      </Switch> 
     
     <Footer/>
    </React.Fragment>
  );
}

export default App;
