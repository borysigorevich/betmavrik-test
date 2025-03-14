import { ExchangeRates } from '@/features/exchange-rates/exchange-rates';

const Home = async () => {
  return (
    <main className="h-full">
      <ExchangeRates />
    </main>
  );
};

export default Home;
