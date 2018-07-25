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
				onChange={event => this.onInputChange(event.target.value )} 
				/>
			</div>
		);
	}

	onInputChange (term) {
		
	}

	// render() {
	// 	return <input onChange={this.onInputChange} />;
	// }

	// onInputChange(event) {
	// 	console.log(event.target.value);
	// }
}

export default SearchBar;