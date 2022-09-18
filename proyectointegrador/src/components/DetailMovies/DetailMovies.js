import {Component} from 'react';
import {Link} from "react-router-dom"
import AllMovies from '../../Screens/AllMovies/AllMovies';


class Detalle extends Component{
    constructor(props){
        super(props)
        this.state={
           id: Number(props.match.params.id),
           pelicula : {}
        }
        console.log(this.state.id)
    }

    componentDidMount(){
        let url = `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=63cdfcbb1edb0e2c2331f8b2cb24ba9b`
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState(
                {
                    pelicula: data }
            ))
            .catch(error => console.log('El error es' + error))
    }

    render(){
        console.log(this.state.pelicula)
        let pathImg = "https://image.tmdb.org/t/p/w342/"
        return(
            <div className='cardMovieDetail'>
                <h3> Titulo: {this.state.pelicula.title}</h3>
                <img src={pathImg + this.state.pelicula.poster_path} alt="foto de la pelicula"/>
                <p>Fecha de Estreno: {this.state.pelicula.release_date}</p>
                <p>Rating: {this.state.pelicula.vote_average}</p>
                <p>Resumen: {this.state.pelicula.overview}</p>
                {<p>Duración: {this.state.pelicula.runtime} min</p>}
                <button><Link to="/allMovies" >Volver a Peliculas</Link></button>
           </div>

        )
    }

}

export default Detalle

