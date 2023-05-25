import React from 'react';
const resumeDoc ='https://docs.google.com/document/d/1C8bGC4dUdF7Rs_uzVE_G0LVseaJdK-lW/edit?usp=sharing&ouid=110798276445025926264&rtpof=true&sd=true'
const About = () => {
  
  const openResume = () => {
    window.open(resumeDoc);
  };

  return (
    <div>
      <button onClick={openResume}>View resume</button>
    </div>
  );
};

export default About;