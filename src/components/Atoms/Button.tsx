import { Button as ShadcnButton } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Props = React.ComponentProps<typeof ShadcnButton>;

export const Button = ({ className, ...props }: Props) => {
  return <ShadcnButton className={cn(className)} {...props} />;
};
