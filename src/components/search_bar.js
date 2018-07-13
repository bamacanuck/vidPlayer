// import React, etc.

import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import myKeys from './myKeys';

class SearchBar extends Component {
	render() {
		return <input onChange={this.onInputChange} />;
	}

	onInputChange(event) {
		console.log(event.target.value);
	}
}

export default SearchBar;