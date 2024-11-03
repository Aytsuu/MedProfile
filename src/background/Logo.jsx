import SiteLogo from "../assets/Logo.png"

export default function Logo(){
    return(<>
                <div className="flex items-center w-screen h-[7rem] bg-none justify-between absolute">
                    {/*-------------------------------------------Logo-------------------------------*/}
                    <div className="flex items-center m-[10px] h-full">
                        <img src={SiteLogo} alt="" className="w-[15rem] h-[5.3rem] p-2 ml-3 mt-[1.5rem]"/>
                    </div>
                </div>
        </>)
}