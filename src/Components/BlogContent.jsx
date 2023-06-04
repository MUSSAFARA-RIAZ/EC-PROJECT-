import React from 'react'
import { useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import './blog.css'

export default function BlogContent() {
  const {id}=useParams();
 console.log(id);
 const getdata=useSelector((state)=>state.blogs);
 console.log(getdata);


  return (
    <div>
    {

      getdata.length===0 ? "mussfara":(
        <div className='blog_details_one'>
    
        {
            getdata.map((element,id)=>{
             return(
             <>
            <div className='blogcontent-page'>
             <b style={{textAlign:'center', fontFamily:'Poppins',marginBottom:10,fontSize:25}}>{element.date}</b>
             <h2 className='blog-h'>{element.blogtitle}</h2>
             <img src={element.imgs}/>
             
            <p className='quote'><q>{element.quote}</q></p> 
          
             
             <p className='content'>{element.detail_content}  </p>
            <h1 className='blog-h'>{element.con}</h1>
            
             <p>{element.conclusion}</p>
             
             
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