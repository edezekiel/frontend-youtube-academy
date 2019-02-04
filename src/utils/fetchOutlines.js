import RAILS_API from '../services/Backend'

let fetchOutlines = (props) => {
  return fetch(`${RAILS_API}/useroutlines`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      googleID: props.user.El,
    })
  })
  .then(res => res.json())
}

export default fetchOutlines
