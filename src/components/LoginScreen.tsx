import { useState } from 'react';
import { Gift } from 'lucide-react';

interface LoginScreenProps {
  onUnlock: (name: string) => void;
}

const CORRECT_NICKNAME = 'Dr Monk';

function LoginScreen({ onUnlock }: LoginScreenProps) {
  const [input, setInput] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (input.toLowerCase() === CORRECT_NICKNAME.toLowerCase()) {
      onUnlock(input);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setError('Oops! That\'s not quite right...');

      if (newAttempts >= 3) {
        setShowHint(true);
      }

      setTimeout(() => setError(''), 2000);
    }
  };

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
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-md w-full transform hover:scale-105 transition-transform duration-300 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-block animate-bounce">
            <Gift className="w-20 h-20 text-blue-600 mx-auto mb-4" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Something Special Awaits
          </h1>
          <p className="text-gray-600 text-lg">
            Enter your special nickname to unlock your surprise
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your nickname..."
              className="w-full px-6 py-4 text-lg border-2 border-blue-300 rounded-full focus:outline-none focus:border-blue-600 transition-colors"
              autoFocus
            />
          </div>

          {error && (
            <div className="text-red-500 text-center animate-shake">
              {error}
            </div>
          )}

          {showHint && (
            <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-4 animate-fadeIn">
              <p className="text-blue-800 text-center">
                <strong>Hint:</strong> A wise title with a monastic spirit...
              </p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
          >
            Unlock My Surprise
          </button>
        </form>

        <div className="mt-6 text-center text-gray-500 text-sm">
          Attempts: {attempts}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;