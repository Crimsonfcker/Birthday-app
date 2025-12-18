import { useEffect } from 'react';
import '../styles/hearts.css';

function FallingHearts() {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.classList.add('falling-heart');
      heart.innerHTML = '❤️';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
      heart.style.opacity = String(Math.random() * 0.7 + 0.3);
      heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
      
      document.body.appendChild(heart);
      
      setTimeout(() => {
        heart.remove();
      }, 5000);
    };

    // Create hearts continuously
    const interval = setInterval(createHeart, 300);

    return () => clearInterval(interval);
  }, []);

  return null;
}

export default FallingHearts;