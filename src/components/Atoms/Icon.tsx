import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

type IconName = keyof typeof Icons;

export const Icon = ({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) => {
  const LucideIcon = Icons[name] as LucideIcon;
  return <LucideIcon className={className} />;
};
