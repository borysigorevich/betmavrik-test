import { ErrorBoundary } from '@/components/error-boundary';
import { ExchangeRates } from '@/components/exchange-rates';
import LanguageSwitcher from "@/components/language-switcher";
import {Loader} from "@/components/ui/loader";
import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';

const Home = async () => {
  const t = await getTranslations('Home');

  return (
    <main className="min-h-full bg-black p-4 text-center md:p-8 lg:p-12">
      <div className="mx-auto max-w-7xl min-h-screen grid grid-rows-[auto_1fr]">

        <header className={'flex justify-between'}>
          <h1 className="text-3xl text-primary">{t('title')}</h1>
          <LanguageSwitcher />
        </header>

        <ErrorBoundary>
          <Suspense fallback={<div className={'h-full grid items-center'}><Loader/></div>}>
            <ExchangeRates />
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default Home;
