import React, { useState, useEffect } from 'react';
import { copyToClipboard } from '../../hooks/useCopyToClipboard.ts';

interface Curiosity {
  fact: string;
  imageUrl: string;
}

interface CuriosityModalProps {
  curiosity: Curiosity;
  onClose: () => void;
}

const CuriosityModal: React.FC<CuriosityModalProps> = ({ curiosity, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copyToClipboard(curiosity.fact);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose(); // Cierra el modal
      }
    };

    // Agregar el event listener
    window.addEventListener('keydown', handleEscapeKey);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded p-6 w-11/12 max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          aria-label="Cerrar"
        >
          X
        </button>
        <h3 className="text-xl font-bold mb-4">Detalle de Curiosidad</h3>
        {curiosity.imageUrl && (
          <div className="w-full h-0 pb-[150%] relative mb-4">
            <img
              src={curiosity.imageUrl}
              alt="Curiosidad"
              className="absolute inset-0 w-full h-full object-contain bg-black mx-auto"
            />
          </div>
        )}
        <p className="mb-4">{curiosity.fact}</p>
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {copied ? '¡Copiado!' : 'Copiar'}
        </button>
      </div>
    </div>
  );
};

export default CuriosityModal;
