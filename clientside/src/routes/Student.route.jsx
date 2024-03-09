import { Route ,Routes } from "react-router-dom"



import React from 'react'
import StudentHome from "../Student/Pages/Home/StudentHome.jsx"
import Alerts from "../Student/Pages/Alerts/Alerts.jsx"
import Drives from "../Student/Pages/Drives/Drives.jsx"
import Help from "../Student/Pages/Help/Help.jsx"
import Profile from "../Student/Pages/Profile/Profile.jsx"
import Quizzes from "../Student/Pages/Quizzes/Quizzes.jsx"
import Resources from "../Student/Pages/Resources/Resources.jsx"
import LandingPageHome from "../pages/home/landingPageHome.jsx"
import StudentDashboard from "../Student/Components/StudentDashboard.jsx"




const StudentRoute = () => {
  return (
    <StudentDashboard>
      <Routes>
          <Route path="/u1/" element={<StudentHome  />}></Route>
          <Route path="/u1/alerts" element={<Alerts  />}></Route>
          <Route path="/u1/drives" element={<Drives />}></Route>
          <Route path="/u1/help" element={<Help />}></Route>
          <Route path="/u1/profile" element={<Profile />}></Route>
          <Route path="/u1/quizzes" element={<Quizzes />}></Route>
          <Route path="/u1/resources" element={<Resources />}></Route>
      </Routes>
      </StudentDashboard>
  )
}

export default StudentRoute

