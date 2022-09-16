import React, {Component} from 'react';
import MoviesFavorites from '../../components/MoviesFavorites/MoviesFavorites';
import SeriesFavorites from '../../components/SeriesFavorites/SeriesFavorites'

class Favoritos extends Component {
    constructor(){
        super();
        this.state = {
            movies : [] //necesitamos un array de objetos literales con cada personaje 
        }
    }
    //vamos a tener que hacer un map que vaya recorriendo las movies 
    componentDidMount(){
        let favs = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            //lo que tenemos en favs es un array de ids 
            favs = JSON.parse(recuperoStorage)
            let movies = [];
            //tendriamos que pasarselo a favoritos en el que vamos a tener que recorrer el array y perdirle al endpoint por los datos de cada movie
            favs.forEach(id => {
                //pedir por cada id los datos del personaje --> fetch
                let url = `https://api.themoviedb.org/3/movie/${id}?api_key=b8041f10f73b7178ac9637ccbb409920`
                fetch(url)
                .then(res => res.json())
                .then(data => {
                    movies.push(data)
                    this.setState({
                        movies : movies
                    })
                })
                .catch(e => console.log(e))
            })
        }
        
    }
    render(){
        return(
            <React.Fragment>
                <h2>Mis favoritos</h2>
                <section className='cardContainer'>
                
            </section>
            </React.Fragment>
        )
    }
}
export default Favoritos