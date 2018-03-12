import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    
   // const video = props.video;
   // console.log(video);
    //<li onClick={() => {onVideoSelect(video); console.log('video clicked xx');}}
    // the () is necesary as an event could be passed in by default for the click
    // no binding required as the method is from the parent and not the current element
    // the {} is always required
    
    const imageUrl = video.snippet.thumbnails.default.url;
    const fsize = {fontSize : '10px'};
    return (
            <li onClick={() => onVideoSelect(video)} className="list-group-item">
             <div className="video-list media">
              <div className="media-left">
               <img className="image-object" src={imageUrl}/>
              </div>
              <div className="media-body">
               <div className="media-heading" style={fsize}>{video.snippet.title}</div>
              </div>
             </div>
            </li>
           );
    
};

export default VideoListItem;