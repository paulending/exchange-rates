import styled, { keyframes } from 'styled-components';

function blinkingEffect() {
    return keyframes`
      50% {
        opacity: 0;
      }
    `;
}

export const StyledLoader = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100%;
    flex-direction: column;

    svg { 
        display: block;
        margin-bottom: var(--gap);
    }

    .text {
        z-index: 2;
        animation: ${blinkingEffect} 1s linear infinite;
    }
`;