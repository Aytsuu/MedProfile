import ScanForStoring from './assets/ScanForStoring.svg'
import ScanForRetrieval from './assets/ScanForRetrieval.svg'
import CancelButt from "./assets/cancel.png";

function ScanOverlay({ onClose, type })  {
    const FingerScan = (
        <div className="absolute flex items-center justify-center h-screen w-screen">
            <div className='absolute inset-0 bg-black opacity-60'></div>
            <img src={type == 'store' ? ScanForStoring: ScanForRetrieval} alt="" className="h-auto w-auto z-10"/>
            <img src={CancelButt} className='absolute top-5 right-5 size-10 cursor-pointer' onClick={onClose}/>
        </div>
    )

    return FingerScan
}

export default ScanOverlay