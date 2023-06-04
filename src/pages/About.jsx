
import React from 'react'
import TypingEffectAbout from '../utils/TypingEffectAbout'
import ShowNavBackground from '../utils/showNavBackground';

const About = () => {
  return (
    <div className='About'>
      <TypingEffectAbout />
      <ShowNavBackground />
       <div className='bio-container'>
        <p className='bio-text'>
        <h3> It started with a "Hello World." </h3>
          <br />
          <br />
          After that I was hooked. I started my coding journey by building simple websites using HTML and CSS. From there I went on to learning Javascript, React, Node, and Express. The thrill of turning ideas into code grew more as time went on. 
          I love the problem-solving aspect of coding, the creativity it allows, and the tangible impact it can have.
          <br />
          <br />
          Like the universe, my skills are expanding through continous learning and project building.
          I am currently learning <span>TypeScript</span> and <span>Tailwind</span>.
 
          <br />
          <br />
          When I'm not behind the computer, I'm either behind a good book or tending to my garden.  
          <br />
          <br />
          </p>
      </div>
      </div>
  )
}

export default About