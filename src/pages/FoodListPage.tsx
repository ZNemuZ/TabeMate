import FoodList from '../components/Organims/FoodList';
import SideBar from '../components/Organims/SideBar';
import { useState } from 'react';

const FoodListPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="text-black rounded">
        {isOpen ? 'Close' : 'Open'}
      </button>
      <div
        className={`grid ${
          isOpen ? 'grid-cols-[200px_1fr]' : 'grid-cols-[0px_1fr]'
        } h-screen"`}
      >
        <SideBar isOpen={isOpen} />
        <div className="p-6 overflow-y-auto bg-gray-50">
          <FoodList />
        </div>
      </div>
    </div>
  );
};

export default FoodListPage;
