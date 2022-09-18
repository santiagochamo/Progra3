import {Component} from 'react'
import SeriesCard from '../SeriesCard/SeriesCard';


class AllPopularSeries extends Component {
    constructor(props){
        super(props)
        this.state={
            data: []
            
        }
    }
   

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=7a176cc95147be6e695be2faf0e8ff9c')
        .then(resp => resp.json())
        .then(data => this.setState({
            data: data.results
        }))
        .catch(error => console.log(error)) 
    }


  render() {
    console.log(this.state.data)
    return (
        <>
        <div className="palabra">
            <h3>TODAS LAS SERIES MEJORES VALORADAS</h3>
        </div>
        <section className="card-container">
            {
                this.state.data.length > 0 ?
                this.state.data.map((personajeSerie, idx) => 
                <SeriesCard 
                    key={personajeSerie + idx} 
                    name={personajeSerie.name} 
                    image={personajeSerie.poster_path}
                    descripcion={personajeSerie.overview}
                    id = {personajeSerie.id}
                />):
                <img src="https://giphy.com/embed/3y0oCOkdKKRi0" alt="imagen de prueba"/>
            }
      </section>
        </>
    )
  }
}


export default AllPopularSeries