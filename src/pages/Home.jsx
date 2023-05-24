import React from 'react';
import TypingEffect from '../utils/TypingEffect';
import Socials from '../components/Socials';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div>
            <TypingEffect />

            <div className='intro-text'>
                <p>
                    With a focus on the MERN stack, I combine creativity, empathy, and a healthy dose of caffeine to solve problems.
                    <br />
                    <br />
                    From ideation to execution, I prioritize intuitive interfaces and seamless interactions to ensure everyone can easily navigate in the digital world.
                    <br />
                    <br />
                    <button className='home-btn'>
                        <Link to="/projects">My Projects</Link>
                    </button>
                    <button className='about-btn'>
                        <Link to="/about">About Me</Link>
                    </button>
                </p>
            </div>
            <Socials />
        </div >
    );
};

export default Home;

