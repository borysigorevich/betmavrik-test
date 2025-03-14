'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const CryptoSymbol = ({ symbol }: { symbol: string }) => {
  const iconUrl = `https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/${symbol.toLowerCase()}.svg`;

  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setError(false);
    setLoaded(false);
  }, [symbol]);

  return (
    <div className="relative h-10 w-10">
      {!loaded && !error && (
        <div className="absolute inset-0 animate-pulse rounded-full bg-gray-200" />
      )}

      {error ? (
        <div className="border-primary text-primary shadow-primary flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border text-xs">
          {symbol}
        </div>
      ) : (
        <Image
          src={iconUrl}
          alt={`${symbol} icon`}
          onError={() => setError(true)}
          onLoad={() => {
            setTimeout(() => {
              setLoaded(true);
            }, 10)
          }}
          width={40}
          height={40}
          className={cn('border-primary shadow-primary h-10 w-10 rounded-full border', {
            'invisible': !loaded,
          })}
        />
      )}
    </div>
  );
};
