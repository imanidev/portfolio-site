import TypeWriter from 'typewriter-effect';

import React from 'react';

const TypingEffect = () => {
    return (
        <div>
            <h1 className='typewriter'>
                <TypeWriter className="typewriter"
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('Hi, I\'m Imani')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('I\'m a Full Stack Developer')
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('Nice to meet you')
                            .pauseFor(1000)
                            .deleteAll()
                            .start();
                    }}
                    options={{
                        delay: 50,
                        cursor: '',
                    }}
                />
            </h1>
        </div>
    );
};

export default TypingEffect;