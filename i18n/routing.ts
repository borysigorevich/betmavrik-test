import { defineRouting } from 'next-intl/routing';

export type TLocales = 'en' | 'he';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'he'],

  // Used when no locale matches
  defaultLocale: 'en',
});
