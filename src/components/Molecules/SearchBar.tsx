import { Input } from '@/components/Atoms/Input';
import { Icon } from '@/components/Atoms/Icon';
import { Button } from '../Atoms/Button';
type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchBar = ({ value, onChange }: Props) => {
  return (
    <div>
      <Icon name="Search" className=" " />
      <Input
        placeholder="食材を追加"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className=""
      />
      <Button variant="ghost" size="sm" className="">
        <Icon name="Filter" className=" " />
      </Button>
      /
    </div>
  );
};
