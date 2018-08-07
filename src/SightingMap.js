import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const SightingMap = ({sightings}) => (
	<Map center={[51.505, -0.09]} zoom={13}>
		<TileLayer
	      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
	      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
	    />
	    {sightings.map(sighting => 
	    	<Marker position={sighting.coordinates}>
	    		<Popup>{sighting.text}</Popup>
	    	</Marker> 
	    )}
	</Map>
)

export default SightingMap;