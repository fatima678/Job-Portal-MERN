
import React from "react"
import {Route, Routes }from "react-router-dom"
import Home from "./pages/Home"
import ApplyJob from "./pages/ApplyJob"
import Applications from "./pages/Applications"
import { UserProfile } from "@clerk/clerk-react";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/apply-job/:id" element={<ApplyJob/>}></Route>
        <Route path="/applications" element={<Applications/>}></Route>
          <Route path="/profile" element={<UserProfile />} />

      </Routes>
    </div>
  )
}
export default App
