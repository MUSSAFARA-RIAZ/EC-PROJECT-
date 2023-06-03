import React, { useState } from 'react';
import img5 from '../Components/Images/img5.jpg'
import img6 from '../Components/Images/img6.jpg'
import img9 from '../Components/Images/img9.jpg'
import img2 from '../Components/Images/img2.jpg'


const Blogcategory = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const blogPosts = [
    { id: 1, title: 'Robotics AI', img:img5, category: 'AI', content: ' Artificial intelligence (AI) is a field of computer science focused on creating intelligent machines that can perform tasks requiring human-like intelligence. It involves algorithms, machine learning, and problem-solving to revolutionize technology across industries such as healthcare, finance, and transportation.' },
    { id: 2, title: 'Data Science', img:img2, category: 'Data Science', content: 'Data science is a multidisciplinary field that combines statistical analysis, machine learning, and domain knowledge to extract insights and make informed decisions from large volumes of data. It involves data cleaning, modeling, and interpretation to solve complex problems and drive business value.' },
    { id: 3, title: 'BlockChain', img:img6 ,category: 'BlockChain', content: 'Blockchain is a decentralized and transparent technology that securely records and verifies transactions across multiple computers. It eliminates the need for intermediaries, providing a tamper-proof and immutable ledger. It has applications in finance, supply chain management, and more.' },
    { id: 4, title: 'Ethical Hacking', img:img9, category: 'Ethical Hacking', content: 'Ethical hacking, also known as penetration testing or white-hat hacking, is a legal and authorized practice of intentionally identifying vulnerabilities in computer systems, networks, or applications. It helps organizations strengthen their security measures by identifying and fixing potential weaknesses before malicious hackers exploit them.' },
   
  ];

  const filteredPosts = selectedCategory === 'all' ? blogPosts : blogPosts.filter(post => post.category === selectedCategory);

  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <div>
      <nav className='nested-navbar'>
        <ul className='item-nav'>
          <li>
            <button
            style={{backgroundColor:"lightslategray",padding:10,margin:5,borderRadius:10}}
              className={selectedCategory === 'all' ? 'active' : ''}
              onClick={() => handleCategoryChange('all')}
            >
              All Categories
            </button>
          </li>
          {categories.map(category => (
            <li key={category}>
              <button id='btn-cat'
                style={{backgroundColor:"lightseagreen",padding:10,margin:5,borderRadius:10}}            
              
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>

     

      <div className='category-post-blog'>
        {filteredPosts.map((post) => (
          <div key={post.id} className='blog-cat'>
           <img className='blog-img' src={post.img}/>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Category: {post.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogcategory;
