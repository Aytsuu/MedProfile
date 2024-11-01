import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import SignIn from './SignIn.jsx'
import SignUp from './SignUp.jsx'
import FPgetEmail from './ForgotPassword-1.jsx'
import FPgetCode from './EmailVerification.jsx'
import FPnewPass from './ForgotPassword-2.jsx'
import Background2 from './background/Background-2.jsx';

const App = () =>{
  // Clean the local storage on initial run
  localStorage.removeItem('Return')

  // Create a routes that link buttons to other files/pages
  const router = createBrowserRouter([
    {
      // Default link to sign in page
      path: "/",
      element: <Background2/>
    },
    {
      // Link to sign up page
      path: "/signup",
      element: <SignUp/>
    },
    {
      // Link to forgot password -- enter email page
      path: "/forgotpass-1",
      element: <FPgetEmail/>
    },
    {
      // Link to forgot password -- email verification page
      path: "/accountrecover",
      element: <FPgetCode type={"ACCOUNT RECOVERY"}/>
    },
    {
      // Link to forgot password -- set new password page
      path: "/forgotpass-2",
      element: <FPnewPass/>
    },
    {
      // Link to sign up -- email verification page
      path: "/emailverification",
      element: <FPgetCode type={"EMAIL VERIFICATION"}/>
    },
  ])

  return(<>
          <RouterProvider router={router}/>
        </>);
}

export default App
