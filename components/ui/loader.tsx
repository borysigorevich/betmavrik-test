import { cn } from '@/lib/utils';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={cn('flex h-full items-center justify-center', className)}>
      <div className="border-primary h-12 w-12 animate-spin rounded-full border-b-2"></div>
    </div>
  );
};
