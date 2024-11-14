import { MdOutlineCalendarMonth} from "react-icons/md";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { GrLinkPrevious } from "react-icons/gr";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns'

function Registration({form}) {
    
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        MI: '',
        DOB: '',
        POB: '',
        citizenship: '',
        religion: '',
        department: '',
        program: '',
        year: '',
        section: '',
        contact: '',
        sex: '',
        Id: '', 
        maritalStatus: '',
        address: '',
        zipCode: '',
        emailAddress: '',
        fatherFName: '',
        fatherLName: '', 
        fatherMI: '',
        fatherDOB: '',
        fatherOccupation: '',
        fatherEmailAddress: '',
        fatherContact: '',
        motherFName: '',
        motherLName: '', 
        motherMI: '',
        motherDOB: '',
        motherOccupation: '',
        motherEmailAddress: '',
        motherContact: '',
        
    });

    const [datePickerOpen, setDatePickerOpen] = useState(false);
    const [fatherDatePickerOpen, setFatherDatePickerOpen] = useState(false)
    const [motherDatePickerOpen, setMotherDatePickerOpen] = useState(false)
    const [inputsLocked, setInputsLocked] = useState(false);  // disables the input fields

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleDateChange = (date) => {
        const dateValue = new Date(date); // Attempt to parse the date
        const formattedDate = format(dateValue, 'MM/dd/yyyy');
        setFormData((prevData) => ({ ...prevData, DOB: formattedDate }));
        setDatePickerOpen(false);
    }

    const handleFatherDateChange = (date) => {
        const dateValue = new Date(date); // Attempt to parse the date
        const formattedDate = format(dateValue, 'MM/dd/yyyy');
        setFormData((prevData) => ({ ...prevData, fatherDOB: formattedDate }));
        setDatePickerOpen(false);
    }

    const handleMotherDateChange = (date) => {
        const dateValue = new Date(date); // Attempt to parse the date
        const formattedDate = format(dateValue, 'MM/dd/yyyy');
        setFormData((prevData) => ({ ...prevData, motherDOB: formattedDate }));
        setDatePickerOpen(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted data:", formData);
    };

    const ParentInformation =
    <>
        {/*FATHER INFORMATION FIELDS*/}
        <div className="flex flex-col mt-6">
            <h1 className="font-outfit font-normal text-loginTextBlue text-[20px]">Father's Information</h1>
            <div className="flex flex-row space-x-3 mt-3">
                <input type="text" name="fatherFName" placeholder="First Name" value={formData.fatherFName} onChange={handleChange}
                    className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-5/6 outline-none" required  disabled={inputsLocked}/>
                <input type="text" name="fatherLName" placeholder="Last Name" value={formData.fatherLName} onChange={handleChange}
                    className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-5/6 outline-none" required disabled={inputsLocked}/>
                <input type="text" name="fatherMI" placeholder="M.I" value={formData.fatherMI} onChange={handleChange}
                    className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/12 outline-none" required disabled={inputsLocked}/>
            </div>
        </div>

        <p className="text-loginTextBlue mt-3 font-kiteOne text-[13px]">* Date of Birth</p>
        <div className="flex flex-row space-x-3">
            <input type="text" placeholder="MM/DD/YYYY" value={formData.fatherDOB} readOnly
                className="flex border border-hoverloginBlue p-2 rounded-md h-[45px] w-1/6 outline-none" required disabled={inputsLocked}/>
            <button name="fatherDOB" type="button" className="flex justify-cente items-center border border-hoverloginBlue rounded-md h-[45px] p-2 outline-none"
                onClick={() => setFatherDatePickerOpen(!fatherDatePickerOpen)}>
                <MdOutlineCalendarMonth size="20" className="text-loginTextBlue" disabled={inputsLocked}/>
            </button>
            {fatherDatePickerOpen && (
                <div className="absolute z-1 left-52 top-[35.7rem]">
                    <DatePicker selected={formData.fatherDOB} onChange={handleFatherDateChange} inline
                        onClickOutside={() => setFatherDatePickerOpen(false)} className="border border-hoverloginBlue p-2 rounded-md" disabled={inputsLocked}/>
                </div>
            )}
            <input type="text" name="fatherPOB" placeholder="Place of Birth" value={formData.fatherPOB} onChange={handleChange}
                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/2 outline-none" required disabled={inputsLocked}/>
            <input type="text" name="fatherCitizenship" placeholder="Citizenship" value={formData.fatherCitizenship} onChange={handleChange}
                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>
            <input type="email" name="fatherReligion" placeholder="Religion" value={formData.fatherReligion} onChange={handleChange}
                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>
        </div>

        <div className="flex flex-row space-x-3 mt-6">
            <input type="text" name="fatherOccupation" placeholder="occupation" value={formData.fatherOccupation} onChange={handleChange}
                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>          
            <input type="email" name="fatherEmailAddress" placeholder="Email Address" value={formData.fatherEmailAddress} onChange={handleChange}
                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-[35%] outline-none" required disabled={inputsLocked}/>
            <input type="text" name="fatherContact" placeholder="contact" value={formData.fatherContact} onChange={handleChange}
                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>
        </div>
        
        {/*MOTHER INFORMATION FIELDS*/}
        <div className="flex flex-col mt-6">
            <h1 className="font-outfit font-normal text-loginTextBlue text-[20px]">Mother's Information</h1>
            <div className="flex flex-row space-x-3 mt-3">
                <input type="text" name="motherFName" placeholder="First Name" value={formData.motherFName} onChange={handleChange}
                    className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-5/6 outline-none" required  disabled={inputsLocked}/>
                <input type="text" name="motherLName" placeholder="Last Name" value={formData.motherLName} onChange={handleChange}
                    className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-5/6 outline-none" required disabled={inputsLocked}/>
                <input type="text" name="motherMI" placeholder="M.I" value={formData.motherMI} onChange={handleChange}
                    className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/12 outline-none" required disabled={inputsLocked}/>
            </div>
        </div>
        
        <p className="text-loginTextBlue mt-3 font-kiteOne text-[13px]">* Date of Birth</p>
        <div className="flex flex-row space-x-3">
            <input type="text" placeholder="MM/DD/YYYY" value={formData.motherDOB} readOnly
                className="flex border border-hoverloginBlue p-2 rounded-md h-[45px] w-1/6 outline-none" required disabled={inputsLocked}/>
            <button name="fatherDOB" type="button" className="flex justify-cente items-center border border-hoverloginBlue rounded-md h-[45px] p-2 outline-none"
                onClick={() => setMotherDatePickerOpen(!motherDatePickerOpen)}>
                <MdOutlineCalendarMonth size="20" className="text-loginTextBlue" disabled={inputsLocked}/>
            </button>
            {motherDatePickerOpen && (
                <div className="absolute z-1 left-52 top-[51.3rem]">
                    <DatePicker selected={formData.motherDOB} onChange={handleMotherDateChange} inline
                        onClickOutside={() => setMotherDatePickerOpen(false)} className="border border-hoverloginBlue p-2 rounded-md" disabled={inputsLocked}/>
                </div>
            )}
            <input type="text" name="motherPOB" placeholder="Place of Birth" value={formData.motherPOB} onChange={handleChange}
                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/2 outline-none" required disabled={inputsLocked}/>
            <input type="text" name="motherCitizenship" placeholder="Citizenship" value={formData.motherCitizenship} onChange={handleChange}
                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>
            <input type="email" name="motherReligion" placeholder="Religion" value={formData.motherReligion} onChange={handleChange}
                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>
        </div>

        <div className="flex flex-row space-x-3 mt-6">
            <input type="text" name="motherOccupation" placeholder="occupation" value={formData.motherOccupation} onChange={handleChange}
                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>          
            <input type="email" name="motherEmailAddress" placeholder="Email Address" value={formData.motherEmailAddress} onChange={handleChange}
                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-[35%] outline-none" required disabled={inputsLocked}/>
            <input type="text" name="motherContact" placeholder="contact" value={formData.motherContact} onChange={handleChange}
                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>
        </div>
    </>


    const studentRegister = (
        <div className="absolute flex items-center justify-center h-screen w-screen">
            <div className="relative h-3/4 w-4/6 border-2 rounded-lg top-16 bg-white shadow-lg drop-shadow-md p-8 overflow-y-auto">
                <h3 className="text-[25px] text-loginTextBlue mb-4 font-medium font-outfit">Student Information</h3>
                
                <form method="POST" onSubmit={handleSubmit} className="flex flex-col h-[35vw]">
                    <div className={`h-[70rem]`}>
                        <div className="flex flex-row space-x-3">
                            <input type="text" name="fName" placeholder="First Name" value={formData.fName} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-5/6 outline-none" required  disabled={inputsLocked}/>
                            <input type="text" name="lName" placeholder="Last Name" value={formData.lName} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-5/6 outline-none" required disabled={inputsLocked}/>
                            <input type="text" name="MI" placeholder="M.I" value={formData.MI} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/12 outline-none" required disabled={inputsLocked}/>
                        </div>

                        <p className="text-loginTextBlue mt-3 font-kiteOne text-[13px]">* Date of Birth</p>
                        <div className="flex flex-row space-x-3">
                            <input type="text" placeholder="MM/DD/YYYY" value={formData.DOB} readOnly
                                className="flex border border-hoverloginBlue p-2 rounded-md h-[45px] w-1/6 outline-none" required disabled={inputsLocked}/>
                            <button type="button" className="flex justify-cente items-center border border-hoverloginBlue rounded-md h-[45px] p-2 outline-none"
                                onClick={() => setDatePickerOpen(!datePickerOpen)}>
                                <MdOutlineCalendarMonth size="20" className="text-loginTextBlue" disabled={inputsLocked}/>
                            </button>
                            {datePickerOpen && (
                                <div className="absolute z-1 left-52 top-[11.5rem]">
                                    <DatePicker selected={formData.DOB} onChange={handleDateChange} inline
                                        onClickOutside={() => setDatePickerOpen(false)} className="border border-hoverloginBlue p-2 rounded-md" disabled={inputsLocked}/>
                                </div>
                            )}

                            <input type="text" name="POB" placeholder="Place of Birth" value={formData.POB} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/2 outline-none" required disabled={inputsLocked}/>
                            <input type="text" name="citizenship" placeholder="Citizenship" value={formData.citizenship} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>
                            <input type="email" name="religion" placeholder="Religion" value={formData.religion} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>
                        </div>

                        <div className="flex flex-row space-x-3 mt-6">
                            

                            <select name="sex" value={formData.sex} onChange={handleChange}
                                className="flex border-2 border-textColor rounded-md h-[45px] pl-2 w-1/12 text-loginTextBlue outline-none" required disabled={inputsLocked}>
                                <option disabled value="">Sex</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>

                            <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}
                                className="flex border-2 border-textColor rounded-md h-[45px] pl-2 w-2/12 text-loginTextBlue outline-none" required disabled={inputsLocked}>
                                <option disabled value="">Marital Status</option>
                                <option value="Male">Single</option>
                                <option value="Female">Married</option>
                                <option value="Other">Widowed</option>
                            </select>

                            <input type="text" name="address" placeholder="Address (Street/Province/City)" value={formData.address} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-[60%] outline-none" required disabled={inputsLocked}/>
                            
                            <input type="text" name="zipCode" placeholder="Zip Code" value={formData.zipCode} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/6 outline-none" required disabled={inputsLocked}/>
                        </div>

                        <div className="flex flex-row space-x-3 mt-6">
                            <select name="year" value={formData.year} onChange={handleChange}
                                className="flex border-2 border-textColor rounded-md h-[45px] pl-2 w-[12%] text-loginTextBlue outline-none" required disabled={inputsLocked}>
                                <option disabled value="">Year</option>
                                <option value="1st Year">1st Year</option>
                                <option value="2nd Year">2nd Year</option>
                                <option value="3rd Yea">3rd Year</option>
                                <option value="4th Year">4th Year</option>
                            </select>
                            <input type="text" name="section" placeholder="Section" value={formData.section} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-[14%] outline-none" required disabled={inputsLocked}/>

                            <select name="department" value={formData.department} onChange={handleChange}
                                className="flex border-2 border-textColor rounded-md h-[45px] pl-2 w-1/2 text-loginTextBlue outline-none" required disabled={inputsLocked}>
                                <option disabled value="">Department</option>
                                <option value="College of Technology">College of Technology</option>
                            </select>

                            <select name="program" value={formData.program} onChange={handleChange}
                                className="flex border-2 border-textColor rounded-md h-[45px] pl-2 w-1/2 text-loginTextBlue outline-none" required disabled={inputsLocked}>
                                <option disabled value="">Program</option>
                                <option value="BSIT">BSIT</option>
                                <option value="BSIE">BSIE</option>
                            </select>
                        </div>

                        <div className="flex flex-row space-x-3 mt-6">
                            <input type="text" name="Id" placeholder="Student ID" value={formData.studentId} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/6 outline-none" required disabled={inputsLocked}/>          
                            <input type="email" name="emailAddress" placeholder="Email Address" value={formData.emailAddress} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-[35%] outline-none" required disabled={inputsLocked}/>
                            <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>
                        </div>
                        
                        {/*FATHER INFORMATION FIELDS*/}
                        <div className="flex flex-col mt-6">
                            <h1 className="font-outfit font-normal text-loginTextBlue text-[20px]">Father's Information</h1>
                            <div className="flex flex-row space-x-3 mt-3">
                                <input type="text" name="fatherFName" placeholder="First Name" value={formData.fatherFName} onChange={handleChange}
                                    className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-5/6 outline-none" required  disabled={inputsLocked}/>
                                <input type="text" name="fatherLName" placeholder="Last Name" value={formData.fatherLName} onChange={handleChange}
                                    className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-5/6 outline-none" required disabled={inputsLocked}/>
                                <input type="text" name="fatherMI" placeholder="M.I" value={formData.fatherMI} onChange={handleChange}
                                    className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/12 outline-none" required disabled={inputsLocked}/>
                            </div>
                        </div>

                        <div className="flex flex-row space-x-3 mt-6">
                            <input type="text" placeholder="MM/DD/YYYY" value={formData.fatherDOB} readOnly
                                className="flex border border-hoverloginBlue p-2 rounded-md h-[45px] w-1/6 outline-none" required disabled={inputsLocked}/>
                            <button name="fatherDOB" type="button" className="flex justify-cente items-center border border-hoverloginBlue rounded-md h-[45px] p-2 outline-none"
                                onClick={() => setFatherDatePickerOpen(!fatherDatePickerOpen)}>
                                <MdOutlineCalendarMonth size="20" className="text-loginTextBlue" disabled={inputsLocked}/>
                            </button>
                            {fatherDatePickerOpen && (
                                <div className="absolute z-1 left-52 top-[35.7rem]">
                                    <DatePicker selected={formData.fatherDOB} onChange={handleFatherDateChange} inline
                                        onClickOutside={() => setFatherDatePickerOpen(false)} className="border border-hoverloginBlue p-2 rounded-md" disabled={inputsLocked}/>
                                </div>
                            )}
                            <input type="text" name="fatherPOB" placeholder="Place of Birth" value={formData.fatherPOB} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/2 outline-none" required disabled={inputsLocked}/>
                            <input type="text" name="fatherCitizenship" placeholder="Citizenship" value={formData.fatherCitizenship} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>
                            <input type="email" name="fatherReligion" placeholder="Religion" value={formData.fatherReligion} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>
                        </div>

                        <div className="flex flex-row space-x-3 mt-6">
                            <input type="text" name="fatherOccupation" placeholder="occupation" value={formData.fatherOccupation} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>          
                            <input type="email" name="fatherEmailAddress" placeholder="Email Address" value={formData.fatherEmailAddress} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-[35%] outline-none" required disabled={inputsLocked}/>
                            <input type="text" name="fatherContact" placeholder="contact" value={formData.fatherContact} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>
                        </div>
                        
                        {/*MOTHER INFORMATION FIELDS*/}
                        <div className="flex flex-col mt-6">
                            <h1 className="font-outfit font-normal text-loginTextBlue text-[20px]">Mother's Information</h1>
                            <div className="flex flex-row space-x-3 mt-3">
                                <input type="text" name="motherFName" placeholder="First Name" value={formData.motherFName} onChange={handleChange}
                                    className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-5/6 outline-none" required  disabled={inputsLocked}/>
                                <input type="text" name="motherLName" placeholder="Last Name" value={formData.motherLName} onChange={handleChange}
                                    className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-5/6 outline-none" required disabled={inputsLocked}/>
                                <input type="text" name="motherMI" placeholder="M.I" value={formData.motherMI} onChange={handleChange}
                                    className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/12 outline-none" required disabled={inputsLocked}/>
                            </div>
                        </div>

                        <div className="flex flex-row space-x-3 mt-6">
                            <input type="text" placeholder="MM/DD/YYYY" value={formData.motherDOB} readOnly
                                className="flex border border-hoverloginBlue p-2 rounded-md h-[45px] w-1/6 outline-none" required disabled={inputsLocked}/>
                            <button name="fatherDOB" type="button" className="flex justify-cente items-center border border-hoverloginBlue rounded-md h-[45px] p-2 outline-none"
                                onClick={() => setMotherDatePickerOpen(!motherDatePickerOpen)}>
                                <MdOutlineCalendarMonth size="20" className="text-loginTextBlue" disabled={inputsLocked}/>
                            </button>
                            {motherDatePickerOpen && (
                                <div className="absolute z-1 left-52 top-[51.3rem]">
                                    <DatePicker selected={formData.motherDOB} onChange={handleMotherDateChange} inline
                                        onClickOutside={() => setMotherDatePickerOpen(false)} className="border border-hoverloginBlue p-2 rounded-md" disabled={inputsLocked}/>
                                </div>
                            )}
                            <input type="text" name="motherPOB" placeholder="Place of Birth" value={formData.motherPOB} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/2 outline-none" required disabled={inputsLocked}/>
                            <input type="text" name="motherCitizenship" placeholder="Citizenship" value={formData.motherCitizenship} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>
                            <input type="email" name="motherReligion" placeholder="Religion" value={formData.motherReligion} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>
                        </div>

                        <div className="flex flex-row space-x-3 mt-6">
                            <input type="text" name="motherOccupation" placeholder="occupation" value={formData.motherOccupation} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>          
                            <input type="email" name="motherEmailAddress" placeholder="Email Address" value={formData.motherEmailAddress} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-[35%] outline-none" required disabled={inputsLocked}/>
                            <input type="text" name="motherContact" placeholder="contact" value={formData.motherContact} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>
                        </div>     
                    </div>

                    {ParentInformation}
                    
                    <div className="flex flex-col h-[8rem] items-start mt-7"> 
                        <button type="submit"
                            className="flex h-[3rem] w-[9rem] bg-custom-teal3 rounded-md mb-[2.5rem] items-center justify-center border-1 shadow-lg drop-shadow-lg
                                hover:bg-hoverloginBlue ">
                            <div className="flex items-center pr-4 pl-4">
                                <h1 className="text-white text-[20px] font-medium font-outfit ml-3">Next</h1>
                                <IoIosArrowDroprightCircle className="text-white h-[1.5rem] w-[1.5rem] ml-[1.5rem]" />
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

    const teacherRegister = (
        <div className="absolute flex items-center justify-center h-screen w-screen">
            <div className="relative h-3/4 w-4/6 border-2 rounded-lg top-16 bg-white shadow-lg drop-shadow-md p-8 overflow-y-auto">
                <h3 className="text-[25px] text-loginTextBlue mb-4 font-medium font-outfit">Teacher Information</h3>
                
                <form method="POST" onSubmit={handleSubmit} className="flex flex-col h-[35vw]">
                    <div className="h-[70rem]">
                        <div className="flex flex-row space-x-3">
                            <input type="text" name="fName" placeholder="First Name" value={formData.fName} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-5/6 outline-none" required  disabled={inputsLocked}/>
                            <input type="text" name="lName" placeholder="Last Name" value={formData.lName} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-5/6 outline-none" required disabled={inputsLocked}/>
                            <input type="text" name="MI" placeholder="M.I" value={formData.MI} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/12 outline-none" required disabled={inputsLocked}/>
                        </div>

                        <p className="text-loginTextBlue mt-3 font-kiteOne text-[13px]">* Date of Birth</p>
                        <div className="flex flex-row space-x-3">
                            <input type="text" placeholder="MM/DD/YYYY" value={formData.DOB} readOnly
                                className="flex border border-hoverloginBlue p-2 rounded-md h-[45px] w-1/6 outline-none" required disabled={inputsLocked}/>
                            <button type="button" className="flex justify-cente items-center border border-hoverloginBlue rounded-md h-[45px] p-2 outline-none"
                                onClick={() => setDatePickerOpen(!datePickerOpen)}>
                                <MdOutlineCalendarMonth size="20" className="text-loginTextBlue" disabled={inputsLocked}/>
                            </button>
                            {datePickerOpen && (
                                <div className="absolute z-1 left-52 top-[11.5rem]">
                                    <DatePicker selected={formData.DOB} onChange={handleDateChange} inline
                                        onClickOutside={() => setDatePickerOpen(false)} className="border border-hoverloginBlue p-2 rounded-md" disabled={inputsLocked}/>
                                </div>
                            )}

                            <input type="text" name="POB" placeholder="Place of Birth" value={formData.POB} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/2 outline-none" required disabled={inputsLocked}/>
                            <input type="text" name="citizenship" placeholder="Citizenship" value={formData.citizenship} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>
                            <input type="email" name="religion" placeholder="Religion" value={formData.religion} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>
                        </div>

                        <div className="flex flex-row space-x-3 mt-6">
  
                            <select name="sex" value={formData.sex} onChange={handleChange}
                                className="flex border-2 border-textColor rounded-md h-[45px] pl-2 w-1/12 text-loginTextBlue outline-none" required disabled={inputsLocked}>
                                <option disabled value="">Sex</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>

                            <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}
                                className="flex border-2 border-textColor rounded-md h-[45px] pl-2 w-2/12 text-loginTextBlue outline-none" required disabled={inputsLocked}>
                                <option disabled value="">Marital Status</option>
                                <option value="Male">Single</option>
                                <option value="Female">Married</option>
                                <option value="Other">Widowed</option>
                            </select>

                            <input type="text" name="address" placeholder="Address (Street/Province/City)" value={formData.address} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-[70%] outline-none" required disabled={inputsLocked}/>

                            <input type="text" name="zipCode" placeholder="Zip Code" value={formData.zipCode} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/6 outline-none" required disabled={inputsLocked}/>
                        </div>

                        <div className="flex flex-row space-x-3 mt-6">
                            <input type="text" name="Id" placeholder="Teacher Id" value={formData.studentId} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/6 outline-none" required disabled={inputsLocked}/>

                            <select name="department" value={formData.department} onChange={handleChange}
                                className="flex border-2 border-textColor rounded-md h-[45px] pl-2 w-1/2 text-loginTextBlue outline-none" required disabled={inputsLocked}>
                                <option disabled value="">Department</option>
                                <option value="College of Technology">College of Technology</option>
                            </select>

                            <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/2 outline-none" required disabled={inputsLocked}/>

                            <input type="email" name="emailAddress" placeholder="Email Address" value={formData.emailAddress} onChange={handleChange}
                            className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/2 outline-none" required disabled={inputsLocked}/>

                        </div>

                        {ParentInformation}

                    </div>
                    <div className="flex flex-col h-[8rem] items-start mt-7"> 
                        <button type="submit"
                            className="flex h-[3rem] w-[9rem] bg-custom-teal3 rounded-md mb-[2.5rem] items-center justify-center border-1 shadow-lg drop-shadow-lg
                                hover:bg-hoverloginBlue ">
                            <div className="flex items-center pr-4 pl-4">
                                <h1 className="text-white text-[20px] font-medium font-outfit ml-3">Next</h1>
                                <IoIosArrowDroprightCircle className="text-white h-[1.5rem] w-[1.5rem] ml-[1.5rem]" />
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );


    const staffRegister = (
        <div className="absolute flex items-center justify-center h-screen w-screen">
            <div className="relative h-3/4 w-4/6 border-2 rounded-lg top-16 bg-white shadow-lg drop-shadow-md p-8 overflow-y-auto">
                <h3 className="text-[25px] text-loginTextBlue mb-4 font-medium font-outfit">Staff Information</h3>
                
                <form method="POST" onSubmit={handleSubmit} className="flex flex-col h-[35vw]">
                    <div className="h-[70rem]">
                        <div className="flex flex-row space-x-3">
                            <input type="text" name="fName" placeholder="First Name" value={formData.fName} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-5/6 outline-none" required  disabled={inputsLocked}/>
                            <input type="text" name="lName" placeholder="Last Name" value={formData.lName} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-5/6 outline-none" required disabled={inputsLocked}/>
                            <input type="text" name="MI" placeholder="M.I" value={formData.MI} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/12 outline-none" required disabled={inputsLocked}/>
                        </div>

                        <p className="text-loginTextBlue mt-3 font-kiteOne text-[13px]">* Date of Birth</p>
                        <div className="flex flex-row space-x-3">
                            <input type="text" placeholder="MM/DD/YYYY" value={formData.DOB} readOnly
                                className="flex border border-hoverloginBlue p-2 rounded-md h-[45px] w-1/6 outline-none" required disabled={inputsLocked}/>
                            <button type="button" className="flex justify-cente items-center border border-hoverloginBlue rounded-md h-[45px] p-2 outline-none"
                                onClick={() => setDatePickerOpen(!datePickerOpen)}>
                                <MdOutlineCalendarMonth size="20" className="text-loginTextBlue" disabled={inputsLocked}/>
                            </button>
                            {datePickerOpen && (
                                <div className="absolute z-1 left-52 top-[11.5rem]">
                                    <DatePicker selected={formData.DOB} onChange={handleDateChange} inline
                                        onClickOutside={() => setDatePickerOpen(false)} className="border border-hoverloginBlue p-2 rounded-md" disabled={inputsLocked}/>
                                </div>
                            )}

                            <input type="text" name="POB" placeholder="Place of Birth" value={formData.POB} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/2 outline-none" required disabled={inputsLocked}/>
                            <input type="text" name="citizenship" placeholder="Citizenship" value={formData.citizenship} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>
                            <input type="email" name="religion" placeholder="Religion" value={formData.religion} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>
                        </div>
                        
                        <div className="flex flex-row space-x-3 mt-6">

                            <select name="sex" value={formData.sex} onChange={handleChange}
                                className="flex border-2 border-textColor rounded-md h-[45px] pl-2 w-1/12 text-loginTextBlue outline-none" required disabled={inputsLocked}>
                                <option disabled value="">Sex</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>

                            <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}
                                className="flex border-2 border-textColor rounded-md h-[45px] pl-2 w-2/12 text-loginTextBlue outline-none" required disabled={inputsLocked}>
                                <option disabled value="">Marital Status</option>
                                <option value="Male">Single</option>
                                <option value="Female">Married</option>
                                <option value="Other">Widowed</option>
                            </select>

                            <input type="text" name="address" placeholder="Address (Street/Province/City)" value={formData.address} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-[70%] outline-none" required disabled={inputsLocked}/>

                            <input type="text" name="zipCode" placeholder="Zip Code" value={formData.zipCode} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/6 outline-none" required disabled={inputsLocked}/>

                        </div> 

                        <div className="flex flex-row space-x-3 mt-6">
                            
                            <input type="text" name="Id" placeholder="Staff Id" value={formData.staffId} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/6 outline-none" required disabled={inputsLocked}/>

                            <input type="email" name="emailAddress" placeholder="Email Address" value={formData.emailAddress} onChange={handleChange}
                            className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/3 outline-none" required disabled={inputsLocked}/>               

                            <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange}
                                className="flex border border-hoverloginBlue p-2 rounded-md top-4 h-[45px] w-1/4 outline-none" required disabled={inputsLocked}/>
                        </div>
                        
                        {ParentInformation}

                    </div>
                    <div className="flex flex-row h-[8rem] items-start mt-7"> 
                        <button type="submit"
                            className="flex h-[3rem] w-[9rem] bg-custom-teal3 rounded-md mb-[2.5rem] items-center justify-center border-1 shadow-lg drop-shadow-lg
                                hover:bg-hoverloginBlue ">
                            <div className="flex items-center pr-4 pl-4">
                                <h1 className="text-white text-[20px] font-medium font-outfit ml-3">Next</h1>
                                <IoIosArrowDroprightCircle className="text-white h-[1.5rem] w-[1.5rem] ml-[1.5rem]" />
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );

    switch(form){
        case 'studentRegister': return studentRegister;
        case 'teacherRegister': return teacherRegister;
        case 'staffRegister': return staffRegister;
    }
}

export default Registration;