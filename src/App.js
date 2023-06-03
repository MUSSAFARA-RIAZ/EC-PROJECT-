import React from 'react'
import Homepage from './Components/Homepage';

import Navabr from './Components/Navabr';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



import Blogmain from './Components/Blogmain';

export default function App() {
  return (
    <div>
      <Router>
        <Navabr />

        <Routes>
          <Route path="/" exact element={<Homepage/>} />
          <Route path="/blog" exact element={<Blogmain/>} />
        
        </Routes>
      </Router>
      
    </div>
  )
}
