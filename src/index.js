import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ourKeys from './ourKeys';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = ourKeys.YT_API_KEY;


class App extends Component {
  constructor (props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: "That's what the money is for"}, (videos) => {
      this.setState({ videos });
      // console.log(videos);
    });

  }


  render () {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}


// take component-generated HTML, and display it
// on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));