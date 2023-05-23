// import React, { useState, useEffect } from 'react';

// export const TypewriterEffect = ({fullText }) => {
//     const [text, setText] = useState('');

//     useEffect(() => {
//         let i = 0;
//         const speed = 100;
//         const interval = setInterval(() => {
//             if (fullText && i < fullText.length) {
//                 setText(prevText => prevText + fullText.charAt(i));
//                 i++;
//             } else {
//                 clearInterval(interval);
//             }
//         }, speed);
//         return () => clearInterval(interval);
//     }, [fullText]);

//     return (
//         <div>
//             <h1>{text}</h1>
//         </div>
//     );
// };


import React, { useState, useEffect } from 'react';

export const TypewriterEffect = ({ fullText }) => {
    const [text, setText] = useState('');

    useEffect(() => {
        let i = 0;
        const speed = 100;
        const interval = setInterval(() => {
            if (i < fullText.length) {
                setText(prevText => prevText + fullText.charAt(i));
                i++;
            } else {
                clearInterval(interval);
            }
        }, speed);
        return () => clearInterval(interval);
    }, [fullText]);

    return (
        <div>
            <h1>{text}</h1>
        </div>
    );
};

