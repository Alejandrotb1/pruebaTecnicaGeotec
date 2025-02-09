import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNewCuriosity = () => {
    navigate('/new');
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a Cat Curiosities</h1>
      <p className="text-gray-700 mb-6 text-center max-w-xl">
        Descubre curiosidades interesantes sobre gatos, guarda las que te gusten
        y compártelas.
      </p>
      <button
        onClick={handleNewCuriosity}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Nueva Curiosidad
      </button>
    </div>
  );
};

export default Home;
