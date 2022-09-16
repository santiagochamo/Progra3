import React, {Component} from 'react'


class Search extends Component{
    constructor(props){
        super(props)
        this.state={
            valorInput: ''
        }
    }
    pSubmit(event){ 
        event.pDefault(event) 
    }
    controlarCambiosInput(event){ 
        this.setState({
            valorInput: event.target.value
        },
        () => this.props.Search(this.state.valorInput)
        )
    }
    render(){
        return(
            <form onSubmit={(event) => this.pSubmit(event)}>
            <input className="container" type="text" onChange= {(event) => this.controlarCambiosInput(event)} value={this.state.valor}></input>
            <button type="submit"> Buscar</button>
        </form>
        )
    }
}

export default Search