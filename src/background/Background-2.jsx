
import { useState } from 'react';
import LoadingScreen from '../loadingscreen/LoadingScreen';
import BackgroundWhite from '../assets/bgWhite.svg'

function Background2() {
  const [showWhiteLayer, setShowWhiteLayer] = useState(false);

  const handleTransitionEnd = () => {
    setShowWhiteLayer(true); // Start the white background transition
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      {/* background component */}
      <LoadingScreen onTransitionEnd={handleTransitionEnd} />

      <img
        src={BackgroundWhite}
        className={`h-[110%] absolute bottom-0 left-0 right-0 transform transition-transform duration-[800ms] ease-in-out ${
            showWhiteLayer ? 'translate-y-[3rem]' : 'translate-y-full'}`}
      />
    </div>
  );
}

export default Background2;