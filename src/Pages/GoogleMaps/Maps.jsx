import React, { Component } from "react";
import { LoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import admin from '../../images/admin.jpg'

const LIBRARIES = ["places"];

class Map extends Component {
  render() {
    const { center, zoom } = this.props;
    const centers = [{lat:33.6784501,lng:73.2988849}];

    return (
      <div className="wrapper">
        <LoadScript googleMapsApiKey="AIzaSyDqwruV_OAve0GczEJd8JgXGpjdyH3ofyU" libraries={LIBRARIES}>
          <GoogleMap
            id="map"
            center={center}
            zoom={zoom}
            mapContainerStyle={{ height: "100vh" }}
          >
            {/*  Marker component */}
            <MarkerF   label="A&A dairy and cattle farm" position={centers[0]} />
          </GoogleMap>
        </LoadScript>
      </div>
    );
  }
}

export default Map;
