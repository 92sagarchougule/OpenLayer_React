import React, { Component } from 'react';
import 'ol/ol.css'; // Import OpenLayers CSS
import Map from 'ol/Map'; // Import Map class from OpenLayers
import View from 'ol/View'; // Import View class from OpenLayers
import TileLayer from 'ol/layer/Tile'; // Import TileLayer class from OpenLayers
import OSM from 'ol/source/OSM'; // Import OSM class from OpenLayers

class OpenLayersMap extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef(); // Create a reference to the map container element
  }

  componentDidMount() {
    // Create a new map instance
    const map = new Map({
      target: this.mapRef.current, // Set the target to the map container element
      layers: [
        new TileLayer({
          source: new OSM(), // Use OpenStreetMap as the tile layer source
        }),
      ],
      view: new View({
        center: [0, 0], // Set the initial center of the map
        zoom: 2, // Set the initial zoom level
      }),
    });

    // Optionally, you can store the map object in the component's state if needed
    // this.setState({ map });
  }

  render() {
    return (
      <div
      ref={this.mapRef} className="container" style={{ width: '100vw', height: '100vh' }} // Set width and height using inline styles
      />
    )

  }
}

export default OpenLayersMap;
