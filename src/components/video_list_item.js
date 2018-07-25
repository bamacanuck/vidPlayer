import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	// const video = props.video;

	const imageUrl = video.snippet.thumbnails.default.url;

  return (
		// use passed-down function to make the video
		// of this particular list item, when it's clicked,
		// the new selectedVideo (of App state)
    <li onClick={() => onVideoSelect(video)}
			className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl}/>
				</div>
				
				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
  );
};

export default VideoListItem;