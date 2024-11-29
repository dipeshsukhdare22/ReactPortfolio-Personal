import React from 'react'
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Services from './Pages/Services';
import Work from './Pages/Work';
import Contact from './Pages/Contact';

import "./App.css";
import { Routes , Route} from 'react-router-dom';

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App