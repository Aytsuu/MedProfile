import { useState } from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import SignIn from './SignIn.jsx'
import SignUp from './SignUp.jsx'

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
  ])

  return(<>
          <RouterProvider router={router}/>
        </>);
}

export default App
