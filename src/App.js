import React from 'react'
import Homepage from './Components/Homepage';

import Navabr from './Components/Navabr';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



import Blogmain from './Components/Blogmain';
import BlogContent from './Components/BlogContent';

export default function App() {
  return (
    <div>
      <Router>
        <Navabr />

        <Routes>
          <Route path="/" exact element={<Homepage/>} />
          <Route path="/blog" exact element={<Blogmain/>} />
          <Route path="/BlogContent" element={<BlogContent/>}></Route>
        </Routes>
      </Router>
      
    </div>
  )
}
