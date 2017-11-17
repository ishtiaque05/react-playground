import React from "react";
import CurrentLocation from "../maps/CurrentLocation";

class DefaultMap extends React.Component{
  state={
    lat: null,
    lng: null
  }

  InitialLocation = (position) =>{
    this.setState({lat: position.lat, lng: position.long })
  }
  render(){
    return(
      <div>
        <CurrentLocation InitialLocation={this.InitialLocation} />
        <h1>{this.state.lat}</h1>
        <h1>{this.state.lng}</h1>
        
      </div>
    );
  }
}

export default DefaultMap;