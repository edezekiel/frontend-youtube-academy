import RAILS_API from '../services/Backend'

let fetchOutline = (outline, props) => {
  return fetch(`${RAILS_API}/outlines`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      video: outline.video,
      notes: outline.notes,
      googleID: props.user.El,
    })
  })
  .then(res => res.json())
}

export default fetchOutline
