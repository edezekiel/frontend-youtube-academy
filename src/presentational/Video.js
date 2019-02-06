import React from "react";

import YouTubePlayer from "react-player/lib/players/YouTube";

const Video = props => {
  return (
    <YouTubePlayer
      url={`https://www.youtube.com/watch?v=${props.videoId}`}
      height="390px"
      width="640px"
      controls
      host="https://www.youtube.com"
    />
  );
};

export default Video;
