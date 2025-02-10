
interface Curiosity {
  fact: string;
  imageUrl: string;
}

interface CuriosityCardProps {
  curiosity: Curiosity;
  onClick: () => void;
}

const CuriosityCard: React.FC<CuriosityCardProps> = ({ curiosity, onClick }) => {
  return (
    <div
      className="border rounded overflow-hidden shadow hover:shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full h-0 pb-[50%] relative mb-4">
        <img
          src={curiosity.imageUrl}
          alt="Gato"
          className="absolute inset-0 w-full h-full object-contain bg-black"
        />
      </div>
      <p className="p-4 text-gray-800">{curiosity.fact}</p>
    </div>
  );
};

export default CuriosityCard;
