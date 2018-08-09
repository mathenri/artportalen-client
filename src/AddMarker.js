import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMarker } from './actions'

class AddMarker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lat: 0,
			lng: 0,
			text: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit(event) {
		console.log('dispatching', [this.state.lat, this.state.lng], this.state.text)
		this.props.dispatch(addMarker([this.state.lat, this.state.lng], this.state.text))
		event.preventDefault()
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Lat:{" "}
					<input 
						className="input-number"
						name="lat" 
						type="number" 
						value={this.state.lat} 
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Lng:{" "}
					<input 
						className="input-number"
						name="lng" 
						type="number" 
						value={this.state.lng} 
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Text:{" "}
					<input 
						className="input-text"
						name="text" 
						type="text" 
						value={this.state.text} 
						onChange={this.handleChange}
					/>
				</label>
				<input 
					type="submit" 
					value="Submit"
					className="input-submit" 
				/>
			</form>
		)
	}
}

export default connect()(AddMarker)