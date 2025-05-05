import { useState } from 'react';

const FoodDetail = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('卵');

  return (
    <div className="flex flex-col items-center p-6">
      <div className="h-40 w-40 object-cover rouded mb-6">gazou</div>
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
