import React from 'react';
import '../assets/styles/Contact.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';           
import { colors } from '@mui/material';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container" style={{ textAlign: 'center' }}>
        <div className="contact_wrapper">
          <div style={{ textAlign: 'center' }}>
            <h1>Contact Me</h1>
            <p >
              I'm always open to collaboration, new ideas, or just a quick chat. Reach out Via email or connect with me on social media. Let's create something amazing together!:
            </p>
          </div>

          <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <a href="https://github.com/Wil-byte" target="_blank" rel="noreferrer" style={{  fontSize: '2.5rem' }}>
              <GitHubIcon fontSize="inherit" />
            </a>
            <a href="https://www.linkedin.com/in/wil1" target="_blank" rel="noreferrer" style={{  fontSize: '2.5rem' }}>
              <LinkedInIcon fontSize="inherit" />
            </a>
            <a href="https://x.com/Jst_wil/" target="_blank" rel="noreferrer" style={{ fontSize: '2.5rem' }}>
              <TwitterIcon fontSize="inherit" />
              </a>
              <a href="https://x.com/Jst_wil/" target="_blank" rel="noreferrer" style={{ fontSize: '2.5rem' }}>
              <InstagramIcon fontSize="inherit" />
              </a>
                <a href="mailto:contactresolvinginc@gmail.com" target="_blank" rel="noopener noreferrer"style={{ fontSize: '2.5rem'}}>
              <FontAwesomeIcon icon={faEnvelope} fontSize="inherit"  style={{color:"gold"}}/>
              </a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

