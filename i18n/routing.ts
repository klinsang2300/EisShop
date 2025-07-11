// i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const locales = ['en', 'th']; 
export const defaultLocale = 'en'; 


export const routing = defineRouting({
  locales,
  defaultLocale,
});