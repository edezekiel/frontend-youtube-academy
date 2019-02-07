import RAILS_API from "../services/Backend";

let fetchNotebookOutlines = id => {
  return fetch(`${RAILS_API}/notebooks/${id}`).then(res => res.json());
};

export default fetchNotebookOutlines;
