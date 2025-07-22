import React from "react";      
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MyLogo from '../assets/images/Mylogo.png';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
         <img src={MyLogo} className="avatar-img" alt="Logo for ResolvingInc, a minimalist mark representing technology and creativity" />

        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Wil-byte" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/wil1/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
      <h1>Jst_wil</h1>
<p className="subrole">Founder – ResolvingInc | Full Stack and Mobile App Developer (macOS, Linux, Windows)| Web Developer</p>


          <div className="mobile_social_icons">
            <a href="https://github.com/Wil-byte" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/wil1/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
