
/* Icons from https://react-icons.github.io/react-icons/icons/md/*/

import { MdOutlineFingerprint, MdAddCircle, MdArrowCircleLeft, MdGroups} from "react-icons/md";

function Sidebar(){

    return(
        <div className="sidebar fixed top-1/2 left-5 h-auto w-16 m-0
                        flex flex-col
                        bg-white shadow-xl drop-shadow-lg
                         rounded-md transform -translate-y-1/2">
            
            <SideBarIcon icon={<MdAddCircle size="40"/>} text = "Register"/>
            <SideBarIcon icon={<MdGroups size="40"/>} text="Records"/>
            <SideBarIcon icon={<MdOutlineFingerprint size="40"/>} text="Scan Fingerprint"/>
            <SideBarIcon icon={<MdArrowCircleLeft size="40"/>} text="Exit"/>
            
        </div>
    );
}

const SideBarIcon = ({icon, text}) => (
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
)


export default Sidebar