import {Component} from "react"

import SeriesCard from "../SeriesCard/SeriesCard"

class FavoritesSeries extends Component {
    constructor(props){
        super(props)
        this.state = {
            seriesFavoritas: []
        }
      }
    componentDidMount(){
        const seriesFavoritas = localStorage.getItem("FavoritesSeries")
        if(seriesFavoritas != null ){
            let seriesFavoritasParsed = JSON.parse(seriesFavoritas)
            Promise.all(
                seriesFavoritasParsed.map(element =>{
                    return(
                        fetch(`https://api.themoviedb.org/3/movie/${element}?api_key=ec7d1aeea6d41d212821b84124febd74`)
                        .then(resp => resp.json())
                        
                        .then(data => data))
                    })
                )
                .then(data =>{ 
                    console.log(data);
                    this.setState(
                        {seriesFavoritas: data})
                }).catch(err => console.log(err))
        }}
    render(){

        console.log(this.state.seriesFavoritas)
        return(

            <div>
                <h1>Series Favoritas</h1>
                <section className="card-container">
                    {
                        this.state.seriesFavoritas.length > 0 ?
                        this.state.seriesFavoritas.map((element, idx) =>                         
                        <SeriesCard
                        key={element + idx} 
                        name={element.title} 
                        image={element.poster_path}
                        descripcion={element.overview}
                        id = {element.id}
                        />):
                    <h3>Cargando..</h3> 
                    }

                    </section>
            </div>


        )
    }
}
export default FavoritesSeries