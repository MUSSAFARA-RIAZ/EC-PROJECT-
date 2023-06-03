import React from 'react'

import Imagesection from './Imagesection'
import Imagesection2 from './Imagesection2'
import Cards from './Cards'

import Journey from './Journey'

import Horizontal from './Horizontal'
import Geeks from './Geeks'
import Codelove from './Codelove'
import Footer from './Footer'


export default function Homepage() {
  return (
    <div className='homepage'>
     
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
