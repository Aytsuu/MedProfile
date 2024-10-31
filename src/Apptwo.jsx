import { useState } from 'react';
import './Apptwo.css';

function Apptwo() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* Initial teal background */}
      <div className={`absolute inset-0 bg-teal-700 transition-opacity duration-1000 ease-in-out ${isClicked ? 'opacity-0' : 'opacity-100'}`}></div>

      {/* White background transitioning upwards */}
      <div
        className={`bg-white h-screen absolute bottom-0 left-0 right-0 transform transition-transform duration-500 ease-in-out ${isClicked ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="flex items-center justify-center h-full">
          <h1 className="text-xl font-bold">Hello, click to transition!</h1>
        </div>
      </div>

      {/* Clickable area to trigger the transition */}
      {!isClicked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button onClick={handleClick} className="bg-teal-500 text-white px-4 py-2 rounded">Click to Transition</button>
        </div>
      )}
    </div>
  );
}

export default Apptwo;
