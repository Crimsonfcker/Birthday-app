import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideshowProps {
  onComplete?: () => void;
}

interface ImageData {
  url: string;
  caption: string;
}

const defaultImages: ImageData[] = [
  {
    url: '/awwnn.jpg',
    caption: 'Who did you want to beat🤣🤣🤣',
  },
  {
    url: '/birthday.jpg',
    caption: 'Awnnn mommys boy🤧🤧🤧',
  },
  {
    url: '/chelsea.jpg',
    caption: 'Number one Chelsea fan',
  },
  {
    url: '/kid.jpg',
    caption: 'Soooo cute and guy guy ',
  },
  {
    url: '/now.jpg',
    caption: 'One and only Dr Pookie😏😏',
  },
  {
    url: '/hehe.jpg',
    caption: 'And finally 🤧🤧🤧',
  },
];

function ImageSlideshow({ onComplete }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const [images, setImages] = useState<ImageData[]>(defaultImages);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!autoPlay || images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [autoPlay, images.length]);

  const handlePrev = () => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setAutoPlay(false);
  };

  const handleNext = () => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setAutoPlay(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
  };

  if (images.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white">No images available</p>
      </div>
    );
  }

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
      <div className="w-full max-w-5xl relative z-10 px-2">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black">
          <div className="bg-black flex items-center justify-center" style={{ minHeight: '500px' }}>
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].caption}
              className="max-w-full max-h-96 object-contain animate-fadeIn"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
            <div className="text-white">
              <p className="text-lg md:text-2xl font-semibold drop-shadow-lg">
                {images[currentIndex].caption}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-8 gap-4">
          <button
            onClick={handlePrev}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:scale-110 flex-shrink-0"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2 justify-center flex-1">
            {images.map((_: ImageData, index: number) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-blue-400 w-8'
                    : 'bg-gray-400 w-2 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:scale-110 flex-shrink-0"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-white/80 text-sm mb-4">
            {currentIndex + 1} / {images.length}
          </p>
          {onComplete && (
            <button
              onClick={onComplete}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:scale-105"
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageSlideshow;