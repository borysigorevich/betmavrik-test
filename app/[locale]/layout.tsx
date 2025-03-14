import { Header } from '@/components/shared/header';
import { routing } from '@/i18n/routing';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { Space_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import './globals.css';

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] });

const rtlLocales = ['he'];

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

  const dir = rtlLocales.includes(locale) ? 'rtl' : 'ltr';

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      className={spaceMono.className}
    >
      <body>
        <NextIntlClientProvider>
          <div
            className={
              'mx-auto grid min-h-screen max-w-7xl grid-rows-[auto_1fr] p-4 md:p-8 lg:p-12'
            }
          >
            <Header />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
