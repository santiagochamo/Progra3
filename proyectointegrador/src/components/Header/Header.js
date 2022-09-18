import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../../img/logo.svg"
import "./header.css"




function Header (){
    return (
        <nav>
            <ul className='main-nav'>
                <Link to= "/">
                    <img src={logo} className="logoImg"  alt= 'logo'/>
                </Link>

                <Link to= "/" className='textButton'> Home </Link>
                <Link to=  "/peliculasFavoritas"  className='textButton'> Peliculas Favoritas </Link>
                <Link to=  "/seriesFavoritas"  className='textButton'> Series Favoritas </Link>
            </ul>
        </nav>
      )
}

export default Header
    
