import { connect } from 'react-redux'
import SightingMap from './SightingMap'

const mapStateToProps = state => {
	return {
		isFetching: state.sightings.isFetching,
		response: state.sightings.response
	}
}

export default connect(
	mapStateToProps
)(SightingMap)