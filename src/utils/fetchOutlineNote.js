import RAILS_API from '../services/Backend'

let fetchOutlineNote = (outline, notebook, user) => {
  return fetch(`${RAILS_API}/outline_notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      outline: outline,
      notebook: notebook,
      googleID: user.El,
    })
  })
  .then(res => res.json())
}

export default fetchOutlineNote
