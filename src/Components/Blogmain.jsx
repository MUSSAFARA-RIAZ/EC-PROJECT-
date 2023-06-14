import React from 'react'
import './blog.css'
import Blogcategory from './Blogcategory'
import Blogpost from './Blogpost'
import Footer from './Footer'
import Navabr from './Navabr';


export default function Blogmain() {
  return (
    <div className='blogSec'>
      <Navabr/>
     
     <div className='blog-introduction'>
     <h2>People found these helpful!</h2>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat elit ut quam viverra efficitur. Sed eu sem tristique, vestibulum nunc sed, pharetra libero.</p>
      
    </div>
    <Blogcategory/>
    <h1 className='text-animation'>Innovation Unleashed: Exploring the Cutting Edge of Technology</h1>

    <Blogpost/>
    <Footer/>
    
    
     
      
    </div>
  )
}
