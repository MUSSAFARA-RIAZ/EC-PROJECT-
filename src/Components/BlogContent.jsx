import React from 'react'


import { useParams} from 'react-router-dom';


import {useSelector} from 'react-redux';

export default function BlogContent() {
 
 const {id}=useParams();
 console.log(id);
 const getdata=useSelector((state)=>state.blogs);
 console.log(getdata);


  return (
    <div>
    {

      getdata.length===0 ? "mussfara":(
        <div className='animal_details_one'>
    
        {
            getdata.map((element,id)=>{
             return(
             <>
            <div>
             <h1>{element.title}</h1>
             <p>{element.text}</p>
            </div>
           
             </>
             )
            })
           } 
           </div>

      )

    }
   
      
   </div>
  )
}