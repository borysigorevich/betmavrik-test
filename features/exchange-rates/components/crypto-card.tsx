import { CryptoSymbol } from '@/features/exchange-rates/components/crypto-symbol';
import { Card, CardContent } from '@/components/ui/card';
import {TLocales} from "@/i18n/routing";
import { formatCurrency } from '@/lib/utils';
import {getLocale} from "next-intl/server";

interface ICryptoCardProps {
  currency: string;
  rate: string;
}

export const CryptoCard = async ({ currency, rate }: ICryptoCardProps) => {
  const locale = await getLocale();

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
              {formatCurrency({
                locale: locale as TLocales,
                value: Number.parseFloat(rate),
              })}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
