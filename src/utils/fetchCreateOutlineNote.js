import RAILS_API from '../services/Backend'

let fetchCreateOutlineNote = (outlineNote, email) => {
  return fetch(`${RAILS_API}/outline_notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      outline: outlineNote.outline,
      notebook: outlineNote.notebook,
      email: email,
    })
  })
  .then(res => res.json())
}

export default fetchCreateOutlineNote
