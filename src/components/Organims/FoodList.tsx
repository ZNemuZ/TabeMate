import React from 'react';
import FoodItem from '../Molecules/FoodItem';

const dummeyFoods = [
  {
    name: 'たまご',
    category: '卵類',
    exp: '2025/04/25',
    image: '../../assets/gohan.jpg',
  },
  {
    name: 'にんじん',
    category: '野菜',
    exp: '2025/04/20',
    image: '../../assets/gohan.jpg',
  },
  {
    name: '牛乳',
    category: '飲料',
    exp: '2025/04/22',
    image: '../../assets/gohan.jpg',
  },
];

const FoodList = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">食材一覧</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummeyFoods.map((food, index) => (
          <FoodItem key={index} {...food} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
