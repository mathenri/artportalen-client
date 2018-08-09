import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSightings } from './actions'

class FetchSightings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			area: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			area: event.target.value
		});
	}

	handleSubmit(event) {
		this.props.dispatch(fetchSightings())
		event.preventDefault()
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Area:{" "}
					<input
						className="input-text"
						type="text" 
						value={this.state.area} 
						onChange={this.handleChange}
					/>
				</label>
				<input 
					type="submit" 
					value="Fetch sightings"
					className="input-submit" 
				/>
			</form>
		)
	}
}

export default connect()(FetchSightings)