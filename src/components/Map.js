import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class Map extends Component {

  constructor() {
    super()
    this.state = {
      map: null,
    }
  }

  mapMoved() {
    console.log('mapMoved: '+JSON.stringify(this.state.map.getCenter()));
  }
  mapLoaded(map) {
    // console.log('mapLoaded: '+JSON.stringify(map.getCenter()));
    if (this.state.map != null) {
      return
    } else {
        this.setState({
          map: map
      });
    }
  }
  zoomChanged() {
    console.log('zoomChanged: '+this.state.map.getZoom())
  }
  

  render() {
    const markers = this.props.markers || [];
    return (
      <GoogleMap
        ref={this.mapLoaded.bind(this)}
        onDragEnd={this.mapMoved.bind(this)}
        onZoomChanged={this.zoomChanged.bind(this)}
        defaultZoom={this.props.zoom}
        defaultCenter= {this.props.center}
      >
        {markers.map((marker, index) => <Marker {...marker} /> )}
      </GoogleMap>
    );
  }
}

export default withGoogleMap(Map);
