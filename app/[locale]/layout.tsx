import { routing } from '@/i18n/routing';
import {Space_Mono} from 'next/font/google'
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import './globals.css'

const spaceMono = Space_Mono({subsets: ['latin'], weight: ['400', '700']})

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const dir = locale === "he" ? "rtl" : "ltr"

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning className={spaceMono.className}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
