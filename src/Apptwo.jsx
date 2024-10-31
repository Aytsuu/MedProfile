import { useState, useEffect } from 'react';
import './Apptwo.css';

function Apptwo() {
  const [isTransitioned, setIsTransitioned] = useState(false);

  useEffect(() => {
    // Start the transition 2 seconds after the component mounts
    const timer = setTimeout(() => {
      setIsTransitioned(true);
    }, 2000);

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* Initial background */}
      <div
        className={`absolute inset-0 bg-teal-700 transition-opacity duration-1000 ease-in-out ${
          isTransitioned ? 'opacity-0' : 'opacity-100'
        }`}
      ></div>

      {/* White background transitioning upwards */}
      <div
        className={`bg-white h-screen absolute bottom-0 left-0 right-0 transform transition-transform duration-500 ease-in-out ${
          isTransitioned ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex items-center justify-center h-full">
        </div>
      </div>
    </div>
  );
}

export default Apptwo;
