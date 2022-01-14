import React from 'react';
import { StyledError } from './Error.style';

interface ErrorProps {
    text?: string;
}

const Error: React.FC<ErrorProps> = ({ text }) => {
    return (
        <StyledError>
            <h1>Error</h1>
            {text && <div className='text'>{text}</div>}
        </StyledError>
    );
}

export default Error;
