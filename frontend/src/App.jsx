import { SignedOut, SignInButton,  SignedIn } from "@clerk/clerk-react"
import { Routes, Route, Navigate } from "react-router"
import HomePage from "./pages/HomePage"
import AuthPage from "./pages/AuthPage"

const App = () => {
  return (

    <>
       <SignedIn>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/auth" element={<Navigate to={"/"} replace />} />
        </Routes>
       </SignedIn>

       <SignedOut>
         <Routes>
          <Route path="/auth" element={<AuthPage/>} />
          <Route path="*" element={<Navigate to={"/auth"} replace />} />
         </Routes>
       </SignedOut>



    </>
    //     <header>
    //   <SignedOut>
    //     <SignInButton mode="modal" />
    //   </SignedOut>
    //   <SignedIn>
    //     <UserButton />
    //   </SignedIn>
    // </header>

  )
}

export default App
