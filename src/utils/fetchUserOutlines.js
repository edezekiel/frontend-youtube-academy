import RAILS_API from '../services/Backend'

let fetchUserOutlines = (user) => {
  return fetch(`${RAILS_API}/useroutlines`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      googleID: user.El,
    })
  })
  .then(res => res.json())
}

export default fetchUserOutlines
