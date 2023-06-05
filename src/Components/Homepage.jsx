import React from 'react'

import Imagesection from './Imagesection'
import Imagesection2 from './Imagesection2'
import Cards from './Cards'

import Journey from './Journey'

import Horizontal from './Horizontal'
import Geeks from './Geeks'
import Codelove from './Codelove'
import Footer from './Footer'
import Navabr from './Navabr';


export default function Homepage() {
  return (
    <div className='homepage'>
     <Navabr/>
     <Imagesection/>
     <Imagesection2/>
     <Journey/>
     <div className='vertical_horizontalclass'>
     <Cards/>
     <Horizontal/>
     </div>
     <Geeks/>
     <Codelove/>
     <Footer/>
     
    
    </div>
  )
}
