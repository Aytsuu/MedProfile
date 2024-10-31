import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isTransitioned, setIsTransitioned] = useState(false);

  useEffect(() => {
    // Start the transition 2 seconds
    const timer = setTimeout(() => {
      setIsTransitioned(true);
    }, 2500);

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* Color background */}
      <div
        className={`absolute inset-0 bg-teal-700 transition-opacity duration-1000 ease-in-out ${
          isTransitioned ? 'opacity-100' : 'opacity-100'
        }`}
      ></div>

      {/* Doctor image positioned above the white background */}
      <img
        src="./doctor.png"
        alt="Doctor"
        className={`absolute top-[13%] left-1/3 transform -translate-x-1/2 w-[300px] h-auto transition-opacity duration-700 delay-300 ${
          isTransitioned ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Bottom white background */}
      <div
        className={`bg-white h-1/2 rounded-t-[50px] absolute bottom-0 left-0 right-0 transform transition-transform duration-500 ease-in-out ${
          isTransitioned ? 'translate-y-0' : 'translate-y-full'
        }`}
      ></div>
    </div>
  );
}

export default App;
