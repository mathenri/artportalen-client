import { connect } from 'react-redux'
import SightingMap from './SightingMap'
import { addMarker } from './actions'

const mapStateToProps = state => {
	return {
		sightings: state.sightings
	}
}

export default connect(
	mapStateToProps
)(SightingMap)