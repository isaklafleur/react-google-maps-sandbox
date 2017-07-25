import React, { Component } from 'react';
import './App.css';

import Map from './components/Map';
import Places from './components/Places';

class App extends Component {
  render() {
    const location = {
      lat: 40.7575,
      lng: -73.9884
    }
    return (
      <div>
        This is a react app!
        <div style={{ width: 300, height: 600, background: 'red' }}>
          <Map
            zoom = {15}
            center= {location}
            containerElement={<div style={{height:`100%`}} />}
            mapElement={<div style={{height:`100%`}} />}
           />
        </div>
        <Places />
      </div>
    );
  }
}

export default App;
