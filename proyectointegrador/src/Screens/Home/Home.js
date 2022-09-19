import React, {Component} from "react";
import {Link} from "react-router-dom"
import AllPopularSeries from "../AllPopularSeries/AllPopularSeries";
import AllPopularMovies from "../AllPopularMovies/AllPopularMovies";
import "./Home.css"

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
            <div className="watchContainer">
                <Link to ={`/AllMovies`} className="watchButton"> Ver Todas las Peliculas</Link>
                <Link to ={`/AllSeries`} className="watchButton">Ver Todas las Series</Link>
            </div>
            
            <AllPopularMovies/>
            <AllPopularSeries/>
           
            </>
    )

   }
    

}
export default Home