import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Home extends Component{
   
            constructor(props){
                super(props)
                this.state = {
                    character:{
                        name:'Juancito',
                        id:15
                    }
                }
            }
            render(){
            return(
            <>
            <h1>Hola Mundo</h1>
            <Link to= {`/details/${this.state.character.id}`}>Link a detalles de producto</Link>
            </>
              )
            }
    
}

export default Home