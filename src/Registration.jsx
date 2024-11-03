import { MdOutlineCalendarMonth, MdArrowCircleLeft, MdArrowCircleRight, MdDelete, MdOutlineSync } from "react-icons/md";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Registration() {
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        mName: '',
        dateOfBirth: '',
        department: '',
        program: '',
        year: '',
        section: '',
        contact: '',
        sex: '',
        studentId: '',
        address: '',
        emailAddress: '',
        eName: '',
        eContact: '',
        eRelationship: ''
    });

    const [datePickerOpen, setDatePickerOpen] = useState(false);
    const [inputsLocked, setInputsLocked] = useState(false);  // disables the input fields

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDateChange = (date) => {
        setFormData((prevData) => ({ ...prevData, dateOfBirth: date }));
        setDatePickerOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted data:", formData);
    };

    const register = (
        <div className="absolute flex items-center justify-center h-screen w-screen">
            <div className="relative h-3/4 w-4/6 border-2 rounded-lg top-16 bg-white shadow-lg drop-shadow-md p-8">
                <h3 className="text-xl text-textColor mb-4 font-bold">Student Information</h3>
                
                <form method="POST" onSubmit={handleSubmit} className="flex flex-col">
                    <div className="flex flex-row space-x-3">
                        <input type="text" name="fName" placeholder="First Name" value={formData.fName} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-5/6" required  disabled={inputsLocked}/>
                        <input type="text" name="lName" placeholder="Last Name" value={formData.lName} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-5/6" required disabled={inputsLocked}/>
                        <input type="text" name="mName" placeholder="M.I" value={formData.mName} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-1/12" required disabled={inputsLocked}/>
                    </div>

                    <p className="text-textColor mt-2">* Date of Birth</p>
                    <div className="flex flex-row space-x-3">
                        <input type="text" placeholder="MM/DD/YYYY" value={formData.dateOfBirth} readOnly
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-1/6" required disabled={inputsLocked}/>
                        <button type="button" className="flex items-center border-2 border-textColor rounded-md h-9 p-2"
                            onClick={() => setDatePickerOpen(!datePickerOpen)}>
                            <MdOutlineCalendarMonth size="20" className="mr-2" disabled={inputsLocked}/>
                        </button>
                        {datePickerOpen && (
                            <div className="absolute z-1 left-52 top-44">
                                <DatePicker selected={formData.dateOfBirth} onChange={handleDateChange} inline
                                    onClickOutside={() => setDatePickerOpen(false)} className="border-2 border-textColor p-2 rounded-md" disabled={inputsLocked}/>
                            </div>
                        )}

                        <select name="department" value={formData.department} onChange={handleChange}
                            className="flex border-2 border-textColor rounded-md h-9 pl-2 w-1/2 " required disabled={inputsLocked}>
                            <option disabled value="">Department</option>
                            <option value="College of Technology">College of Technology</option>
                        </select>

                        <select name="program" value={formData.program} onChange={handleChange}
                            className="flex border-2 border-textColor rounded-md h-9 pl-2 w-1/2" required disabled={inputsLocked}>
                            <option disabled value="">Program</option>
                            <option value="BSIT">BSIT</option>
                            <option value="BSIE">BSIE</option>
                        </select>
                    </div>

                    <div className="flex flex-row space-x-3 mt-4">
                        <input type="text" name="year" placeholder="Year" value={formData.year} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-1/12" required disabled={inputsLocked}/>
                        <input type="text" name="section" placeholder="Section" value={formData.section} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-1/2" required disabled={inputsLocked}/>
                        <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-1/2" required disabled={inputsLocked}/>

                        <select name="sex" value={formData.sex} onChange={handleChange}
                            className="flex border-2 border-textColor rounded-md h-9 pl-2 w-1/12 text-neutral-500" required disabled={inputsLocked}>
                            <option disabled value="">Sex</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="flex flex-row space-x-3 mt-4">
                        <input type="text" name="studentId" placeholder="Student Id" value={formData.studentId} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-1/6" required disabled={inputsLocked}/>
                        <input type="text" name="address" placeholder="Address (Street/Province/City)" value={formData.address} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-1/2" required disabled={inputsLocked}/>
                        <input type="email" name="emailAddress" placeholder="Email Address" value={formData.emailAddress} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-1/2" required disabled={inputsLocked}/>
                    </div>

                    <p className="text-textColor mt-4">* In case of Emergency, contact this person</p>
                    <div className="flex flex-row space-x-3">
                        <input type="text" name="eName" placeholder="Full Name" value={formData.eName} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-1/2" required disabled={inputsLocked}/>
                        <input type="text" name="eContact" placeholder="Contact" value={formData.eContact} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-1/2" required disabled={inputsLocked}/>
                    </div>

                    <div className="flex flex-row space-x-3 mt-4">
                        <input type="text" name="eRelationship" placeholder="Relationship with this person" value={formData.eRelationship} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-1/2" required disabled={inputsLocked}/>
                    </div>

                    <div className="flex flex-row mt-16">
                        <button type="button" className="flex h-10 w-20 m-2 border-1 shadow-lg drop-shadow-lg rounded-md hover:bg-cyan-300 hover:rounded-lg items-center justify-center">
                            <MdArrowCircleLeft size="30" />
                        </button>
                        
                        <button type="submit"
                            className="flex h-10 w-auto m-2 bg-teal-500 rounded-md items-center justify-center
                                hover:bg-teal-900">
                            <div className="flex items-center space-x-3 pr-4 pl-4">
                                <h1 className="text-white font-semibold">Next</h1>
                                <MdArrowCircleRight size="30" />
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

    return register;
}

export default Registration;