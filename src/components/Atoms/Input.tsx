import { Input as ShadcnInput } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type Props = React.ComponentProps<typeof ShadcnInput>;

export const Input = ({ className, ...props }: Props) => {
  return <ShadcnInput className={cn(className)} {...props} />;
};
