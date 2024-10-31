
import { useState } from 'react';
import InitialTransition from './InitialTransition';


function App() {
  const [showWhiteLayer, setShowWhiteLayer] = useState(false);

  const handleTransitionEnd = () => {
    setShowWhiteLayer(true); // Start the white background transition
  };

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* Initial teal background remains in place */}
      <InitialTransition onTransitionEnd={handleTransitionEnd} />

      {/* Doctor image positioned above the white background */}
      <img
        src="./doctor.png"
        alt="Doctor"
        className={`absolute top-[13%] left-1/3 transform -translate-x-1/2 w-[300px] h-auto transition-opacity duration-700 delay-200 ${
          showWhiteLayer ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* White background transitioning upwards over the teal background */}
      <div
        className={`bg-white h-1/2 rounded-t-[50px] absolute bottom-0 left-0 right-0 transform transition-transform duration-500 ease-in-out ${
          showWhiteLayer ? 'translate-y-0' : 'translate-y-full'
        }`}
      ></div>
    </div>
  );
}

export default App;
