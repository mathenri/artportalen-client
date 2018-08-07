import { combineReducers } from 'redux'

const sightings = (state = [], action) => {
	switch (action.type) {
		case "ADD_MARKER":
			return [
				...state,
				{
					coordinates: action.coordinates,
					text: action.text
				}
			]
		case "CLEAR_MARKERS":
			return []
		default:
			return state
	}
}

const rootReducer = combineReducers({
	sightings
})

export default rootReducer