import { useState } from 'react';
import foodImage from '../../assets/gohan.jpg';
import { useParams } from 'react-router-dom';

const dummeyFoods = [
  {
    id: '001',
    name: 'たまご',
    category: '卵類',
    exp: '2025/04/25',
    image: foodImage,
  },
  {
    id: '002',
    name: 'にんじん',
    category: '野菜',
    exp: '2025/04/20',
    image: foodImage,
  },
  {
    id: '003',
    name: '牛乳',
    category: '飲料',
    exp: '2025/04/22',
    image: foodImage,
  },
];
const FoodDetail = () => {
  const { id } = useParams();
  const food = dummeyFoods.find((item) => item.id === id);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(food?.name || '');

  return (
    <div className="flex flex-col items-center p-6">
      <div className="h-40 w-40 object-cover rouded mb-6">
        <img src={food?.image}></img>
      </div>
      <div className="w-full max-w-md space-y-4">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-black text-white text-sm"
        >
          {isEditing ? '編集をやめる' : '編集'}
        </button>
      </div>
      {isEditing ? (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full mt-2"
        />
      ) : (
        <p className="mt-2">{name}</p>
      )}
    </div>
  );
};

export default FoodDetail;
