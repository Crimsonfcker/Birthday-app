import { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import HappyEmojis from './HappyEmojis';
import SadAnimation from './SadAnimation';

interface FeedbackSectionProps {
  onComplete: () => void;
}

function FeedbackSection({ onComplete }: FeedbackSectionProps) {
  const [response, setResponse] = useState<'yes' | 'no' | null>(null);

  const handleYes = () => {
    setResponse('yes');
    setTimeout(() => {
      onComplete();
    }, 4000);
  };

  const handleNo = () => {
    setResponse('no');
    setTimeout(() => {
      onComplete();
    }, 4000);
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
      {response === 'yes' && <HappyEmojis />}

      <div className="text-center z-10 relative px-4">
        {!response ? (
          <>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 drop-shadow-md">
              Did you like your gift? 🎁
            </h2>
            <div className="flex gap-8 justify-center flex-wrap">
              <button
                onClick={handleYes}
                className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full p-6 shadow-2xl transform hover:scale-110 transition-all"
              >
                <ThumbsUp className="w-16 h-16 group-hover:scale-110 transition-transform" />
                <span className="block mt-3 text-xl font-semibold">Yes!</span>
              </button>
              <button
                onClick={handleNo}
                className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full p-6 shadow-2xl transform hover:scale-110 transition-all"
              >
                <ThumbsDown className="w-16 h-16 group-hover:scale-110 transition-transform" />
                <span className="block mt-3 text-xl font-semibold">No</span>
              </button>
            </div>
          </>
        ) : response === 'yes' ? (
          <div className="animate-scaleUp">
            <div className="text-7xl md:text-8xl mb-6">🥳</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
              Yay! I'm so glad! 💖
            </h2>
          </div>
        ) : (
          <SadAnimation />
        )}
      </div>
    </div>
  );
}

export default FeedbackSection;