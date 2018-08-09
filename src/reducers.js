import { combineReducers } from 'redux'

const sightings = (
	state = {
		isFetching: false,
		response: {data: []}
	}, 
	action
) => {
	switch (action.type) {
		case "REQUEST_SIGHTINGS":
			return Object.assign({}, state, {
				isFetching: true
			})
		case "RECEIVE_SIGHTINGS":
			return Object.assign({}, state, {
				isFetching: false,
				response: action.response
			})
		default:
			return state
	}
}

const rootReducer = combineReducers({
	sightings
})

export default rootReducer