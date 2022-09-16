import React, {Component} from "react";
import AllMovies from "./AllMovies/AllMovies";
import AllSeries from "../AllSeries/AllSeries";
import MooviesCard from "../MoviesCard/MooviesCard";
import Search from "../Search/search"

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            valor: "",
            data: []
        }
    }

    bringMoovies() {
        if (Moovie !== "") {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=0002daaf86f106b6b8226fa0a789628f&query=${Moovie}`)
        .then(resp => resp.json())
        .then(data => {
            if(data.results.length > 0){
                console.log(data)
                this.setState({
                infoMoovies: data.results,
                infoMooviesEmpty: false

                })
            }
         })
        .catch(error =>{
            this.setState({
                infoMooviesEmpty: true
            })
        })
            
       
            
        }else{
            this.setState({
                infoMoovies:[]
            })
        }   
    }

   render (){
    return (
        <>
         <Search buscar ={(pelicula) => this.funcionPeliculas(pelicula)}/> 
            {
                this.state.data.length > 0 ? this.state.data.map((pelicula, idx) => 
                <MooviesCard
                key={pelicula + idx} 
                name={pelicula.title} 
                image={pelicula.poster_path}
                descripcion={pelicula.overview}
                id = {pelicula.id}
                />)  : ""
            }
        
            <AllMovies />
           <Link to ={`/AllMovies`}><button className="botton" onClick={()=>this.traerMas()} > Ver Todas las Peliculas</button></Link>
            <AllSeries />
           <Link to ={`/AllSeries`}><button className="botton"> Ver Todas las Series</button></Link>
           
            </>
    )

   }
    

}
export default Home