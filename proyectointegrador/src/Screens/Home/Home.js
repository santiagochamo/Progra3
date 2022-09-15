import React, {Component} from "react";
import {Link} from "react-router-dom"
import AllMovies from "../AllMovies/AllMovies";
import AllSeries from "../AllSeries/AllSeries";
import MooviesCard from "../MoviesCard/MooviesCard";
import SeriesCard from "../AllSeries/AllSeries"

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            valor: "",
            data: []
        }
    }

    funcionPeliculas(pelicula){
        if (pelicula !== "") {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=0002daaf86f106b6b8226fa0a789628f&query=${pelicula}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.setState({
            data: data.results,

        })})
        .catch(e => console.log(e))
            
        }else{
            <p>Resultado de busqueda inexistente</p>
        }
        
    }
   render (){
    return (
        <>
         <Search buscar ={(pelicula) => this.funcionPeliculas(pelicula)}/> 
            {
                this.state.data.length > 0 ? this.state.data.map((pelicula, idx) => 
                <PeliculasCard 
                key={pelicula + idx} 
                name={pelicula.title} 
                image={pelicula.poster_path}
                descripcion={pelicula.overview}
                id = {pelicula.id}
                />)  : ""
            }
        
            <Peliculas />
           <Link to ={`/AllMovies`}><button className="botton" onClick={()=>this.traerMas()} > Ver Todas las Peliculas</button></Link>
            <Series />
           <Link to ={`/AllSeries`}><button className="botton"> Ver Todas las Series</button></Link>
           
            </>
    )

   }
    

}
export default Home