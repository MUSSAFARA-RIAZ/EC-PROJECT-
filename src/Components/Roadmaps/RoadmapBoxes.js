import React from 'react'
import '../Roadmaps/Roadmap.css'
import front from '../../Components/Images/frontend.jpg'
import back from '../../Components/Images/backend.jpg'
import data from '../../Components/Images/datascience.jpg'
import ui from '../../Components/Images/uidesigner.jpg'
import dev from '../../Components/Images/devops.jpg'
import machine from '../../Components/Images/machine.jpg'
function RoadmapBoxes() {
  return (
    <div className="r-container">
    <div className="r-row">
     <div className="r-content">
      <div className="r-card">
        <img src={front} alt="" />
        <h4>Front End Developer</h4>
        <ul>
        <li>&gt; HTML and CSS</li>
          <li>&gt; Responsive Web Design</li>
          <li>&gt; JavaScript</li>
          <li>&gt; DOM Manipulation</li>
          <li>&gt; Version Control</li>
          <li>&gt; Front-End Frameworks and Libraries</li>
          <li>&gt; CSS Preprocessors</li>
          <li>&gt; Browser Developer Tools</li>
          <li>&gt; Responsive Frameworks</li>
          <li>&gt; Cross-Browser Compatibility</li>
        </ul>
      </div>


      <div className="r-card">
        <img src={back} alt="" />
        <h4>Back End Developer</h4>
        <ul>
        <li>&gt; Learn a Programming Language</li>
          <li>&gt; Databases and SQL</li>
          <li>&gt; Web Development Framework</li>
          <li>&gt; Server-Side Development Concepts</li>
          <li>&gt; Authentication and Authorization</li>
          <li>&gt; API Development</li>
          <li>&gt; Web Servers</li>
          <li>&gt; Testing and Debugging</li>
          <li>&gt; Security Best Practices</li>
          <li>&gt; Deployment and DevOps</li>
        </ul>
      </div>


      <div className="r-card">
        <img src={data} alt="" />
        <h4>Data Scientist</h4>
        <ul>
        <li>&gt; Statistics and Probability</li>
          <li>&gt; Programming</li>
          <li>&gt; Machine Learning Algorithms</li>
          <li>&gt; Data Wrangling and Cleaning</li>
          <li>&gt; Data Visualization</li>
          <li>&gt; Feature Engineering</li>
          <li>&gt; Model Evaluation and Validation</li>
          <li>&gt; Big Data Processing</li>
          <li>&gt; Deep Learning</li>
          <li>&gt; Business Understanding and Communication</li>
        </ul>
      </div>


      <div className="r-card">
        <img src={ui} alt="" />
        <h4>UI/UX Designer</h4>
        <ul>
        <li>&gt; User Research</li>
          <li>&gt; Wireframing and Prototyping</li>
          <li>&gt; Information Architecture</li>
          <li>&gt; Visual Design</li>
          <li>&gt; Interaction Design</li>
          <li>&gt; User Interface (UI) Design</li>
          <li>&gt; Usability Testing</li>
          <li>&gt; Responsive and Mobile Design</li>
          <li>&gt; Collaboration and Communication</li>
          <li>&gt; Continuous Learning and Keeping Up with Trends</li>
        </ul>
      </div>

      <div className="r-card">
        <img src={dev} alt="" />
        <h4>DevOps Engineer</h4>
        <ul>
        <li>&gt; Continuous Integration and Deployment</li>
          <li>&gt; Infrastructure as Code (IaC)</li>
          <li>&gt; Containerization and Orchestration</li>
          <li>&gt; Configuration Management</li>
          <li>&gt; Cloud Platforms</li>
          <li>&gt; Monitoring and Logging</li>
          <li>&gt; Security and Compliance</li>
          <li>&gt; Scripting and Automation</li>
          <li>&gt; Collaboration and Communication</li>
          <li>&gt; Problem-solving and Troubleshooting</li>
        </ul>
      </div>

      <div className="r-card">
        <img src={machine} alt="" />
        <h4>Machine Learning Engineer</h4>
        <ul>
          <li>&gt; Strong Background in Mathematics and Statistics</li>
          <li>&gt; Proficiency in Programming Languages</li>
          <li>&gt; Machine Learning Algorithms</li>
          <li>&gt; Data Preprocessing and Feature Engineering</li>
          <li>&gt; Model Evaluation and Selection</li>
          <li>&gt; Deep Learning</li>
          <li>&gt; Model Deployment and Integration</li>
          <li>&gt; Big Data and Distributed Computing</li>
          <li>&gt; Domain Knowledge and Problem-Solving</li>
          <li>&gt; Communication and Collaboration</li>
        </ul>
      </div>

     
     </div>
    </div>
   </div>
  )
}

export default RoadmapBoxes
