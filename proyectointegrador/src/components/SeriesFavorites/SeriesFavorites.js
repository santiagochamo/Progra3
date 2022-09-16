

import React, {Component} from "react";
import {Link} from "react-router-dom"


class FavoritoSerie extends Component{
    constructor(props){
        super(props)
        this.state = {
          verMas: "hide",
          dataSeries:[],
          listo: false
        }
    }
    componentDidMount(){
      let storage = localStorage.getItem("favoritosSeries")
      if(storage !== null){
        let parsedStorage = JSON.parse(storage)
       
       Promise.all(
          parsedStorage.map((fav) => {
            return(
              fetch(`https://api.themoviedb.org/3/tv/${fav}?api_key=7a176cc95147be6e695be2faf0e8ff9c`)
              .then(resp => resp.json())
              .then(data => data )
              
          )
          })
        ).then(data =>this.setState({
          dataSeries: data
      }))
    
        .catch(err => console.log(err))
      }
    }
    
    show(){
      this.setState( {verMas: true} )
  }
  hide(){
      this.setState({verMas: false} )
  }

      removeFavoritos(id){
        let fav = localStorage.getItem("favoritosSeries")
        let parsed = JSON.parse(fav)
        let filtro = parsed.filter(elm => elm !== id)
        let string = JSON.stringify(filtro)
        localStorage.setItem("favoritosSeries", string)

        let arrSacarDeFavorito = this.state.dataSeries.filter(elm => elm.id !== id)
    
        this.setState({
          dataSeries: arrSacarDeFavorito,
          favoritos: false
        })
      }

      render(){
        return(
            <div>
            <section className="peliculaspopulares">
                {
                  
                    this.state.dataSeries.length > 0 ?
                    this.state.dataSeries.map((elm, idx) =>
                    
                    <a className="apolaroid">
                        <article className="polaroid">
                            <Link to={`/detalleSerie/${elm.id}`}> <img className="imagen" src={`https://image.tmdb.org/t/p/w342/${elm.backdrop_path}`} alt="hola" /> </Link>
                            <div className="textopolaroid">
                              <Link to={`/detalleSerie/${elm.id}`}> <p className="textopolaroidtitulo"> {elm.name}</p>  </Link>
                             
                          
                              {
                                <button onClick={() => this.removeFavoritos(elm.id)}> Sacar de Favoritos  </button> 
                              }
                              {this.state.verMas ? 
                                        <button  onClick={() => this.hide()}>Ver mas </button>   
                                        :   
                                        <section className='extra'>                            
                                            <p>Descripcion: {elm.overview}</p> 
                                            <button  onClick={() => this.show()}>Ver menos</button>
                                        </section>                                          
                                                             
                                        
                                    } 
                      
                            </div>
                        </article>
                   </a>
                   
               
                    
                     )
                    : 
                    <img src="https://giphy.com/embed/3y0oCOkdKKRi0"/>
                }
                    
               
                    </section>  
            </div>
        )
  
        
    }


}

export default FavoritoSerie