import { SideBarToggleBtnProps } from '../../types/LayoutOpenProps';
import { Menu, X } from 'lucide-react';

const SideBarToggleBtn = ({ isOpen, setIsOpen }: SideBarToggleBtnProps) => {
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 z-1 left-4 text-white bg-gray-800 rounded"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </>
  );
};

export default SideBarToggleBtn;
