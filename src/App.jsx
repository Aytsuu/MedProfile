import { useState } from 'react';
import './App.css';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* Color background */}
      <div className={`absolute inset-0 bg-teal-700 transition-opacity duration-1000 ease-in-out ${isClicked ? 'opacity-100' : 'opacity-100'}`}></div>

      {/* Doctor image positioned above the white background */}
      <img
        src="./doctor.png"
        alt="Doctor"
        className={`absolute top-[13%] left-1/3 transform -translate-x-1/2 w-[300px] h-auto transition-opacity duration-700 delay-300 ${isClicked ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* bottom white backgroundd*/}
      <div
        className={`bg-white h-1/2 rounded-t-[50px] absolute bottom-0 left-0 right-0 transform transition-transform duration-500 ease-in-out ${isClicked ? 'translate-y-0' : 'translate-y-full'}`}
      >
      </div>

      {/*sample transition*/}
      {!isClicked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button onClick={handleClick} className="bg-teal-500 text-white px-4 py-2 rounded">Sample</button>
        </div>
      )}
    </div>
  );
}

export default App;
