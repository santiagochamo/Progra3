import React, {Component} from 'react'
import {Link} from "react-router-dom"
import './styles.css'

class MooviesCard extends Component {

  constructor(props){
    super(props)
    this.state ={
      verMas: 'ocultar',
      favoritos: false

    }
  }
  verMas(){
    if(this.state.verMas === 'show'){
      this.setState({
        verMas:'ocultar'
      })
    } else {
      this.setState({
        verMas:'mostrar'
      })
    }
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
      favorites: false
    })
  }



  render(){
    return (
    <section className='peliculaspopulares'>
    <a className="apolaroid">
        <article className="polaroid">
            <img className="imagen" src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" /> 
            <div className="textopolaroid">
              <p className="textopolaroidtitulo"> <Link to={`/DetailMovies/${this.props.id}`}> {this.props.name}</Link></p>
             
              <p className={this.state.verMas}>{this.props.descripcion}</p> 
              {
                this.state.Favorites ? <button onClick={() => this.removeFavoritos(this.props.id)}> Sacar de Favoritos</button>: <button onClick={() => this.agregarFavorites(this.props.id)} > Agregar a Favoritos</button> 
              }
              
              <button onClick={() => this.verMas()}>Ver más</button>


              
            </div>
        </article>
   </a>
   
</section>
    )
    
  }
}


export default MooviesCard