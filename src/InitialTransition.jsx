import { useEffect, useState } from 'react';
import Logo from './Logo.png';

function InitialTransition({ onTransitionEnd }) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Start the transition effect after a delay
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      
      // End transition after animation completes
      setTimeout(onTransitionEnd, 2000); // 2 seconds for full transition
    }, 2000); // Initial delay before transition starts

    return () => clearTimeout(timer);
  }, [onTransitionEnd]);

  //Logo Transitioning and Positioning
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-teal-700">
      <img
        src={Logo}
        alt="MedProfile+ Logo"
        className={`transition-all duration-[1000ms] ease-in-out ${
          isTransitioning 
            ? 'translate-x-0 translate-y-0 top-0 left-0 scale-75 opacity-0' 
            : 'translate-x-[-50%] translate-y-[-50%] opacity-100'
        }`}
        style={{
          position: 'absolute',
          top: isTransitioning ? '0' : '50%',
          left: isTransitioning ? '0' : '50%',
          transform: isTransitioning ? 'translate(0, 0) scale(0.80)' : 'translate(-50%, -50%) scale(1)',
          transitionProperty: 'transform, opacity, top, left',
        }}
      />
    </div>
  );
}

export default InitialTransition;
