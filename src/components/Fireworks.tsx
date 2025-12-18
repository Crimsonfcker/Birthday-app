import { useEffect, useState } from 'react';

interface Particle {
  id: string;
  x: number;
  y: number;
  color: string;
  angle: number;
  speed: number;
}

interface Firework {
  id: string;
  x: number;
  y: number;
  particles: Particle[];
}

function Fireworks() {
  const [fireworks, setFireworks] = useState<Firework[]>([]);

  useEffect(() => {
    const colors = ['#FFD700', '#FF69B4', '#87CEEB', '#98FB98', '#FF6347', '#DDA0DD'];

    const createFirework = () => {
      const x = Math.random() * 100;
      const y = 20 + Math.random() * 40;
      const particles: Particle[] = [];

      for (let i = 0; i < 30; i++) {
        particles.push({
          id: `${Date.now()}-${i}`,
          x,
          y,
          color: colors[Math.floor(Math.random() * colors.length)],
          angle: (Math.PI * 2 * i) / 30,
          speed: 2 + Math.random() * 3,
        });
      }

      return {
        id: `firework-${Date.now()}`,
        x,
        y,
        particles,
      };
    };

    const interval = setInterval(() => {
      setFireworks((prev) => {
        const newFirework = createFirework();
        const updated = [...prev, newFirework];
        return updated.slice(-5);
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {fireworks.map((firework) =>
        firework.particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full animate-fireworkParticle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              backgroundColor: particle.color,
              '--tx': `${Math.cos(particle.angle) * particle.speed * 100}px`,
              '--ty': `${Math.sin(particle.angle) * particle.speed * 100}px`,
            } as React.CSSProperties}
          />
        ))
      )}
    </div>
  );
}

export default Fireworks;