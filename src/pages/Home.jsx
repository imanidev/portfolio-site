import React from 'react';
import TypingEffect from '../utils/TypingEffect';


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
                        <a href='https://calendly.com/imaniroberts/30min ' target='_blank'>
                            Let's chat
                        </a>
                    </button>
                </p>
            </div>

        </div >
    );
};

export default Home;

