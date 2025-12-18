import { useState, useEffect } from 'react';
import Confetti from './Confetti';
import GiftBox from './GiftBox';
import FeedbackSection from './FeedbackSection';
import MessageCarousel from './MessageCarousel';
import FinalCelebration from './FinalCelebration';

interface BirthdayExperienceProps {
  userName: string;
}

function BirthdayExperience({ userName }: BirthdayExperienceProps) {
  const [stage, setStage] = useState<'intro' | 'gift' | 'messages' | 'feedback' | 'finale'>('intro');
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage('gift');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleGiftOpened = () => {
    setStage('messages');
  };

  const handleFeedbackGiven = () => {
    setShowConfetti(false);
    setTimeout(() => {
      setStage('finale');
    }, 1000);
  };

  const handleMessagesComplete = () => {
    setStage('feedback');
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=1200)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      {showConfetti && <Confetti />}

      <div className="relative z-10">
        {stage === 'intro' && (
          <div className="min-h-screen flex items-center justify-center animate-fadeIn">
            <div className="text-center px-4">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                🎉 SURPRISE! 🎉
              </h1>
              <p className="text-2xl md:text-3xl text-white font-semibold drop-shadow-md">
                Happy Birthday, {userName}! 🎂
              </p>
            </div>
          </div>
        )}

        {stage === 'gift' && (
          <GiftBox onOpened={handleGiftOpened} />
        )}

        {stage === 'messages' && (
          <MessageCarousel onComplete={handleMessagesComplete} />
        )}

        {stage === 'feedback' && (
          <FeedbackSection onComplete={handleFeedbackGiven} />
        )}

        {stage === 'finale' && (
          <FinalCelebration userName={userName} />
        )}
      </div>
    </div>
  );
}

export default BirthdayExperience;