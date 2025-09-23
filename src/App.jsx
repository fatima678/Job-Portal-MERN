
import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ApplyJob from "./pages/ApplyJob"
import Applications from "./pages/Applications"
import { UserProfile } from "@clerk/clerk-react";
import { useContext } from "react"
import { AppContext } from "./context/AppContext"
import RecruiterLogin from "./components/RecruiterLogin"
import Dashboard from "./pages/Dashboard"
import AddJob from "./pages/AddJob"
import ManageJobs from "./pages/ManageJobs"
import ViewApplications from "./pages/ViewApplications"
function App() {
  const { showRecruiterLogin } = useContext(AppContext);
  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/apply-job/:id" element={<ApplyJob />}></Route>
        <Route path="/applications" element={<Applications />}></Route>
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="add-job" element={<AddJob />} />
          <Route path="view-applications" element={<ViewApplications />} />
          <Route path="manage-jobs" element={<ManageJobs />} />

        </Route>
      </Routes>
    </div>
  )
}
export default App
