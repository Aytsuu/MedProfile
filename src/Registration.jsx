<<<<<<< HEAD
import { MdOutlineCalendarMonth, MdArrowCircleLeft, MdArrowCircleRight} from "react-icons/md";
import React, { useState } from "react";

/* Download the react Datepicker in terminal
    npm install react-datepicker and
    npm install date-fns */
    
=======
import { MdOutlineCalendarMonth, MdArrowCircleLeft, MdArrowCircleRight } from "react-icons/md";
import React, { useState } from "react";
>>>>>>> ebd40900e3e9071de28ec7692dfb7d3bf7096c72
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Registration() {
<<<<<<< HEAD

    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [mName, setMName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [department, setDepartment] = useState('');
    const [program, setProgram] = useState('');
    const [year, setYear] = useState('');
    const [section, setSection] = useState('');
    const [contact, setContact] = useState('');
    const [sex, setSex] = useState('');
    const [studentId, setStudentId] = useState('');
    const [address, setAddress] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [eName, setEName] = useState('');
    const [eContact, setEContact] = useState('');
    const [eRelationship, setERelationship] = useState('');
    const [datePickerOpen, setDatePickerOpen] = useState(false);

    const handleDateChange = (date) => {
        setDateOfBirth(date);
        setDatePickerOpen(false);
    };

    const patientInformation = {
        firstName: fName,
        lastName: lName,
        mName: mName,
        dateOfBirth: dateOfBirth,
        department: department,
        program: program,
        year: year,
        section: section,
        contact: contact,
        sex: sex,
        studentId: studentId,
        address: address,
        emailAddress: emailAddress,
        eName: eName,
        eContact: eContact,
        eRelationship: eRelationship
    }

    const register = (
        <div className="flex items-center justify-center h-screen">
            <div className="relative h-3/4 w-4/6 border-2 rounded-lg top-16
                            bg-white shadow-lg drop-shadow-md
                            p-8">

                <h3 className="text-xl text-textColor mb-4 font-bold">Student Information</h3>
                
                <form method="POST" className="flex flex-col">

                    <div className="flex flex-row space-x-3">
                        
                        {/* First Name Input */}

                        <input type="text" placeholder="First Name" value={fName} onChange={(e) => setFName(e.target.value)}
                                className="flex border-2 border-textColor p-2 rounded-md
                                        top-4 h-9 w-5/6"/>
                        
                        {/* Last Name Input */}

                        <input type="text" placeholder="Last Name" value={lName} onChange={(e) => setLName(e.target.value)}
                                className="flex border-2 border-textColor p-2 rounded-md
                                        top-4 h-9 w-5/6"/>

                        {/* Middle Initial Input */}

                        <input type="text" placeholder="M.I" value={mName} onChange={(e) => setMName(e.target.value)}
                                className="flex border-2 border-textColor p-2 rounded-md
                                        top-4 h-9 w-1/12"/>

                    </div>
                    
                    <p className="text-textColor mt-2">* Date of Birth</p>

                    <div className="flex flex-row space-x-3">

                        {/* Date of Birth Input */}
                        <input type="text" placeholder="MM/DD/YYYY" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}
                                className="flex border-2 border-textColor p-2 rounded-md
                                        top-4 h-9 w-1/6"/>
                         <button 
                            type="button" 
                            className="flex items-center border-2 border-textColor rounded-md h-9 p-2"
                            onClick={() => setDatePickerOpen(!datePickerOpen)} // Toggle date picker visibility
                        >
                            <MdOutlineCalendarMonth size="20" className="mr-2" />
                        </button>

                        {/* Date Picker */}
                        {datePickerOpen && ( 
                            <div className="absolute z-1 left-52 top-44">
                            <DatePicker
                                selected={dateOfBirth}
                                onChange={handleDateChange} 
                                inline 
                                onClickOutside={() => setDatePickerOpen(false)}
                                className=" border-2 border-textColor p-2 rounded-md"
                            />
                        </div>
                        )}

                        {/* Department Input */}
                        <select
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            className="flex border-2 border-textColor rounded-md h-9 pl-2 w-1/2 text-neutral-500"
                        >
                            
                            <option disabled value={''}>Department</option>
                            <option value="College of Technology">College of Technology</option>

                        </select>

                        {/* Program Input */}
                        <select
                            value={program}
                            onChange={(e) => setProgram(e.target.value)}
                            className="flex border-2 border-textColor rounded-md h-9 pl-2 w-1/2 text-neutral-500"
                        >
                            
                            <option disabled value={''}>Program</option>
                            <option value="BSIT">BSIT</option>
                            <option value="BSIE">BSIE</option>

                        </select>
                    </div>
                    
                    <div className="flex flex-row space-x-3 mt-4">

                        <input type="text" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)}
                                    className="flex border-2 border-textColor p-2 rounded-md
                                            top-4 h-9 w-1/12"/>
                        
                        <input type="text" placeholder="Section" value={section} onChange={(e) => setSection(e.target.value)}
                                className="flex border-2 border-textColor p-2 rounded-md
                                        top-4 h-9 w-1/2"/>

                        <input type="text" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)}
                                className="flex border-2 border-textColor p-2 rounded-md
                                        top-4 h-9 w-1/2"/>

                        <select
                            value={sex}
                            onChange={(e) => setSex(e.target.value)}
                            className="flex border-2 border-textColor rounded-md h-9 pl-2 w-1/12 text-neutral-500"
                        >
                            
                            <option disabled value={''}>Sex</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>

                        </select>

                    </div>
                    <div className="flex flex-row space-x-3 mt-4">

                         <input type="text" placeholder="Student Id" value={studentId} onChange={(e) => setStudentId(e.target.value)}
                                    className="flex border-2 border-textColor p-2 rounded-md
                                            top-4 h-9 w-1/12"/>
                        
                        <input type="text" placeholder="Address (City/Province/Street)" value={address} onChange={(e) => setAddress(e.target.value)}
                                className="flex border-2 border-textColor p-2 rounded-md
                                        top-4 h-9 w-1/2"/>

                        <input type="text" placeholder="Email Address" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}
                                className="flex border-2 border-textColor p-2 rounded-md
                                        top-4 h-9 w-1/2"/>

                    </div>

                    <p className="text-textColor mt-4">* In case of Emergency, contact this person</p>

                    <div className="flex flex-row space-x-3">
                        <input type="text" placeholder="Full Name" value={eName} onChange={(e) => setEName(e.target.value)}
                                className="flex border-2 border-textColor p-2 rounded-md
                                        top-4 h-9 w-1/2"/>

                        <input type="text" placeholder="Contact" value={eContact} onChange={(e) => setEContact(e.target.value)}
                                className="flex border-2 border-textColor p-2 rounded-md
                                        top-4 h-9 w-1/2"/>
                    </div>
                    <div className="flex flex-row space-x-3 mt-4">
                        <input type="text" placeholder="Relationship with this person" value={eRelationship} onChange={(e) => setERelationship(e.target.value)}
                                className="flex border-2 border-textColor p-2 rounded-md
                                        top-4 h-9 w-1/2"/>

                    </div>

                    <div className="flex flex-row space-x-3 mt-16">
                        <button className="flex h-10 w-20 m-2 
                                    shadow-lg drop-shadow-lg border-2 rounded-md
                                    hover:bg-neutral-500 hover:rounded-lg items-center justify-center">

                            <MdArrowCircleLeft size="20" />
                        </button>
                        
                        <button className="flex h-10 w-2/12 m-2 
                                        bg-teal-500 rounded-md items-center justify-center">
                            <div className="flex items-center space-x-3"> {/* Added space-x-1 for spacing */}
=======
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
        <div className="flex items-center justify-center h-screen">
            <div className="relative h-3/4 w-4/6 border-2 rounded-lg top-16 bg-white shadow-lg drop-shadow-md p-8">
                <h3 className="text-xl text-textColor mb-4 font-bold">Student Information</h3>
                
                <form method="POST" onSubmit={handleSubmit} className="flex flex-col">
                    <div className="flex flex-row space-x-3">
                        <input type="text" name="fName" placeholder="First Name" value={formData.fName} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-5/6" required />
                        <input type="text" name="lName" placeholder="Last Name" value={formData.lName} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-5/6" required />
                        <input type="text" name="mName" placeholder="M.I" value={formData.mName} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-1/12" required />
                    </div>

                    <p className="text-textColor mt-2">* Date of Birth</p>
                    <div className="flex flex-row space-x-3">
                        <input type="text" placeholder="MM/DD/YYYY" value={formData.dateOfBirth} readOnly
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-1/6" required />
                        <button type="button" className="flex items-center border-2 border-textColor rounded-md h-9 p-2"
                            onClick={() => setDatePickerOpen(!datePickerOpen)}>
                            <MdOutlineCalendarMonth size="20" className="mr-2" />
                        </button>
                        {datePickerOpen && (
                            <div className="absolute z-1 left-52 top-44">
                                <DatePicker selected={formData.dateOfBirth} onChange={handleDateChange} inline
                                    onClickOutside={() => setDatePickerOpen(false)} className="border-2 border-textColor p-2 rounded-md" />
                            </div>
                        )}

                        <select name="department" value={formData.department} onChange={handleChange}
                            className="flex border-2 border-textColor rounded-md h-9 pl-2 w-1/2 " required>
                            <option disabled value="">Department</option>
                            <option value="College of Technology">College of Technology</option>
                        </select>

                        <select name="program" value={formData.program} onChange={handleChange}
                            className="flex border-2 border-textColor rounded-md h-9 pl-2 w-1/2" required>
                            <option disabled value="">Program</option>
                            <option value="BSIT">BSIT</option>
                            <option value="BSIE">BSIE</option>
                        </select>
                    </div>

                    <div className="flex flex-row space-x-3 mt-4">
                        <input type="text" name="year" placeholder="Year" value={formData.year} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-1/12" required />
                        <input type="text" name="section" placeholder="Section" value={formData.section} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-1/2" required />
                        <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-1/2" required />

                        <select name="sex" value={formData.sex} onChange={handleChange}
                            className="flex border-2 border-textColor rounded-md h-9 pl-2 w-1/12 text-neutral-500" required>
                            <option disabled value="">Sex</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="flex flex-row space-x-3 mt-4">
                        <input type="text" name="studentId" placeholder="Student Id" value={formData.studentId} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-1/6" required />
                        <input type="text" name="address" placeholder="Address (City/Province/Street)" value={formData.address} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-1/2" required />
                        <input type="email" name="emailAddress" placeholder="Email Address" value={formData.emailAddress} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-1/2" required />
                    </div>

                    <p className="text-textColor mt-4">* In case of Emergency, contact this person</p>
                    <div className="flex flex-row space-x-3">
                        <input type="text" name="eName" placeholder="Full Name" value={formData.eName} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-1/2" required />
                        <input type="text" name="eContact" placeholder="Contact" value={formData.eContact} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-1/2" required />
                    </div>

                    <div className="flex flex-row space-x-3 mt-4">
                        <input type="text" name="eRelationship" placeholder="Relationship with this person" value={formData.eRelationship} onChange={handleChange}
                            className="flex border-2 border-textColor p-2 rounded-md top-4 h-9 w-1/2" required />
                    </div>

                    <div className="flex flex-row space-x-3 mt-16">
                        <button type="button" className="flex h-10 w-20 m-2 border-2 rounded-md hover:bg-neutral-500 hover:rounded-lg items-center justify-center">
                            <MdArrowCircleLeft size="20" />
                        </button>
                        
                        <button type="submit" // change type to submit
                            className="flex h-10 w-2/12 m-2 bg-teal-500 rounded-md items-center justify-center
                                hover:bg-teal-900">
                            <div className="flex items-center space-x-3">
>>>>>>> ebd40900e3e9071de28ec7692dfb7d3bf7096c72
                                <h1 className="text-white font-semibold">Next</h1>
                                <MdArrowCircleRight size="20" />
                            </div>
                        </button>
                    </div>
<<<<<<< HEAD

                </form>

=======
                </form>
>>>>>>> ebd40900e3e9071de28ec7692dfb7d3bf7096c72
            </div>
        </div>
    );

<<<<<<< HEAD
  return register
=======
    return register;
>>>>>>> ebd40900e3e9071de28ec7692dfb7d3bf7096c72
}

export default Registration;
