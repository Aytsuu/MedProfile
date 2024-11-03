import { useState } from "react"
import Logo from "./assets/Logo.png"
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlinePencil } from "react-icons/hi2";
import { GoX } from "react-icons/go";
import { GrLinkPrevious } from "react-icons/gr";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";

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
    const profileTextField = "w-[240px] h-[35px] text-[14px] text-white bg-custom-teal border-custom-teal2 border-b-[2px] font-outfit outline-none placeholder:text-white placeholder:opacity-[50%]";
    const changepPassandUsername = "w-[350px] h-[130px] font-outfit bg-white rounded-[20px] drop-shadow-lg border mt-[20px] text-teal-900 flex flex-col items-center";
    const changeButton = "absolute top-[47px] right-[22px] w-[75px] h-[42px] bg-white rounded-r-[20px] border text-[14px]";
    const passwordsfields = "w-[280px] h-[42px] border bg-white rounded-[20px] font-outfit text-[14px] p-[10px] text-teal-900/50 placeholder-teal-900/50 outline-none";
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
                <div className="flex items-center w-screen h-[7rem] bg-none justify-between absolute">

                
                    {/*-------------------------------------------Logo-------------------------------*/}
                    <div className="flex items-center m-[10px] h-full">
                            <img src={Logo} alt="" className="w-[15rem] h-[5.3rem] p-2 ml-3 mt-[1.5rem]"/>
                    </div>
                    

                    
                    <div className = "flex flex-col items-end mr-[4rem] h-full">
                        {/*--------------------------------Profile Header--------------------------*/}
                            <div onClick = {toggleDropdown} className="flex items-center space-x-4 p-2 cursor-pointer mt-3">
                                {/*Profile Image*/}
                                <div className="flex justify-center items-center w-[40px] h-[40px] bg-none rounded-full border-2 border-loginTextBlue">
                                    <div className="w-[34px] h-[34px] rounded-full bg-gray-500">
                                    </div>
                                </div>
                                {/*Profile username*/}
                                <p className = "font-outfit text-[17px] text-loginTextBlue">ironheartmcu</p>
                                {/*Dropdown Icon*/}
                                <div className="flex justify-center items-center h-[30px]">
                                    <MdKeyboardArrowDown className="mt-[5px] w-[25px] h-[25px] text-loginTextBlue"/>
                                </div>
                            </div>

                        {/*--------------------------------Dropdown Menu-------------------------------------*/}
                            <div className = "relative">
                                {isDropdownOpen && (
                                <ul role="menu" className="absolute right-[-15px] mt-2 w-[240px] bg-white rounded-3xl drop-shadow-lg border flex flex-col items-center py-4 space-y-2">
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
                                        <GoX className="w-[30px] h-[73px] text-loginTextBlue cursor-pointer" onClick={ () => {PasswordandUsernameUI();setisChangePassword(false); setisChangeUsername(false);setisManageAccount(false);}}/>
                                        <p className = "text-[18px] font-medium text-loginTextBlue font-outfit">Manage Account</p>
                                    </div>

                                    <div className = "flex items-center space-x-4 p-2">
                                        {/*Profile Image*/}
                                        <div className="flex justify-center items-center w-[40px] h-[40px] bg-none rounded-full border-2 border-loginTextBlue ml-[45px]">
                                            <div className="w-[34px] h-[34px] rounded-full bg-gray-500">
                                            </div>
                                        </div>
                                        <p className = "font-outfit  text-[17px] text-loginTextBlue">ironheartmcu</p>
                                    </div>


                                    <div className="flex flex-col items-center justify-center">
                                        <div className = "w-[350px] h-[433px] bg-custom-teal rounded-[20px] mt-[10px] drop-shadow-lg flex flex-col items-center">
                                            <p className="font-outfit text-white text-[18px] mt-[15px]">Profile</p>
                                            <div className="w-[150px] h-[150px] bg-blue-500 mt-[1rem] mb-[2rem] rounded-full border border-white flex items-end">
                                                <div className="flex justify-center items-center w-[27px] h-[27px] bg-white border rounded-full absolute right-[31%] top-[40%]">
                                                    <HiOutlinePencil className="text-loginTextBlue cursor-pointer"/>
                                                </div>
                                                
                                            </div>

                                            <div className = "w-full h-[2px] bg-custom-teal2 mb-[2rem]"></div> 
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
                                                        <input className="text-[14px] rounded-[20px] w-[300px] h-[42px] border mt-[10px] pl-[15px] outline-none" placeholder="Username"></input>
                                                        <button className={changeButton} onClick={() => {ChangeUsername();setisPasswordandUsernameUI(false);}}>Change</button>
                                                    </div>

                                                    <div className={changepPassandUsername}>
                                                        <p className="text-[18px] mt-[10px]">Password</p>
                                                        <input type="password" className="text-[14px] rounded-[20px] w-[300px] h-[42px] border mt-[10px] pl-[15px] outline-none" placeholder="Password"></input>
                                                        <button className={changeButton} onClick={() => {ChangePassword();setisPasswordandUsernameUI(false);}}>Change</button>
                                                    </div>
                                                </div>
                                            )}

                                            {isChangeUsername &&(
                                                        <div className="w-[350px] h-[250px] bg-white border drop-shadow-lg rounded-[20px] mt-[30px] flex flex-col items-center">
                                                            <p className="font-outfit text-teal-900 text-[18px] mt-[20px]">Change Username</p>
                                                            <input className="w-[280px] h-[42px] rounded-[20px] font-outfit text-14px text-teal-900/50 border placeholder-teal-900/50 mt-[20px] p-[10px]" placeholder="Password"></input>
                                                            <button><img className="absolute right-[55px] top-[80px]"/></button>
                                                            <input className="w-[280px] h-[42px] rounded-[20px] font-outfit text-14px text-teal-900/50 border placeholder-teal-900/50 mt-[10px] p-[10px]" placeholder="Username"></input>
    
                                                            <div className="flex items-center justify-end space-x-3 35px] mt-[35px] w-full mr-[40px]">
                                                                <button className={backbutton} onClick={() => {PasswordandUsernameUI(); setisChangeUsername(false);}}>
                                                                    <GrLinkPrevious className="text-darkGrayColor"/>
                                                                </button>
                                                                <button className={savebutton}>Save</button>
                                                            </div>
                                                        </div>                                        
                                            )}

                                            
                                            {isChangePassword && (
                                                    <div className = "w-[350px] h-[300px] bg-white border drop-shadow-lg rounded-[20px] mt-[20px] flex flex-col items-center">

                                                        <p className="font-outfit text-teal-900 text-[18px] mt-[20px]">Change Password</p>
                                                        <input className={`${passwordsfields} mt-[20px]`} placeholder="Current Password"></input>
                                                        <button><img className="absolute right-[55px] top-[80px]"/></button>
                                                        <input className={`${passwordsfields} mt-[10px]`} placeholder="New Password"></input>
                                                        <button><img className="absolute right-[55px] top-[130px]"/></button>
                                                        <input className={`${passwordsfields} mt-[10px]`} placeholder="Confirm Password"></input>
                                                        <button><img className="absolute right-[55px] top-[180px]"/></button>


                                                        <div className="flex items-center justify-end space-x-3 35px] mt-[35px] w-full mr-[40px]">
                                                            <button className={backbutton} onClick={() => {PasswordandUsernameUI();setisChangePassword(false);}}>
                                                                    <GrLinkPrevious className="text-darkGrayColor"/>
                                                            </button>
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
                                <GoX className="w-[30px] h-[73px] text-loginTextBlue cursor-pointer" onClick = {() => {setisArchive(false)}}/>
                                <p className = "text-[18px] font-medium text-loginTextBlue font-outfit">Archive</p>
                            </div>

                            <div className="flex flex-col">
                                <button className={archiveList}>TODAY <MdKeyboardArrowDown className="w-[2.5rem] h-[2.5rem]"/></button>
                                <button className={archiveList}>THIS WEEK <MdKeyboardArrowDown className="w-[2.5rem] h-[2.5rem]"/></button>
                                <button className={archiveList}>THIS MONTH <MdKeyboardArrowDown className="w-[2.5rem] h-[2.5rem]"/></button>
                                <button className={archiveList}>THIS YEAR <MdKeyboardArrowDown className="w-[2.5rem] h-[2.5rem]"/></button>
                            </div>
                        </div>
                    )}

                </div>
                )}
                
                    {/*-------------------------------------------------Signout Option------------------------------------------- */}
                    {isSignOut && (
                        <div className = "absolute flex items-center justify-center w-screen h-screen bg-gradient-to-t from-[#013D43] to-[#039BA9]">
                            <div className = "w-[377px] h-[359px] border bg-white rounded-[20px] drop-shadow-lg">
                                <div className="flex justify-start p-5 ml-1 space-x-1 ">
                                    <div className="flex justify-center">
                                        <IoLogOut className="text-loginTextBlue w-[45px] h-[45px]"/>
                                    </div>
                                    <div className="flex flex-col space-y-[-3px]">
                                        <p className="font-outfit text-loginTextBlue font-medium text-[15px]">SIGN OUT</p>
                                        <p className="font-outfit text-loginTextBlue font-medium text-[15px]">CONFIRMATION</p>
                                    </div>
                                </div>
                                <div className=" flex items-center flex-col mt-[1rem] ">
                                    <p className="w-[250px] h-[45px] text-loginTextBlue text-[18px] mb-[1rem] font-inter text-center">Are you sure you want to logout?</p>

                                    <Link to='/'><button className="mt-[2rem] w-[270px] h-[70px] bg-custom-teal4 font-inter text-[15px] text-white rounded-[10px] drop-shadow-lg outline-none">Yes, Logout Account</button></Link>
                                    <button className="mt-[10px] w-[270px] h-[70px] font-inter text-[15px] text-loginTextBlue outline-none" onClick = {() => {setisSignOut(false); Logout();}}>No, I'm Staying</button>
                                </div>
                            </div>
                        </div> 
                    )}

                   
            </div>
    
    return (headerContent)
}


export default Header