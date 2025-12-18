import { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import BirthdayExperience from './components/BirthdayExperience';
import BackgroundMusic from './components/BackgroundMusic';
import './index.css';

function App() {
  const [userName, setUserName] = useState<string | null>(null);

  const handleUnlock = (name: string) => {
    setUserName(name);
  };

  return (
    <div className="App">
      <BackgroundMusic />
      {userName ? (
        <BirthdayExperience userName={userName} />
      ) : (
        <LoginScreen onUnlock={handleUnlock} />
      )}
    </div>
  );
}

export default App;