import Background2 from "./background/Background-2"
import Sidebar from "./sidebar/Sidebar"
import Header from "./Header"


function RecordSelection({backgroundColor}){
    
    const selected = <>
                        <Background2 backgroundColor={backgroundColor} state={2}/>
                        <Sidebar/>
                        <Header/>
                    </>

    return selected
}

export default RecordSelection
