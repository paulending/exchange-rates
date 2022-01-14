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
    margin: 0;
    padding: 0;

    header {
        background-color: var(--colorPrimary);
        background-image: linear-gradient(160deg, var(--colorPrimary) 0%, var(--colorSecondary) 100%);
        color: var(--colorWhite);
        margin: 0 0 var(--gap) 0;
        padding: var(--gap);
    }
    .app-content {
        box-sizing: border-box;    
        margin: auto;
        max-width: 1280px;
        padding: var(--gap);
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        gap: var(--gap);
    }
    footer {
        border-top: 1px solid var(--colorGray2);
        padding: var(--gap);
        margin: 0 0 var(--gap) 0;
        text-align: center;
    }
    
    h1, h2 {
        margin: 0 auto var(--gapLarge) auto;
        width: fit-content;
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
        align-items: center;
        max-width: 500px;
        margin: auto;
    }
`;