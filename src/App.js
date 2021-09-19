import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import './Style.css';


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

    let reqUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.search}&format=json`;

    let locResult = await axios.get(reqUrl);

    this.setState({
      result: locResult.data[0],
      showInfo: true
    })


  }


  render() {
    return (
      <>
      <Form onSubmit={this.getLocFun}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label >City Name</Form.Label>
    <Form.Control type="text"  name= "city" placeholder="Enter City Name" />
  </Form.Group>
  <Button variant="primary" type="submit">
  Explore!
  </Button>
</Form>
<br/>
{
      this.state.showInfo &&
      <>
        <p>City name: {this.state.search}</p>
        <p>latitude: {this.state.result.lat}</p>
        <p>longitude: {this.state.result.lon} </p>
        <Image src={`https://maps.locationiq.com/v3/staticmap?key=f5de8e48adbdc6&center=${this.state.result.lat},${this.state.result.lon}&zoom=10`} alt="city"  width={800} height={825} id="map"/>

      </>
    } 
    </>
    )
  }
}

export default App;