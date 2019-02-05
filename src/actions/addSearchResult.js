export function addSearchResult(video){
  return { type: 'ADD_SEARCH_RESULT', video: {videoId: video.id.videoId, videoTitle: video.snippet.title}}
}
