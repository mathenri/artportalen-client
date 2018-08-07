export const addMarker = (coordinates, text) => ({
	type: 'ADD_MARKER',
	coordinates,
	text
})

export const clearMarkers = () => ({
	type: 'CLEAR_MARKERS'
})