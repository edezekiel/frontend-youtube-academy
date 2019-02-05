import RAILS_API from '../services/Backend'

let fetchUserNotebooks = (user) => {
  return fetch(`${RAILS_API}/usernotebooks`, {
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

export default fetchUserNotebooks
