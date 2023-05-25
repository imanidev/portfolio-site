import TypeWriter from 'typewriter-effect';
import React from 'react';

const TypingEffect = () => {
    return (
        <div>
            <h1 className='typewriter'>
                <TypeWriter className="typewriter"
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('Hi again')
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                    }}
                    options={{
                        delay: 50,
                        cursor: '',
                        showCursor: false,
                    }}
                />
            </h1>
        </div>
    );
};

export default TypingEffect;