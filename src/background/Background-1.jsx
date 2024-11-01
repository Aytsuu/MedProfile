import React, { useState } from "react";
import DoctorImg from '../assets/doctor.svg'
import LoadingScreen from "../loadingscreen/LoadingScreen";

function Background1({onTransitionEnd, height, imageTop, state}){
    const [showWhiteLayer, setShowWhiteLayer] = useState(false);

    const handleTransitionEnd = () => {
        if(showWhiteLayer) onTransitionEnd && onTransitionEnd() // Call the onTransitionEnd only when the white layer has fully show
        else setShowWhiteLayer(true); // Start the white background transition
    };

    const initial = <div className="flex flex-col absolute bg-gradient-to-t from-[#013D43] to-[#039BA9] h-screen w-screen overflow-hidden">
                        {/*Doctor image positioned above the white background*/}
                        <LoadingScreen onTransitionEnd={handleTransitionEnd} />                 
                        <div className="w-[100%] h-[100%]">
                            <img
                            src={DoctorImg}
                            alt="Doctor"
                            className={`absolute left-1/3 w-[300px] h-auto transition-opacity duration-700 delay-300 ${showWhiteLayer ? 'opacity-1' : 'opacity-0' }`}
                            style={{ top: `${imageTop}%` }}
                            /> 
                        </div>
                        {/* bottom white backgroundd*/}
                        <div
                            className={`absolute bg-white rounded-t-[50px] w-[100%] bottom-0 left-0 right-0 transform transition-transform duration-500 ease-in-out ${showWhiteLayer ? 'translate-y-0' : 'translate-y-full'}`} 
                            style={showWhiteLayer ? { height: `${height}%` } : {height: '0%'}}
                            onTransitionEnd={handleTransitionEnd}
                        >     
                        </div>
                    </div>

    const final =   <div className="flex flex-col absolute bg-gradient-to-t from-[#013D43] to-[#039BA9] h-screen w-screen overflow-hidden">
                        {/*Doctor image positioned above the white background*/}               
                        <div className="w-[100%] h-[100%]">
                            <img
                            src={DoctorImg}
                            alt="Doctor"
                            className={`absolute left-1/3 w-[300px] h-auto`}
                            style={{ top: `${imageTop}%` }}
                            /> 
                        </div>
                        {/* bottom white backgroundd*/}
                        <div
                            className={`absolute bg-white rounded-t-[50px] w-[100%] bottom-0 left-0 right-0`} 
                            style={{ height: `${height}%` }}
                            onTransitionEnd={handleTransitionEnd}
                        >     
                        </div>
                    </div>
    
    switch (state) {
        case 1: return(initial)
        case 2: return(final)
    }
}

export default Background1