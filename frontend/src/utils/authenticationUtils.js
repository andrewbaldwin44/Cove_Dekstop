export const postRequestHeaders = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
};

export function getDeezerLogin() {
  return fetch('/api/deezer_login').then(response => response.json());
}

export function getDeezerSearch(search, deezerID, userID) {
  return fetch('/api/deezer_search', {
    ...postRequestHeaders,
    body: JSON.stringify({ search, deezerID, userID }),
  })
    .then(response => response.json())
    .catch(error => console.log(error));
}

export function getDeezerChart() {
  return fetch('/api/deezer_chart').then(response => response.json());
}

export function createLoginLink(redirect, inviteID, type) {
  let query = '?';

  if (redirect) query += `redirect=${redirect}&`;
  if (inviteID) query += `id=${inviteID}`;

  return `/users/${type}/${query}`;
}
