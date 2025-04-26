import React from 'react';
import { useEffect, useState } from 'react';

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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 z-1 left-4 text-white bg-gray-800 rounded"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div
        className={`grid ${
          delayedOpen ? 'grid-cols-[200px_1fr]' : 'grid-cols-[0px_1fr]'
        } h-screen`}
      >
        <SideBar isOpen={isOpen} />
        <div className="p-6 overflow-y-auto bg-gray-50">
          <FoodList isOpen={delayedOpen} />
        </div>
      </div>
    </div>
  );
};

export default FoodDetailPage;
