import { useNavigate } from "react-router-dom"

function Records()  {
    const navigate = useNavigate();

    const RecordDisplay = (
        <div className="absolute flex items-center justify-center h-screen w-screen">
            {/* HEADER */}
            <div className="relative h-3/4 w-4/6 border-2 rounded-lg top-16 bg-white shadow-lg drop-shadow-md p-8 overflow-y-auto">
                <div className="flex flex-col h-[67px] w-80% rounded-[10px] bg-white border-2 shadow-lg drop-shadow-md p-7 mb-1">
                    <div className="flex items-center justify-between w-full h-full">
                        <h2 className="font-semibold font-outfit w-[7rem] text-center text-loginTextBlue text-[18px]">ID</h2>
                        <h2 className="font-semibold font-outfit w-[30rem] text-center text-loginTextBlue text-[18px]">First Name</h2>
                        <h2 className="font-semibold font-outfit w-[30rem] text-center text-loginTextBlue text-[18px]">Last Name</h2>
                        <h2 className="font-semibold font-outfit w-[3rem] text-center text-loginTextBlue text-[18px]">M.I.</h2>
                    </div>
                </div>
                <RecordData ID={123123} Fname="Josef Huelende" Lname="Virtucio" MI="S."  onClick={() => navigate('/profile')}></RecordData>
            </div>
        </div>
    )

    return RecordDisplay
}

const RecordData = ({ID, Fname, Lname, MI, onClick}) => (
    <div className="flex flex-col h-[67px] w-80% rounded-[10px] bg-white border-2 shadow-lg drop-shadow-md p-7 mb-1 cursor-pointer hover:bg-orange-300"> 
        <div className="flex items-center w-full h-full">
            <h2 className="font-regular font-outfit w-[7rem] text-center text-loginTextBlue text-[16px]">{ID}</h2>
            <h2 className="font-regular font-outfit w-[30rem] text-center text-loginTextBlue text-[16px]">{Fname}</h2>
            <h2 className="font-regular font-outfit w-[30rem] text-center text-loginTextBlue text-[16px]">{Lname}</h2>
            <h2 className="font-regular font-outfit w-[3rem] text-center text-loginTextBlue text-[16px]">{MI}</h2>
        </div>
    </div>
)

export default Records