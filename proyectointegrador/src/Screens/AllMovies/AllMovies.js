import React,{Component} from 'react'
import {Link} from "react-router-dom"
import MoviesCard from '../MoviesCard/MoviesCard';
import Search from '../Search/Search';


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

    buscar(titulo){
        if(titulo !== ''){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=7a176cc95147be6e695be2faf0e8ff9c&query=${titulo}`)
        .then(res => res.json())
        .then(data => this.setState({
            data: data.results
        }))
        .catch(err => console.log(err))
        }else{
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=7a176cc95147be6e695be2faf0e8ff9c&language=en-US&page=1')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
            data: data.results.slice(0,4) 
        })})
        .catch(err => console.log(err))
            

        }
    }
    
    render() {
    return (
    <>
        <div className="palabra">
            <Search filtrar={(titulo) => this.buscar(titulo)}/>
            <h3>TODAS LAS PELICULAS</h3>
        </div>
        <section className="card-container">
        
            {
                this.state.data.length > 0 ?
                    this.state.data.map((personajePelicula, idx) => 
                    <MoviesCard 
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