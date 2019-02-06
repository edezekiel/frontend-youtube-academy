import RAILS_API from '../services/Backend'

let fetchOutlineNote = (outlineNote) => {
  return fetch(`${RAILS_API}/outline_notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      outline: outlineNote.outline,
      notebook: outlineNote.notebook,
      googleID: outlineNote.user.El,
    })
  })
  .then(res => res.json())
}

export default fetchOutlineNote
