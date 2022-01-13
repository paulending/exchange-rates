import styled from 'styled-components';

export const StyledCurrencySelect = styled.div`
    height: auto;
    position: relative;
    min-width: 80px;

    .overlay {
        background: transparent;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }

    .value {
        background: var(--colorWhite);
        border: 1px solid var(--colorGray2);
        border-radius: var(--borderRadius);
        cursor: pointer;
        padding: calc(var(--gap) / 4);
        line-height: 1;
    }
    
    .options {
        background: var(--colorWhite);
        border: 1px solid var(--colorGray2);
        border-radius: var(--borderRadius);
        heigth: auto;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;

        .option {
            &:hover {
                cursor: pointer;
                backgroud: var(--colorGray1);
            }
        }
    }
`;