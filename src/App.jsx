import { useState } from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import SignIn from './SignIn.jsx'
import SignUp from './SignUp.jsx'
import FPgetEmail from './ForgotPassword-1.jsx'
import FPgetCode from './EmailVerification.jsx'
import FPnewPass from './ForgotPassword-2.jsx'

const App = () =>{

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn/>
    },
    {
      path: "/signin",
      element: <SignIn/>
    },
    {
      path: "/signup",
      element: <SignUp/>
    },
    {
      path: "/forgotpass-1",
      element: <FPgetEmail/>
    },
    {
      path: "/accountrecover",
      element: <FPgetCode type={"ACCOUNT RECOVERY"}/>
    },{
      path: "/forgotpass-2",
      element: <FPnewPass/>
    }
  ])

  return(<>
          <RouterProvider router={router}/>
        </>);
}

export default App
