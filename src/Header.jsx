import { useState } from "react"
import Logo from "./assets/Logo.svg"
import dropdown from "./assets/Drop Down.svg"
import multiply from "./assets/Multiply.svg"
import edit from "./assets/Edit.svg"
import encryptPassword from "./assets/Eye Slash, Hide.svg"
import arrow from "./assets/Union.svg"
import logout from "./assets/Logout.svg"

function Header(){

    {/*--------------------------------------State Variables--------------------------------*/}
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isManageAccount, setisManageAccount] = useState(false);
    const [isChangeUsername, setisChangeUsername] = useState(false);
    const [isChangePassword, setisChangePassword] = useState(false);
    const [isPasswordandUsernameUI, setisPasswordandUsernameUI] = useState(true);
    const [isSignOut, setisSignOut] = useState(false);
    const [isArchive, setisArchive] = useState(false);
    const [isLogout, setisLogout] = useState(true);


    {/*--------------------------------------Similar Tailwind Stylings---------------------------------------*/}
    const dropdownList = "hover:bg-teal-900 hover:bg-opacity-40 cursor-pointer w-full h-[48px] font-outfit text-center text-[15px] text-teal-900 flex items-center justify-center";
    const profileTextField = "w-[240px] h-[35px] text-[14px] text-white bg-custom-teal border-custom-teal2 border-b-[2px] font-outfit";
    const changepPassandUsername = "w-[325px] h-[130px] font-outfit bg-white rounded-[20px] drop-shadow-lg border mt-[20px] text-teal-900 flex flex-col items-center";
    const changeButton = "absolute top-[47px] right-[22px] w-[75px] h-[42px] bg-white rounded-r-[20px] border text-[14px]";
    const passwordsfields = "w-[240px] h-[42px] border bg-white rounded-[20px] font-outfit text-[14px] p-[10px] text-teal-900/50 placeholder-teal-900/50";
    const backbutton = "bg-customGray w-[51px] h-[35px] drop-shadow-md rounded-[10px] flex items-center justify-center";
    const savebutton = "bg-custom-teal3 w-[91px] h-[35px] drop-shadow-md rounded-[10px] text-white font-outfit text-[14px]";
    const archiveList = "font-inter font-bold text-[17px] text-teal-900/70 flex items-center justify-between mt-[10px] ml-[30px] mr-[30px]";


    {/*----------------------------------EVENT HANDLERS-------------------------*/}

    {/*Dropdown Menu*/}
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    {/*Manage Account*/}
    const ManageAccount = () =>{
        setisManageAccount(!isManageAccount);
        setisPasswordandUsernameUI(true);
    };

    {/*Username and Password Modules */}
    const PasswordandUsernameUI = () =>{
        setisPasswordandUsernameUI(!isPasswordandUsernameUI);
    };

    {/*Change Username*/}
    const ChangeUsername = () =>{
        setisChangeUsername(!isChangeUsername);
    };

    {/*Change Password*/}
    const ChangePassword = () =>{
        setisChangePassword(!isChangePassword);
    };

    {/*Signout Module*/}
    const SignOut = () => {
        setisSignOut(!isSignOut);
    };

    {/*Archive Module*/}
    const Archive = () => {
        setisArchive(!isArchive);
    };

    {/*Confirm Logout--- toggles the visibility of everything in the header to true or false*/}
    const Logout = () =>{ 
        setisLogout(!isLogout);
    };

   
    
    const headerContent = <div>

            {isLogout && (
                <div className="flex items-center justify-between">

                              
                
                    {/*-------------------------------------------Logo-------------------------------*/}
                    <div className="flex items-center m-[10px]">
                            <img src={Logo} alt="" className="w-[130px] h-[110px] p-2"/>
                            <p className = "text-2xl text-blue-600 font-outfit">MedProfile<span className = "text-2xl text-blue-600 font-molle">+</span></p>
                    </div>
                    

                    
                        <div className = "flex flex-col items-end">
                            {/*--------------------------------Profile Header--------------------------*/}
                                <div onClick = {toggleDropdown} className="flex items-center space-x-4 p-3 mr-[30px] cursor-pointer">
                                    {/*Profile Image*/}
                                    <div className="w-14 h-14 bg-blue-500 rounded-full border border-white"></div>
                                    {/*Profile username*/}
                                    <p className = "font-outfit text-xl text-teal-900">ironheart</p>
                                    {/*Dropdown Icon*/}
                                    <img src = {dropdown}></img>
                                </div>

                            {/*--------------------------------Dropdown Menu-------------------------------------*/}
                                <div className = "relative">
                                    {isDropdownOpen && (
                                    <ul role="menu" className="absolute right-7 mt-2 w-[240px] bg-white rounded-3xl drop-shadow-lg border flex flex-col items-center py-4 space-y-2">
                                        {/*Dropdown Menu*/}
                                        <li className={dropdownList} onClick={() => {ManageAccount();setIsDropdownOpen(false);}}>Manage Account</li>
                                        <li className={dropdownList} onClick ={() => {Archive(); setIsDropdownOpen(false);}}>Archive</li>
                                        <li className={dropdownList} onClick ={() => {SignOut();setIsDropdownOpen(false); setisLogout(false);}}>Sign Out</li>
                                    </ul>
                                    )}
                                </div>
                    

                                {/*--------------------------------------------Manage Account Option---------------------------------------------*/}
                                
                                {isManageAccount && (
                                    <div className = "fixed right-0 top-0 w-[439px] h-full bg-white drop-shadow-lg border rounded-tl-[30px] rounded-bl-[30px] z-50">
                                        <div className = "flex items-center space-x-[110px] pl-3 pr-3">
                                            <img src = {multiply} className="w-[30px] h-[73px] cursor-pointer" onClick={ () => {PasswordandUsernameUI();setisChangePassword(false); setisChangeUsername(false);setisManageAccount(false);}}></img>
                                            <p className = "text-[18px] font-medium text-teal-900 font-outfit">Manage Account</p>
                                        </div>

                                        <div className = "flex items-center space-x-4 p-2">
                                            <div className="w-[40px] h-[40px] bg-blue-500 border border-black rounded-full ml-[45px]"></div>
                                            <p className = "font-inter  text-[16px] text-teal-900">ironheart</p>
                                        </div>


                                        <div className="flex flex-col items-center justify-center">
                                            <div className = "w-[325px] h-[300px] bg-custom-teal rounded-[20px] mt-[10px] drop-shadow-lg flex flex-col items-center">
                                                <p className="font-outfit text-white text-[18px] mt-[10px]">Profile</p>
                                                <div className="w-[100px] h-[100px] bg-blue-500 rounded-full mt-[10px] border border-white flex items-end">
                                                    <div className="w-[27px] h-[27px] bg-white border rounded-full ml-[65px]">
                                                        <img src={edit} className= "ml-[4px] mt-[3px]"></img>
                                                    </div>
                                                </div>

                                                <div className = "w-full h-[2px] bg-custom-teal2 mt-[20px] mb-[10px]"></div>
                                                    <div className="mt-[6px]">
                                                        <input className = {profileTextField} placeholder="Firstname"></input>
                                                        <div className="mt-[20px]"></div>
                                                        <input className = {profileTextField} placeholder="Lastname"></input>
                                                    </div>
                                                </div>

                                                {isPasswordandUsernameUI && (
                                                    <div>
                                                        <div className={changepPassandUsername}>
                                                            <p className="text-[18px] mt-[10px]">Username</p>
                                                            <input className="text-[14px] rounded-[20px] w-[280px] h-[42px] border mt-[10px] p-[10px]" placeholder="Username"></input>
                                                            <button className={changeButton} onClick={() => {ChangeUsername();setisPasswordandUsernameUI(false);}}>Change</button>
                                                        </div>

                                                        <div className={changepPassandUsername}>
                                                            <p className="text-[18px] mt-[10px]">Password</p>
                                                            <input type="password" className="text-[14px] rounded-[20px] w-[280px] h-[42px] border mt-[10px] p-[10px]" placeholder="Password"></input>
                                                            <button className={changeButton} onClick={() => {ChangePassword();setisPasswordandUsernameUI(false);}}>Change</button>
                                                        </div>
                                                    </div>
                                                )}

                                                {isChangeUsername &&(
                                                            <div className="w-[325px] h-[250px] bg-white border drop-shadow-lg rounded-[20px] mt-[30px] flex flex-col items-center">
                                                                <p className="font-outfit text-teal-900 text-[18px] mt-[20px]">Change Username</p>
                                                                <input className="w-[240px] h-[42px] rounded-[20px] font-outfit text-14px text-teal-900/50 border placeholder-teal-900/50 mt-[20px] p-[10px]" placeholder="Password"></input>
                                                                <button><img src={encryptPassword} className="absolute right-[55px] top-[80px]"/></button>
                                                                <input className="w-[240px] h-[42px] rounded-[20px] font-outfit text-14px text-teal-900/50 border placeholder-teal-900/50 mt-[10px] p-[10px]" placeholder="Username"></input>
        
                                                                <div className="flex items-center justify-end space-x-3 35px] mt-[35px] w-full mr-[40px]">
                                                                    <button className={backbutton} onClick={() => {PasswordandUsernameUI(); setisChangeUsername(false);}}><img src={arrow}></img></button>
                                                                    <button className={savebutton}>Save</button>
                                                                </div>
                                                            </div>                                        
                                                )}

                                                
                                                {isChangePassword && (
                                                        <div className = "w-[325px] h-[300px] bg-white border drop-shadow-lg rounded-[20px] mt-[20px] flex flex-col items-center">

                                                            <p className="font-outfit text-teal-900 text-[18px] mt-[20px]">Change Password</p>
                                                            <input className={`${passwordsfields} mt-[20px]`} placeholder="Current Password"></input>
                                                            <button><img src={encryptPassword} className="absolute right-[55px] top-[80px]"/></button>
                                                            <input className={`${passwordsfields} mt-[10px]`} placeholder="New Password"></input>
                                                            <button><img src={encryptPassword} className="absolute right-[55px] top-[130px]"/></button>
                                                            <input className={`${passwordsfields} mt-[10px]`} placeholder="Confirm Password"></input>
                                                            <button><img src={encryptPassword} className="absolute right-[55px] top-[180px]"/></button>


                                                            <div className="flex items-center justify-end space-x-3 35px] mt-[35px] w-full mr-[40px]">
                                                                <button className={backbutton} onClick={() => {PasswordandUsernameUI();setisChangePassword(false);}}><img src={arrow}></img></button>
                                                                <button className={savebutton}>Save</button>
                                                            </div>
                                                        
                                                        </div>
                                                )}
                                        </div>
                                    </div>
                                 )}  
                            
                        </div>
                    

                    {/*---------------------------------------Archive Option--------------------------------------*/}
                    {isArchive && (
                        <div className=" fixed w-[659px] h-full border bg-white drop-shadow-lg rounded-l-[20px] right-0 top-0">
                            <div className = "flex items-center space-x-[270px] pl-3 pr-3">
                                <img src = {multiply} className="w-[30px] h-[73px] cursor-pointer" onClick = {() => {setisArchive(false)}}></img>
                                <p className = "text-[18px] font-medium text-teal-900 font-outfit">Archive</p>
                            </div>

                            <div className="flex flex-col">
                                <button className={archiveList}>TODAY <img src={dropdown}></img></button>
                                <button className={archiveList}>THIS WEEK <img src={dropdown}></img></button>
                                <button className={archiveList}>THIS MONTH <img src={dropdown}></img></button>
                                <button className={archiveList}>THIS YEAR <img src={dropdown}></img></button>
                            </div>
                        </div>
                    )}

                </div>
                )}
                
                    {/*-------------------------------------------------Signout Option------------------------------------------- */}
                    {isSignOut && (
                        <div className = "flex items-center justify-center mt-[225px]">
                            <div className = "w-[377px] h-[359px] border bg-white rounded-[20px] drop-shadow-lg">
                                <div className="flex items-start space-x-[25px] p-5 ">
                                    <img src={logout}></img> <p className="font-outfit text-teal-900 font-medium text-[15px] p-[5px]">SIGNOUT CONFIRMATION</p>
                                </div>
                                <div className=" flex items-center flex-col p-[30px]">
                                    <p className="w-[250px] h-[45px] text-teal-900 text-[17px] font-inter">Are you sure you want to logout?</p>

                                    <button className="mt-[20px] w-[270px] h-[70px] bg-custom-teal4 font-inter text-[15px] text-white rounded-[10px] drop-shadow-lg">Yes, Logout Account</button>
                                    <button className="mt-[20px] w-[270px] h-[70px] font-inter text-[15px] text-teal-900" onClick = {() => {setisSignOut(false); Logout();}}>No, I'm Staying</button>
                                </div>
                            </div>
                        </div> 
                    )}

                   
            </div>
    
    return (headerContent)
}


export default Header



