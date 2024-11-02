import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './Sidebar'
import Registration from './Registration'
import Records from './Records'

function App() {
  return(
    <Router>
      <div>
        <Sidebar/>
        <Routes>  
          <Route path="/register" element={<Registration/>} />
          <Route path="/records"  element={<Records/>} />
        </Routes>
      </div>  
    </Router>
  )
}

export default App