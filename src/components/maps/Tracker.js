/* global google */
import React from "react";
import PropTypes from 'prop-types';
import { Polyline } from "react-google-maps/lib/components/Polyline";

const PubNub = require("pubnub");
const {
  Marker
} = require("react-google-maps");

const pnChannel = "map-demo";
const pubnub = new PubNub({
  publishKey: "pub-c-27b4e205-2ce2-4a96-acf1-e374d1610327",
  subscribeKey: "sub-c-6e2a9480-d2c8-11e7-aee1-6e8e9d2d00b1",
  uuid: PubNub.generateUUID()
});


class Tracker extends React.Component{
  state={
    lat: this.props.lat,
    lng: this.props.lng,
    lineCoords: []
  }

  componentDidMount(){
    pubnub.subscribe({ channels: [pnChannel] });
    pubnub.addListener({ message: this.redraw });
    console.log(pubnub);
    setInterval(
      () =>
        pubnub.publish({
          channel: pnChannel,
          message: { lat: this.state.lat + 0.001, lng: this.state.lng + 0.01 },
        }),
      1000,
    );
  }

  redraw = payload => {
    console.log("payload: ", payload);
    this.setState({
      lat: payload.message.lat,
      lng: payload.message.lng,
      lineCoords: [
        ...this.state.lineCoords,
        new google.maps.LatLng(payload.message.lat, payload.message.lng),
      ],
    });
  };

  render(){
    return(
    <div>
      <Marker position={{ lat: this.state.lat , lng: this.state.lng }} />
      <Polyline path={this.state.lineCoords} geodesic strokeColor='#2E10FF' />
    </div>
  );
  }
}

Tracker.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired
};

export default Tracker;