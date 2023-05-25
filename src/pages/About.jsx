import React from 'react';
import TypingEffectAbout from '../utils/TypingEffectAbout';

const About = () => {
  const resumeDoc = 'https://docs.google.com/document/d/1C8bGC4dUdF7Rs_uzVE_G0LVseaJdK-lW/edit?usp=sharing&ouid=110798276445025926264&rtpof=true&sd=true'
  
  const openResume = () => {
    window.open(resumeDoc);
  };
  return (
    <div>
      <TypingEffectAbout />
      <div className='bio-container'>
        <p>I'm not the best at introductions, so I'll get to the point.</p>
        </div>
      <button className='resume-btn' onClick={openResume}>Resume</button>
    
    </div>
  );
};

export default About;