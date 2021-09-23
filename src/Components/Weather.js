import React from 'react';
import WeatherDay from './WeatherDay';
class Weather extends React.Component {
    render() {
        return (
            <WeatherDay forecastArr={this.props.forecastArr}/>
        )
    }
}

export default Weather;