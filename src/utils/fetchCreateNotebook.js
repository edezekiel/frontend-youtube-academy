import RAILS_API from "../services/Backend";

let fetchCreateNotebook = (notebook, user) => {
  return fetch(`${RAILS_API}/notebooks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: notebook.title,
      googleID: user.El
    })
  }).then(res => res.json());
};

export default fetchCreateNotebook;
