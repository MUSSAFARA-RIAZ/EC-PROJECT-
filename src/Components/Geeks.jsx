import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Geeks() {
  const blogs = (event) => {
    event.stopPropagation();
    window.open('http://localhost:3000/blog',"_blank")
  }
  return (
    <div className='geekdiv'>
      <h1 className='geekhead'>Geek Out with Us</h1>
      <p className='geektext'>Our Blogs Section Is Your Ticket to Programming Paradise!</p>
      <br/>
      <p className='geektext'>Welcome to our blog section, where you'll find a treasure trove of coding tutorials designed to enhance your programming skills. Whether you're a beginner dipping your toes into the vast sea of coding or an experienced developer seeking new insights, we have something for everyone.
      Our blog covers a wide range of programming languages, frameworks, and tools, ensuring there's always something to pique your interest. From Python to JavaScript, from web development to machine learning, our tutorials delve into various aspects of coding to help you level up your proficiency</p>
      <Button variant="primary" style={{position:"relative",left:100}}onClick={blogs}>View Blogs</Button>
    </div>
  )
}
