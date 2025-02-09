import React, { useState } from 'react';
import { getSavedCuriosities } from '../utils/localStorageHelper.ts';
import CuriosityCard from '../components/cards/CuriosityCard.tsx';
import CuriosityModal from '../components/modal/CuriosityModal.tsx';

interface Curiosity {
  fact: string;
  imageUrl: string;
}

const MyCuriosities: React.FC = () => {
  const [curiosities, setCuriosities] = useState<Curiosity[]>(getSavedCuriosities());
  const [selectedCuriosity, setSelectedCuriosity] = useState<Curiosity | null>(null);

  const handleCardClick = (curiosity: Curiosity) => {
    setSelectedCuriosity(curiosity);
  };

  const handleCloseModal = () => {
    setSelectedCuriosity(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Mis Curiosidades</h2>
      {curiosities.length === 0 ? (
        <p>No has guardado ninguna curiosidad.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {curiosities.map((curiosity, index) => (
            <CuriosityCard
              key={index}
              curiosity={curiosity}
              onClick={() => handleCardClick(curiosity)}
            />
          ))}
        </div>
      )}

      {selectedCuriosity && (
        <CuriosityModal
          curiosity={selectedCuriosity}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default MyCuriosities;
