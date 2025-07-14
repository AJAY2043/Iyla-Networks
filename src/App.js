import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage'
import AboutUs from './Pages/AboutUs/AboutUs'
import ServicesPage from './Pages/ServicesPage/ServicesPage'
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage'
import OurTeam from './Pages/OurTeam/OurTeam'
import ContactUs from './Pages/ContactUs/ContactUs'



const App = () => {
  return (
    <div className='one'>
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/ourteam' element={<OurTeam/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App