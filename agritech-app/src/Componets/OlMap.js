import React, { Component } from 'react'
import OlMap from './OlMap'

import "ol/ol.css";
import "ol-ext/dist/ol-ext.css";
import Stamen from 'ol/source/Stamen';
import { Map, View } from "ol";
import { defaults } from "ol/control";
import { Image as ImageLayer, Tile as TileLayer } from 'ol/layer';
import ImageWMS from 'ol/source/ImageWMS';


// Layers
var layers = [

	new ImageLayer({
		source: new ImageWMS({
			url: 'http://localhost:8080/geoserver/mahait/wms',
			crossOrigin: 'Anonymous',
			serverType: 'geoserver',
			visible: true,
			params: {
				'LAYERS': 'mahait:MH_DISTRICT',
				'TILED': true,
			}
		}),
	}),
	new TileLayer({
		title: 'terrain-background',
		source: new Stamen({ layer: 'terrain' })
	}),
]
// The map
var map = new Map({
	target: null,
	view: new View({
		zoom: 5,
		center: [261720, 5951081]
	}),
	controls: defaults({ "attribution": false }),
	layers: layers
});
useEffect(() => {
    map.setTarget("map");
}, []);
class OlMap extends Component {
	componentDidMount() {
		map.setTarget("map");
	}
	render() {

		return (<>
		
			<div>
				<div id="map" style={{ width: "1610px", height: "900px" }}></div>
			</div>
			</>
			
		)
	}
}


export default OlMap;