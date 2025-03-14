'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from '@/i18n/navigation';
import { AlertCircle } from 'lucide-react';
import React, { startTransition } from 'react';
import { useTranslations } from 'use-intl';

const Error = ({
  error,
  reset,
}: {
  reset: () => void;
  error: Error & { digest?: string };
}) => {
  const router = useRouter();
  const t = useTranslations('Error');

  const refreshAndReset = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  console.log({ error });

  return (
    <div className="grid h-full place-items-center bg-black">
      <div className={'flex flex-col items-center gap-3 text-center'}>
        <div className="text-primary flex items-center justify-center gap-2">
          <AlertCircle className="h-5 w-5" />
          <h2>{t('title')}</h2>
        </div>

        <p className={'text-primary'}>{error.message}</p>

        <Button
          onClick={refreshAndReset}
          className="!shadow-primary border-primary text-primary w-fit gap-2 rounded-none border bg-black hover:-translate-x-px hover:-translate-y-px hover:bg-black"
        >
          {t('tryAgain')}
        </Button>
      </div>
    </div>
  );
};

export default Error;
