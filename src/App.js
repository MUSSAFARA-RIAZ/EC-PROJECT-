import React from 'react'
import Homepage from './Components/Homepage';

// import Navabr from './Components/Navabr';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Signup from '../src/Components/Signup/Signup'
import Login from '../src/Components/Login/Login'
import Blogmain from './Components/Blogmain';
import BlogContent from './Components/BlogContent';
import Roadmap from './Components/Roadmaps/Roadmap';
import Tutorials from './Components/Gallery/VideoGallery'

export default function App() {
  return (
    <div>
      <Router>
        {/* <Navabr /> */}

        <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
          <Route path="/home" exact element={<Homepage/>} />
          <Route path="/tutorial" exact element={<Tutorials/>} />
          <Route path="/blog" exact element={<Blogmain/>} />
          <Route path="/BlogContent" element={<BlogContent/>}></Route>
          <Route path="/roadmap" element={<Roadmap/>}></Route>

        </Routes>
      </Router>
      
    </div>
  )
}
