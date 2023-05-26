import TypeWriter from 'typewriter-effect';
import React from 'react';

const TypingEffect = () => {
    return (
        <div className='typing-effect-about'>
                <TypeWriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('About me')
                            .pauseFor(2000)
             
                            .start();
                    }}
                    options={{
                        delay: 50,
                        cursor: ''
                    }}
                />
        </div>
    );
};

export default TypingEffect;