import { TLocales } from '@/i18n/routing';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const localeMap: Record<TLocales, string> = {
  en: 'en-US',
  he: 'he-IL',
};

export function formatCurrency({
  currency = 'EUR',
  value,
  locale,
}: {
  value: number;
  currency?: string;
  locale: TLocales;
}): string {
  return new Intl.NumberFormat(localeMap[locale], {
    style: 'currency',
    currency,
    minimumFractionDigits: 1,
    maximumFractionDigits: 4,
    currencyDisplay: 'name',
  }).format(value);
}
