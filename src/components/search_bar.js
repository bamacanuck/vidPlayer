// import React, etc.

import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import myKeys from './myKeys';

class SearchBar extends Component {

constructor(props) {
	super(props);

	this.state = { term: ' (search terms) ' };
}

	render() {
		return (
			<div className="search-bar">
				<input
				value={this.state.term}
				onChange={event => this.setState({ term: event.target.value })} 
				/>
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