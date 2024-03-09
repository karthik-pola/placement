import { Route ,Routes } from "react-router-dom"
import Home from "../pages/home/Home"
import About from "../pages/About/About"
import Login from "../pages/Login/Login"
import Contact from "../pages/Contact/Contact"


const LandingpageRoute = () => {
  return (
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="login" element={<Login />}></Route>
    </Routes>
  )
}

export default LandingpageRoute
