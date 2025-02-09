import React, { useEffect, useState } from 'react';
import { getCatFact, getCatImage } from '../services/catApi.ts';
import { copyToClipboard } from '../hooks/useCopyToClipboard.ts';
import { saveCuriosity } from '../utils/localStorageHelper.ts';

const NewCuriosity: React.FC = () => {
  const [fact, setFact] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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
    alert('¡Curiosidad copiada al portapapeles!');
  };

  return (
    <div className="max-w-xl mx-auto">
      {loading ? (
        <div className="text-center">Cargando...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <>
          <div className="mb-4">
            {imageUrl && (
              <div className="w-full h-0 pb-[150%] relative mb-4">
                <img
                  src={imageUrl}
                  alt="Gato"
                  className="absolute inset-0 w-full h-full object-contain bg-black mx-auto"
                />
              </div>
            )}
          </div>
          <p className="mb-4 text-gray-800">{fact}</p>
          <div className="flex space-x-4">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Guardar
            </button>
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Copiar
            </button>
            <button
              onClick={fetchCuriosity}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Nueva Curiosidad
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default NewCuriosity;
