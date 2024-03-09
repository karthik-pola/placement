import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LandinngPageOne } from './pages/LandinngPageOne.jsx'
import { ExampleNavbarOne } from './components/ExampleNavbarOne.jsx'
import { FooterThree } from './components/FooterThree.jsx'
import LandingpageRoute from './routes/LandingPage.route.jsx'
import Home from './pages/home/Home.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Login from './pages/Login/Login.jsx'
import { Route, Routes } from 'react-router-dom'
import StudentRoute from './routes/Student.route.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <LandinngPageOne /> */}
      {/* <ExampleNavbarOne />
      <LandingPageHome />
      <FooterThree /> */}
      <LandingpageRoute />
      <StudentRoute />
    </>
  )
}

export default App
