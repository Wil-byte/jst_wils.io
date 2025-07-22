import React from "react";
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';  
import safealertVideo from '../assets/videos/safealertVideo.mp4';



function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">

        {/* SafeAlert Project */}
        <div className="project">
          <a href="https://safealert.example.com" target="_blank" rel="noreferrer">
            <img src={mock09} className="zoom" alt="SafeAlert thumbnail" width="100%" />
          </a>
          <a href="https://safealert.example.com" target="_blank" rel="noreferrer">
            <h2>SafeAlert</h2>
          </a>
          <p>An alert system for community safety and real-time threat reporting.</p>

   <div className="video-container">
  <video width="100%" height="auto" controls>
    <source src={safealertVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>


  <p>Video courtesy from SafeAlert.</p>
        </div>

        {/* Wil's Plate Project */}
        <div className="project">
          <a href="https://wilsplate.example.com" target="_blank" rel="noreferrer">
            <img src={mock10} className="zoom" alt="Wil's Plate thumbnail" width="100%" />
          </a>
          <a href="https://wilsplate.example.com" target="_blank" rel="noreferrer">
            <h2>Wil's Plate E-commerce Website</h2>
          </a>
          <p>Developed using HTML, CSS & JavaScript. A food ordering platform with future cart integration.</p>
        </div>

      </div>
    </div>
  );
}

export default Project;
