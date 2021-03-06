import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ourKeys from './ourKeys';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// import '../style/style.css';
const API_KEY = ourKeys.YT_API_KEY;


class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
        videos: [],
        selectedVideo: null
    };

    this.videoSearch("That's what the money is for");
  }

  videoSearch (term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // console.log(this.state.selectedVideo);
    });
  }

  render () {
    
    const videoSearchThrottled = _.debounce((term) => { this.videoSearch(term) }, 500)

    return (
      <div>
        <h1 class="text-center">SEARCHIN' VIDEOS</h1>
        <SearchBar onSearchTermChange={videoSearchThrottled} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          // pass the onVideoSelect method, to/through VideoList,
				  // so VideoListItem clicks can change
				  // selectedVideo (of this component's state)
          onVideoSelect= {selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}
          // testProp={5}
          />
      </div>
    );
  }
}

// display component-generated HTML
// on the page(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));