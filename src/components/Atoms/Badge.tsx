import { Badge as ShadcnBadge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type Props = React.ComponentProps<typeof ShadcnBadge>;

export const Badge = ({ className, ...props }: Props) => {
  return <ShadcnBadge className={cn(className)} {...props} />;
};
