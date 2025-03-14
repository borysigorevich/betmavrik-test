'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';

const languages = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'he', name: 'עברית', dir: 'rtl' },
];

export default function LanguageSwitcher() {
  const currentLocale = useLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="border-primary !shadow-primary text-primary hover:text-primary ml-auto gap-2 rounded-none border bg-transparent hover:bg-transparent md:ml-0"
        >
          <span>
            {languages.find((lang) => lang.code === currentLocale)?.name || 'Language'}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className={'border-primary shadow-primary grid gap-1 rounded-none bg-black'}
      >
        {languages.map((language) => (
          <DropdownMenuItem
            asChild
            key={language.code}
            className={cn('text-primary', {
              'bg-primary text-black': language.code === currentLocale,
            })}
          >
            <Link href={'/'} locale={language.code}>
              {language.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
