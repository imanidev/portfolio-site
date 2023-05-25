import TypeWriter from 'typewriter-effect';
import React from 'react';

const TypingEffect = () => {
    return (
        <div>
            <h1 className='typing-effect-home'>
                <TypeWriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('Hi, I\'m Imani')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('I\'m a Full Stack Developer')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('Welcome to my portfolio')
                            .pauseFor(2000)
                            .start();
                    }}
                    options={{
                        delay: 50,
                        cursor: '|',
                        showCursor: false,
                    }}
                />
            </h1>
        </div>
    );
};

export default TypingEffect;