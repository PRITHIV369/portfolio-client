import React from 'react'
import Projects from './pages/Projects'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Weblayouts from './layouts/Weblayouts'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Weblayouts/>}>
      <Route path="/" element={<Profile/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App