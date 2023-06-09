import React from 'react';
import ShowNavBackground from '../utils/showNavBackground';
import Footer from '../components/Footer';
const Projects = () => {
    return (
        <div>
       <ShowNavBackground />

            <div className='dictionary-container'>
                 <p className='desc'>
                  <span className='dict-title'>Dictionary App</span>
                    <br />
                    <br />
                    Technologies: React  • Vite • Bootstrap • API
                </p>
                <img className='dict-gif' src='/assets/project-gifs/dict-app.gif' alt='dictionary app' />
                <br />
                <button className='demo-btn'>
                    <a href='https://the-simple-dictionary.netlify.app/' target='_blank'>Live Demo</a>
                </button>
                <button className='github-btn'>
                    <a href='https://github.com/imanidev/dictionary-app/' target='_blank'>Github</a>
                </button>
            </div>
            <br />
            <br />
            <div className='pong-container'>
                 <p className='desc'>
                    <span className='pong-title'>Pong Game</span>
                    <br />
                    <br />
                    Technologies: HTML • CSS  • JavaScript • Canvas API
                </p>
                <img className='pong-gif' src='/assets/project-gifs/pong-app.gif' alt='pong app' />
                <br />
                <button className='demo-btn'>
                    <a href='https://imanidev.github.io/pong_game/' target='_blank'>Live Demo</a>
                </button>
                <button className='github-btn'>
                    <a href='https://github.com/imanidev/pong_game/' target='_blank'>Github</a>
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;