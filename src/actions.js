export const requestSightings = () => ({
	type: 'REQUEST_SIGHTINGS'
})

export const receiveSightings = (response) => ({
	type: 'RECEIVE_SIGHTINGS',
	response
})

export const fetchSightings = () => {
	return function(dispatch) {

		// tell the app that we are waiting for a api response
		dispatch(requestSightings());

		// send request to api
		const url = `https://api.artdatabanken.se/sandbox-observations-r/v2
			/sightings?speciesGroupId=8&dateFrom=2018-04-01&dateTo=2018-06.01`;

		const request = new Request(url, {
			headers: new Headers({
				'Ocp-Apim-Subscription-Key': 'b1749ae159aa4b18928817c61881c5de'
			})
		});

		return fetch(request)
			.then(
				response => response.json(),
				error => console.log('An error occurred.', error)
			)
			// tell the app we have a response
			.then(json => dispatch(receiveSightings(json)))
	}
}