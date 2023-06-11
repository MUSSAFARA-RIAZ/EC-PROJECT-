import React, { useState } from "react";
import "./VideoGallery.css";
import VideoContent from "./Gallery/VideoContent.js";
import Navbar from '../Navabr.jsx';
import Footer from '../Footer.jsx';

function VideoGallery() {
  const [Items, setItems] = useState(VideoContent);

  const filteritem = (category) => {
    const updatedItems = VideoContent.filter((currrentElement)=>{
      return currrentElement.category === category;
    });
    setItems(updatedItems);
  }


  return (
    <>
    <Navbar/>
      <h1>Let's start Learning Now!</h1>
      <div className="container">
        <div className="buttonTab">
          <button onClick={() => setItems(VideoContent)}>All</button>
          <button onClick={() => filteritem('Cpp')}>C++</button>
          <button onClick={() => filteritem('Artificial Intelligence')}>Artificial Intelligence</button>
          <button onClick={() => filteritem('Data Science')}>Data Science</button>
          <button onClick={() => filteritem('Android')}>Android</button>
          <button onClick={() => filteritem('Ethical Hacking')}>Ethical Hacking</button>
          <button onClick={() => filteritem('Website Design')}>Website Design</button>
          <button onClick={() => filteritem('Website Dev')}>Website Development</button>
        </div>
        <div className="videoGallery">
          {Items.map((element) => {
            const { id, image, title, description, category } = element;

            return (
              <div className="videoCard" key={id}>
                <div>
                  <img src={image} alt="video-img" className="videoImg" />
                </div>
                <div className="videoDetails">
                  <h3 className="videoTitle">{title}</h3>
                  <p className="videoDescp">{description}</p>
                  <p className="videoCategory">{category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default VideoGallery;
