import React, {Component} from "react";
import AllMovies from "../AllMovies/AllMovies";
import MoviesCard from "../MoviesCard/MoviesCard";
import AllSeries from "../AllSeries/AllSeries";
import {Link} from "react-router-dom"
import Search from "../Search/Search";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            valor: "",
            data: []
        }
    }

    searchMoovieSerie(name){
        if (name !== "") {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=0002daaf86f106b6b8226fa0a789628f&query=${name}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.setState({
            data: data.results,

        })})
        .catch(e => console.log(e))
            
        }else{
            <p>No hay una pelicula con ese nombre</p>
        }
        
    }
   render (){
    return (
        <>
            {
                this.state.data.length > 0 ? this.state.data.map((name, idx) => 
                <MoviesCard 
                key={name + idx} 
                name={name.title} 
                image={name.poster_path}
                descripcion={name.overview}
                id = {name.id}
                />)  : ""
            }
        
            <Link to ={`/AllMovies`}><button className="botton" onClick={()=>this.traerMas()} > Ver Todas las Peliculas</button></Link>
           <Link to ={`/AllSeries`}><button className="botton"> Ver Todas las Series</button></Link>
            <AllMovies />
            <AllSeries />
           
           
            </>
    )

   }
    

}
export default Home