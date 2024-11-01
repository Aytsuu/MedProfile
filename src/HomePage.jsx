// Imports
import React, { useState } from 'react'
import CTU_LOGO from './assets/CTU_LOGO.png'
import { RiGraduationCapFill } from "react-icons/ri"
import { PiChalkboardTeacherFill } from "react-icons/pi"
import { IoIosPeople } from "react-icons/io";
import { IoMdFingerPrint } from "react-icons/io";
import Background2 from './background/Background-2';


export default function Home() {

  const [showHomePage, setShowHomePage] = useState(false)

  const handleTransitionEnd = () => setShowHomePage(true); // Display home page

  // box styles
  const boxStyles = {
    // Main box container
    box: `relative bg-red-800 w-[9rem] h-[11rem] 
    sm:size-40 md:size-52 lg:w-[18rem] lg:h-[19rem] 
    rounded-[20px] flex flex-col shadow-md shadow-[#9a9a9a] transform transition-transform duration-200 hover:scale-[1.01] cursor-pointer`,

    //Logo container & Logo
    logo_container: `flex items-center justify-center size-full py-2`, 
    logo: `size-16 sm:size-24 md:size-32 lg:size-[11rem]`,
    
    // Icon size beside texts
    ico: `mr-3 size-7`,

    // Box gradiant color
    student:`bg-gradient-to-br from-[#745F2E] to-[#DFB042]`,
    teacher:`bg-gradient-to-br from-[#751D18] to-[#DB362D]`,
    staff:`bg-gradient-to-br from-[#322B68] to-[#6355CE]`,

    // Text background gradiant color
    text_student: ` rounded-b-[20px] flex items-center justify-center 
                    bg-gradient-to-r from-[#006d77] to-[#049caa] text-2xl text-white w-full h-20`,
                    
    text_teacher: `rounded-b-[20px] flex items-center justify-center
                    bg-[#049caa] text-2xl text-white w-full h-20`,

    text_staff: `rounded-b-[20px] flex items-center justify-center 
                 bg-gradient-to-l from-[#006d77] to-[#049caa] text-2xl text-white w-full h-20`,

    ctu_logo: CTU_LOGO,
  }

  // Fingerprint-Button style
  const buttonStyles = {
    button:`absolute bottom-10 flex items-center gap-1 rounded-md bg-white py-2 px-4 border border-transparent text-center text-md text-[#033e44] 
          transition-all shadow-md hover:shadow-lg focus:shadow-none active:bg-slate-700 hover:bg-slate-100 active:shadow-none disabled:pointer-events-none 
          disabled:opacity-50 disabled:shadow-none ml-2" type="button`,
  }

  const home = (
    <div className="absolute font-outfit flex gap-[2.5vw] max-[500px]:flex-col my-auto bg-none h-screen w-screen items-center justify-center px-32">
      <div className={`${boxStyles.box} ${boxStyles.student}`}>
        <div className={boxStyles.logo_container}>
          <img className={boxStyles.logo} src={boxStyles.ctu_logo}></img>
        </div>
        <div className={boxStyles.text_student}>
          <RiGraduationCapFill className={boxStyles.ico} />
          <p>Student</p>
        </div>
      </div>

      <div className={`${boxStyles.box} ${boxStyles.teacher}`}>
        <div className={boxStyles.logo_container}>
          <img className={boxStyles.logo} src={boxStyles.ctu_logo}></img>
        </div>
        <div className={boxStyles.text_teacher}>
          <PiChalkboardTeacherFill className={boxStyles.ico} />
          <p>Teacher</p>
        </div>
      </div>

      <div className={`${boxStyles.box} ${boxStyles.staff}`}>
        <div className={boxStyles.logo_container}>
          <img className={boxStyles.logo} src={boxStyles.ctu_logo}></img>
        </div>
        <div className={boxStyles.text_staff}>
          <IoIosPeople className={boxStyles.ico} />
          <p>Staff</p>
        </div>
      </div>

      <button className={buttonStyles.button}>Scan fingerprint <IoMdFingerPrint className="text-4xl" /> </button>

    </div>
  );

  const display = <>
                    <Background2 onTransitionEnd={handleTransitionEnd} />
                    {showHomePage && home}
                  </>

  return (
    <>
      {display}
    </>
  )

}