import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNewCuriosity = () => {
    navigate('/new');
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 h-[85vh]">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 mb-6">
          Bienvenido a Cat Curiosities
        </h1>
        <p className="text-gray-800 mb-8 text-lg leading-relaxed">
          Descubre curiosidades interesantes sobre gatos, guarda las que te gusten
          y comparte.
        </p>
        <button
          onClick={handleNewCuriosity}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Nueva Curiosidad
        </button>
      </div>
    </div>
  );
};

export default Home;
