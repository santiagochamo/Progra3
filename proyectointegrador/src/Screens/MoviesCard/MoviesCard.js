import React, {Component} from 'react'
import {Link} from "react-router-dom"
import './styles.css'

class MoviesCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      verDetail: false,
      favoritos: false

    }
  }
  verMas(){
    this.setState( {verDetail: true})
  }
  verMenos(){
    this.setState( {verDetail: false})
  }

  agregarFavoritos(id){
    let favorites = localStorage.getItem("Favorites")
    if (favorites === null) {
      let arr = [id]
      let string = JSON.stringify(arr)
      localStorage.setItem("Favorites", string)
      
      
    } else {
      let parse =  JSON.parse(favorites)
      parse.push(id)
      let string = JSON.stringify(parse)
      localStorage.setItem("Favorites", string)
    }

    this.setState({
      favoritos: true
    })
  }

  removeFavorites(id){
    let favorites = localStorage.getItem("Favorites")
    let parsed = JSON.parse(favorites)
    let filtro = parsed.filter(elm => elm !== id)
    let string = JSON.stringify(filtro)
    localStorage.setItem("Favorites", string)

    this.setState({
      favoritos: false
    })
  }




  render(){
    return (
      
    <section className='polaroid'>
   

            <img className="imagen" src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" /> 
            <div className="textopolaroid">
              <p className="textopolaroidtitulo"> <Link to={`/DetailMovies/${this.props.id}`}> {this.props.name}</Link></p>
             
              <p className={this.state.verDetail ? "detalle-movie" : "detalle-hide"}>{this.props.descripcion}</p>
              {
                this.state.favoritos ? 
                <button onClick={() => this.removeFavorites(this.props.id)}> Sacar de Favoritos</button>
                : 
                <button onClick={() => this.agregarFavoritos(this.props.id)} > Agregar a Favoritos</button> 
              }
              {
                !this.state.verDetail ? 
                <button onClick={ () => this.verMas()}>Ver mas</button>
                :
                <button onClick={() => this.verMenos()}>Ver menos</button>
              }
              
              <button > <Link to={`./DetailMovies/${this.props.id}`}>Ver Detalle</Link></button>
            </div>
      </section>
    )
    
  }
}


export default MoviesCard