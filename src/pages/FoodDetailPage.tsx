import React from 'react';
import SideBar from '../components/Organims/SideBar';
import { useEffect, useState } from 'react';
import SideBarToggleBtn from '../components/Atoms/SideBarToggleBtn';

const FoodDetailPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [delayedOpen, setDelayedOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setDelayedOpen(true);
    } else {
      const timer = setTimeout(() => setDelayedOpen(false), 100);
      return () => clearTimeout(timer); //ボタンをすぐ押されたときに秒数がたまらないようにする
    }
  }, [isOpen]);

  return (
    <div>
      <SideBarToggleBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`grid ${
          delayedOpen ? 'grid-cols-[200px_1fr]' : 'grid-cols-[0px_1fr]'
        } h-screen`}
      >
        <SideBar isOpen={isOpen} />
        <div className="p-6 overflow-y-auto bg-gray-50">aa</div>
      </div>
    </div>
  );
};

export default FoodDetailPage;
