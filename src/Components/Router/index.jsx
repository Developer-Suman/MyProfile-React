import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Contact from '../../Pages/Contact';
import Abilities from '../../Pages/Abilities';
import Project from '../../Pages/Project';

export default function AppRoutes() {
  return (
    <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='about/' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='abilities' element={<Abilities/>}/>
        <Route path='project' element={<Project/>}/>

       
    </Routes>
  )
}
