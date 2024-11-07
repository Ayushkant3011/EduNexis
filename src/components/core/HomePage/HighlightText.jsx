import React from 'react';

const HighlightText = ({text}) => {
    return (
        <span className='font-bold gradient-Text'>
            {" "}
            {text}
        </span>
    );
}

export default HighlightText;
