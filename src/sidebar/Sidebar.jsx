
/* Icons from https://react-icons.github.io/react-icons/icons/md/*/

import { MdGroups} from "react-icons/md";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { IoFingerPrint } from "react-icons/io5";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Registration from "../Registration";
import Records from "../Records";

const sideBarStyle = {
                        iconContainer: `relative flex items-center justify-center 
                                    h-[50px] w-[50px] mt-2 mb-2 bg-white text-loginTextBlue 
                                    hover:bg-orange-200 hover:shadow-lg
                                    hover:rounded-md duration-200 ease-linear`,

                        iconStyle: `relative flex items-center justify-center 
                                    h-[30px] w-[30px] text-loginTextBlue`,
                        
                        iconTooltip: `absolute w-auto p-2 px-10 m-2 
                                    min-w-max left-14 rounded-md shadow-md
                                    text-white bg-gray-500
                                    text-xs font-normal
                                    transition-all duration-200 scale-0 origin-left`
    
                    }

function Sidebar(){    

    const navigate = useNavigate();

    const [isScanOverlayVisible, setScanOverlayVisible] = useState(false) // State to control overlay visibility
    const [isRegister, setIsRegister] = useState(false)
    const [isRecords, setIsRecords] = useState(false)

    const handleScanClick = () => setScanOverlayVisible(true) // Show the overlay when the icon is clicked
    const handleRegistrationClick = () => {
        setIsRegister(true)
        isRecords && setIsRecords(false)
    }
    const handleRecordsClick = () => {
        setIsRecords(true)
        isRegister && setIsRegister(false)
    }
    

    const closeOverlay = () => setScanOverlayVisible(false) // Function to hide the overlay

    const sideBar = (
        <div className="sidebar fixed top-1/2 left-10 h-auto w-16 m-0 border-2
        flex flex-col justify-center items-center
        bg-white shadow-xl drop-shadow-lg
         rounded-[20px] transform -translate-y-1/2">

            <SideBarIcon icon={<BsFillPlusCircleFill size="40"/>} text = "Register" onClick={handleRegistrationClick} />
            <SideBarIcon icon={<MdGroups size="40"/>} text="Records" onClick={handleRecordsClick} />
            <SideBarIcon icon={<IoFingerPrint size="40"/>} text="Scan Fingerprint" onClick={handleScanClick}/>
            <SideBarIcon icon={<BsArrowLeftCircleFill size="40"/>} text="Exit" onClick={() => {setIsRegister(false); setIsRecords(false)}}/>
            
        </div>
    );
    
    return (
        <>
            {isRegister && <Registration/>}
            {isRecords && <Records/>}
            {sideBar}
            {/* {isScanOverlayVisible && <ScanOverlay onClose={closeOverlay} />} Render the overlay conditionally */}
        </>
    );
}

const SideBarIcon = ({icon, text, onClick}) => (
    <div className={`${sideBarStyle.iconContainer} group cursor-pointer`} onClick={onClick}>
        <div className={`${sideBarStyle.iconStyle} group`}>
            {icon}
            <span className={`${sideBarStyle.iconTooltip} group-hover:scale-100`}>
                {text}
            </span>
        </div>
    </div>
)


export default Sidebar