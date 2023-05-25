
import React from 'react'
import TypingEffectAbout from '../utils/TypingEffectAbout'

const About = () => {
  return (
    <div>
      <TypingEffectAbout />
       <div className='bio-container'>
      <p>I'm not the best at introductions, so I'll get to the point.</p>
      </div>
      <button className="resume-btn" onClick={() => window.open('/public/assets/Resume/Resume.pdf')}>
  <i className="resume_download" aria-hidden="true"></i>Resume
</button>
      </div>
  )
}

export default About