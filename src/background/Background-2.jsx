import { useState } from 'react';
import LoadingScreen from '../loadingscreen/LoadingScreen';
import BackgroundWhite from '../assets/bgWhite.svg'

function Background2({onTransitionEnd, state, backgroundColor='from-[#013D43] to-[#039BA9]'}) {
  const [showWhiteLayer, setShowWhiteLayer] = useState(false);

  const handleTransitionEnd = () => {
    if(showWhiteLayer) onTransitionEnd()
    else setShowWhiteLayer(true); // Start the white background transition
  }

  const initial = <div className="absolute h-screen w-screen overflow-hidden" >
                    {/* background component */}
                    <LoadingScreen onTransitionEnd={handleTransitionEnd} />
    
                    <img
                      src={BackgroundWhite}
                      className={`h-[105%] absolute bottom-0 left-0 right-0 transform transition-transform duration-[800ms] ease-in-out ${
                          showWhiteLayer ? 'translate-y-0' : 'translate-y-full'}`}   
                          style={{ objectFit: 'cover' }}
                    />
                  </div>

  const final = <div className={`absolute h-screen w-screen overflow-hidden bg-gradient-to-t ${backgroundColor}`} >
                  <img
                    src={BackgroundWhite}
                    className={`h-[105%] absolute bottom-0 left-0 right-0`}   
                        style={{ objectFit: 'cover' }}
                  />
                </div>

  switch (state) {
    case 1: return initial
    case 2: return final
  }
}

export default Background2;