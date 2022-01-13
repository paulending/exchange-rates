import styled, { keyframes } from 'styled-components';

function blinkingEffect() {
    return keyframes`
      50% {
        opacity: 0;
      }
    `;
}

/**
 * App wrapper centering content
 */
export const StyledApp = styled.div`
    box-sizing: border-box;    
    margin: auto;
    max-width: 1280px;
    padding: var(--gap);
    width: 100%;
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: var(--gap); 
    grid-template-areas: ". ."; 

    h1, h2 {
        margin: 0 0 var(--gapLarge) 0;
    }

    .column {
        max-width: 500px;
    }

    .fetching {
        color: var(--colorWarning);
        left: 50%;
        position: fixed;
        top: 80px;
        transform: translate(-50%, -50%);
        z-index: 2;
        animation: ${blinkingEffect} 1s linear infinite;
    }

    .date-select {
        display: flex;
        justify-content: flex-start;
        max-width: 500px;
        margin: auto;
    }
`;