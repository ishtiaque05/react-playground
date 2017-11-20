import React from "react";
import CurrentLocation from "../maps/CurrentLocation";

class DefaultMap extends React.Component{
  state={
    lat: null,
    long: null,
    error:""
  }

  async componentWillMount(){
    try {
      const position = await CurrentLocation({ enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 });
      console.log("positionnnnnnnnn------------", position.coords)
      this.setState({ lat: position.coords.latitude, long: position.coords.longitude })
      // do something with position.     
    }
    catch (error) {
      console.log(error)
    }
  }
  InitialLocation = (position) =>{
    this.setState({lat: position.lat, lng: position.long })
  }
  render(){
    
    const {lat, long, error} = this.state;
     console.log("data received:",lat);
    return(
      <div>

        <h1>{lat}</h1>
        <h1>{long}</h1>
        {error && <h1>Error: {error}</h1>}
      </div>
    );
  }
}

export default DefaultMap;