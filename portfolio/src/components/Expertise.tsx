import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "Flutter & Dart",
    "Postman",
];

const labelsSecond = [
    "Wordpress",
    "Azure",
    "Pandas",
    "Linux",
    "Git",
    "GitHub",
    "Ruby",
    "Node.Js",
];

const labelsThird = [
    "OpenAI",
    "AWS",
    "Firebase",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack and Mobile Developer (macOS, Linux, Windows,anfd).</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.As a Mobile, Web, App Developer I have built (macOS, Linux, Windows)cross platform applications Using multiple programming languages (e.g. flutter & Dart, Python, Django)</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>WordPress & React Developer</h3>
                    <p> I build scalable web platforms using React and headless WordPress, combining modern frontend performance with flexible content management. My solutions are fast, secure, SEO-optimized, and designed for long-term maintainability—ideal for agencies and enterprise environments</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI</h3>
<p>
I develop smart applications using OpenAI to automate tasks, generate content, and analyze data. I also build secure, scalable cloud systems with AWS and Firebase—leveraging tools like serverless functions and CI/CD to ensure performance and reliability.
</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;