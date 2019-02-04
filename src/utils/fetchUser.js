import RAILS_API from '../services/Backend'

let fetchUser = (user) => {
  return fetch(`${RAILS_API}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: user.w3.ig,
      googleID: user.El,
      image: user.w3.Paa,
    })
  })
  .then(res => res.json())
}

export default fetchUser
