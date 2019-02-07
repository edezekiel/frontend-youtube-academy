export function addSearchResult(video){
  return { type: 'ADD_SEARCH_RESULT', video: {videoId: video.id.videoId, videoTitle: video.snippet.title}}
}

export function addUserNotebook(notebook) {
  return { type: "ADD_USER_NOTEBOOK", notebook: notebook };
}

export function addUserOutline(outline){
  return { type: 'ADD_USER_OUTLINE', outline: outline}
}

export function createOutlineNote(user){
  return { type: 'CREATE_OUTLINE_NOTE', user: user}
}

export function loginSuccess(user){
  return { type: 'LOGIN', user: user}
}

export function logout(){
  localStorage.clear()
  return { type: 'LOGOUT'}
}
