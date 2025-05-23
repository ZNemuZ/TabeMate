import FoodItem from '../Molecules/FoodItem';
import { LayoutOpenProps } from '../../types/LayoutOpenProps';
import foodImage from '../../assets/gohan.jpg';

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

const FoodList = ({ isOpen }: LayoutOpenProps) => {
  return (
    <div
      className={`p-6 overflow-y-auto transform transition-all duration-300 ease-in-out ${
        isOpen ? 'ml-[10px] ' : 'ml-0'
      }`}
    >
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
