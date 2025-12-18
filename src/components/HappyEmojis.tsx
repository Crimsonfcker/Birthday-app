import { useEffect, useState } from 'react';

interface Emoji {
  id: number;
  x: number;
  y: number;
  emoji: string;
  vx: number;
  vy: number;
}

function HappyEmojis() {
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const happyEmojis = ['😊', '🥰', '😍', '🤗', '🎉', '✨', '💖', '🌟', '🎈', '🎊'];

  useEffect(() => {
    const newEmojis = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: 50,
      y: 70,
      emoji: happyEmojis[Math.floor(Math.random() * happyEmojis.length)],
      vx: (Math.random() - 0.5) * 10,
      vy: -(Math.random() * 5 + 5),
    }));
    setEmojis(newEmojis);

    const interval = setInterval(() => {
      setEmojis((prev) =>
        prev.map((emoji) => ({
          ...emoji,
          x: emoji.x + emoji.vx,
          y: emoji.y + emoji.vy,
          vy: emoji.vy + 0.3,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {emojis.map((emoji) => (
        <div
          key={emoji.id}
          className="absolute text-5xl animate-fadeIn"
          style={{
            left: `${emoji.x}%`,
            top: `${emoji.y}%`,
            transition: 'all 0.05s linear',
          }}
        >
          {emoji.emoji}
        </div>
      ))}
    </div>
  );
}

export default HappyEmojis;