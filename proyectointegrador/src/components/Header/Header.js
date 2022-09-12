
import React, {Component} from "react";
import {Link} from "react-router-dom"
import Search from "../Search/Search"; //arreglar esto


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            valor: "",
            data: []
        }
    }

    buscarPeliculas(nombre){
        if (nombre !== "") {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=0002daaf86f106b6b8226fa0a789628f&query=${nombre}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data.results,

        }))
        .catch(error => console.log(error))
            
        }else{
            <p>No hay resultados que coincidan con esta busqueda. </p>
        }
        
    }
    render(){
        return(
        <>
        <nav>
                <ul className="user">
                    <li> <Link to = {`/`}> <img src="./public/img/logoPelicula.png" alt="logo" /> </Link></li>
                </ul>
                <div className='search-box'>
                        <Search buscar ={(nombre) => this.buscarPeliculas(nombre)}/> 
                        {
                            this.state.data.length > 0 ? this.state.data.map((favoritos) => <h2>{favoritos.title}</h2>) : ""
                        }
                </div>
                <ul className="main-nav">
                    <li> <Link to ={`/`}>Home</Link></li>
                    <li> <Link to ={`/favoritos`}>Favoritos</Link></li>
                </ul>
        </nav>
        </>
            
            )

    }
    
}
export default Header
    
