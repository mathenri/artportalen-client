import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const SightingMap = ({isFetching, response}) => (
	<Map center={[51.505, -0.09]} zoom={13}>
		<TileLayer
	      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
	      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
	    />
	    {response.data.map(sighting => 
	    	<Marker 
	    		key={sighting.id} 
	    		position={[sighting.site.coordinates[1].northing, sighting.site.coordinates[1].easting]}
	    	>
	    		<Popup>{sighting.commonName}</Popup>
	    	</Marker> 
	    )}
	</Map>
)

export default SightingMap;