import React, {Component} from 'react';
import {Link} from "react-router-dom"


class Detalle extends Component{
    constructor(props){
        super(props)
        this.state={
           id: Number(props.match.params.id),
           serie: {}
        }
        console.log(this.state.id)
    }

    componentDidMount(){
        let url = `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b`
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState(
                {serie: data}
            ))
            .catch(error => console.log('El error es' + error))

    }
    

    render(){
        let pathImg = "https://image.tmdb.org/t/p/w342/"
        console.log(this.state.serie)
        return(
            <div>
                <h3> Titulo: {this.state.serie.title}</h3>
                <img src={pathImg + this.state.serie.poster_path} alt="foto de la pelicula"/>
                <p>Fecha de Estreno: {this.state.serie.release_date}</p>
                <p>Rating: {this.state.serie.vote_average}</p>
                <p>Resumen: {this.state.serie.overview}</p>

                <button><Link to="/allSeries" >Volver a Series</Link></button>
           </div>

        )
    }

}

export default Detalle

