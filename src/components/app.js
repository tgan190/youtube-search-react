import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './search_bar';
const API_KEY = 'xxxxxxxx';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_detail';



export default class App extends React.Component {
    
  constructor(props) {
      super(props);
      
      this.state = 
      {videos : [],
      selectedVideo : null};
      
      this.videoSearch('surfboards');
      
  }

    
  videoSearch(term) {
      YTSearch ({key: API_KEY, term: term}, (videos) => {
          //console.log(data)
          this.setState({videos: videos,
                        selectedVideo: videos[0]});
       });
  }
    
  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)},1000);
      //<SearchBar onSearchTermChange={term => this.videoSearch(term)}/> 
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/> 
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
       </div>
    );
  }
}
