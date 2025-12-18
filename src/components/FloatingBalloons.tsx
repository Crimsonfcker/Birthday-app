import { useEffect, useState } from 'react';

interface Balloon {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
}

function FloatingBalloons() {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const colors = ['#FF69B4', '#87CEEB', '#98FB98', '#FFD700', '#DDA0DD', '#FF6347'];
    const newBalloons = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setBalloons(newBalloons);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute animate-floatUp"
          style={{
            left: `${balloon.left}%`,
            bottom: '-100px',
            animationDelay: `${balloon.delay}s`,
            animationDuration: `${balloon.duration}s`,
          }}
        >
          <div className="relative">
            <div
              className="w-16 h-20 rounded-full shadow-lg"
              style={{
                backgroundColor: balloon.color,
                animation: 'sway 3s ease-in-out infinite',
              }}
            />
            <div
              className="absolute top-full left-1/2 w-0.5 h-12 bg-gray-400"
              style={{ transform: 'translateX(-50%)' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FloatingBalloons;