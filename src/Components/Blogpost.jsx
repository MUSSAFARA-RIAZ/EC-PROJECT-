import React, { useState } from 'react';
import './blog.css'
import img1 from '../Components/Images/img1.jpg'
import img2 from '../Components/Images/img2.jpg'
import img3 from '../Components/Images/img3.png'
import img5 from '../Components/Images/img5.jpg'
import img6 from '../Components/Images/img6.jpg'
import img7 from '../Components/Images/img7.jpg'
import img8 from '../Components/Images/img8.jpg'
import img4 from '../Components/Images/img4.jpg'

import { NavLink, useParams } from 'react-router-dom';
import {ADD} from '../Components/redux/action/action';

import { useDispatch } from 'react-redux';
import BlogData from './BlogData';


const Blogpost = () => {
  const [data,setData]=useState(BlogData);
  const dispatch=useDispatch();
  const send=(e)=>{
   dispatch(ADD(e));
 
 
 
  }
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  // Simulated blog data
  const blogPosts = [
    { id: 1, title: 'Front-end development', content: 'This is the content of Blog Post 1.' ,class:"btn btn-primary" , img:img1},
    { id: 2, title: 'Data Science', content: 'This is the content of Blog Post 2.' ,class:"btn btn-danger",img:img2 },
    { id: 3, title: 'Full Stack development', content: 'This is the content of Blog Post 3.', class:"btn btn-info",img:img3 },
    { id: 4, title: 'Artificial Intelligence', content: 'This is the content of Blog Post 4.' , class:"btn btn-warning" , img:img4 },
    { id: 5, title: 'Open AI', content: 'This is the content of Blog Post 5.' , class:"btn btn-success" , img:img5 },
    { id: 6, title: 'Block Chain', content: 'This is the content of Blog Post 6.' , class:"btn btn-primary" ,img:img6 },
    { id: 7, title: 'ChatGpt', content: 'This is the content of Blog Post 7.' , class:"btn btn-info" , img:img5},
    { id: 8, title: 'Python and AI', content: 'This is the content of Blog Post 5.' , class:"btn btn-danger" , img:img7 },
    { id: 9, title: 'Machine learning Algorithm', content: 'This is the content of Blog Post 5.' , class:"btn btn-success" ,img:img8 },
  ];

  // Number of blog posts to display per page
  const postsPerPage = 3;

  // Calculate the start and end index of the current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  // Get the blog posts for the current page
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  return (
    <div>
      

      

      <div className='blog-class'>
        {currentPosts.map((post) => (
          <div key={post.id} className='blog-card'>
           <img className='blog-img' src={post.img}/>
            <h2 className='blog-title'>{post.title}</h2>
            <p className='blog-content'>{post.content}</p>
            <div >
            <NavLink to={`/BlogContent`}> <button onClick={()=>send(post)} className={post.class}> 
           
            Show More</button> </NavLink>
            </div>
          </div>
        ))}
      </div>

      <div className='blog-display-btn'>
        <button className='previous-btn' onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <button className='next-btn' onClick={handleNextPage} disabled={endIndex >= blogPosts.length}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Blogpost;
