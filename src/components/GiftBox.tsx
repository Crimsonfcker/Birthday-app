import { useState } from 'react';
import { Gift } from 'lucide-react';

interface GiftBoxProps {
  onOpened: () => void;
}

function GiftBox({ onOpened }: GiftBoxProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(true);
    setTimeout(() => {
      onOpened();
    }, 1500);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center animate-fadeIn relative"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=1200)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="text-center z-10 relative">
        {!isOpened ? (
          <>
            <div
              onClick={handleClick}
              className="cursor-pointer transform hover:scale-110 transition-transform duration-300 mb-8"
            >
              <Gift className="w-40 h-40 text-yellow-300 mx-auto drop-shadow-lg" />
            </div>
            <p className="text-2xl md:text-3xl text-white font-bold drop-shadow-md">
              Click the gift to open! 🎁
            </p>
          </>
        ) : (
          <div className="animate-giftOpen">
            <div className="text-8xl mb-8">🎁</div>
            <div className="text-5xl md:text-6xl space-x-4">
              ✨ 🎉 🎂 🎈 ✨
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GiftBox;