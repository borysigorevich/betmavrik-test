import LanguageSwitcher from '@/components/language-switcher';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export const Header = async () => {
  const t = await getTranslations('Home');

  return (
    <header className={'flex flex-col justify-between gap-4 md:flex-row'}>
      <h1 className="text-primary text-3xl">{t('title')}</h1>
      <LanguageSwitcher />
    </header>
  );
};
