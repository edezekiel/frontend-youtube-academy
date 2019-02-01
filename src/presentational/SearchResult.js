import React from 'react'

import YouTubePlayer from 'react-player/lib/players/YouTube'

const SearchResult = (props) => {
  return(
    <YouTubePlayer
      width="400px"
      url={`https://www.youtube.com/watch?v=${props.result}`}
      controls
    />
  )
}

export default SearchResult
