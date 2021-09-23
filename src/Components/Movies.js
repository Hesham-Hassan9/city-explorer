import React from 'react';
import MoviesCard from './MoviesCard';
class Movies extends React.Component {
    render() {
        return (
            <MoviesCard forecastArrMovies={this.props.forecastArrMovies}/>
            
        )
    }
}


export default Movies