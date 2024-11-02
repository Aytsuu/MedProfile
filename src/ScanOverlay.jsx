import ScanOverlayImg from './ResourceImage/ScanOverlay.png'
import CancelButt from "./ResourceImage/cancel.png";

function ScanOverlay({ onClose })  {
    const FingerScan = (
        <div className="flex items-center justify-center h-screen">
            <div className='absolute inset-0 bg-black opacity-70'></div>
            <img src={ScanOverlayImg} alt="" className="h-auto w-auto z-10"/>
            <img src={CancelButt} className='absolute top-5 right-5 size-14' onClick={onClose}/>
        </div>
    )

    return FingerScan
}

export default ScanOverlay