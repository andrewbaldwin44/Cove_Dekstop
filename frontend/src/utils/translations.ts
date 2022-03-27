import en from 'translations/en.json';

import { objectPath, templateString, TEMPLATE_STRING_MATCH } from 'utils/string';

export enum LANGUAGES {
  en = en,
}

export default function getTranslations(path, variables) {
  const locale = 'en';

  const selectedLanguage = LANGUAGES[locale];

  const translation = objectPath(path.split('.'), selectedLanguage);

  if (!translation) {
    throw new Error(`Translation at path ${path} not found`);
  }

  const hasTemplate = TEMPLATE_STRING_MATCH.test(translation);

  if (hasTemplate && !variables) {
    throw new Error('Translation template string has missing variables');
  }
  if (variables) {
    return templateString(translation, variables);
  }

  return translation;
}
