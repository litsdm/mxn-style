/* eslint-disable compat/compat */
const callApi = (endpoint, body, method = 'GET') => fetch(`api/${endpoint}`, {
  method,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${token}`
  },
  body: JSON.stringify(body),
});

export default callApi;
