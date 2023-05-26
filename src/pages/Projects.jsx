import React from 'react';
import ShowNavBackground from '../utils/showNavBackground';
const Projects = () => {
    return (
        <div>
       <ShowNavBackground />

            <div className='dictionary-container'>
                <img className='dict-gif' src='/assets/dict-app.gif' alt='dictionary app' />
                <p className='desc'>
                  <span className='dict-title'>Dictionary App</span>
                    <br />
                    <br />
                    Technologies: React  • Vite • Bootstrap • API
                </p>
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
                <img className='pong-gif' src='/assets/pong-app.gif' alt='pong app' />
                <p className='desc'>
                    <span className='pong-title'>Pong Game</span>
                    <br />
                    <br />
                    Technologies: HTML • CSS  • JavaScript • Canvas API
                </p>
                <br />
                <button className='demo-btn'>
                    <a href='https://imanidev.github.io/pong_game/' target='_blank'>Live Demo</a>
                </button>
                <button className='github-btn'>
                    <a href='https://github.com/imanidev/pong_game/' target='_blank'>Github</a>
                </button>
            </div>
        </div>
    );
};

export default Projects;