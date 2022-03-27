import { useCallback, useEffect, useState, useMemo } from 'react';

import en from 'translations/en.json';
import { objectPath, templateString, TEMPLATE_STRING_MATCH } from 'utils/string';
import { LANGUAGES } from 'utils/translations';

export type Locale = typeof LANGUAGES;

export function useTranslations() {
  const locale = 'en';

  const selectedLanguage = useMemo(() => LANGUAGES[locale as Locale], [locale]);

  const getTranslations = useCallback(
    (path, variables?) => {
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
    },
    [selectedLanguage],
  );

  return { getTranslations };
}
