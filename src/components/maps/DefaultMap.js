import React from "react";

class DefaultMap extends React.Component {
  state = {
    position: {
      lat: null,
      long: null,
    },
    error: "",
  };

  componentWillMount() {
    this.getLocation();
   }
 
  getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        console.log("coordinated:",coords)
        this.setState({
          position: { lat: coords.latitude, long: coords.longitude },
        });
        console.log("state",this.state.position)
      },
      err => {
        this.setState({ error: err });
      },
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
    );
  };

  
  render() {
    const { lat, long } = this.state.position;
    return (
      <div>
        {/* {navigator.geolocation ? (
          this.getLocation()
        ) : (
          <h1>Geo-location disabled in browser</h1>
        )} */}
        <h1>latitude: {lat}</h1>
        <h1>long: {long}</h1>
      </div>
    );
  }
}

export default DefaultMap;
