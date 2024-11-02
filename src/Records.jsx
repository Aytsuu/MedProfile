import { useNavigate } from "react-router-dom"

function Records()  {
    const navigate = useNavigate();

    const RecordDisplay = (
        <div className="flex items-center justify-center h-screen">
            {/* HEADER */}
            <div className="relative h-3/4 w-4/6 border-2 rounded-lg top-16 bg-white shadow-lg drop-shadow-md p-8">
                <div className="flex flex-col h-20 w-80% rounded-lg bg-white border-2 shadow-lg drop-shadow-md p-7">
                    <div className="flex justify-between w-full">
                        <h2 className="font-bold">ID</h2>
                        <h2 className="font-bold">First Name</h2>
                        <h2 className="font-bold">Last Name</h2>
                        <h2 className="font-bold">M.I.</h2>
                    </div>
                </div>
                <RecordData ID={123123} Fname="Sef" Lname="Virtucio" MI="S."  onClick={() => navigate('/profile')}></RecordData>
                <RecordData ID={12312312} Fname="Christian" Lname="Tabanao" MI="P."></RecordData>

            </div>
        </div>
    )

    return RecordDisplay
}

const RecordData = ({ID, Fname, Lname, MI, onClick}) => (
    <div className="flex flex-col h-20 w-80% rounded-lg bg-white border-2 shadow-lg drop-shadow-md p-7" onClick={onClick}> 
        <div className="flex justify-between w-full">
            <h2>{ID}</h2>
            <h2>{Fname}</h2>
            <h2>{Lname}</h2>
            <h2>{MI}</h2>
        </div>
    </div>
)

export default Records