// import React, etc.

import React from 'react';
import ReactDOM from 'react-dom';
import keys from myKeys;

const API_KEY = keys.YT_API_KEY;

// create a new component - to produce some HTML

const App = () => {
    return <div>hello, world (!)</div>
}

// take component-generated HTML, and display it
// on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));