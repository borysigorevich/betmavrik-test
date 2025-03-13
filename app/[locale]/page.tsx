import { ExchangeRates } from '@/components/exchange-rates';
import LanguageSwitcher from '@/components/language-switcher';
import { Loader } from '@/components/ui/loader';
import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';

const Home = async () => {
  const t = await getTranslations('Home');

  return (
    <main className="min-h-full bg-black p-4 text-center md:p-8 lg:p-12">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-rows-[auto_1fr]">
        <header className={'flex justify-between'}>
          <h1 className="text-primary text-3xl">{t('title')}</h1>
          <LanguageSwitcher />
        </header>

        <Suspense fallback={<Loader />}>
          <ExchangeRates />
        </Suspense>
      </div>
    </main>
  );
};

export default Home;
