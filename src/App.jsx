import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './Sidebar'
import Registration from './Registration'
import Records from './Records'
import LockedRegistration from './lockedRegistration'

function App() {
  return(
    <Router>
      <div>
        <Sidebar/>
        <Routes>  
          <Route path="/register" element={<Registration/>} />
          <Route path="/records"  element={<Records/>} />
          {/* Tentative cause instead of Registration it should be the profile panel */}
          <Route path="/profile" element={<LockedRegistration/>}/>
        </Routes>
      </div>  
    </Router>
  )
}

export default App