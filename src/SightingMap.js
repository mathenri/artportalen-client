import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './SightingMap.css'

const SightingMap = ({isFetching, response}) => (
	<div className="sighting-map">
		{
			isFetching && <div className="loader" />
		}
		<Map center={[58.172, 14.216]} zoom={6}>
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
	</div>
)

export default SightingMap;