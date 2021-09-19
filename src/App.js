import React from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: {},
      search: '',
      showInfo: false
    }
  }

  getLocFun = async (e) => {
    e.preventDefault();
    await this.setState({
      search: e.target.city.value
    })

    console.log('key', process.env.REACT_APP_LOCATIONIQ_KEY);

    let reqUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.search}&format=json`;

    let locResult = await axios.get(reqUrl);
    
    this.setState({
      result: locResult.data[0],
      showInfo: true
    })


  }


  render() {
    return (
      <div>
        <h3>City Explorer app</h3>
        <form onSubmit={this.getLocFun} >
          <input type="text" name='city' />
          <input type="submit" value='Explore!' />
        </form>

        {this.state.showInfo &&
          <>
            <p>City name: {this.state.search}</p>
            <p>latitude: {this.state.result.lat}</p>
            <p>longitude: {this.state.result.lon} </p>

            <img src={`https://maps.locationiq.com/v3/staticmap?key=f5de8e48adbdc6&center=${this.state.result.lat},${this.state.result.lon}&zoom=10`} alt="city" />

          </>
        }


      </div>
    )
  }
}

export default App;
