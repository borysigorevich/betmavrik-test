import { CryptoSymbol } from '@/components/crypto-symbol';
import { Card, CardContent } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';

interface ICryptoCardProps {
  currency: string;
  rate: string;
}

export const CryptoCard = async ({ currency, rate }: ICryptoCardProps) => {
  return (
    <Card className="border-secondary hover:shadow-secondary rounded-none bg-black transition-all hover:-translate-x-1 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CryptoSymbol symbol={currency} />
            <div className={'text-primary flex items-center gap-1'}>
              <p>{currency}</p>
              <span>/</span>
              <p>EUR</p>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-primary text-2xl font-bold">
              {formatCurrency(Number.parseFloat(rate), 'EUR')}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
