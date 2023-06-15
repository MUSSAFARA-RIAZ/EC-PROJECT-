import React from 'react'
import Button from 'react-bootstrap/Button';

export default function Horizontal() {
  const roadmap = (event) => {
    event.stopPropagation();
    window.open('http://localhost:3000/roadmap',"_blank")
  }
  return (
   <>
   <div className='parent-div'>
     <div className='mycards'>
   <div className='horizontalimg'>
    <img src="https://i.ibb.co/wBW9xVT/UIux.jpg" alt="" />

   </div>
   <div className='horizontaltext'>
    <h3>Lorem ipsum</h3>
    <p>Lorem ipsum dolor sit, amet consectetur
      adipisicing elit. Eaque porro dolorum a pariatur! 
      Laborum similique laboriosam, mollitia veniam aspernatur rem. Harum ipsum dolore, perspiciatis nam 
     

    </p>
    <Button variant="primary" style={{position:"relative",left:30}}onClick={roadmap}>View</Button>
   </div>
   </div>
   
   <div className='mycards'>
   <div className='horizontalimg'>
    <img src="https://i.ibb.co/wBW9xVT/UIux.jpg" alt="" />

   </div>
   <div className='horizontaltext'>
   <h3>Lorem ipsum</h3>
    <p>Lorem ipsum dolor sit, amet consectetur
      adipisicing elit. Eaque porro dolorum a pariatur! 
      Laborum similique laboriosam, mollitia veniam aspernatur rem. Harum ipsum dolore, perspiciatis nam 
     

    </p>
    <Button variant="primary" style={{position:"relative",left:30}}onClick={roadmap}>View</Button>
   </div>
   </div>
 
   </div>
   </>
 
  )
}
