import React, {Component} from "react";
import AllMovies from "../../components/AllMovies/AllMovies";
import AllSeries from "../../components/AllSeries/AllSeries";
import MoviesCard from '../..//components/MoviesCard/MoviesCard'
import Search from "../../components/Search/Search";

class Movie extends Component {
    constructor(props){
        super(props);
        this.state = {
            valor: "",
            data: []
        }
    }

    bringMoovies() {
        if (Movie !== "") {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=0002daaf86f106b6b8226fa0a789628f&query=${Movie}`)
        .then(resp => resp.json())
        .then(data => {
            if(data.results.length > 0){
                console.log(data)
                this.setState({
                infoMovies: data.results,
                infoMoviesEmpty: false

                })
            }
         })
        .catch(error =>{
            this.setState({
                infoMoviesEmpty: true
            })
        })
            
       
            
        }else{
            this.setState({
                infoMovies:[]
            })
        }   
    }

   render (){
    return (
        <>
         
           <MoviesCard/>
        
           <Search search={(name) => this.search(name)} />
        {
          this.state.infoMoviesEmpty ?
          <h2>No se encontraron resultados</h2>
          :
          this.state.infoMovies.length > 0 ?
          this.state.infoMovies.map(elm => <h2>{elm.name}</h2>)
          : ''
        }
        

            <AllMovies />
          
           
           
            </>
    )

   }
    

}
export default Movie