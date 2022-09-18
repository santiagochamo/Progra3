import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './styles.css'


class SeriesCard extends Component {
  constructor(props){
      super(props)
      this.state={
          verDescripcion: false,
          favoritosSeries: false
      }
  }
  mostrarDescripcion(){
    this.setState(
      {verDescripcion: true}
    )
  }
  ocultarDescripcion(){
    this.setState(
      {verDescripcion: false}
    )
  }
  agregarFavoritos(id){
    let favorites = localStorage.getItem("FavoritesSeries")
    if (favorites === null) {
      let arr = [id]
      let string = JSON.stringify(arr)
      localStorage.setItem("FavoritesSeries", string)
      
      
    } else {
      let parse =  JSON.parse(favorites)
      parse.push(id)
      let string = JSON.stringify(parse)
      localStorage.setItem("FavoritesSeries", string)
    }

    this.setState({
      favoritosSeries: true
    })
  }

  removeFavorites(id){
    let favorites = localStorage.getItem("FavoritesSeries")
    let parsed = JSON.parse(favorites)
    let filtro = parsed.filter(elm => elm !== id)
    let string = JSON.stringify(filtro)
    localStorage.setItem("FavoritesSeries", string)

    this.setState({
      favoritosSeries: false
    })
  }

  render(){
    
      return(

          <article className='seriesCard'>
          <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt=""></img>
          <div className='contenido'>
              <h1> <Link className='serieDetail' to={`/detalleSerie/${this.props.id}`}> {this.props.name} </Link> </h1>
          <p className={this.state.verDescripcion ? "detalle-serie" : "hide-detalle"}>{this.props.descripcion}</p> 
          
          <div className='seriesCardButton'>
            {!this.state.verDescripcion ?
              <button onClick={() => this.mostrarDescripcion()}>Ver Descripcion </button>
              :
              <button onClick={() => this.ocultarDescripcion()}>Ocultar Descripcion </button>
             }
            
            {
                this.state.favoritosSeries ? 
                <button onClick={() => this.removeFavorites(this.props.id)}> Sacar de Favoritos</button>
                : 
                <button onClick={() => this.agregarFavoritos(this.props.id)} > Agregar a Favoritos</button> 
              }
            <Link to="/detalleSerie">
              <button> <Link className ="" to={`./detailSeries/${this.props.id}`}>Ver Detalle </Link> </button>
            </Link>
          </div>
          </div>
          </article>

      )
  }  
}
export default SeriesCard