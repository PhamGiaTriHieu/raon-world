import {Badge} from '@/components/ui/badge';
import {cn} from '@/lib/utils';

interface IBadgeCustomProps {
  className?: string;
  value: string;
}

const BadgeCustom = ({className, value}: IBadgeCustomProps) => {
  return (
    <Badge
      className={cn('w-[119px] h-10  text-secondary', className)}
      variant="gradient"
    >
      {value}
    </Badge>
  );
};

export default BadgeCustom;
