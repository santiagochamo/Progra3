import React,{Component} from 'react'
import {Link} from "react-router-dom"
import MooviesCard from '../PeliculasCard/MooviesCard';


class AllMovies extends Component {
    constructor(props){
        super(props)
        this.state={
            data: [],
            verMas: "hide"
            
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7a176cc95147be6e695be2faf0e8ff9c')
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data.results
        }))
        .catch(err => console.log(err)) 
    }
    
    render() {
    return (
    <>
        <div className="palabra">
            <h3>TODAS LAS PELICULAS</h3>
        </div>
        <section className="card-container">
        
            {
                this.state.data.length > 0 ?
                    this.state.data.map((personajePelicula, idx) => 
                    <MooviesCard 
                    key={personajePelicula + idx} 
                    name={personajePelicula.title} 
                    image={personajePelicula.poster_path}
                    descripcion={personajePelicula.overview}
                    id = {personajePelicula.id}
                    agregar = {(id) => this.agregarFavoritos(id)}
                    
                    />):
                    <img src="https://giphy.com/embed/3y0oCOkdKKRi0"/>
            }
           
        </section>
     </>
    )
  }
}


export default AllMovies