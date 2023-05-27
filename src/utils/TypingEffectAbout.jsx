import TypeWriter from 'typewriter-effect';
import React from 'react';

const TypingEffect = () => {
    return (
        <h1 className='typing-effect-about'>
                <TypeWriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('Who am I?')
                            .pauseFor(2000)
                            .start();
                    }}
                    options={{
                        delay: 50,
                        cursor: ''
                    }}
                />
        </h1>
    );
};

export default TypingEffect;