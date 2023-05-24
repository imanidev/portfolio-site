import React from 'react';

const resume = 'https://docs.google.com/document/d/1C8bGC4dUdF7Rs_uzVE_G0LVseaJdK-lW/edit?usp=sharing&ouid=110798276445025926264&rtpof=true&sd=true';

const openResume = () => {
  window.open(resume);
};

const About = () => {
  return (
    <div>
      
        <button onClick={openResume} download>View resume</button>

    </div>
  );
};

export default About;