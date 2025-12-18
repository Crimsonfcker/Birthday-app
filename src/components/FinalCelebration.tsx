import { useEffect, useState } from 'react';
import Fireworks from './Fireworks';
import FloatingBalloons from './FloatingBalloons';
import ImageSlideshow from './ImageSlideshow';
import FallingHearts from './FallingHearts';

interface FinalCelebrationProps {
  userName: string;
}

function FinalCelebration({ userName }: FinalCelebrationProps) {
  const [showFireworks, setShowFireworks] = useState(true);
  const [showSlideshow, setShowSlideshow] = useState(false);

  useEffect(() => {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBzyP1fPTgjMGHGq+7+OZUBAQT6nf77JqHwU7lNzzy3seCC+A0PPajC8IFmS66+OcTQwOTqnl8bl1JAU8j9LwzYE2BxdpvevkmVAOD06o5O+0aR8EOo/V8dGAMQYccb/u45NJDg5OpeTutnMgBjyR1PLPfjMHGmq96t+WTAwPUKfi8bhlHQU+ktPv1IU1CB1rwurfnE4ND1Cn4u62bB4GO5DU8c+EM');
    audio.volume = 0.3;
    audio.play().catch(() => {});
  }, []);

  if (showSlideshow) {
    return <ImageSlideshow onComplete={() => setShowSlideshow(false)} />;
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=1200)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <FloatingBalloons />
      {showFireworks && <Fireworks />}
      <FallingHearts />

      <div className="text-center z-10 animate-fadeIn relative px-4">
        <div className="mb-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            HAPPY BIRTHDAY
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 drop-shadow-md">
            {userName}
          </h2>
        </div>

        <div className="text-6xl md:text-7xl space-x-3 mb-10">
          🎂 🎈 🎁 🎊 ✨
        </div>

        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl mb-10">
          <p className="text-xl md:text-2xl font-semibold text-gray-800">
            May this year bring you endless joy, success, and amazing adventures with Love from you know who
            🤧🤧
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => setShowFireworks(!showFireworks)}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all shadow-lg"
          >
            {showFireworks ? '🎆 Stop Fireworks' : '🎇 Start Fireworks'}
          </button>
          <button
            onClick={() => setShowSlideshow(true)}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all shadow-lg"
          >
            📷 View Photos
          </button>
        </div>
      </div>
    </div>
  );
}

export default FinalCelebration;