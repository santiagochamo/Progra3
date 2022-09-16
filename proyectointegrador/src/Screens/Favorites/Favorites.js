import React, {Component} from "react";
import {Link} from "react-router-dom"
import SeriesFavorites from '../../components/SeriesFavorites/SeriesFavorites';
import MoviesFavorites from '../../components/MoviesFavorites/MoviesFavorites';
import './styles.css'

class Favoritos extends Component{
    
     render(){
        return(
            <>
            <div className="palabra">
                <h3>TUS PELÍCULAS FAVORITAS</h3>
            </div>
            <section className="card-container">
            <MoviesFavorites />
            </section>
            <div className="palabra">
            <h3>TUS SERIES FAVORITAS</h3>
        </div>
        <section className="card-container">
        <SeriesFavorites />
      </section>
         </>
         
            /* <div>
              <div className="palabra">
               <h3>Tus Peliculas Favoritas</h3>
               
               <FavoritosPeliculas />
                </div>
                
                    <div className="palabra">
               <h3>Tus Series Favoritas</h3>
               <FavoritosSeries />
                </div>
            </div> */
        )
  
        
    }


}

export default Favoritos