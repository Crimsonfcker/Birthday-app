import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

interface MessageCarouselProps {
  onComplete: () => void;
}

const messages = [
  {
    text: "🎂 Happy Birthday to someone who makes every day brighter!",
    emoji: "🌟"
  },
  {
    text: "🎈 May your day be filled with laughter, love, and endless cake!",
    emoji: "🍰"
  },
  {
    text: "✨ Another year older, another year more awesome!",
    emoji: "🎉"
  },
  {
    text: "🎁 Wishing you all the happiness your heart can hold!",
    emoji: "💖"
  },
  {
    text: "🌈 You deserve all the wonderful things life has to offer!",
    emoji: "🎊"
  },
  {
    text: "🎵 Here's to making unforgettable memories this year!",
    emoji: "📸"
  }
];

function MessageCarousel({ onComplete }: MessageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < messages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete();
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        handleNext();
      }
    };
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [currentIndex]);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=1200)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="max-w-2xl w-full relative z-10">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-10 md:p-12 animate-slideIn">
          <div className="text-center mb-8">
            <div className="text-8xl md:text-9xl mb-6">
              {messages[currentIndex].emoji}
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed">
              {messages[currentIndex].text}
            </p>
          </div>

          <div className="flex justify-between items-center mt-12">
            <div className="text-gray-500 font-medium text-sm">
              {currentIndex + 1} / {messages.length}
            </div>
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 md:px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all hover:scale-105 shadow-lg"
            >
              {currentIndex < messages.length - 1 ? 'Next' : 'Continue'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageCarousel;