import React from 'react';

const Projects = () => {
    return (
        <div>
            <h2>Projects</h2>
            <div className='dictionary-container'>
                <img className='dict-gif' src='./src/assets/dict-app.gif' alt='dictionary app' />
<p className='dict-desc'>Technologies: HTML, CSS, JavaS </p>
            </div>
            <br />
            <br />
            <div className='pong-container'>
                <img className='pong-gif' src='./src/assets/pong-app.gif' alt='pong app' />
                <p className='pong-desc'>Technologies: </p>
            </div>
        </div>
    );
};

export default Projects;