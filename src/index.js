// import React, etc.

import React from 'react';
import ReactDOM from 'react-dom';


const API_KEY = "AIzaSyBBnwjLOdB3vpOSmoXQAD1ZvkZUFAs-d3s";


// create a new component - to produce some HTML

const App = () => {
    return <div>hello, world (!)</div>
}

// take component-generated HTML, and display it
// on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));