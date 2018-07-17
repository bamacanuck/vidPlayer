// import React, etc.

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ourKeys from './ourKeys';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
const API_KEY = ourKeys.YT_API_KEY;

YTSearch({key: API_KEY, term: "Shania"}, function (data) {
  console.log(data);
});


class App extends Component {
  constructor (props) {
    super(props);

    this.state = { videos: [] };
  }


  render () {
    return (
      <div>
          <SearchBar />
      </div>
    );
  }
}


// take component-generated HTML, and display it
// on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));