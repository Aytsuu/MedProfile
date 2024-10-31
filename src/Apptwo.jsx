
import { useState } from 'react';
import InitialTransitionTwo from './InitialTransitionTwo';

function Apptwo() {
  const [showWhiteLayer, setShowWhiteLayer] = useState(false);

  const handleTransitionEnd = () => {
    setShowWhiteLayer(true); // Start the white background transition
  };

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* Teal background component */}
      <InitialTransitionTwo onTransitionEnd={handleTransitionEnd} />

      {/* White background transitioning upwards over the teal background */}
      <div
        className={`bg-white h-screen absolute bottom-0 left-0 right-0 transform transition-transform duration-500 ease-in-out ${
          showWhiteLayer ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex items-center justify-center h-full"></div>
      </div>
    </div>
  );
}

export default Apptwo;
