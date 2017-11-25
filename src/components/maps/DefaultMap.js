import React from "react";
import CurrentLocation from "../maps/CurrentLocation";

const { compose, withProps, withStateHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");

class DefaultMap extends React.Component {
  state = {
    lat: null,
    long: null,
    error: "",
  };

  async componentWillMount() {
    try {
      if (navigator.geolocation) {
        const position = await CurrentLocation({
          enableHighAccuracy: false,
          timeout: 20000,
          maximumAge: 1000,
        });
        console.log("positionnnnnnnnn------------", position.coords);
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      } else {
        this.setState({ error: "Browser doesn't support GeoLocation!" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  InitialLocation = position => {
    this.setState({ lat: position.lat, lng: position.long });
  };

  render() {
    const { lat, long, error } = this.state;
    const MapWithAMarker = compose(
      withStateHandlers(
        () => ({
          isOpen: false,
        }),
        {
          onToggleOpen: ({ isOpen }) => () => ({
            isOpen: !isOpen,
          }),
        },
      ),
      withScriptjs,
      withGoogleMap,
    )(props => (
      <GoogleMap defaultZoom={15} defaultCenter={{ lat, lng: long }}>
        <Marker position={{ lat, lng: long }} onClick={props.onToggleOpen}>
          {props.isOpen && (
            <InfoWindow onCloseClick={props.onToggleOpen}>
              <div>Hello world</div>
            </InfoWindow>
          )}
        </Marker>
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

export default DefaultMap;
