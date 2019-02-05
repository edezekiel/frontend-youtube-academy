import RAILS_API from "../services/Backend";

let fetchShowNotebook = id => {
  return fetch(`${RAILS_API}/notebooks/${id}`).then(res => res.json());
};

export default fetchShowNotebook;
