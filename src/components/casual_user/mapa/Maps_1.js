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
            lat: 40.451824,
            lng: -3.690759
          }}
          markers={[
    
            { lat: 40.451824, lng: -3.690759 }
          ]}
        />
      </div>
    );
  }
}