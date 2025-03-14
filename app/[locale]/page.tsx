import { ExchangeRates } from '@/app/[locale]/_components/exchange-rates';

const Home = async () => {
  return (
    <main className="h-full">
      <ExchangeRates />
    </main>
  );
};

export default Home;
