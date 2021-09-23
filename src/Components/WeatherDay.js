import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
class WeatherDay extends React.Component {
    render() {
        return (
            <Card style={{ width: '18rem' }} >
                <Card.Header>Weather</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>{this.props.forecastArr.datetime}</ListGroup.Item>
                    <ListGroup.Item>{this.props.forecastArr.description}</ListGroup.Item>
                </ListGroup>
            </Card>
        )
    }
}

export default WeatherDay;