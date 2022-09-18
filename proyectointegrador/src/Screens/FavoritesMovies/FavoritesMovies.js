import {Component} from "react"
import MoviesCard from "../MoviesCard/MoviesCard"

class FavoritesMovies extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculasFavoritas: []
        }
      }
    componentDidMount(){
        const peliculasFavoritas = localStorage.getItem("Favorites")
        if(peliculasFavoritas != null ){
            let peliculasFavoritasParsed = JSON.parse(peliculasFavoritas)
            Promise.all(
                peliculasFavoritasParsed.map(id =>{
                    return(
                        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ec7d1aeea6d41d212821b84124febd74`)
                        .then(resp => resp.json())
                        
                        .then(data => data))
                    })
                )
                .then(data =>{ 
                    this.setState(
                        {peliculasFavoritas: data})
                }).catch(err => console.log(err))
        }}
    render(){

        console.log(this.state.peliculasFavoritas)
        return(

            <div>
                <h1>Peliculas Favoritas</h1>
                <section className="card-container">
                    {
                        this.state.peliculasFavoritas.length > 0 ?
                        this.state.peliculasFavoritas.map((element, idx) =>                         
                        <MoviesCard
                        key={element + idx} 
                        name={element.title} 
                        image={element.poster_path}
                        descripcion={element.overview}
                        id = {element.id}
                        agregar = {(id) => this.agregarFavoritos(id)}
                        />):
                    <h3>Cargando..</h3> 
                    }

                    </section>
            </div>


        )
    }
}
export default FavoritesMovies