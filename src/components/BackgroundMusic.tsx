import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface BackgroundMusicProps {
  autoPlay?: boolean;
}

function BackgroundMusic({ autoPlay = true }: BackgroundMusicProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.volume = 0.5; // Set volume to 50%
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('Audio playing:', audio.src);
          })
          .catch((error) => {
            console.error('Audio playback error:', error);
          });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  const handleLoadedData = () => {
    console.log('Audio loaded successfully');
  };

  const handleError = (e: any) => {
    console.error('Audio error:', e);
  };

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        loop
        preload="metadata"
        style={{ display: 'none' }}
        onLoadedData={handleLoadedData}
        onError={handleError}
      >
        <source 
          src="/song.mp3" 
          type="audio/mpeg" 
        />
        Your browser does not support the audio element.
      </audio>

      {/* Music toggle button */}
      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        title={isPlaying ? 'Click to mute music' : 'Click to play music'}
        aria-label={isPlaying ? 'Mute music' : 'Play music'}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </button>
    </>
  );
}

export default BackgroundMusic;