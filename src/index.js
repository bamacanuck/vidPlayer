import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ourKeys from './ourKeys';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
const API_KEY = ourKeys.YT_API_KEY;


class App extends Component {
  constructor (props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: "Shania"}, (videos) => {
      this.setState({ videos });
    });

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