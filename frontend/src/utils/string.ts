export const camelToKebabCase = (string: string) =>
  string.replace(/([a-z0-9])([A-Z0-9])/g, '$1-$2').toLowerCase();

export const objectToCssVariables = (object: { [key: string]: string | number }, prefix?: string) =>
  Object.entries(object)
    .map(([key, value]) => `--${prefix ? `${prefix}-` : ''}${camelToKebabCase(key)}: ${value}`)
    .join(';') + ';';

interface IObjectPath {
  [key: string]: any | IObjectPath;
}

export const TEMPLATE_STRING_MATCH = /<%= (.*?) %>/g;

export const templateString = (string: string, variables: { [key: string]: string }) =>
  string.replace(
    TEMPLATE_STRING_MATCH,
    match => variables[match.replace(/<%= /g, '').replace(/ %>/g, '')] || '',
  );

export const objectPath = (path: string[], object: IObjectPath) =>
  path.reduce(
    (reducedObject: any | IObjectPath, pathname: string) => reducedObject[pathname],
    object,
  );
