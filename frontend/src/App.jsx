import { SignedOut , SignedIn } from "@clerk/clerk-react"
import { Routes, Route, Navigate } from "react-router"
import HomePage from "./pages/HomePage"
import AuthPage from "./pages/AuthPage"

import * as Sentry from "@sentry/react";

  const SentryRoutes = Sentry.withSentryReactRouterV7Routing(Routes);

const App = () => {
  return (

    <>

       <button onClick={()=>{
        throw new Error("the test error from app.jsx")
       }}>THROW ERROR</button>

       <SignedIn>
        <SentryRoutes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/auth" element={<Navigate to={"/"} replace />} />
        </SentryRoutes>
       </SignedIn>

       <SignedOut>
         <SentryRoutes>
          <Route path="/auth" element={<AuthPage/>} />
          <Route path="*" element={<Navigate to={"/auth"} replace />} />
         </SentryRoutes>
       </SignedOut>



    </>

  )
}

export default App
