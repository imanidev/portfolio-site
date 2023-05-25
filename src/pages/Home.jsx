import React from 'react';
import TypingEffect from '../utils/TypingEffect';
import Socials from '../components/Socials';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <TypingEffect />
            <div className='greeting-container'>
                <h2 className='media-h2'>Hi, I'm Imani</h2>
                <h2 className='media-h2'>I'm a Full Stack Web Developer</h2>
                </div>
            <div className='intro-container'>
                <p className='intro-text'>
                    With a focus on the MERN stack, I combine creativity, empathy, and a healthy dose of caffeine to solve problems.
                    <br />
                    <br />
                    From ideation to execution, I prioritize intuitive interfaces and seamless interactions to ensure everyone can easily navigate in the digital world.
                    </p>
                    </div>
                    <br />
                    <br />
                    <div className='home-btns-container'>
                    <button className='project-btn'>
                        <Link to="/portfolio">Projects</Link>
                </button>
                <button className='chat-btn'>
                    <a href='https://calendly.com/imaniroberts/20min' target='_blank'>
                        Let's chat
                    </a>
                </button>
                 </div>
            <Socials />
        </div >
    );
};

export default Home;

