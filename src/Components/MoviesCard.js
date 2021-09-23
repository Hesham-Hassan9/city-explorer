import React from 'react';
import Card from 'react-bootstrap/Card'
class MoviesCard extends React.Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.forecastArrMovies.posterPath} />
                <Card.Body>
                    <Card.Title>{this.props.forecastArrMovies.title}</Card.Title>
                    <Card.Text>
                    {this.props.forecastArrMovies.overview}
                    </Card.Text>
                    <p>Release Date {this.props.forecastArrMovies.releaseDate}</p>
                    <p>Vote Average {this.props.forecastArrMovies.voteAverage}</p>
                </Card.Body>
            </Card>
        )
    }
}


export default MoviesCard