import FoodList from '../components/Organims/FoodList';
import SideBar from '../components/Organims/SideBar';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const FoodListPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 z-1 left-4 text-white bg-gray-800 rounded"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div
        className={`grid ${
          isOpen ? 'grid-cols-[200px_1fr]' : 'grid-cols-[0px_1fr]'
        } h-screen`}
      >
        <SideBar isOpen={isOpen} />
        <div className="p-6 overflow-y-auto bg-gray-50">
          <FoodList isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
};

export default FoodListPage;
