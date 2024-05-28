import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import ServicesPage from "./pages/Services"
import ContactPage from "./pages/Contacts"
import Navbar from "./components/Navbar"

const  App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/aboutus" element={<AboutPage />}/>
        <Route path="/services" element={<ServicesPage />}/>
        <Route path="/contactus" element={<ContactPage />}/>
      </Routes>
    </>
    
  )
}

export default App
