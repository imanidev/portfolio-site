import React from 'react';

const Projects = () => {
    return (
        <div>
            <h2>Projects</h2>
            <div className='dictionary-container'>
                <img className='dict-gif' src='./src/assets/dict-app.gif' alt='dictionary app' />
                <p className='dict-desc'>Technologies: React, Vite, Bootstrap, API</p>
                <br />
                <button className='demo-btn'>
                    <a href='https://the-simple-dictionary.netlify.app/' target='_blank'>Live Demo</a>
                </button>
                <button className='github-btn'>
                    <a href='https://github.com/imanidev/dictionary-app>' target='_blank'>Github</a>
                </button>
            </div>
            <br />
            <br />
            <div className='pong-container'>
                <img className='pong-gif' src='./src/assets/pong-app.gif' alt='pong app' />
                <p className='pong-desc'>Technologies: </p>
                <br />
                <button className='demo-btn'>
                    <a href='https://imanidev.github.io/pong_game/' target='_blank'>Live Demo</a>
                </button>
                <button className='github-btn'>
                    <a href='https://github.com/imanidev/pong_game' target='_blank'>Github</a>
                </button>
            </div>
        </div>
    );
};

export default Projects;