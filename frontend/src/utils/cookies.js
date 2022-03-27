export function setCookie(key, value, { expires }) {
  if (typeof document !== 'undefined') {
    document.cookie = `${key}=${value}; expires=${expires}`;
  }
}

const getCookiesObject = cookies =>
  cookies
    ? cookies
        .split(';')
        .map(cookie => cookie.trim().split('='))
        .reduce(
          (cookiesObject, [cookieKey, cookieValue]) => ({
            ...cookiesObject,
            [cookieKey]: cookieValue,
          }),
          {},
        )
    : {};

export const getCookie = key =>
  typeof document !== 'undefined' && getCookiesObject(document.cookie)[key];

export const deleteCookie = key => {
  if (typeof document !== 'undefined') {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
  }
};
