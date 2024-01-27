import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <div className="p-10">
      <div className="mb-4">Valeur: {value}</div>
      <div className="flex gap-4">
        <button
          onClick={increment}
          className="bg-blue-500 hover:bg-blue-700 text-white rounded px-12 py-3">
          Incrémenter
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-700 text-white rounded px-12 py-3">
          Décrémenter
        </button>
        {value}
      </div>
    </div>
  );
}
