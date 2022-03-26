export enum REQUEST_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type Query = { [key: string]: string | number };

interface IAsynchrounousRequestOptions {
  type: typeof REQUEST_METHODS;
  body?: { [key: string]: any };
  query: Query;
}

const getRequestHeaders = ({ type, body }) => ({
  headers: {
    'Content-Type': 'application/json',
  },
  method: type,
  body: body ? JSON.stringify(body) : null,
});

function formatQueryString(query: Query) {
  return Object.entries(query).reduce((qs, [key, value]) => {
    if (!value) return qs;

    const encodedValue = encodeURI(String(value));

    return qs ? `${qs}&${key}=${encodedValue}` : `?${key}=${encodedValue}`;
  }, '');
}

export async function asynchrounousRequest(
  request: string,
  { type = REQUEST_METHODS.GET, body, query }: IAsynchrounousRequestOptions,
) {
  const queryString = query ? formatQueryString(query) : '';

  const response = await fetch(
    `${process.env.BACKEND_URL}${request}${queryString}`,
    getRequestHeaders({ type, body }),
  ).json();

  if (response.statusCode >= 400) {
    throw new Error(`Network Error: Status ${response.statusCode} ${response.message}`);
  }

  return response;
}
