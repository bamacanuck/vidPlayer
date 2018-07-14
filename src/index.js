// import React, etc.

import React from 'react';
import ReactDOM from 'react-dom';
import myKeys from './myKeys';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = myKeys.YT_API_KEY;

YTSearch({key: API_KEY, term: "surfboards"}, function (data) {
  console.log(data);
});

// create a new component - to produce some HTML

const App = () => {
  return (
    <div>
        <SearchBar />
    </div>
  );
}


// take component-generated HTML, and display it
// on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));