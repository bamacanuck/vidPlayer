// import React, etc.

import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import myKeys from './myKeys';

class SearchBar extends Component {

constructor(props) {
	super(props);

	this.state = { term: '' };
}

	render() {
		return (
			<div>
				<input onChange={event => this.setState({ term: event.target.value })} />
				{/* _ _ _ value of input: {this.state.term} */}
			</div>
		);
	}

	// render() {
	// 	return <input onChange={this.onInputChange} />;
	// }

	// onInputChange(event) {
	// 	console.log(event.target.value);
	// }
}

export default SearchBar;