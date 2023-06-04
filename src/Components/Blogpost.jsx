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
// import BlogData from './BlogData';


const Blogpost = () => {
  const [data,setData]=useState();
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
  //   { id: 1, title: 'Front-end development', content: 'This is the content of Blog Post 1.' ,class:"btn btn-primary" , img:img1},
  //   { id: 2, title: 'Data Science', content: 'This is the content of Blog Post 2.' ,class:"btn btn-danger",img:img2 },
  //   { id: 3, title: 'Full Stack development', content: 'This is the content of Blog Post 3.', class:"btn btn-info",img:img3 },
  //   { id: 4, title: 'Artificial Intelligence', content: 'This is the content of Blog Post 4.' , class:"btn btn-warning" , img:img4 },
  //   { id: 5, title: 'Open AI', content: 'This is the content of Blog Post 5.' , class:"btn btn-success" , img:img5 },
  //   { id: 6, title: 'Block Chain', content: 'This is the content of Blog Post 6.' , class:"btn btn-primary" ,img:img6 },
  //   { id: 7, title: 'ChatGpt', content: 'This is the content of Blog Post 7.' , class:"btn btn-info" , img:img5},
  //   { id: 8, title: 'Python and AI', content: 'This is the content of Blog Post 5.' , class:"btn btn-danger" , img:img7 },
  //   { id: 9, title: 'Machine learning Algorithm', content: 'This is the content of Blog Post 5.' , class:"btn btn-success" ,img:img8 },
  // ];



 { id: 1, date:'22-October-2020', quote:"The front end is the face of a digital masterpiece, where creativity meets functionality. It's the art of weaving captivating designs and seamless interactions to leave a lasting impression on every user's journey", blogtitle:
  "Unleashing the Power of User Experience: Dive into the World of Front-End Development and Craft Seamless Digital Experiences" ,title: 'Front-end development', content: 'This is the content of Blog Post 1.' , detail_content:
 " Front-end Development Blog is a comprehensive platform that caters to front-end developers, offering a wealth of valuable insights, tutorials, and resources. It covers various aspects of front-end development, including HTML, CSS, JavaScript, frameworks, responsive design, and user experience. With a focus on industry trends, best practices, and emerging technologies, the blog empowers developers to enhance their skills, stay up-to-date with the latest tools and techniques, and tackle real-world challenges. From beginner-friendly guides to advanced tutorials, the Front-end Development Blog serves as a go-to resource for front-end developers seeking inspiration, knowledge, and community within the rapidly evolving web development landscape." ,class:"btn btn-primary" , imgs:img1, con:"Conclusion", conclusion:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo tristique ante, et scelerisque sem commodo vitae. Ut ullamcorper arcu eros, eu rutrum magna consequat at. Quisque vel eleifend lectus. Morbi sed massa a nulla venenatis gravida. Integer cursus fringilla sem, vel semper ex aliquam at. Nulla facilisi. Sed bibendum posuere lectus, id dictum ipsum hendrerit nec. Sed nec felis id mi gravida posuere in vitae arcu. Sed varius volutpat turpis, eget cursus elit. Nunc cursus ipsum eu mi congue fringilla. Quisque facilisis, odio et tincidunt sagittis, nulla justo fringilla velit, id pulvinar metus velit vitae mauris."},
   { id: 2, quote:
    "  Data science is the compass that guides us through the vast sea of information. It uncovers hidden patterns, unlocks valuable insights, and empowers us to make data-driven decisions that shape our world. - Unknown" , date:'23-October-2020',  blogtitle:"Unraveling the Data Universe: Exploring the Marvels of Data Science and its Impact on the Modern World",  title: 'Data Science', content: 'This is the content of Blog Post 2.' ,class:"btn btn-danger",imgs:img2, detail_content:"The Data Science Blog is a dedicated platform that caters to data scientists, offering a wealth of valuable insights, tutorials, and resources. It covers various aspects of data science, including machine learning, statistical analysis, data visualization, and big data. The blog delves into topics such as predictive modeling, data preprocessing, feature engineering, and model evaluation. It also explores emerging trends like deep learning, natural language processing, and AI ethics. With a focus on practical applications and real-world case studies, the Data Science Blog equips data scientists with the knowledge and tools to tackle complex data problems, make informed decisions, and extract valuable insights from data.", con:"Conclusion", conclusion:" <b>CONCLUSION</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo tristique ante, et scelerisque sem commodo vitae. Ut ullamcorper arcu eros, eu rutrum magna consequat at. Quisque vel eleifend lectus. Morbi sed massa a nulla venenatis gravida. Integer cursus fringilla sem, vel semper ex aliquam at. Nulla facilisi. Sed bibendum posuere lectus, id dictum ipsum hendrerit nec. Sed nec felis id mi gravida posuere in vitae arcu. Sed varius volutpat turpis, eget cursus elit. Nunc cursus ipsum eu mi congue fringilla. Quisque facilisis, odio et tincidunt sagittis, nulla justo fringilla velit, id pulvinar metus velit vitae mauris." },
   { id: 3, blogtitle:"Mastering the Digital Landscape: Journey into the World of Full Stack Development and Unleash Your Web Development Superpowers" ,quote:"Full stack development is the art of mastering every layer of the technology stack. It's about seamlessly connecting the dots between front end and back end, bridging the gap between user experience and server logic, and crafting comprehensive solutions that empower innovation.", date:'26-October-2020', title: 'Full Stack development', content: 'This is the content of Blog Post 3.', class:"btn btn-info",imgs:img3 , detail_content:"Full stack development combines the power of front-end and back-end technologies, making it a versatile and sought-after skillset in the web development industry. In our blog, we explore the world of full stack development, delving into the essential tools, frameworks, and languages needed to master this role. From HTML, CSS, and JavaScript on the front-end to server-side languages like Python, Ruby, or Node.js on the back-end, we provide valuable insights and practical tips for becoming a proficient full stack developer. Join us as we uncover the secrets behind building dynamic, responsive, and feature-rich web applications from end to end." , con:"Conclusion",conclusion:" <b>CONCLUSION</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo tristique ante, et scelerisque sem commodo vitae. Ut ullamcorper arcu eros, eu rutrum magna consequat at. Quisque vel eleifend lectus. Morbi sed massa a nulla venenatis gravida. Integer cursus fringilla sem, vel semper ex aliquam at. Nulla facilisi. Sed bibendum posuere lectus, id dictum ipsum hendrerit nec. Sed nec felis id mi gravida posuere in vitae arcu. Sed varius volutpat turpis, eget cursus elit. Nunc cursus ipsum eu mi congue fringilla. Quisque facilisis, odio et tincidunt sagittis, nulla justo fringilla velit, id pulvinar metus velit vitae mauris." },
   { id: 4, blogtitle:"Awakening Intelligence: Exploring the Wonders of Artificial Intelligence and its Transformative Impact on Our Society" ,quote:"Artificial intelligence is the spark of human ingenuity, a testament to our quest for creating intelligent machines. It holds the potential to unlock new frontiers of knowledge, redefine possibilities, and shape the future of our civilization" , date:'29-Nov-2022', title: 'Artificial Intelligence', content: 'This is the content of Blog Post 4.' , class:"btn btn-warning" , imgs:img4 , detail_content:"Welcome to our AI Insights blog, where we embark on a journey into the fascinating world of Artificial Intelligence (AI). Our blog dives deep into the latest advancements, breakthroughs, and applications of AI technology across various domains. From machine learning and neural networks to computer vision and natural language processing, we unravel the complexities of AI in a comprehensive yet accessible manner. Stay updated with the cutting-edge research, industry trends, and real-world AI implementations that are reshaping our lives. Discover practical guides, case studies, and tutorials that empower you to harness the power of AI in your projects. Join us as we explore the frontiers of AI and unlock the potential of this transformative technology." , con:"Conclusion",conclusion:" <b>CONCLUSION</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo tristique ante, et scelerisque sem commodo vitae. Ut ullamcorper arcu eros, eu rutrum magna consequat at. Quisque vel eleifend lectus. Morbi sed massa a nulla venenatis gravida. Integer cursus fringilla sem, vel semper ex aliquam at. Nulla facilisi. Sed bibendum posuere lectus, id dictum ipsum hendrerit nec. Sed nec felis id mi gravida posuere in vitae arcu. Sed varius volutpat turpis, eget cursus elit. Nunc cursus ipsum eu mi congue fringilla. Quisque facilisis, odio et tincidunt sagittis, nulla justo fringilla velit, id pulvinar metus velit vitae mauris." },
   { id: 5, blogtitle:"Unleashing the Potential: Exploring the Limitless Possibilities of OpenAI and the Future of Artificial Intelligence" ,date:'2-Nov-2022', quote:"OpenAI represents the dawn of a new era in artificial intelligence. It embodies the spirit of collaboration, innovation, and democratization, empowering humanity with cutting-edge AI technologies and driving us towards a future where intelligence knows no bounds", title: 'Open AI', content: 'This is the content of Blog Post 5.' , class:"btn btn-success" , imgs:img5 , detail_content:"In our blog, we delve into the dynamic realm of OpenAI, a leading organization at the forefront of artificial intelligence research and development. Discover the groundbreaking technologies and innovations emerging from OpenAI's labs, including powerful language models like GPT-3. Explore the potential applications of OpenAI's models in areas such as natural language processing, conversational AI, and creative content generation. Learn about the ethical considerations surrounding AI and OpenAI's commitment to responsible AI development. Stay updated on the latest advancements, collaborations, and research initiatives that are shaping the future of AI and transforming the way we interact with technology.", con:"Conclusion",conclusion:" <b>CONCLUSION</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo tristique ante, et scelerisque sem commodo vitae. Ut ullamcorper arcu eros, eu rutrum magna consequat at. Quisque vel eleifend lectus. Morbi sed massa a nulla venenatis gravida. Integer cursus fringilla sem, vel semper ex aliquam at. Nulla facilisi. Sed bibendum posuere lectus, id dictum ipsum hendrerit nec. Sed nec felis id mi gravida posuere in vitae arcu. Sed varius volutpat turpis, eget cursus elit. Nunc cursus ipsum eu mi congue fringilla. Quisque facilisis, odio et tincidunt sagittis, nulla justo fringilla velit, id pulvinar metus velit vitae mauris." },
   { id: 6, blogtitle:"The Blockchain Revolution: Unraveling the Power of Decentralization and Its Impact on Industries Worldwide" ,date:'5-Nov-2022', title: 'Block Chain', content: 'This is the content of Blog Post 6.' , class:"btn btn-primary" ,imgs:img6 , quote:"Blockchain is the cornerstone of trust in the digital age, where transparency meets security. It has the power to revolutionize industries, redefine how we exchange value, and create a world where decentralized networks pave the way for a more inclusive and equitable future." , class:"btn btn-primary" ,detail_content:"Welcome to our blog on blockchain, the transformative technology revolutionizing various industries. Join us as we unravel the intricacies of blockchain, a distributed ledger system that ensures transparency, security, and immutability of digital transactions. Delve into the fundamental concepts of blockchain, including decentralized networks, consensus mechanisms, and smart contracts. Discover real-world use cases across finance, supply chain management, healthcare, and more, showcasing how blockchain is reshaping traditional processes and fostering trust in peer-to-peer interactions. Stay updated on the latest advancements, regulatory developments, and future trends in the fascinating world of blockchain, where innovation meets transparency and security.", con:"Conclusion",conclusion:" <b>CONCLUSION</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo tristique ante, et scelerisque sem commodo vitae. Ut ullamcorper arcu eros, eu rutrum magna consequat at. Quisque vel eleifend lectus. Morbi sed massa a nulla venenatis gravida. Integer cursus fringilla sem, vel semper ex aliquam at. Nulla facilisi. Sed bibendum posuere lectus, id dictum ipsum hendrerit nec. Sed nec felis id mi gravida posuere in vitae arcu. Sed varius volutpat turpis, eget cursus elit. Nunc cursus ipsum eu mi congue fringilla. Quisque facilisis, odio et tincidunt sagittis, nulla justo fringilla velit, id pulvinar metus velit vitae mauris." },
   { id: 7, blogtitle:"The Conversational Revolution: Unveiling the Power of ChatGPT and Its Role in Shaping the Future of Human-Machine Interactions" ,date:'9-Nov-2022', title: 'ChatGpt', content: 'This is the content of Blog Post 7.' ,  quote:"ChatGPT is the epitome of language prowess, a virtual companion fueled by the power of AI. It engages, enlightens, and expands our understanding, pushing the boundaries of human-machine interaction and shaping the way we communicate in the digital realm" , class:"btn btn-info" , con:"Conclusion", imgs:img5 , detail_content:"Welcome to our blog dedicated to ChatGPT, a groundbreaking conversational AI model that is revolutionizing how we interact with machines. Dive into the world of natural language processing as we explore the capabilities and applications of ChatGPT. Discover how ChatGPT leverages advanced deep learning techniques to engage in human-like conversations, provide insightful responses, and offer personalized assistance. From customer support to virtual assistants, ChatGPT is transforming the way businesses and individuals communicate. Stay informed about the latest updates, advancements, and best practices in utilizing ChatGPT to unlock new possibilities in conversational AI. Join us on this exciting journey as we redefine conversations with the power of ChatGPT.",conclusion:" <b>CONCLUSION</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo tristique ante, et scelerisque sem commodo vitae. Ut ullamcorper arcu eros, eu rutrum magna consequat at. Quisque vel eleifend lectus. Morbi sed massa a nulla venenatis gravida. Integer cursus fringilla sem, vel semper ex aliquam at. Nulla facilisi. Sed bibendum posuere lectus, id dictum ipsum hendrerit nec. Sed nec felis id mi gravida posuere in vitae arcu. Sed varius volutpat turpis, eget cursus elit. Nunc cursus ipsum eu mi congue fringilla. Quisque facilisis, odio et tincidunt sagittis, nulla justo fringilla velit, id pulvinar metus velit vitae mauris." },
   { id: 8, blogtitle:"Python: The AI Wizard's Language of Choice for Unleashing the Power of Artificial Intelligence" ,date:'2-Nov-2022', title: 'Python and AI', quote: "Python is the enchanted wand that brings AI to life, a language designed to empower our quest for intelligent machines. With its simplicity, versatility, and vast ecosystem, Python fuels the realm of AI, opening doors to innovation and transforming the way we interact with technology.",con:"Conclusion"
   ,content: 'This is the content of Blog Post 5.' , class:"btn btn-danger" , imgs:img7 , detail_content:"Welcome to our blog where we explore the powerful combination of Python and Artificial Intelligence (AI). Python has become the go-to programming language for AI development, offering a rich ecosystem of libraries and frameworks. Join us as we delve into the realm of AI with Python, covering topics such as machine learning, deep learning, and data analysis. Discover how Python enables the implementation of complex AI algorithms and models, making it accessible to developers of all levels. Stay updated with the latest advancements, tutorials, and best practices in leveraging Python to create intelligent solutions. Unleash the potential of Python in the AI domain and embark on a journey of innovation and intelligence.",conclusion:" <b>CONCLUSION</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo tristique ante, et scelerisque sem commodo vitae. Ut ullamcorper arcu eros, eu rutrum magna consequat at. Quisque vel eleifend lectus. Morbi sed massa a nulla venenatis gravida. Integer cursus fringilla sem, vel semper ex aliquam at. Nulla facilisi. Sed bibendum posuere lectus, id dictum ipsum hendrerit nec. Sed nec felis id mi gravida posuere in vitae arcu. Sed varius volutpat turpis, eget cursus elit. Nunc cursus ipsum eu mi congue fringilla. Quisque facilisis, odio et tincidunt sagittis, nulla justo fringilla velit, id pulvinar metus velit vitae mauris." },
   { id: 9, blogtitle:"Decoding the Algorithmic Mysteries: Exploring the Magic of Machine Learning Algorithms and their Role in Unleashing the Power of Data" ,date:'1-Jan-2019', title: 'Machine learning Algorithm', content: 'This is the content of Blog Post 5.' , con:"Conclusion", class:"btn btn-success" ,imgs:img8 , quote:
   "Machine learning algorithms are the silent architects of intelligence, the engines that drive the transformation of data into knowledge. They unlock patterns, unveil insights, and empower us to unravel the mysteries hidden within the vast realm of information." , detail_content:"Welcome to our blog where we demystify the world of machine learning algorithms, the driving force behind intelligent systems. Explore the diverse landscape of algorithms, from classic models like linear regression and decision trees to cutting-edge techniques such as deep learning and reinforcement learning. Gain insights into the inner workings of these algorithms, their strengths, limitations, and real-world applications. Stay updated with the latest advancements, algorithm comparisons, and practical implementation tips. Whether you're a beginner or an experienced practitioner, our blog equips you with the knowledge and understanding to harness the power of machine learning algorithms and create intelligent solutions that shape the future", con:"Conclusion",conclusion:" <b>CONCLUSION</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo tristique ante, et scelerisque sem commodo vitae. Ut ullamcorper arcu eros, eu rutrum magna consequat at. Quisque vel eleifend lectus. Morbi sed massa a nulla venenatis gravida. Integer cursus fringilla sem, vel semper ex aliquam at. Nulla facilisi. Sed bibendum posuere lectus, id dictum ipsum hendrerit nec. Sed nec felis id mi gravida posuere in vitae arcu. Sed varius volutpat turpis, eget cursus elit. Nunc cursus ipsum eu mi congue fringilla. Quisque facilisis, odio et tincidunt sagittis, nulla justo fringilla velit, id pulvinar metus velit vitae mauris." },

]




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
           <img className='blog-img' src={post.imgs}/>
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
