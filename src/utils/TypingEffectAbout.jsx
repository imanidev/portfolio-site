import TypeWriter from 'typewriter-effect';
import React from 'react';

const TypingEffect = () => {
    return (
        <div>
            <h1 className='typewriter'>
                <TypeWriter className="typewriter"
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
            </h1>
        </div>
    );
};

export default TypingEffect;