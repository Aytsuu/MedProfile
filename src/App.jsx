import { useState } from 'react';
import './App.css';

console.log(1)
function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="h-screen w-screen relative overflow-hidden">

      <div className={`absolute inset-0 bg-teal-700 transition-opacity duration-1000 ease-in-out ${isClicked ? 'opacity-100' : 'opacity-100'}`}></div>

      {/* Second background (white bottom section) */}
      <div
        className={`bg-white h-1/2 rounded-t-[50px] absolute bottom-0 left-0 right-0 transform transition-transform duration-500 ease-in-out ${isClicked ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="flex items-center justify-center h-full">
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

export default App;


