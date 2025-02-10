import { useEffect, useState } from 'react';
import { getCatFact, getCatImage } from '../services/catApi';
import { copyToClipboard } from '../hooks/useCopyToClipboard';
import { saveCuriosity } from '../utils/localStorageHelper';

const NewCuriosity: React.FC = () => {
  const [fact, setFact] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const fetchCuriosity = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log("Obteniendo curiosidad...");
      const factData = await getCatFact();
      console.log("Curiosidad recibida:", factData);

      const firstWord = factData.split(' ')[0];
      console.log("Primera palabra:", firstWord);

      const image = await getCatImage(firstWord);
      console.log("Imagen recibida:", image);

      setFact(factData);
      setImageUrl(image);
    } catch (err: any) {
      console.error("Error en fetchCuriosity:", err);
      setError('Error al obtener la curiosidad.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCuriosity();
  }, []);

  const handleSave = () => {
    saveCuriosity({ fact, imageUrl });
    alert('¡Curiosidad guardada!');
  };

  const handleCopy = () => {
    copyToClipboard(fact);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Resetear después de 2 segundos
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-200 h-[85vh]">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-xl w-full overflow-hidden">
        {loading ? (
          <div className="text-center">Cargando...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <>
            <div className="mb-4">
              {imageUrl && (
                <div className="w-full h-0 pb-[100%] relative mb-4 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt="Gato"
                    className="absolute inset-0 w-full h-full object-contain bg-black mx-auto"
                  />
                </div>
              )}
            </div>
            <p className="mb-4 text-gray-800">{fact}</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleSave}
                className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                Guardar
              </button>
              <button
                onClick={handleCopy}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                {copied ? '¡Copiado!' : 'Copiar'}
              </button>
              <button
                onClick={fetchCuriosity}
                className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Nueva Curiosidad
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NewCuriosity;
