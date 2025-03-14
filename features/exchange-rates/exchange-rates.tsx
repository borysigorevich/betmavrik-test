import { getCryptoRates } from '@/features/exchange-rates/api/get-crypto-rates';
import { CryptoCard } from '@/features/exchange-rates/components/crypto-card';
import { ErrorInterceptor } from '@/components/shared/error-interceptor';

export const ExchangeRates = async () => {
  const { data, error } = await getCryptoRates();

  const rates = data?.data.rates || {};

  // TODO: add search functionality, pagination

  return (
    <ErrorInterceptor error={error}>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Object.entries(rates).map(([currency, rate]) => (
          <CryptoCard key={currency} currency={currency} rate={rate} />
        ))}
      </div>
    </ErrorInterceptor>
  );
};
