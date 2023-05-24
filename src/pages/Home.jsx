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
                    </p>
                    </div>
                    <br />
                    <br />
                    <div className='home-btns-container'>
                    <button className='project-btn'>
                        <Link to="/portfolio">Projects</Link>
                    </button>
                 </div>
            <Socials />
        </div >
    );
};

export default Home;

