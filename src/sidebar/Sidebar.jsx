
/* Icons from https://react-icons.github.io/react-icons/icons/md/*/

import { MdOutlineFingerprint, MdAddCircle, MdArrowCircleLeft, MdGroups} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Sidebar(){
    const navigate = useNavigate();

    const [isScanOverlayVisible, setScanOverlayVisible] = useState(false); // State to control overlay visibility

    const handleScanClick = () => {
        setScanOverlayVisible(true); // Show the overlay when the icon is clicked
    };

    const closeOverlay = () => {
        setScanOverlayVisible(false); // Function to hide the overlay
    };

    const sideBar = (
        <div className="sidebar fixed top-1/2 left-10 h-auto w-16 m-0 border-2
        flex flex-col 
        bg-white shadow-xl drop-shadow-lg
         rounded-md transform -translate-y-1/2">

            <SideBarIcon icon={<MdAddCircle size="40"/>} text = "Register" onClick={() => navigate('/register')} />
            <SideBarIcon icon={<MdGroups size="40"/>} text="Records" onClick={() => navigate('/records')} />
            <SideBarIcon icon={<MdOutlineFingerprint size="40"/>} text="Scan Fingerprint" onClick={handleScanClick}/>
            <SideBarIcon icon={<MdArrowCircleLeft size="40"/>} text="Exit"/>
            
        </div>
    );
    
    return (
        <>
            {sideBar}
            {/* {isScanOverlayVisible && <ScanOverlay onClose={closeOverlay} />} Render the overlay conditionally */}
        </>
    );
}

const SideBarIcon = ({icon, text, onClick}) => (
    <div className="sidebar-icon group" onClick={onClick}>
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
)


export default Sidebar