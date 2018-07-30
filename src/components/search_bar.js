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
			<div className="search-bar">
				<input
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)} 
				/>
			</div>
		);
	}

	onInputChange (term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	// render() {
	// 	return <input onChange={this.onInputChange} />;
	// }

	// onInputChange(event) {
	// 	console.log(event.target.value);
	// }
}

export default SearchBar;