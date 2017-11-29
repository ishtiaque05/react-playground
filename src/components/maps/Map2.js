import React from "react";
import Tracker from "./Tracker";

const { compose } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} = require("react-google-maps");

class Map2 extends React.Component {
  state = {
    lat: 23.754837,
    lng: 90.3609216,
    originlat: 23.7548371,
    originlng:  90.3609216,
    lineCoords: [],
  };

  render() {
    const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => (
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: this.state.originlat , lng: this.state.originlng }}>
        <Tracker lat={this.state.originlat} lng={this.state.originlng}/>
      </GoogleMap>
    ));
    return (
      <div>
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map2;