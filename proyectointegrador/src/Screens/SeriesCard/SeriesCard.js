import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './styles.css'


class SeriesCard extends Component {
  constructor(props){
      super(props)
      this.state={
          actionDescription: 'ocultar', 
          visualDescription: 'Ver descripcion',
          favoritos: false
      }
  }

  mostrarDescripcion(){
      if(this.state.actionDescription === 'ocultar'){
        this.setState({
          actionDescription: 'mostrar', visualDescription: 'Ocultar descripcion' 
      })
    } else{
      this.setState({
        actionDescription: 'ocultar', visualDescription: 'Ver descripcion'
      })
    }
  }


  render(){
      return(
          <article className='seriesCard'>
          <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt=""></img>
          <div className='contenido'>
              <h1> <Link className='serieDetail' to={`/detalleSerie/${this.props.id}`}> {this.props.name} </Link> </h1>
          <p className={this.state.actionDescription}>{this.props.description}</p> 
          
          <div className='seriesCardButton'>
            <button onClick={() => this.showSeriesDescription()}> {this.state.visualDescription} </button>
            <button onClick={() => this.props.addFavorites(this.props.id)} > Agregar a Favoritos</button>
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