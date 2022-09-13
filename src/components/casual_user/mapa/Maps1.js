import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";
export default class Maps_1 extends Component {
  render() {
    return (
      <div className="container">
        <GoogleMaps
          apiKey={"AIzaSyAIoaqD6zupornIMbdYcAfDaTSHjAjFWJ4"}
          style={{ height: "400px", width: "300px" }}
          zoom={12}
          center={{
            lat:  -16.539290336231364,
            lng: -68.0775598084796
          }}
          markers={[
        
            { lat:   -16.539290336231364, lng: -68.0775598084796 }
          ]}
        />
      </div>
    );
  }
}