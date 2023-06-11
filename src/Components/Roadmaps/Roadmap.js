import React from 'react'
import Navabr from '../Navabr';
import '../Roadmaps/Roadmap.css'
import Footer from '../Footer';

function Roadmap() {
  return (
    <div>
      <Navabr/>

      <h3 id="r-main">Lorem ipsum dolor sit amet</h3>
      <p id="r-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat elit ut quam viverra efficitur. Sed eu sem tristique, vestibulum nunc sed, pharetra libero. 
      Vestibulum sed nisi nec mi lacinia feugiat. Duis at sapien ut sem 
      imperdiet tincidunt. Vestibulum ante ipsum primis in faucibus orci 
      luctus et ultrices posuere cubilia curae; Donec tellus urna, efficitur ac 
      varius at, ullamcorper id nulla. Maecenas ac purus et risus ullamcorper dignissim.</p>


      <h4 id="r-skill">Skill Based</h4>
      <div id="r-hori"></div>
      <div id="r-b1"></div>
      <div id="r-b2"></div>
      <div id="r-b3"></div>
      <div id="r-b4"></div>
      <div id="r-b5"></div>
      <div id="r-a1">
        <div id="r-a1-image"></div>
        <h5 id="r-a1-h"> Lorem ipsum</h5>
        <p id="r-a1-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, accusamus eligendi. Illo neque commodi amet.</p>
        <button id="r-a1-b">Read More</button>
      </div>
      {/* <h4 id="r-role">Role Based</h4>
      <div id="r-hori-2"></div>
      <div id="r-b1-2"></div>
      <div id="r-b2-2"></div>
      <div id="r-b3-2"></div>
      <div id="r-b4-2"></div>
      <div id="r-b5-2"></div>
      <div id="r-a1-2">
        <div id="r-a1-image-2"></div>
        <h5 id="r-a1-h-2"> Lorem ipsum</h5>
        <p id="r-a1-p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, accusamus eligendi. Illo neque commodi amet.</p>
        <button id="r-a1-b-2">Read More</button>
      </div> */}

      {/* <Footer/> */}
      <Footer/>
    </div>
  )
}

export default Roadmap
