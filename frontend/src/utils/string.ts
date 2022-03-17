export const camelToKebabCase = (string: string) =>
  string.replace(/([a-z0-9])([A-Z0-9])/g, '$1-$2').toLowerCase();

export const objectToCssVariables = (object: { [key: string]: string | number }, prefix?: string) =>
  Object.entries(object)
    .map(([key, value]) => `--${prefix ? `${prefix}-` : ''}${camelToKebabCase(key)}: ${value}`)
    .join(';') + ';';
