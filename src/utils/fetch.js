function get(url) {
  return fetch(url, {
    method: 'get',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }, 
  })
  .then((resp) => resp.json());
}

function post(url, payload) {
  return fetch(url, {
    method: 'post',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }, 
    body: JSON.stringify(payload),
  })
  .then((resp) => resp.json());
}

export default {
  get,
  post,
};
