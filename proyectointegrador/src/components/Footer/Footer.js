import React from 'react'
import logo from "../../img/logo.svg"
import "./styles.css"

function Footer() {
  return (
    <footer>
        <img  src={logo} className="logoImg" alt="logo"/>
        <p className="fondo">Copyright © - Todos los derechos reservados</p>
        <p >Bautista Linares, Santiago Chamo, Bautista Fernandez Sasso </p>
    </footer>
  )
}

export default Footer