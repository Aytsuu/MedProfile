import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import SignIn from './SignIn.jsx'
import SignUp from './SignUp.jsx'
import FPgetEmail from './ForgotPassword-1.jsx'
import FPgetCode from './EmailVerification.jsx'
import FPnewPass from './ForgotPassword-2.jsx'
import Home from './HomePage.jsx';

const App = () =>{
  // Clean the local storage on initial run
  localStorage.removeItem('Return')

  // Create routes that link buttons to other files/pages
  const router = createBrowserRouter([
    {
      // Default link to sign in page
      path: "/",
      element: <SignIn/>
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
    {
      // Link to sign up -- home page
      path: "/home",
      element: <Home/>
    },
  ])

  return(<>
          <RouterProvider router={router}/>
        </>);
}

export default App
