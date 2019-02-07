import RAILS_API from '../services/Backend'

let fetchCreateOutline = (outline, email) => {
  return fetch(`${RAILS_API}/outlines`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      videoId: outline.videoId,
      videoTitle: outline.videoTitle,
      notes: outline.notes,
      email: email,
    })
  })
  .then(res => res.json())
}

export default fetchCreateOutline
