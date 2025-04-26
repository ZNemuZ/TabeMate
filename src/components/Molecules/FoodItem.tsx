import { useNavigate } from 'react-router-dom';
import { FoodItemProps } from '../../types/FoodItemProps';

const FoodItem = ({ id, name, category, exp, image }: FoodItemProps) => {
  const navigate = useNavigate();
  const clickedItem = (foodsId: string) => {
    navigate(foodsId);
  };

  return (
    <div
      className="bg-white rouded-lg shadow-md p-4 w-full"
      onClick={() => clickedItem(`/foods/${id}`)}
    >
      <img
        src={image}
        alt={name}
        className="h-32 w-full object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">{category}</p>
      <p className="text-sm text-red-500">賞味期限：{exp}</p>
    </div>
  );
};

export default FoodItem;
