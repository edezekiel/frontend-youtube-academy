import RAILS_API from '../services/Backend'

let fetchOutline = (outline, user) => {
  return fetch(`${RAILS_API}/outlines`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      videoId: outline.videoId,
      videoTitle: outline.videoTitle,
      notes: outline.notes,
      googleID: user.El,
    })
  })
  .then(res => res.json())
}

export default fetchOutline
